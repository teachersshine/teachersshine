
import { useEffect, useRef } from "react";
import "./snowfall.css";

const isWinterPeriod = () => {
    const now = new Date();
    const month = now.getMonth();
    const day = now.getDate();

    const isSeason =
        (month === 10 && day >= 9) ||
        month === 11 ||
        (month === 0 && day <= 15);

    const isPreview =
        new URLSearchParams(window.location.search)
            .get("winterPreview") === "1";

    return isSeason || isPreview;
};

const random = (min, max) =>
    Math.random() * (max - min) + min;

const createSnowflake = (width, height, initial = false, mobile = false) => ({
    x: random(0, width),
    y: initial ? random(-height, height) : random(-40, -10),
    size: mobile ? random(2, 4) : random(3, 7),
    speed: mobile ? random(0.5, 1.2) : random(0.8, 1.8),
    wind: random(-0.2, 0.2),
    opacity: random(0.45, 0.85),
    phase: random(0, Math.PI * 2),
    swing: mobile ? random(0.1, 0.35) : random(0.2, 0.6),
    rotation: random(0, Math.PI * 2),
    rotationSpeed: random(-0.01, 0.01),
    type: mobile
        ? "circle"
        : Math.random() > 0.65 ? "crystal" : "circle",
});

function drawSnowflake(ctx, snow, mobile) {
    ctx.globalAlpha = snow.opacity;
    ctx.fillStyle = "#83AFC0";
    ctx.strokeStyle = "#83AFC0";

    if (snow.type === "circle") {
        ctx.beginPath();
        ctx.arc(snow.x, snow.y, snow.size / 2, 0, Math.PI * 2);
        ctx.fill();
        return;
    }

    // Cristal simplifié pour desktop uniquement
    if (!mobile) {
        ctx.save();
        ctx.translate(snow.x, snow.y);
        ctx.rotate(snow.rotation);

        ctx.lineWidth = 0.8;
        ctx.lineCap = "round";

        ctx.beginPath();

        for (let i = 0; i < 6; i++) {
            const angle = (Math.PI * 2 * i) / 6;

            const x = Math.cos(angle) * snow.size;
            const y = Math.sin(angle) * snow.size;

            ctx.moveTo(0, 0);
            ctx.lineTo(x, y);
        }

        ctx.stroke();
        ctx.restore();
    }
}

function SnowfallEffect() {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (!isWinterPeriod()) return;

        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d", {
            alpha: true,
            desynchronized: true,
        });

        if (!canvas || !ctx) return;

        const motionQuery = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );

        if (motionQuery.matches) return;

        const mobileQuery = window.matchMedia(
            "(max-width: 768px)"
        );

        let width = window.innerWidth;
        let height = window.innerHeight;
        let mobile = mobileQuery.matches;

        let flakes = [];
        let animationFrame = null;
        let lastFrameTime = 0;
        let isVisible = !document.hidden;

        // 18 flocons mobiles contre 65 sur desktop
        const getFlakeCount = () => mobile ? 18 : 65;

        // 30 FPS sur mobile, 45 FPS sur desktop
        const getFrameInterval = () =>
            mobile ? 1000 / 30 : 1000 / 45;

        const resizeCanvas = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            mobile = mobileQuery.matches;

            // DPR réduit sur mobile pour limiter le coût GPU
            const dpr = mobile
                ? 1
                : Math.min(window.devicePixelRatio || 1, 1.5);

            canvas.width = Math.round(width * dpr);
            canvas.height = Math.round(height * dpr);

            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;

            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            flakes = Array.from(
                { length: getFlakeCount() },
                () => createSnowflake(width, height, true, mobile)
            );
        };

        const animate = (timestamp) => {
            if (!isVisible) return;

            animationFrame = requestAnimationFrame(animate);

            const elapsed = timestamp - lastFrameTime;

            if (elapsed < getFrameInterval()) return;

            const delta = Math.min(elapsed / 16.67, 2);
            lastFrameTime = timestamp - (elapsed % getFrameInterval());

            ctx.clearRect(0, 0, width, height);
            ctx.globalAlpha = 1;

            for (let i = 0; i < flakes.length; i++) {
                const snow = flakes[i];

                snow.phase += 0.012 * delta;

                snow.x += (
                    snow.wind +
                    Math.sin(snow.phase) * snow.swing
                ) * delta;

                snow.y += snow.speed * delta;
                snow.rotation += snow.rotationSpeed * delta;

                drawSnowflake(ctx, snow, mobile);

                if (snow.y > height + 15) {
                    flakes[i] = createSnowflake(
                        width,
                        height,
                        false,
                        mobile
                    );
                    continue;
                }

                if (snow.x < -15) snow.x = width + 10;
                if (snow.x > width + 15) snow.x = -10;
            }

            ctx.globalAlpha = 1;
        };

        const startAnimation = () => {
            if (animationFrame !== null || !isVisible) return;

            lastFrameTime = 0;
            animationFrame = requestAnimationFrame(animate);
        };

        const stopAnimation = () => {
            if (animationFrame !== null) {
                cancelAnimationFrame(animationFrame);
                animationFrame = null;
            }
        };

        const handleVisibility = () => {
            isVisible = !document.hidden;

            if (isVisible) {
                startAnimation();
            } else {
                stopAnimation();
                ctx.clearRect(0, 0, width, height);
            }
        };

        const handleMotionChange = () => {
            if (motionQuery.matches) {
                stopAnimation();
                ctx.clearRect(0, 0, width, height);
            } else {
                startAnimation();
            }
        };

        resizeCanvas();

        document.addEventListener(
            "visibilitychange",
            handleVisibility
        );

        window.addEventListener("resize", resizeCanvas);
        mobileQuery.addEventListener("change", resizeCanvas);
        motionQuery.addEventListener("change", handleMotionChange);

        startAnimation();

        return () => {
            stopAnimation();

            document.removeEventListener(
                "visibilitychange",
                handleVisibility
            );

            window.removeEventListener("resize", resizeCanvas);

            mobileQuery.removeEventListener("change", resizeCanvas);
            motionQuery.removeEventListener("change", handleMotionChange);

            flakes = [];
        };
    }, []);

    if (!isWinterPeriod()) return null;

    return (
        <canvas
            ref={canvasRef}
            className="winter-background-snow"
            aria-hidden="true"
        />
    );
}

export default SnowfallEffect;

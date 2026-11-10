 

import { useEffect, useRef } from "react";

import "./snowfall.css";

 

const MAX_SNOWFLAKES = 110;

 

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

 

const createSnowflake = (width, height, initial = false) => ({

    x: random(0, width),

 

    // Répartit les flocons sur toute la hauteur au démarrage.

    y: initial ? random(-height, 0) : random(-100, -20),

 

    size: random(3, 9),

 

    // Vitesse de chute visible.

    speed: random(1.1, 2.8),

 

    wind: random(-0.35, 0.35),

 

    opacity: random(0.55, 0.95),

 

    rotation: random(0, Math.PI * 2),

    rotationSpeed: random(-0.025, 0.025),

 

    phase: random(0, Math.PI * 2),

    swing: random(0.3, 0.9),

 

    type: [

        "circle",

        "crystal",

        "star",

        "hexagon",

    ][Math.floor(Math.random() * 4)],

});

 

function drawSnowflake(ctx, snow) {

    ctx.save();

 

    ctx.translate(snow.x, snow.y);

    ctx.rotate(snow.rotation);

 

    ctx.globalAlpha = snow.opacity;

 

    ctx.fillStyle = "#83AFC0";

    ctx.strokeStyle = "#83AFC0";

 

    ctx.shadowColor = "#A9D4E3";

    ctx.shadowBlur = snow.size * 1.5;

 

    const size = snow.size;

 

    // 1. Flocon circulaire

    if (snow.type === "circle") {

        ctx.beginPath();

        ctx.arc(0, 0, size / 2, 0, Math.PI * 2);

        ctx.fill();

    }

 

    // 2. Étoile

    if (snow.type === "star") {

        ctx.beginPath();

 

        for (let i = 0; i < 10; i++) {

            const angle =

                (Math.PI * 2 * i) / 10 - Math.PI / 2;

 

            const radius =

                i % 2 === 0 ? size : size * 0.42;

 

            const x = Math.cos(angle) * radius;

            const y = Math.sin(angle) * radius;

 

            if (i === 0) {

                ctx.moveTo(x, y);

            } else {

                ctx.lineTo(x, y);

            }

        }

 

        ctx.closePath();

        ctx.fill();

    }

 

    // 3. Hexagone

    if (snow.type === "hexagon") {

        ctx.beginPath();

 

        for (let i = 0; i < 6; i++) {

            const angle = (Math.PI * 2 * i) / 6;

 

            const x = Math.cos(angle) * size * 0.65;

            const y = Math.sin(angle) * size * 0.65;

 

            if (i === 0) {

                ctx.moveTo(x, y);

            } else {

                ctx.lineTo(x, y);

            }

        }

 

        ctx.closePath();

        ctx.stroke();

    }

 

    // 4. Flocon cristallin à six branches

    if (snow.type === "crystal") {

        ctx.lineWidth = Math.max(0.8, size * 0.12);

        ctx.lineCap = "round";

 

        for (let i = 0; i < 6; i++) {

            ctx.save();

 

            ctx.rotate((Math.PI * 2 * i) / 6);

 

            ctx.beginPath();

 

            ctx.moveTo(0, 0);

            ctx.lineTo(0, -size);

 

            ctx.moveTo(0, -size * 0.55);

            ctx.lineTo(-size * 0.3, -size * 0.85);

 

            ctx.moveTo(0, -size * 0.55);

            ctx.lineTo(size * 0.3, -size * 0.85);

 

            ctx.stroke();

 

            ctx.restore();

        }

 

        ctx.beginPath();

        ctx.arc(0, 0, size * 0.12, 0, Math.PI * 2);

        ctx.fill();

    }

 

    ctx.restore();

}

 

function SnowfallEffect() {

    const canvasRef = useRef(null);

 

    useEffect(() => {

        if (!isWinterPeriod()) return;

 

        const canvas = canvasRef.current;

        const ctx = canvas?.getContext("2d", {

            alpha: true,

        });

 

        if (!canvas || !ctx) return;

 

        const reducedMotion = window.matchMedia(

            "(prefers-reduced-motion: reduce)"

        );

 

        if (reducedMotion.matches) return;

 

        let width = window.innerWidth;

        let height = window.innerHeight;

 

        let flakes = [];

        let animationFrame = null;

        let lastTime = 0;

 

        const resizeCanvas = () => {

            const dpr = Math.min(

                window.devicePixelRatio || 1,

                1.5

            );

 

            width = window.innerWidth;

            height = window.innerHeight;

 

            canvas.width = Math.round(width * dpr);

            canvas.height = Math.round(height * dpr);

 

            canvas.style.width = `${width}px`;

            canvas.style.height = `${height}px`;

 

            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        };

 

        const initializeSnow = () => {

            flakes = Array.from(

                { length: MAX_SNOWFLAKES },

                () => createSnowflake(width, height, true)

            );

        };

 

        const animate = (timestamp) => {

            const delta = lastTime

                ? Math.min(timestamp - lastTime, 32)

                : 16.67;

 

            lastTime = timestamp;

 

            const frameFactor = delta / 16.67;

 

            ctx.clearRect(0, 0, width, height);

 

            for (let i = 0; i < flakes.length; i++) {

                const snow = flakes[i];

 

                // Petit mouvement horizontal naturel.

                snow.phase += 0.012 * frameFactor;

 

                const horizontalMovement =

                    snow.wind +

                    Math.sin(snow.phase) * snow.swing;

 

                // Chute verticale du haut vers le bas.

                snow.x += horizontalMovement * frameFactor;

                snow.y += snow.speed * frameFactor;

 

                // Rotation lente.

                snow.rotation +=

                    snow.rotationSpeed * frameFactor;

 

                drawSnowflake(ctx, snow);

 

                // Réapparition en haut après la sortie en bas.

                if (snow.y > height + 30) {

                    flakes[i] = createSnowflake(width, height);

                    continue;

                }

 

                // Gestion des limites horizontales.

                if (snow.x < -30) {

                    snow.x = width + 20;

                }

 

                if (snow.x > width + 30) {

                    snow.x = -20;

                }

            }

 

            animationFrame = requestAnimationFrame(animate);

        };

 

        resizeCanvas();

        initializeSnow();

 

        window.addEventListener("resize", resizeCanvas);

 

        animationFrame = requestAnimationFrame(animate);

 

        return () => {

            cancelAnimationFrame(animationFrame);

 

            window.removeEventListener(

                "resize",

                resizeCanvas

            );

 

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

 
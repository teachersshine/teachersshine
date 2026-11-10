import { useEffect, useRef } from "react";

import "./SnowCursorEffect.css";

 

const MAX_PARTICLES = 260;

 

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

 

function createParticle(x, y, dx, dy, speed) {

    const angle = Math.random() * Math.PI * 2;

    const spread = 0.5 + Math.random() * 2;

 

    return {

        x: x + (Math.random() - 0.5) * 24,

        y: y + (Math.random() - 0.5) * 24,

 

        vx: Math.cos(angle) * spread - dx * 0.12,

        vy: Math.sin(angle) * spread - dy * 0.08,

 

        radius: 1 + Math.random() * (1.5 + speed * 0.5),

        opacity: 0.5 + Math.random() * 0.5,

 

        life: 0,

        maxLife: 650 + Math.random() * 650,

 

        gravity: 0.025 + Math.random() * 0.035,

        drift: (Math.random() - 0.5) * 0.35,

 

        rotation: Math.random() * Math.PI,

        rotationSpeed: (Math.random() - 0.5) * 0.035,

    };

}

 

function SnowCursorEffect() {

    const canvasRef = useRef(null);

 

    useEffect(() => {

        if (!isWinterPeriod()) return;

 

        const canvas = canvasRef.current;

        const ctx = canvas?.getContext("2d");

 

        if (!canvas || !ctx) return;

 

        const reducedMotion = window.matchMedia(

            "(prefers-reduced-motion: reduce)"

        );

 

        if (reducedMotion.matches) return;

 

        let animationFrame;

        let particles = [];

 

        let previousX = null;

        let previousY = null;

        let previousTime = 0;

 

        let width = 0;

        let height = 0;

        let lastFrameTime = 0;

 

        const resizeCanvas = () => {

            const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

 

            width = window.innerWidth;

            height = window.innerHeight;

 

            canvas.width = Math.round(width * dpr);

            canvas.height = Math.round(height * dpr);

 

            canvas.style.width = `${width}px`;

            canvas.style.height = `${height}px`;

 

            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        };

 

        const handlePointerMove = (event) => {

            if (event.pointerType === "touch") return;

 

            const now = performance.now();

            const x = event.clientX;

            const y = event.clientY;

 

            if (previousX === null) {

                previousX = x;

                previousY = y;

                previousTime = now;

                return;

            }

 

            const deltaTime = Math.max(now - previousTime, 1);

 

            const dx = x - previousX;

            const dy = y - previousY;

 

            const distance = Math.sqrt(dx * dx + dy * dy);

 

            const speed = Math.min(distance / deltaTime, 2.5);

 

            // Plus la souris est rapide, plus on crée de flocons.

            if (distance > 1) {

                const particleCount = Math.min(

                    3 + Math.floor(speed * 7),

                    20

                );

 

                for (let i = 0; i < particleCount; i++) {

                    if (particles.length >= MAX_PARTICLES) break;

 

                    particles.push(

                        createParticle(x, y, dx / deltaTime, dy / deltaTime, speed)

                    );

                }

            }

 

            previousX = x;

            previousY = y;

            previousTime = now;

        };

 

        const drawSnowflake = (particle) => {

            ctx.save();

 

            ctx.translate(particle.x, particle.y);

            ctx.rotate(particle.rotation);

 

            ctx.globalAlpha =

                particle.opacity *

                Math.max(0, 1 - particle.life / particle.maxLife);

 

            ctx.fillStyle = "#83AFC0";

 

            ctx.shadowColor = "#A9D4E3";

            ctx.shadowBlur = particle.radius * 3;

 

            ctx.beginPath();

            ctx.arc(0, 0, particle.radius, 0, Math.PI * 2);

            ctx.fill();

 

            // Petits flocons détaillés.

            if (particle.radius > 2) {

                ctx.strokeStyle = "rgba(131, 175, 192, 0.8)";

                ctx.lineWidth = 0.7;

 

                for (let i = 0; i < 3; i++) {

                    ctx.rotate(Math.PI / 3);

 

                    ctx.beginPath();

                    ctx.moveTo(-particle.radius * 1.5, 0);

                    ctx.lineTo(particle.radius * 1.5, 0);

                    ctx.stroke();

                }

            }

 

            ctx.restore();

        };

 

        const animate = (timestamp) => {

            const delta = lastFrameTime

                ? Math.min(timestamp - lastFrameTime, 32)

                : 16;

 

            lastFrameTime = timestamp;

 

            ctx.clearRect(0, 0, width, height);

 

            particles = particles.filter((particle) => {

                particle.life += delta;

 

                particle.x += particle.vx * (delta / 16);

                particle.y +=

                    (particle.vy + particle.gravity * 10) * (delta / 16);

 

                particle.vx += particle.drift * 0.002;

                particle.vy += particle.gravity * 0.15;

 

                particle.rotation += particle.rotationSpeed;

 

                drawSnowflake(particle);

 

                return (

                    particle.life < particle.maxLife &&

                    particle.y < height + 30 &&

                    particle.x > -30 &&

                    particle.x < width + 30

                );

            });

 

            animationFrame = requestAnimationFrame(animate);

        };

 

        resizeCanvas();

 

        window.addEventListener("resize", resizeCanvas);

        window.addEventListener("pointermove", handlePointerMove, {

            passive: true,

        });

 

        animationFrame = requestAnimationFrame(animate);

 

        return () => {

            cancelAnimationFrame(animationFrame);

 

            window.removeEventListener("resize", resizeCanvas);

            window.removeEventListener("pointermove", handlePointerMove);

 

            particles = [];

        };

    }, []);

 

    if (!isWinterPeriod()) return null;

 

    return (

        <canvas

            ref={canvasRef}

            className="winter-cursor-canvas"

            aria-hidden="true"

        />

    );

}

 

export default SnowCursorEffect;
import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  length: number;
}

function StarBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];

    // Ángulo de movimiento: 30 grados hacia la izquierda
    const angle = Math.PI / 6;

    const directionX = -Math.sin(angle);
    const directionY = Math.cos(angle);

    const createStars = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      const starCount = Math.min(
        80,
        Math.floor((width * height) / 18000)
      );

      stars = Array.from({ length: starCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,

        // Tamaño de la estrella principal
        size: Math.random() * 1.2 + 0.5,

        // Velocidad sutil
        speed: Math.random() * 0.35 + 0.15,

        // Opacidad de la estrella principal
        opacity: Math.random() * 0.4 + 0.25,

        // Distancia entre las estrellas de la estela
        length: Math.random() * 5 + 3,
      }));
    };

    const resizeCanvas = () => {
      const pixelRatio = Math.min(window.devicePixelRatio, 2);

      canvas.width = window.innerWidth * pixelRatio;
      canvas.height = window.innerHeight * pixelRatio;

      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      createStars();
    };

    const drawCircle = (
      x: number,
      y: number,
      size: number,
      opacity: number
    ) => {
      ctx.beginPath();

      ctx.arc(
        x,
        y,
        size,
        0,
        Math.PI * 2
      );

      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;

      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(
        0,
        0,
        window.innerWidth,
        window.innerHeight
      );

      stars.forEach((star) => {
        // Movimiento diagonal
        star.x += directionX * star.speed;
        star.y += directionY * star.speed;

        // Cuando sale por abajo o por la izquierda,
        // reaparece arriba.
        if (
          star.y > window.innerHeight + 10 ||
          star.x < -10
        ) {
          star.x =
            Math.random() * window.innerWidth +
            window.innerWidth * 0.2;

          star.y = -10;
        }

        /*
         * Primera bolita de la estela.
         * Está más cerca de la estrella principal.
         */
        const trail1X =
          star.x - directionX * star.length;

        const trail1Y =
          star.y - directionY * star.length;

        /*
         * Segunda bolita de la estela.
         * Está más lejos y es más pequeña.
         */
        const trail2X =
          star.x - directionX * star.length * 2;

        const trail2Y =
          star.y - directionY * star.length * 2;

        // Segunda estela: más pequeña y tenue
        drawCircle(
          trail2X,
          trail2Y,
          star.size * 0.35,
          star.opacity * 0.25
        );

        // Primera estela: un poco más visible
        drawCircle(
          trail1X,
          trail1Y,
          star.size * 0.55,
          star.opacity * 0.45
        );

        // Estrella principal
        drawCircle(
          star.x,
          star.y,
          star.size,
          Math.min(star.opacity + 0.15, 0.8)
        );
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="star_background"
    />
  );
}

export default StarBackground;

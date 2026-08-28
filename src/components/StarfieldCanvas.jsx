import React, { useEffect, useRef } from 'react';

export default function StarfieldCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    window.addEventListener('resize', handleResize);

    // Star configuration
    const starCount = Math.min(180, Math.floor((width * height) / 8000));
    let stars = [];
    let meteors = [];

    const initStars = () => {
      stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.5 + 0.3,
          color: Math.random() > 0.8 ? '#38bdf8' : Math.random() > 0.6 ? '#c084fc' : '#ffffff',
          alpha: Math.random() * 0.8 + 0.2,
          speedAlpha: (Math.random() * 0.02 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
          speedY: Math.random() * 0.15 + 0.03
        });
      }
    };

    initStars();

    // Spawn meteor occasionally
    const maybeSpawnMeteor = () => {
      if (Math.random() < 0.015 && meteors.length < 3) {
        meteors.push({
          x: Math.random() * (width * 0.8),
          y: Math.random() * (height * 0.4),
          length: Math.random() * 80 + 50,
          speed: Math.random() * 8 + 6,
          angle: (Math.PI / 4) + (Math.random() * 0.2 - 0.1),
          opacity: 1,
          decay: Math.random() * 0.02 + 0.015
        });
      }
    };

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw and update stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Twinkle
        star.alpha += star.speedAlpha;
        if (star.alpha > 0.95 || star.alpha < 0.15) {
          star.speedAlpha = -star.speedAlpha;
        }

        // Slow drift with subtle mouse parallax
        const parallaxX = (mouseX - width / 2) * (star.radius * 0.005);
        const parallaxY = (mouseY - height / 2) * (star.radius * 0.005);

        star.y += star.speedY;
        if (star.y > height) star.y = 0;

        ctx.save();
        ctx.beginPath();
        ctx.arc(star.x + parallaxX, star.y + parallaxY, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = Math.max(0.1, Math.min(1, star.alpha));
        ctx.shadowBlur = star.radius > 1.2 ? 6 : 2;
        ctx.shadowColor = star.color;
        ctx.fill();
        ctx.restore();
      }

      // Spawn and draw meteors (shooting stars)
      maybeSpawnMeteor();

      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.x += Math.cos(m.angle) * m.speed;
        m.y += Math.sin(m.angle) * m.speed;
        m.opacity -= m.decay;

        if (m.opacity <= 0 || m.x > width || m.y > height) {
          meteors.splice(i, 1);
          continue;
        }

        const tailX = m.x - Math.cos(m.angle) * m.length;
        const tailY = m.y - Math.sin(m.angle) * m.length;

        const gradient = ctx.createLinearGradient(tailX, tailY, m.x, m.y);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
        gradient.addColorStop(0.7, 'rgba(168, 85, 247, 0.4)');
        gradient.addColorStop(1, `rgba(255, 255, 255, ${m.opacity})`);

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(m.x, m.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.8;
        ctx.lineCap = 'round';
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#c084fc';
        ctx.stroke();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
    />
  );
}

import React, { useEffect, useRef } from 'react';

export default function FallingParticles() {
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
    };

    window.addEventListener('resize', handleResize);

    // Particle types: gold sparkles, jasmine petals, soft golden orbs
    const particles = [];
    const particleCount = 42;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 4 + 2,
        speedY: Math.random() * 0.8 + 0.3,
        speedX: (Math.random() - 0.5) * 0.6,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 1.5,
        opacity: Math.random() * 0.7 + 0.2,
        type: Math.random() > 0.4 ? 'petal' : 'sparkle',
        petalColor: Math.random() > 0.5 ? 'rgba(255, 252, 235,' : 'rgba(235, 205, 120,',
      });
    }

    const drawPetal = (p) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.beginPath();
      ctx.moveTo(0, -p.size * 2);
      ctx.bezierCurveTo(p.size * 1.5, -p.size, p.size * 1.5, p.size, 0, p.size * 2);
      ctx.bezierCurveTo(-p.size * 1.5, p.size, -p.size * 1.5, -p.size, 0, -p.size * 2);
      ctx.fillStyle = `${p.petalColor} ${p.opacity * 0.75})`;
      ctx.shadowColor = 'rgba(212, 175, 55, 0.4)';
      ctx.shadowBlur = 6;
      ctx.fill();
      ctx.restore();
    };

    const drawSparkle = (p) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.beginPath();
      ctx.arc(0, 0, p.size * 0.6, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 230, 130, ${p.opacity})`;
      ctx.shadowColor = 'rgba(255, 215, 0, 0.8)';
      ctx.shadowBlur = 8;
      ctx.fill();

      // 4-point sparkle cross
      ctx.strokeStyle = `rgba(255, 245, 180, ${p.opacity * 0.8})`;
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.moveTo(-p.size * 1.8, 0);
      ctx.lineTo(p.size * 1.8, 0);
      ctx.moveTo(0, -p.size * 1.8);
      ctx.lineTo(0, p.size * 1.8);
      ctx.stroke();

      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += Math.sin(p.y * 0.01) * 0.6 + p.speedX;
        p.rotation += p.rotationSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;

        if (p.type === 'petal') {
          drawPetal(p);
        } else {
          drawSparkle(p);
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-20"
      style={{ opacity: 0.85 }}
    />
  );
}


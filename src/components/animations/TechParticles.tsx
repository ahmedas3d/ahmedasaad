import React, { useEffect, useRef } from 'react';

const TechParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;
      char: string;
      canvasWidth: number;
      canvasHeight: number;

      constructor(canvasWidth: number, canvasHeight: number) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = Math.random() * 0.5 + 0.1;
        this.opacity = Math.random() * 0.3 + 0.1;

        const colors = ['#FF1744', '#00BCD4', '#00E676'];
        this.color = colors[Math.floor(Math.random() * colors.length)];

        const chars = ['0', '1', '{', '}', '<', '>', '/', '*', '+', '-', '='];
        this.char = chars[Math.floor(Math.random() * chars.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Reset particle when it goes off screen
        if (this.y > this.canvasHeight + 10) {
          this.y = -10;
          this.x = Math.random() * this.canvasWidth;
        }

        if (this.x > this.canvasWidth + 10 || this.x < -10) {
          this.x = Math.random() * this.canvasWidth;
        }
      }

      draw(context: CanvasRenderingContext2D) {
        context.save();
        context.globalAlpha = this.opacity;
        context.fillStyle = this.color;
        context.font = `${this.size * 8}px 'Fira Code', monospace`;
        context.fillText(this.char, this.x, this.y);
        context.restore();
      }
    }

    // Create particles
    const particles: Particle[] = [];
    const particleCount = Math.floor((canvas.width * canvas.height) / 15000);

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(canvas.width, canvas.height));
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw(ctx);
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.1 }}
    />
  );
};

export default TechParticles;
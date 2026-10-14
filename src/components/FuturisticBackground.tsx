import React, { useEffect, useRef } from 'react';

export const FuturisticBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Responsive particle count
    const isMobile = width < 768;
    const starCount = isMobile ? 35 : 75;
    const nodeCount = isMobile ? 22 : 45;

    // Accessibility check: reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Stars data
    interface Star {
      x: number;
      y: number;
      size: number;
      alpha: number;
      alphaSpeed: number;
      vy: number;
    }

    const stars: Star[] = [];
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.6,
        alpha: Math.random() * 0.7 + 0.2,
        alphaSpeed: (Math.random() * 0.015 + 0.005) * (Math.random() < 0.5 ? 1 : -1),
        vy: (Math.random() * 0.1 + 0.02) * -1,
      });
    }

    // Nodes data
    const colors = ['#8B5CF6', '#06B6D4', '#EC4899', '#A78BFA', '#22D3EE'];
    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      origVx: number;
      origVy: number;
      radius: number;
      color: string;
    }

    const nodes: Node[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const vx = (Math.random() - 0.5) * 0.45;
      const vy = (Math.random() - 0.5) * 0.45;
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx,
        vy,
        origVx: vx,
        origVy: vy,
        radius: Math.random() * 2 + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Mouse tracking for desktop cursor glow and gentle repulsion
    const mouse = { x: -2000, y: -2000, targetX: -2000, targetY: -2000 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };
    const handleMouseLeave = () => {
      mouse.targetX = -2000;
      mouse.targetY = -2000;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Performance: Pause when tab is inactive to save battery
    let isTabVisible = true;
    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
      if (isTabVisible && !prefersReducedMotion) {
        animId = requestAnimationFrame(render);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const render = () => {
      if (!isTabVisible) return;

      ctx.clearRect(0, 0, width, height);

      // Smooth cursor lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Draw desktop cursor ambient spotlight glow
      if (mouse.x > -1000 && mouse.y > -1000 && !isMobile) {
        const glowGrad = ctx.createRadialGradient(mouse.x, mouse.y, 10, mouse.x, mouse.y, 350);
        glowGrad.addColorStop(0, 'rgba(139, 92, 246, 0.12)');
        glowGrad.addColorStop(0.4, 'rgba(6, 182, 212, 0.06)');
        glowGrad.addColorStop(1, 'rgba(3, 5, 20, 0)');
        ctx.fillStyle = glowGrad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 350, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw drifting stars
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        if (!prefersReducedMotion) {
          s.alpha += s.alphaSpeed;
          if (s.alpha > 0.95 || s.alpha < 0.2) {
            s.alphaSpeed *= -1;
          }
          s.y += s.vy;
          if (s.y < 0) {
            s.y = height;
            s.x = Math.random() * width;
          }
        }

        ctx.fillStyle = `rgba(241, 245, 249, ${s.alpha})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw constellation nodes and connections
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        if (!prefersReducedMotion) {
          // Physics movement
          n.x += n.vx;
          n.y += n.vy;

          if (n.x < 0 || n.x > width) n.vx *= -1;
          if (n.y < 0 || n.y > height) n.vy *= -1;

          // Gentle mouse interaction
          const dxMouse = mouse.x - n.x;
          const dyMouse = mouse.y - n.y;
          const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
          if (distMouse < 140) {
            // Fluid repulsion
            const force = (140 - distMouse) / 140;
            n.x -= (dxMouse / distMouse) * force * 1.5;
            n.y -= (dyMouse / distMouse) * force * 1.5;
          }
        }

        // Render node dot
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = n.color;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Proximity connections
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n.x - n2.x;
          const dy = n.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 90) {
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.22 * (1 - dist / 90)})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      if (!prefersReducedMotion) {
        animId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      id="futuristic-background"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 1. Deep Midnight Base Gradient */}
      <div className="absolute inset-0 bg-[#030614]" />

      {/* 2. Flowing Animated Aurora Ribbon Waves */}
      <div className="absolute -top-[20%] -left-[10%] w-[65vw] h-[65vw] max-w-[850px] max-h-[850px] rounded-full bg-electric-violet/25 blur-[120px] animate-pulse-slow" />
      <div className="absolute top-[25%] -right-[15%] w-[60vw] h-[60vw] max-w-[750px] max-h-[750px] rounded-full bg-neon-cyan/20 blur-[130px] animate-pulse-slow" style={{ animationDelay: '3s' }} />
      <div className="absolute bottom-[10%] left-[20%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full bg-soft-pink/18 blur-[140px] animate-pulse-slow" style={{ animationDelay: '6s' }} />
      <div className="absolute top-[60%] -left-[10%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] rounded-full bg-electric-violet/15 blur-[110px]" />

      {/* 3. Subtle Cyber Perspective 3D Grid Floor at the horizon */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[38vh] opacity-35"
        style={{
          perspective: '600px',
          perspectiveOrigin: '50% 100%',
          maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)'
        }}
      >
        <div 
          className="w-[200%] -ml-[50%] h-full"
          style={{
            transform: 'rotateX(72deg)',
            backgroundImage: `
              linear-gradient(to right, rgba(6, 182, 212, 0.12) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      {/* 4. Floating Holographic Wireframe Geometric Glyphs */}
      <div className="hidden lg:block absolute top-[18%] right-[8%] w-24 h-24 opacity-30 animate-float" style={{ animationDuration: '8s' }}>
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full stroke-neon-cyanLight stroke-[1.2] drop-shadow-[0_0_8px_rgba(6,182,212,0.4)]">
          <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" />
          <line x1="50" y1="5" x2="50" y2="95" />
          <line x1="10" y1="25" x2="90" y2="75" />
          <line x1="10" y1="75" x2="90" y2="25" />
          <circle cx="50" cy="50" r="14" className="stroke-soft-pinkLight stroke-1" />
        </svg>
      </div>

      <div className="hidden lg:block absolute top-[52%] left-[4%] w-20 h-20 opacity-25 animate-float" style={{ animationDuration: '10s', animationDelay: '2s' }}>
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full stroke-electric-violetLight stroke-[1.2] drop-shadow-[0_0_8px_rgba(139,92,246,0.4)]">
          <polygon points="50,8 92,50 50,92 8,50" />
          <circle cx="50" cy="50" r="24" className="stroke-neon-cyanBright stroke-1" strokeDasharray="3 3" />
          <line x1="50" y1="8" x2="50" y2="92" />
          <line x1="8" y1="50" x2="92" y2="50" />
        </svg>
      </div>

      <div className="hidden lg:block absolute bottom-[22%] right-[5%] w-20 h-20 opacity-25 animate-float" style={{ animationDuration: '9s', animationDelay: '4s' }}>
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full stroke-soft-pinkLight stroke-[1.2] drop-shadow-[0_0_8px_rgba(236,72,153,0.4)]">
          <circle cx="50" cy="50" r="36" strokeDasharray="6 4" />
          <polygon points="50,18 78,68 22,68" />
          <circle cx="50" cy="50" r="8" className="fill-neon-cyanLight/20" />
        </svg>
      </div>

      {/* 5. Full-Viewport Starfield & Interactive Constellation Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
};

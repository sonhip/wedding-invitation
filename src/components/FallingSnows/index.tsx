import { useEffect, useRef } from "react";

const FallingSnows = ({ children }: any) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const flakes: any[] = [];
  const flakeCount = 99;
  let mX = -100;
  let mY = -100;

  // Snow animation function
  function snow() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < flakeCount; i++) {
      const flake = flakes[i];
      const x = mX;
      const y = mY;
      const minDist = 150;
      const x2 = flake.x;
      const y2 = flake.y;

      const dist = Math.sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y));

      if (dist < minDist) {
        const force = minDist / (dist * dist);
        const xcomp = (x - x2) / dist;
        const ycomp = (y - y2) / dist;
        const deltaV = force / 2;

        flake.velX -= deltaV * xcomp;
        flake.velY -= deltaV * ycomp;
      } else {
        flake.velX *= 0.98;
        if (flake.velY <= flake.speed) {
          flake.velY = flake.speed;
        }
        flake.velX += Math.cos((flake.step += 0.05)) * flake.stepSize;
      }

      ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`; // White color for hearts
      flake.y += flake.velY;
      flake.x += flake.velX;

      if (flake.y >= canvas.height || flake.y <= 0) {
        reset(flake);
      }

      if (flake.x >= canvas.width || flake.x <= 0) {
        reset(flake);
      }

      ctx.beginPath();
      ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
      ctx.fill();
    }
    requestAnimationFrame(snow);
  }

  // Reset a flake to a new random position
  function reset(flake: any) {
    const canvas = canvasRef.current;
    if (!canvas) return;
    flake.x = Math.floor(Math.random() * canvas.width);
    flake.y = 0;
    flake.size = Math.random() * 3 + 2;
    flake.speed = Math.random() * 1 + 0.5;
    flake.velY = flake.speed;
    flake.velX = 0;
    flake.opacity = Math.random() * 0.5 + 0.3;
  }

  // Initialize snowflakes
  function init() {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth; // Set canvas width on initial render
    canvas.height = window.innerHeight; // Set canvas height on initial render

    for (let i = 0; i < flakeCount; i++) {
      const x = Math.floor(Math.random() * window.innerWidth);
      const y = Math.floor(Math.random() * window.innerHeight);
      const size = Math.random() * 3 + 2;
      const speed = Math.random() * 1 + 0.5;
      const opacity = Math.random() * 0.5 + 0.3;

      flakes.push({
        speed: speed,
        velY: speed,
        velX: 0,
        x: x,
        y: y,
        size: size,
        stepSize: Math.random() / 30,
        step: 0,
        opacity: opacity,
      });
    }

    snow();
  }

  // Handle mouse movement to interact with flakes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleMouseMove = (e: MouseEvent) => {
      mX = e.clientX;
      mY = e.clientY;
    };

    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth; // Update canvas width on resize
        canvas.height = window.innerHeight; // Update canvas height on resize
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    init();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        id="canvas"
        className="fixed top-0 left-0 w-full h-full z-[10]"
        style={{ pointerEvents: "none" }} // Ensure that canvas doesn't interfere with clicks
      />
      {children}
    </>
  );
};

export default FallingSnows;

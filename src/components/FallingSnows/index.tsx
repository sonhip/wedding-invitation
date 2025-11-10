import { useEffect, useRef } from "react";

const FallingPetals = ({ children }: any) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const petalsRef = useRef<any[]>([]);
  const petalCount = 50; // Ít hơn tuyết để nhẹ nhàng hơn
  let mX = -100;
  let mY = -100;

  // Spring petals animation function
  function animatePetals() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < petalCount; i++) {
      const petal = petalsRef.current[i];
      const x = mX;
      const y = mY;
      const minDist = 150;
      const x2 = petal.x;
      const y2 = petal.y;

      const dist = Math.sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y));

      if (dist < minDist) {
        const force = minDist / (dist * dist);
        const xcomp = (x - x2) / dist;
        const ycomp = (y - y2) / dist;
        const deltaV = force / 2;

        petal.velX -= deltaV * xcomp;
        petal.velY -= deltaV * ycomp;
      } else {
        petal.velX *= 0.98;
        if (petal.velY <= petal.speed) {
          petal.velY = petal.speed;
        }
        // Tăng hiệu ứng lắc lư nhẹ nhàng của cánh hoa
        petal.velX += Math.cos((petal.step += 0.03)) * petal.stepSize;
      }

      // Xoay cánh hoa khi rơi
      petal.rotation += petal.rotationSpeed;
      petal.y += petal.velY;
      petal.x += petal.velX;

      if (petal.y >= canvas.height || petal.y <= 0) {
        reset(petal);
      }

      if (petal.x >= canvas.width || petal.x <= 0) {
        reset(petal);
      }

      // Vẽ cánh hoa với màu sắc mùa xuân
      ctx.save();
      ctx.translate(petal.x, petal.y);
      ctx.rotate(petal.rotation);

      // Vẽ hình cánh hoa đơn giản (oval)
      ctx.fillStyle = petal.color;
      ctx.beginPath();
      ctx.ellipse(0, 0, petal.size * 1.5, petal.size, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    }
    requestAnimationFrame(animatePetals);
  }

  // Reset a petal to a new random position
  function reset(petal: any) {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Màu sắc hoa mùa xuân (hồng nhạt, trắng, đào)
    const colors = [
      "rgba(255, 182, 193, 0.7)", // Hồng nhạt
      "rgba(255, 192, 203, 0.7)", // Hồng phấn
      "rgba(255, 240, 245, 0.8)", // Trắng hồng
      "rgba(255, 218, 224, 0.7)", // Hồng đào
      "rgba(255, 228, 225, 0.7)", // Hồng misty
    ];

    petal.x = Math.floor(Math.random() * canvas.width);
    petal.y = 0;
    petal.size = Math.random() * 2 + 2; // Cánh hoa nhỏ hơn tuyết
    petal.speed = Math.random() * 0.5 + 0.3; // Rơi chậm hơn
    petal.velY = petal.speed;
    petal.velX = 0;
    petal.color = colors[Math.floor(Math.random() * colors.length)];
    petal.rotation = Math.random() * Math.PI * 2;
    petal.rotationSpeed = (Math.random() - 0.5) * 0.02; // Xoay chậm
  }

  // Initialize spring petals
  function init() {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Màu sắc hoa mùa xuân
    const colors = [
      "rgba(255, 182, 193, 0.7)", // Hồng nhạt
      "rgba(255, 192, 203, 0.7)", // Hồng phấn
      "rgba(255, 240, 245, 0.8)", // Trắng hồng
      "rgba(255, 218, 224, 0.7)", // Hồng đào
      "rgba(255, 228, 225, 0.7)", // Hồng misty
    ];

    for (let i = 0; i < petalCount; i++) {
      const x = Math.floor(Math.random() * window.innerWidth);
      const y = Math.floor(Math.random() * window.innerHeight);
      const size = Math.random() * 2 + 2;
      const speed = Math.random() * 0.5 + 0.3;
      const color = colors[Math.floor(Math.random() * colors.length)];

      petalsRef.current.push({
        speed: speed,
        velY: speed,
        velX: 0,
        x: x,
        y: y,
        size: size,
        stepSize: Math.random() / 40, // Lắc lư nhẹ nhàng hơn
        step: 0,
        color: color,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
      });
    }

    animatePetals();
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

export default FallingPetals;

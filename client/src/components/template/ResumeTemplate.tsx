import React, { useRef, useEffect } from "react";

const ResumeTemplate: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="card rounded-md w-[60%] h-[80%] mx-4 bg-white flex items-center"
    ></canvas>
  );
};

export default ResumeTemplate;

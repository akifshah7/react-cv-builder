import React, { useRef, useEffect } from "react";
import { personalDetailsState } from "../../common/state/person-details.atom";
import { useRecoilValue } from "recoil";

const ResumeTemplate: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const personalDetails = useRecoilValue(personalDetailsState);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (canvas && context) {
      const scale = window.devicePixelRatio;
      canvas.width = canvas.clientWidth * scale;
      canvas.height = canvas.clientHeight * scale;
      context.scale(scale, scale);

      context.font = "bold 12px Arial";
      context.fillStyle = "#000";
      context.textAlign = "center";
      context.textBaseline = "top";

      if (personalDetails) {
        context.fillText(
          `${personalDetails.firstName}${personalDetails.lastName}${
            personalDetails.jobTitle ? ", " + personalDetails.jobTitle : ''
          }`,
          220,
          40
        );
      }
    }
  }, [personalDetails]);

  return (
    <canvas
      ref={canvasRef}
      className="card rounded-md w-[60%] h-[80%] mx-4 bg-white flex items-center"
    ></canvas>
  );
};

export default ResumeTemplate;

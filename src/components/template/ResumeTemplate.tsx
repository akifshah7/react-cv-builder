import React, { useRef, useEffect } from "react";
import { personalDetailsState } from "../../common/state/person-details.atom";
import { useRecoilValue } from "recoil";
import { infoSelector } from "../../common/state/info.selector";
import { drawFlexbox } from "../../utils/commonHelper";

const ResumeTemplate: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const personalDetails = useRecoilValue(personalDetailsState);
  const generalInfo = useRecoilValue(infoSelector)

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (canvas && context) {
      const scale = window.devicePixelRatio;
      const width = Math.round(canvas.clientWidth * scale);
      const height = Math.round(canvas.clientHeight * scale);
      canvas.width = width;
      canvas.height = height;
      context.scale(scale, scale);

      context.fillStyle = "#000";
      context.textAlign = "center";
      context.textBaseline = "top";

      if (personalDetails) {
        context.font = "bold 10px Arial";
        context.fillText(
          `${personalDetails.firstName} ${personalDetails.lastName}${
            personalDetails.jobTitle ? ", " + personalDetails.jobTitle : ''
          }`,
          220,
          40
        );
        context.font = "normal 7px Arial";
        context.fillText(generalInfo, 220, 60);
        context.beginPath();
        context.moveTo(30, 90);
        context.lineTo(435, 90);
        context.strokeStyle = "#000";
        context.lineWidth = 1.2;
        context.stroke();
          
        context.font = "normal 7px Arial";
        const items = [personalDetails.drivingLicense, personalDetails.nationality, personalDetails.placeOfBirth, personalDetails.dateOfBirth]
        drawFlexbox(context, items, canvas.clientWidth, 100);
      }
    }
  }, [personalDetails, generalInfo]);

  return (
    <canvas
      ref={canvasRef}
      className="card rounded-md w-[65%] h-[85%] mx-4 bg-white flex items-center"
    ></canvas>
  );
};

export default ResumeTemplate;

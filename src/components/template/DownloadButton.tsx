import React from "react";

const DownloadButton: React.FC = () => {
  return (
    <div className="flex w-[60%] justify-end pb-4 px-1 gap-x-2">
      <button className="w-32 h-11 bg-text-blue text-sm font-bold hover:bg-dark-blue text-white rounded-md shadow-md">
        Download PDF
      </button>
      <button className="w-16 h-11 bg-text-blue font-extrabold pb-2 text-xl hover:bg-dark-blue text-white rounded-md shadow-md">
        ...
      </button>
    </div>
  );
};

export default DownloadButton;

import React from "react";
import bgImage from "../../assets/bg-eva.png";
import "./HomeBackground.css";

const HomeBackground: React.FC = () => {
  return (
    <div className="overflow-hidden h-screen w-screen">
      <img
        src={bgImage}
        className="overflow-hidden feather-opacity"
      />
    </div>
  );
};

export default HomeBackground;
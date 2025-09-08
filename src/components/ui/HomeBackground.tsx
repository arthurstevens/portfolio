import React from 'react';
import bgImage from '/bg-eva.png';
import './HomeBackground.css';

const HomeBackground: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden">
    <img
      src={bgImage}
      className="w-full h-full object-cover feather-opacity"
    />
  </div>
);

export default HomeBackground;
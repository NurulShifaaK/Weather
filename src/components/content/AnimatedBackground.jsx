import React from "react";
import videoSrc from "../../assets/videoSrc.mp4"; // replace with your video path
import { Link } from "react-router-dom";

const AnimatedBackground = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
        <h1 className="text-6xl font-bold text-white mb-6">Breezio</h1>
        <Link to={"/weather"}>
        <button className="px-4 py-1 bg-gray-500 text-white text-lg rounded-lg hover:bg-emerald-900 transition">
          Start

        </button>
        </Link>
      </div>
    </div>
  );
};

export default AnimatedBackground;

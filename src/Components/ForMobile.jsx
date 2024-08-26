import React from "react";
import { assets } from "../assets/assets";

function ForMobile() {
  return (
    <div className="For-Mobile-App pt-20 w-full flex flex-col justify-center items-center gap-5">
      <div className="text-icon flex flex-col justify-center items-center gap-2">
        <h1 className="text-4xl font-bold">For Better Experience Download</h1>
        <h1 className="text-4xl font-bold">Mobile App</h1>
      </div>
      <div className="download-icon flex justify-center items-center gap-5">
        <img className="w-[150px] transform duration-200 ease-in-out cursor-pointer hover:scale-105" src={assets.play_store} alt="Play Store Icon" />
        <img className="w-[150px] transform duration-200 ease-in-out cursor-pointer hover:scale-105" src={assets.app_store} alt="App Store Icon" />
      </div>
    </div>
  );
}

export default ForMobile;

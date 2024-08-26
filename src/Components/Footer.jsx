import React from "react";
import { assets } from "../assets/assets";

function Footer() {
  return (
    <div className="Footer w-full h-auto px-28 py-5 mt-20 bg-zinc-800 text-zinc-400">
      <div className="footer-content flex gap-5 justify-between items-start py-20">
            <div className="footer-content-left w-[40%] flex flex-col justify-start items-start gap-5">
            <img className="cursor-pointer" src={assets.logo} alt="" />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
                corporis esse voluptatem aut quas. Tempora dicta ab qui, doloribus
                quos obcaecati placeat, sapiente, aut quisquam quod neque
                voluptatibus ea voluptatum?
            </p>
            <div className="footer-social-icons flex justify-center items-start gap-2 cursor-pointer">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
            </div>
            <div className="footer-content-center">
            <h1 className="text-2xl text-white font-medium pb-4">COMPANY</h1>
            <ul className="flex flex-col gap-2 justify-center items-start cursor-pointer">
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
            </div>
            <div className="footer-content-right cursor-pointer">
            <h1 className="text-2xl text-white font-medium pb-4 ">Get in touch</h1>
            <ul className="flex flex-col gap-2 justify-center items-start">
                <li>+91 6395381775</li>
                <li>deepaksaini12799@gmail.con</li>
            </ul>
            </div>
      </div>
      <hr className="w-full h-[1px] bg-zinc-500 border-none outline-none " />
      <p className="footer-coperight text-center pt-5">
        Copyright 2024 © Tomato.com - All Right Reserved
      </p>
    </div>
  );
}

export default Footer;

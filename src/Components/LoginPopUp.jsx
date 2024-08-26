import React, { useState } from "react";
import { assets } from "../assets/assets";

function LoginPopUp({ setShowLogin }) {
  let [currState, setCurrentState] = useState("Log in");
  return (
    <div className="Login-Pop-Up absolute z-10 w-[100%] h-[100%] bg-[#00000090] grid">
      <div className="lognin-container w-[24vw] place-self-center bg-zinc-300 px-5 py-10 rounded-md flex flex-col gap-3 ">
        <div className="loginpopup-titel flex justify-between items-center">
          <h1 className="text-2xl font-medium">{currState}</h1>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            className="cursor-pointer"
          />
        </div>
        <div className="login-input flex flex-col gap-2">
          {currState === "Log in" ? (
            <></>
          ) : (
          <input className="border-none outline-none px-4 py-2 bg-zinc-50 rounded" type="text" placeholder="Your Name" required />
        )}
        <input className="border-none outline-none px-4 py-2 bg-zinc-50 rounded" type="email" placeholder="Your Email" required />

          <input className="border-none outline-none px-4 py-2 bg-zinc-50 rounded" type="password" placeholder="Password" required />
        </div>
        <button className="bg-red-400 py-2 rounded text-white">{currState === "Sing up" ? "Create Account" : "Log in"}</button>
        <div className="login-popup-condition flex items-baseline gap-3">
            <input className="cursor-pointer" type="checkbox" required/>
            <p>By Continuing, i aggree to the term of use & privacy policy.</p>
        </div>
        <div className="flex gap-2">
        { 
            currState==='Log in'
            ?<><p>Create a new account?</p><span className="text-red-400 cursor-pointer">Signup</span></>
            :<><p>Already have an account</p><span className="text-red-400 cursor-pointer">Login</span></>
        }
        </div>
        
        
      </div>
    </div>
  );
}

export default LoginPopUp;

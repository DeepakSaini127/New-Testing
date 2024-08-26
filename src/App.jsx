import React, { useState } from "react";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home/Home.jsx";
import { Route, Routes } from "react-router-dom";
import Card from "./Components/Card/Card.jsx";
import PlaceOrder from "./Components/Place Order/PlaceOrder.jsx";
import Footer from "./Components/Footer.jsx";
import LoginPopUp from "./Components/LoginPopUp.jsx";

function App() {
  const[showLogin, setShowLogin] = useState(false)
  return (
    <>
    {
      showLogin ? <LoginPopUp setShowLogin={setShowLogin}/> : <></>
    }
      <div className="w-full h-auto px-28 py-5">
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<Card />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;

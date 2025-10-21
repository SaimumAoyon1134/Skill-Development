import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./Footer";

import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ContinuousSwiper from "./ContinuousSwiper";

function App() {
  const swiper = new Swiper('.swiper', {

  modules: [Navigation, Pagination],

});
  return (
    <>
      <ToastContainer position="bottom-right" autoClose={1000} />
      <div className="sticky top-0 z-50 bg-base-100">
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;

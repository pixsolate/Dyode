import React, { useState, useEffect } from "react";
import Topbar from "../../layout/topbar";
import MobileMenu from "../../layout/mobilemenu";
import Carousel from "./carousel";
import ManType from "./mentype";
import Product from "./product";
import Shopping from "./shopping";
import Contact from "./contact";
import Footer from "../../layout/footer";

const HomePage = ({ location }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  return (
    <>
      <Topbar location={location} width={width} />
      {width < 600 && <MobileMenu />}
      <Carousel width={width} />
      <ManType width={width} />
      <Product width={width} />
      <Shopping width={width} />
      <Contact width={width} />
      <Footer width={width} />
    </>
  );
};

export default HomePage;

import React from "react";
import Footer from "../components/footer/Footer";
import Hero1 from "../components/hero/Hero1";
import Hero2 from "../components/hero/Hero2";
import Hero3 from "../components/hero/Hero3";
import Hero4 from "../components/hero/Hero4";
import Navbar from "../components/navbar/navbar";

const Home = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Hero1></Hero1>
      <Hero2></Hero2>
      <Hero3></Hero3>
      <Hero4></Hero4>
      <Footer></Footer>
    </main>
  );
};

export default Home;

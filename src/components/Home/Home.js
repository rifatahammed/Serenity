import React from "react";
import Services from "../Services/Services";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import Banner from "./Banner/Banner";
import "./Home.css";
const Home = () => {
  return (
    <div id="home">
      <Header></Header>
      <Banner></Banner>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
};

export default Home;

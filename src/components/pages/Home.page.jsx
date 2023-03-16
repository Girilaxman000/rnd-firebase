import React, { useEffect } from "react";
import Navbar from "../Navbar";
import HomeForm from "../HomeForm";
import Loan from "../Loan";
import ProsperLoans from "../ProsperLoans";
import Work from "../works";
import Questions from "../Questions";
import CarouselComponent from "../CarouselComponent";

import { Routes, Route } from "react-router-dom";
import Content from "../Content";

//use aos library
function Home() {
  useEffect(() => {
    document.title = "LendingTree";
  }, []);
  return (
    <div>
      <Navbar />
      {/* <HomeForm /> */}
      <Loan />
      <ProsperLoans />
      <Work />
      <Questions />
      <CarouselComponent />
      <Content />
    </div>
  );
}

export default Home;

// https://icons8.com/icons/set/lock

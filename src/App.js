import React from "react";

import Header from "./Components/Header/header";
import Filmes from "./Components/filmes/Filmes";
import Main from "./Components/main/main";
import Carousel from "./Components/Carousel/carousel";
import NavBar from "./Components/Navbar/navbar";
export default function App() {
  return (
    <>
      <Header />
      <Main />
      <NavBar />
      <Carousel />
      <Filmes />
    </>
  );
}

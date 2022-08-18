import React from "react";
import "./App.css";
import CarouselView from "./carousel-view/CarouselView";

function App() {
  return (
    <>
      <CarouselView slides={5} infinite={true} />
    </>
  );
}

export default App;

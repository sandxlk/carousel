import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { CarouselViewType } from "./type/carousel-view.type";
import { getAllCarousels } from "./service/carousel.service";
import { CarouselType } from "./type/carousel.type";
import CarouselTile from "./carousel-tile/CarouselTile";

function CarouselView(props: CarouselViewType) {
  const [carouselList, setCarouselList] = useState<CarouselType[]>([]);

  useEffect(() => {
    const fetchCarouselList = async () => {
      const carouselList = await getAllCarousels(props.slides);
      return carouselList;
    };
    fetchCarouselList()
      .then((data) => {
        setCarouselList(data);
      })
      .catch((error) => console.log(`Error getting Coursel data - ${error}`));
  }, []);

  const mappedCarouselList = carouselList.map((carousel, index) => (
    <CarouselTile
      key={index}
      image={carousel.image}
      title={carousel.title}
      subTitle={carousel.subTitle}
    />
  ));
  return (
    <div className="App">
      <Carousel>{mappedCarouselList}</Carousel>
    </div>
  );
}

export default CarouselView;

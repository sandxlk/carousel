import { Carousel } from "react-bootstrap";
import { CarouselType } from "../type/carousel.type";

function CarouselTile(props: CarouselType) {
  return (
    <>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.image}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{props.title}</h3>
          <p>{props.subTitle}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </>
  );
}

export default CarouselTile;

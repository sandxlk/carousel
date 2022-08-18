import axios from "axios";
import { CarouselType } from "../type/carousel.type";

const apiUrl = "http://localhost:3600/api/";
export async function getAllCarousels(slides: number): Promise<CarouselType[]> {
  const response = await axios.get(apiUrl + `carousel?slides=${slides}`);
  return response.data;
}

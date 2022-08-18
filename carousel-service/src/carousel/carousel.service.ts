import { Injectable } from '@nestjs/common';
import { mockCarousels } from './data/mock-carousels';
import { Carousel } from './type/carousel.type';

@Injectable()
export class CarouselService {
  async getCarousels(slidesCount: number): Promise<Carousel[]> {
    return mockCarousels.slice(0, slidesCount);
  }
}

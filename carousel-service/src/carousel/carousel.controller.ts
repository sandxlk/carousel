import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { CarouselService } from './carousel.service';
import { Carousel } from './type/carousel.type';

@Controller('api/carousel')
export class CarouselController {
  constructor(private _carouselService: CarouselService) {}

  @Get()
  async getCasousels(@Query('slides') slides: number): Promise<Carousel[]> {
    if (slides && slides > 10) {
      throw new HttpException(
        'Cannot exceed max count of 10 in slides',
        HttpStatus.BAD_REQUEST,
      );
    } else {
      return this._carouselService.getCarousels(slides);
    }
  }
}

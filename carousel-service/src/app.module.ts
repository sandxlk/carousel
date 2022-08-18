import { Module } from '@nestjs/common';
import { CarouselModule } from './carousel/carousel.module';

@Module({
  imports: [CarouselModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

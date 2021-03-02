import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';
import { AbcController } from './abc/abc.controller';

@Module({
  imports: [],
  controllers: [MoviesController, AbcController],
  providers: [MoviesService],
})
export class AppModule {}

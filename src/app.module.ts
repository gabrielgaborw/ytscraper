import { Module } from '@nestjs/common';
import { YTController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [YTController],
  providers: [AppService],
})
export class AppModule {}

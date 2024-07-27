import { Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service';
import axios from 'axios';
import cheerio from 'cheerio';

@Controller('yt')
export class YTController {
  @Get()
  async getData(): Promise<any> {
    const response = await axios.get(
      'https://www.youtube.com/watch?v=-ZMwRnxIxZY',
    );
    const $ = cheerio.load(response.data);
    // const newData = response.data;
    console.log($('title').text());
    return 'Done';
  }
}

import { Body, Controller, Get, Post } from '@nestjs/common';
import { FeedService } from '../services/feed.service';
import { FeedPost } from './models/posts.interface';
import { Observable } from 'rxjs';

@Controller('feed')
export class FeedController {
  constructor(public readonly feedService: FeedService) {}

  @Post('/create')
  async create(@Body() feedPost: FeedPost): Promise<Observable<FeedPost>> {
    return this.feedService.createPost(feedPost);
  }
  @Get('/get')
  async getAll() {
    return this.feedService.getAll();
  }
}

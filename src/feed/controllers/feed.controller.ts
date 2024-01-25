import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { FeedService } from '../services/feed.service';
import { FeedPost } from './models/posts.interface';
import { Observable } from 'rxjs';
import { UpdateResult } from 'typeorm';

@Controller('feed')
export class FeedController {
  constructor(public readonly feedService: FeedService) {}

  @Post()
  async create(@Body() feedPost: FeedPost): Promise<Observable<FeedPost>> {
    return this.feedService.createPost(feedPost);
  }
  @Get()
  async getAll() {
    return this.feedService.getAll();
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() feedPost: FeedPost,
  ): Promise<Observable<UpdateResult>> {
    return this.feedService.updatePost(id, feedPost);
  }
}

import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { FeedService } from '../services/feed.service';
import { FeedPost } from './models/posts.interface';

@Controller('feed')
export class FeedController {
  constructor(public readonly feedService: FeedService) {}

  @Post('/create')
  async create(@Body() feedPost: FeedPost) {
    try {
      const result = this.feedService.createPost(feedPost);
      return { success: true, data: result };
    } catch (error) {
      throw new HttpException(
        'An error occurred while creating the post',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}

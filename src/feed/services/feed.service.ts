import { FeedPost } from './../controllers/models/posts.interface';
import { FeedPostEntity } from './../controllers/models/post.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Observable, from } from 'rxjs';

@Injectable()
export class FeedService {
  constructor(
    @InjectRepository(FeedPostEntity)
    private readonly postFeedRepository: Repository<FeedPost>,
  ) {}

  createPost(feedPost: FeedPost): Observable<FeedPost> {
    return from(this.postFeedRepository.save(feedPost));
  }
  getAll(): Observable<FeedPost[]> {
    return from(this.postFeedRepository.find());
  }
}

import { FeedPost } from './../controllers/models/posts.interface';
import { FeedPostEntity } from './../controllers/models/post.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
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
  updatePost(id: number, feedPost: FeedPost): Observable<UpdateResult> {
    return from(this.postFeedRepository.update(id, feedPost));
  }
  deletePost(id: number): Observable<DeleteResult> {
    return from(this.postFeedRepository.delete(id));
  }
}

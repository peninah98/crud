import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { FeedPostDTO } from '../feed/controllers/models/posts.interface';

@Injectable()
export class FeedInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<FeedPostDTO[]> | Promise<Observable<FeedPostDTO[]>> {
    return next.handle().pipe(map((data:FeedPostDTO) => data.map({ password, ...data })=>feeds:FeedPostDTO));
  }
}

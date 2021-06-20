import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { TodoPostEntity } from '../models/post.entity';
import { TodoPost } from '../models/post.interface';

@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(TodoPostEntity)
        private readonly todoPostRepository: Repository<TodoPostEntity>,
      ) {}

 
      createPost(todoPost: TodoPost): Observable<TodoPost> {
       
        return from(this.todoPostRepository.save(todoPost));
      }

      findAllPosts(): Observable<TodoPost[]> {
        return from(this.todoPostRepository.find());
      }

      updatePost(id: number, todoPost:TodoPost): Observable<UpdateResult> {
        return from(this.todoPostRepository.update(id,todoPost));
      }

      deletePost(id: number): Observable<DeleteResult> {
        return from(this.todoPostRepository.delete(id));
      }

      

}








function id(id: any, TodoPost: any): Promise<UpdateResult> {
    throw new Error('Function not implemented.');
}
 
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { TodoPost } from '../models/post.interface';
import { TodoService } from '../services/todo.service';

@Controller('todo')
export class TodoController {
    constructor(private todoService: TodoService) {}

    @Post()
    create(@Body() post: TodoPost): Observable<TodoPost> {
      return this.todoService.createPost(post);
    }


    @Get()
  findAll(): Observable<TodoPost[]> {
    return this.todoService.findAllPosts();
   }

   @Put(':id')
   update(
    @Param('id') id:number,
    @Body() todoPost: TodoPost, ): Observable<UpdateResult> {
     return this.todoService.updatePost(id,todoPost);
    }
    
    @Delete(':id')
    delete(@Param('id') id: number): Observable<DeleteResult> {
      return this.todoService.deletePost(id);
    }
  }



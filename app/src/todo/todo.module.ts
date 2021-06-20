import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoService } from './services/todo.service';
import { TodoController } from './controllers/todo.controller';
import { TodoPostEntity } from './models/post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TodoPostEntity])],
  providers: [TodoService],
  controllers: [TodoController]
})
export class TodoModule {}





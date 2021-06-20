import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Timestamp,
} from 'typeorm';

//import { UserEntity } from 'src/auth/models/user.entity';

@Entity('todo_post')
export class TodoPostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: "" })
  body: string;

  @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date;

 // @CreateDateColumn()
  //createdAt: Date;

 // @ManyToOne(() => UserEntity, (userEntity) => userEntity.feedPosts)
  //author: UserEntity;
}

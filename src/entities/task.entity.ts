import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ProjectEntity } from './project.entity';
import { UserEntity } from './user.entity';
import { CommentEntity } from './comment.entity';

@Entity()
export class TaskEntity {
  @PrimaryGeneratedColumn()
  task_id: number;

  @Column()
  task_name: string;

  @Column({ nullable: true })
  description: string;

  @ManyToOne(() => ProjectEntity, (project) => project.tasks)
  project: ProjectEntity;

  @ManyToOne(() => UserEntity, (user) => user.tasks)
  assignee: UserEntity;

  @ManyToOne(() => CommentEntity, (comment) => comment.task)
  comments: CommentEntity[];

  /*
  @Column()
  status: string;

  @Column()
  progres: number;

  @Column()
  user_id: number;

  @Column('json', { array: true })
  comments: object[];
  */
}

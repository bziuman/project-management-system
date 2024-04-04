import { Entity, ManyToOne, PrimaryGeneratedColumn, Column } from 'typeorm';
import { UserEntity } from './user.entity';
import { ProjectEntity } from './project.entity';
import { TaskEntity } from './task.entity';

@Entity()
export class CommentEntity {
  @PrimaryGeneratedColumn()
  comment_id: number;

  @Column({ type: 'jsonb' })
  text: object;

  @ManyToOne(() => UserEntity, (user) => user.comments)
  user: UserEntity;

  @ManyToOne(() => ProjectEntity, (project) => project.comments)
  project: ProjectEntity;

  @ManyToOne(() => TaskEntity, (task) => task.comments)
  task: TaskEntity;
}

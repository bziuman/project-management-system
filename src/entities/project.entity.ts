import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';
import { MemberEntity } from './member.entity';
import { TaskEntity } from './task.entity';
import { CommentEntity } from './comment.entity';

@Entity()
export class ProjectEntity {
  @PrimaryGeneratedColumn()
  project_id: number;

  @Column()
  project_name: string;

  @Column({ nullable: true })
  description: string;

  @ManyToOne(() => UserEntity, (user) => user.projects)
  user: UserEntity;

  @OneToMany(() => TaskEntity, (task) => task.project)
  tasks: TaskEntity[];

  @OneToMany(() => MemberEntity, (projectMember) => projectMember.project)
  members: MemberEntity[];

  @OneToMany(() => CommentEntity, (comment) => comment.project)
  comments: CommentEntity;
}

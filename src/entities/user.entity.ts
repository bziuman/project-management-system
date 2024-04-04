import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TaskEntity } from './task.entity';
import { ProjectEntity } from './project.entity';
import { MemberEntity } from './member.entity';
import { CommentEntity } from './comment.entity';
import { FriendEntity } from './friend.entity';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToMany(() => ProjectEntity, (project) => project.user)
  projects: ProjectEntity[];

  @OneToMany(() => TaskEntity, (tasks) => tasks.assignee)
  tasks: TaskEntity[];

  @OneToMany(() => MemberEntity, (projectMember) => projectMember.user)
  projectMembers: MemberEntity[];

  @OneToMany(() => CommentEntity, (commnet) => commnet.user)
  comments: CommentEntity[];

  @OneToMany(() => FriendEntity, (friend) => friend.user)
  friends: FriendEntity[];
}

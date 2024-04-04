import { Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { UserEntity } from './user.entity';
import { ProjectEntity } from './project.entity';

@Entity()
export class MemberEntity {
  @PrimaryColumn()
  user_id: number;

  @PrimaryColumn()
  project_id: number;

  @ManyToOne(() => UserEntity, (user) => user.projectMembers)
  user: UserEntity;

  @ManyToOne(() => ProjectEntity, (project) => project.members)
  project: ProjectEntity;
}

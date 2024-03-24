import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  username: string;

  @Column('int', { array: true })
  other_user_ids: number[];

  @Column('int', { array: true })
  project_ids: number[];

  @Column('int', { array: true })
  task_ids: number[];
}

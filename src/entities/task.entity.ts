import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TaskEntity {
  @PrimaryGeneratedColumn()
  task_id: number;

  @Column()
  task_name: string;

  @Column()
  description: string;

  @Column()
  status: string;

  @Column()
  progres: number;

  @Column()
  user_id: number;

  @Column('json', { array: true })
  comments: object[];
}

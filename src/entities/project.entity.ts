import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProjectEntity {
  @PrimaryGeneratedColumn()
  project_id: number;

  @Column()
  project_name: string;

  @Column()
  description: string;

  @Column()
  progres: number;

  @Column()
  status: string;

  @Column('int', { array: true })
  user_ids: number[];

  @Column('int', { array: true })
  tasks: number[];

  @Column('json', { array: true })
  comments: object[];
}

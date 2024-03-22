import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProjectEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titile: string;

  @Column()
  description: string;

  @Column()
  status: string;

  @Column()
  executor: number;

  @Column()
  progres: number;
}

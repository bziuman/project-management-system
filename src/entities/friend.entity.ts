import { Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity()
export class FriendEntity {
  @PrimaryColumn()
  user_id: number;

  @PrimaryColumn()
  friend_id: number;

  @ManyToOne(() => UserEntity, (user) => user.friends)
  user: UserEntity;

  @ManyToOne(() => UserEntity, (user) => user.friends)
  friend: UserEntity;
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async createUser(): Promise<UserEntity> {
    const user = new UserEntity();
    user.username = 'Bohdan';
    user.other_user_ids = [2, 3];
    user.project_ids = [0, 1];
    user.task_ids = [10, 100];

    return await this.userRepository.save(user);
  }

  getUserInfo() {}

  getAllProject() {}
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { UpdateUserDto } from 'src/dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async getUserInfo(u_id: number): Promise<object> {
    const user = await this.userRepository.findOne({
      where: { user_id: u_id },
      relations: ['projects', 'tasks', 'projectMembers', 'comments', 'friends'],
    });
    if (!user) {
      throw new Error('User not found');
    }
    return { status: 'success', user: user };
  }

  async updateUserData(userId: number, updateUserData: UpdateUserDto) {
    const user = await this.userRepository.findOne({
      where: { user_id: userId },
    });

    user.username = updateUserData.username;

    await this.userRepository.save(user);
    return { msg: 'Seccessful update user data' };
  }

  async deleteUser(userId: number) {
    const user = await this.userRepository.findOne({
      where: { user_id: userId },
    });

    if (!user) {
      return { msg: 'User doesnt exist' };
    }

    const deletedUser = await this.userRepository.delete(user);

    if (!deletedUser) {
      return { msg: deletedUser };
    }
    return { msg: 'User deleted successfully' };
  }
}

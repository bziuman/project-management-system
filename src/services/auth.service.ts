import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from 'src/entities/user.entity';
import { hashPassword } from 'src/utils/hashPassword';
import { Repository } from 'typeorm';
import { verifyPassword } from 'src/utils/veryPassword';
import { AuthDto } from 'src/dto/auth.dto';

@Injectable()
export class AuthService {
  private salt = '3_as$lP';

  constructor(
    private jwtService: JwtService,
    @InjectRepository(UserEntity)
    private userRository: Repository<UserEntity>,
  ) {}

  async signUp(userData: AuthDto): Promise<object> {
    try {
      const user = await this.userRository.findOne({
        where: { username: userData.username },
      });

      if (user) return { msg: 'User with the same name already exists' };

      const hashedUserPassword = await hashPassword(
        userData.password,
        this.salt,
      );

      const newUser = await this.userRository.create({
        username: userData.username,
        password: hashedUserPassword,
      });

      await this.userRository.save(newUser);
      return { msg: 'User registered successfully' };
    } catch (err) {
      return { msg: 'Registration failed' };
    }
  }

  async signIn(userData: AuthDto): Promise<object> {
    try {
      const user = await this.userRository.findOne({
        where: { username: userData.username },
        relations: [
          'projects',
          'tasks',
          'projectMembers',
          'comments',
          'friends',
        ],
      });

      if (!user) return { msg: 'User with this name does not exist' };

      const isPasswordValid = await verifyPassword(
        userData.password,
        user.password,
        this.salt,
      );

      const jwtToken = await this.jwtService.signAsync({ sub: user });

      return isPasswordValid
        ? {
            access_token: jwtToken,
            msg: 'Sign-in successful',
            user: {
              id: user.user_id,
              username: user.username,
              projects: user.projects,
              tasks: user.tasks,
              friends: user.friends,
            },
          }
        : { msg: 'Sign-in failed' };
    } catch (err) {
      console.log(err);

      return { msg: err };
    }
  }
}

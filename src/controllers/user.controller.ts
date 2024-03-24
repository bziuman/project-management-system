import { Controller, Get, Post, Patch, Delete } from '@nestjs/common';
import { UserService } from '../services/user.service.js';
import { UserDto } from '../dto/user.dto.js';
import { UserEntity } from 'src/entities/user.entity.js';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}
  /* POST */

  /* GET */
  @Get('/user/:id')
  getUserInfo() {}

  @Get('/user/:id/get-all-projects')
  getAllProjects() {}

  /* PATCH */

  /* DELETE */
}

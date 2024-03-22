import { Controller, Get, Post, Patch, Delete } from '@nestjs/common';

@Controller()
export class UserController {
  /* POST */

  /* GET */
  @Get('/user/:id')
  getUserInfo() {}

  @Get('/user/:id/get-all-projects')
  getAllProjects() {}

  /* PATCH */

  /* DELETE */
}

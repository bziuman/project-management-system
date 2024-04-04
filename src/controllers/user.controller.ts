import {
  Controller,
  Get,
  Put,
  Delete,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { AuthGuard } from 'src/guards/auth.guard';
import { UpdateUserDto } from 'src/dto/update-user.dto';

@UseGuards(AuthGuard)
@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}
  /* POST */

  /* GET */
  @Get(':userId')
  async getUserInfo(@Param('userId') userId: number): Promise<object> {
    return await this.userService.getUserInfo(userId);
  }

  /* PATCH & PUT */
  @Put(':userId')
  async updateUserData(
    @Param('userId') userId: number,
    @Body() updateUserData: UpdateUserDto,
  ): Promise<object> {
    return await this.userService.updateUserData(userId, updateUserData);
  }

  /* DELETE */
  @Delete(':userId')
  async deleteUser(@Param('userId') userId: number): Promise<object> {
    return await this.userService.deleteUser(userId);
  }
}

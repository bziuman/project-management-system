import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  UseGuards,
  Param,
} from '@nestjs/common';
import { TaskIdsDto } from 'src/dto/task-ids.dto';
import { CreateTaskDto } from 'src/dto/create-task.dto';
import { AuthGuard } from 'src/guards/auth.guard';
import { TaskService } from 'src/services/task.service';
import { TaskDto } from 'src/dto/task.dto';

@UseGuards(AuthGuard)
@Controller('/:userId/projects/:projectId/tasks')
export class TaskContorller {
  constructor(private readonly taskService: TaskService) {}

  /* POST */
  @Post()
  async createTask(
    @Param() ids: TaskIdsDto,
    @Body()
    taskData: CreateTaskDto,
  ): Promise<object> {
    return await this.taskService.createTask(ids, taskData);
  }

  /* GET */
  @Get()
  async getAllTasks(@Param() ids: TaskIdsDto): Promise<object> {
    return await this.taskService.getAllTasks(ids);
  }
  @Get('/:taskId')
  async getTaskInfo(@Param() ids: TaskIdsDto): Promise<object> {
    return this.taskService.getTaskInfo(ids);
  }

  /* PATCH&PUT*/

  @Put('/:taskId')
  async updateTask(
    @Param() ids: TaskIdsDto,
    @Body() taskData: TaskDto,
  ): Promise<object> {
    return await this.taskService.updateTask(ids, taskData);
  }

  /* DELETE */
  @Delete('/:taskId')
  async deleteTask(@Param() ids: TaskIdsDto): Promise<object> {
    return this.taskService.deleteTask(ids);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskEntity } from 'src/entities/task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskEntity)
    private taskRepository: Repository<TaskEntity>,
  ) {}
  
  addNewTask() {}

  getAllTasks() {}

  getAllTaskComments() {}

  patchTaskComment() {}

  patchCompletedTask() {}

  patchPauseTask() {}

  patchResumeTask() {}

  patchRejectTask() {}

  deleteTask() {}

  deleteTaskComment() {}
}

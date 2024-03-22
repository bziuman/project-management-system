import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
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

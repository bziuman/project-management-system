import { Controller, Get, Post, Patch, Delete } from '@nestjs/common';

@Controller()
export class TaskContorller {
  /* POST */
  @Post('/user/:id/project/:id/new-task')
  addNewTask() {}

  @Post('/user/:id/project/:id/task/:id/task-comments')
  createTaskComments() {}

  /* GET */
  @Get('/user/:id/project-name/:id/get-all-tasks')
  getAllTasks() {}

  @Get('/user/:id/project/:id/task/:id/task-comments')
  getAllTaskComments() {}

  /* PATCH */
  @Patch('/user/:id/project/:id/task-comments/:id')
  patchTaskComment() {}

  @Patch('/user/:id/project/:id/task/:id/completed-task')
  patchCompletedTask() {}

  @Patch('/user/:id/project/:id/task/:id/pause-task')
  patchPauseTask() {}

  @Patch('/user/:id/project/:id/task/:id/resume-task')
  patchResumeTask() {}

  @Patch('/user/:id/project/:id/task/:id/reject-task')
  patchRejectTask() {}

  /* DELETE */
  @Delete('/user/:id/project/:id/delete-task')
  deleteTask() {}

  @Delete('/user/:id/project/:id/task-comments/:id')
  deleteTaskComment() {}
}

import { Controller, Get, Post, Patch, Delete } from '@nestjs/common';

@Controller()
export class TasksContorller {
  /* POST */
  @Post('/user/:id/create-new-project')
  createProject() {}

  @Post('/user/:id/project/:id/new-task')
  addNewTask() {}

  @Post('/user/:id/project/:id/project-comments')
  createProjectComments() {}

  @Post('/user/:id/project/:id/task/:id/task-comments')
  createTaskComments() {}

  /* GET */
  @Get('/user/:id')
  getUserInfo() {}

  @Get('/user/:id/get-all-projects')
  getAllProjects() {}

  @Get('/user/:id/project-name/:id/give-all-user')
  getAllUserInTask() {}

  @Get('/user/:id/project-name/:id/get-all-tasks')
  getAllTasks() {}

  @Get('/user/:id/project/:id')
  getProject() {}

  @Get('/user/:id/project/:id/get-all-user')
  getAllUser() {}

  @Get('/user/:id/project/:id/progres-of-the-project-tasks')
  getProgresProjectTasks() {}

  @Get('/user/:id/project/:id/statistic-of-project')
  getStatisticProject() {}

  @Get('/user/:id/project/:id/project-comments')
  getAllProjectComments() {}

  @Get('/user/:id/project/:id/task/:id/task-comments')
  getAllTaskComments() {}

  /* PATCH */
  @Patch('/user/:id/project/:id/add-user')
  addUserToProject() {}

  @Patch('/user/:id/project/:id/give-task')
  giveTaskToUser() {}

  @Patch('/user/:id/project/:id/pause-task')
  pauseTask() {}

  @Patch('/user/:id/project/:id/resume-task')
  resumeTask() {}

  @Patch('/user/:id/project/:id/project-comments/:id')
  patchProjectComment() {}

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
  @Delete('/user/:id/delete-project/:id')
  deleteProject() {}

  @Delete('/user/:id/project/:id/delete-user')
  deleteUserFromProject() {}

  @Delete('/user/:id/project/:id/delete-task')
  deleteTask() {}

  @Delete('/user/:id/project/:id/project-comments/:id')
  deleteProjectComment() {}

  @Delete('/user/:id/project/:id/task-comments/:id')
  deleteTaskComment() {}
}

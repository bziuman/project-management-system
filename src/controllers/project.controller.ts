import { Controller, Get, Post, Patch, Delete } from '@nestjs/common';

@Controller()
export class ProjectController {
  /* POST */
  @Post('/user/:id/create-new-project')
  createProject() {}

  @Post('/user/:id/project/:id/project-comments')
  createProjectComments() {}

  /* GET */
  @Get('/user/:id/project-name/:id/give-all-user')
  getAllUserInTask() {}

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

  /* PATCH */
  @Patch('/user/:id/project/:id/add-user')
  addUserToProject() {}

  @Patch('/user/:id/project/:id/give-task')
  giveTaskToUser() {}

  @Patch('/user/:id/project/:id/project-comments/:id')
  patchProjectComment() {}

  /* DELETE */
  @Delete('/user/:id/delete-project/:id')
  deleteProject() {}

  @Delete('/user/:id/project/:id/delete-user')
  deleteUserFromProject() {}

  @Delete('/user/:id/project/:id/project-comments/:id')
  deleteProjectComment() {}
}

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
import { NewProjectDto } from 'src/dto/new-project.dto';
import { ProjectIdsDto } from 'src/dto/project.ids';
import { UpdateProjectDto } from 'src/dto/update-project.dto';
import { ProjectEntity } from 'src/entities/project.entity';
import { AuthGuard } from 'src/guards/auth.guard';

import { ProjectService } from 'src/services/project.service';

@UseGuards(AuthGuard)
@Controller('/:userId/projects')
export class ProjectController {
  constructor(private projectService: ProjectService) {}

  /* POST */
  @Post()
  async createProject(
    @Param('userId') userId: number,
    @Body() projectData: NewProjectDto,
  ): Promise<ProjectEntity> {
    return await this.projectService.createProject(userId, projectData);
  }

  /* GET */
  @Get()
  async getProjects(@Param() ids: ProjectIdsDto): Promise<object> {
    return await this.projectService.getProjects(ids);
  }

  @Get('/:projectId')
  async getProject(@Param() ids: ProjectIdsDto): Promise<object> {
    return await this.projectService.getProject(ids);
  }

  /*  PUT */
  @Put('/:projectId')
  async updateProject(
    @Param() ids: ProjectIdsDto,
    @Body() projectData: UpdateProjectDto,
  ): Promise<object> {
    return await this.projectService.updateProject(ids, projectData);
  }

  @Delete('/:projectId')
  async deleteProject(@Param() ids: ProjectIdsDto): Promise<object> {
    return this.projectService.deleteProject(ids);
  }

  /*
  @Post('/project/project_comments/')
  async createProjectComments(
    @Query('id') projectId: number,
    @Body()
    commentData: {
      from: number;
      msg: string;
    },
  ) {
    return await this.projectService.createNewProjectComments(
      projectId,
      commentData.from,
      commentData.msg,
    );
  }

  /* GET */
  /*
  @Get('/project-name/:id/give-all-user')
  getAllUserInTask() {}

  @Get('/project/:id')
  async getProject(@Query('id') id: number) {
    return this.projectService.getProject(id);
  }

  @Get('/project/:id/get-all-user')
  async getAllUser(@Query('id') id: number) {
    return await this.projectService.getAllUserProject(id);
  }

  //@Get('/user/:id/project/:id/progres-of-the-project-tasks')
  //getProgresProjectTasks() {}

  @Get('/project/:id/statistic-of-project')
  async getStatisticProject(@Query('id') projectId: number) {
    //return await this.projectService.getStatisticProject(projectId);
  }

  @Get('/project/:id/project-comments')
  async getAllProjectComments(@Query('id') projectId: number) {
    return await this.projectService.getAllProjectComments(projectId);
  }
  */

  /* PATCH */
  /*
  @Patch('/project/:id/add-user')
  async addUserToProject(
    @Query('id') projectId: number,
    @Body() userId: number,
  ) {
    return this.projectService.addUserToProject(projectId, userId);
  }
  */

  //@Patch('/user/:id/project/:id/give-task')
  //giveTaskToUser() {}
  /*
  @Patch('/project/:id/project-comments/new-comment/')
  async addProjectComments(
    @Query('id') projectId: number,
    @Body() bodyData: { from: number; to: number; msg: string },
  ) {
    return await this.projectService.addProjectComments(
      projectId,
      bodyData.from,
      bodyData.to,
      bodyData.msg,
    );
  }
*/
  /* DELETE */
  /*
  @Delete('/project/:id/delete-project/')
  async deleteProject(@Query('id') projectId: number) {
    return await this.projectService.deleteProject(projectId);
  }
*/
  //@Delete('/project/:id/delete-user')
  //deleteUserFromProject() {}
  /*
  @Delete('/project/:id/user-delete')
  async deleteUserFromProject(
    @Query('id') projectId: number,
    @Body() userId: number,
  ) {
    return await this.projectService.deleteUserFromProject(projectId, userId);
  }
  */
  /*
  @Delete()
  @Delete('project/:id/project-comments/')
  async deleteProjectComment(
    @Query('id') id: number,
    @Body() bodyData: { comment_id: number },
  ) {
    return await this.projectService.deleteProjectComment(
      id,
      bodyData.comment_id,
    );
  }
  */
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProjectEntity } from 'src/entities/project.entity';
import { UserEntity } from 'src/entities/user.entity';
import { NewProjectDto } from 'src/dto/new-project.dto';
import { ProjectIdsDto } from 'src/dto/project.ids';
import { UpdateProjectDto } from 'src/dto/update-project.dto';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(ProjectEntity)
    private projectRepository: Repository<ProjectEntity>,
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async createProject(
    userId: number,
    projectData: NewProjectDto,
  ): Promise<ProjectEntity> {
    const user = await this.userRepository.findOne({
      where: { user_id: userId },
    });

    projectData.user = user;

    const newProject = await this.projectRepository.create({
      project_name: projectData.project_name,
      description: projectData.description,
      user: user,
    });
    return await this.projectRepository.save(newProject);
  }

  async getProject(ids: ProjectIdsDto): Promise<object> {
    const project = await this.projectRepository.findOne({
      where: { project_id: ids.projectId },
      relations: ['user', 'tasks', 'members'],
    });

    return { project: project };
  }

  async getProjects(ids: ProjectIdsDto): Promise<object> {
    const user = await this.userRepository.findOne({
      where: { user_id: ids.userId },
      relations: ['projects', 'tasks'],
    });

    return { projects: user.projects };
  }

  async updateProject(
    ids: ProjectIdsDto,
    projectData: UpdateProjectDto,
  ): Promise<object> {
    const project = await this.projectRepository.findOne({
      where: { project_id: ids.projectId },
    });

    if (projectData.project_name) {
      project.project_name = projectData.project_name;
    }

    if (projectData.description) {
      project.description = projectData.description;
    }

    await this.projectRepository.save(project);
    return { project: project };
  }

  async deleteProject(ids: ProjectIdsDto): Promise<object> {
    const project = await this.projectRepository.findOne({
      where: { project_id: ids.projectId },
    });

    await this.projectRepository.remove(project);

    return { msg: 'The project was successfully deleted' };
  }
  /*
  async createNewProjectComments(projectId: number, from: number, msg: string) {
    const newProjectComment = await this.projectRepository.findOne({
      where: { project_id: projectId },
    });

    if (!newProjectComment) {
      throw new NotFoundException('project not found');
    }

    newProjectComment.comments = [{ comment_id: 0, from: from, msg: msg }];

    return await this.projectRepository.save(newProjectComment);
  }

  async getProject(id: number) {
    return await this.projectRepository.findOne({ where: { project_id: id } });
  }

  async getAllUserProject(id: number) {
    const projectData = await this.projectRepository.findOne({
      where: { project_id: id },
    });

    return projectData.user_ids;
  }

  async getProgresProject(id: number) {
    const projectData = await this.projectRepository.findOne({
      where: { project_id: id },
    });

    return projectData.progres;
  }

  //async getStatisticProject(id: number) {}

  async getAllProjectComments(id: number) {
    const projectData = await this.projectRepository.findOne({
      where: { project_id: id },
    });

    return projectData.comments;
  }

  async addUserToProject(id: number, user_id: number) {
    const projectData = await this.projectRepository.findOne({
      where: { project_id: id },
    });
    projectData.user_ids.push(user_id);

    return await this.projectRepository.save(projectData);
  }

  async addProjectComments(
    projectId: number,
    //from: number,
    //to: number,
    //msg: string,
  ) {
    const newProjectComment = await this.projectRepository.findOne({
      where: { project_id: projectId },
    });

    if (!newProjectComment) {
      throw new NotFoundException('project not found');
    }

    /*
    newProjectComment.comments.push({
      comment_id: newProjectComment.comments.length + 1,
      from: from,
      to: to,
      msg: msg,
    });

    */

  /*

    return await this.projectRepository.save(newProjectComment);
  }

  async deleteProject(id: number) {
    return await this.projectRepository.delete({ project_id: id });
  }

  async deleteUserFromProject(id: number, user_id: number) {
    const project = await this.projectRepository.findOne({
      where: { project_id: id },
    });

    /*
    const projectAfterDeletedUser = project.user_ids.splice(
      project.user_ids.indexOf(user_id),
      1,
    );
    */

  //project.user_ids = projectAfterDeletedUser;
  /*
    return await this.projectRepository.save(project);
  }

  async deleteProjectComment(id: number, comment_id: number) {
    const project = await this.projectRepository.findOne({
      where: { project_id: id },
    });

    //const foundObject = await findObjectByValue(project.comments, comment_id);

    //if (foundObject) {
    //const deletedComments = project.comments.splice(foundObject.index, 1);
    //project.comments = deletedComments;

    //project.comments = removeObjectFromArray(
    //const dd = removeObjectFromArray(project.comments, foundObject.index);
    //console.log(dd);

    return await this.projectRepository.save(project);
    //}
  }
  */
}

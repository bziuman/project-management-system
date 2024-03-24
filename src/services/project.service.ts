import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProjectEntity } from 'src/entities/project.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(ProjectEntity)
    private projectRepository: Repository<ProjectEntity>,
  ) {}
  
  createProject() {}

  createProjectComments() {}

  getAllUserInTask() {}

  getProject() {}

  getAllUser() {}

  getProgresProjectTasks() {}

  getStatisticProject() {}

  getAllProjectComments() {}

  addUserToProject() {}

  giveTaskToUser() {}

  patchProjectComment() {}

  deleteProject() {}

  deleteUserFromProject() {}

  deleteProjectComment() {}
}

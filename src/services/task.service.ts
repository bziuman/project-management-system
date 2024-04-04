import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskEntity } from 'src/entities/task.entity';
import { TaskIdsDto } from 'src/dto/task-ids.dto';
import { CreateTaskDto } from 'src/dto/create-task.dto';
import { ProjectEntity } from 'src/entities/project.entity';
import { UserEntity } from 'src/entities/user.entity';
import { TaskDto } from 'src/dto/task.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskEntity)
    private taskRepository: Repository<TaskEntity>,
    @InjectRepository(ProjectEntity)
    private projectRepository: Repository<ProjectEntity>,
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async createTask(ids: TaskIdsDto, taskData: CreateTaskDto): Promise<object> {
    const createTask = await this.taskRepository.create(taskData);
    const user = await this.userRepository.findOne({
      where: { user_id: ids.userId },
    });
    const project = await this.projectRepository.findOne({
      where: { project_id: ids.projectId },
    });

    createTask.project = project;

    if (user) {
      createTask.assignee = user;
    }

    const saveTask = await this.taskRepository.save(createTask);
    return {
      msg: 'Success created new task',
      task: {
        taskId: saveTask.task_id,
        taskName: saveTask.task_name,
        description: saveTask.description,
        project: saveTask.project,
        assignee: { userId: user.user_id, username: user.username },
      },
    };
  }

  async getAllTasks(ids: TaskIdsDto): Promise<object> {
    const project = await this.projectRepository.findOne({
      where: { project_id: ids.projectId },
      relations: ['tasks'],
    });
    return { tasks: project.tasks };
  }

  async getTaskInfo(ids: TaskIdsDto): Promise<object> {
    const task = await this.taskRepository.findOne({
      where: { task_id: ids.taskId },
      //relations: ['project'],
    });

    return { msg: 'Successful get task info', task: task };
  }

  async updateTask(ids: TaskIdsDto, taskData: TaskDto): Promise<object> {
    const task = await this.taskRepository.findOne({
      where: { task_id: ids.taskId },
      relations: ['project'],
    });

    if (taskData.task_name) task.task_name = taskData.task_name;
    if (taskData.description) task.description = taskData.description;
    if (taskData.user_id) {
      const user = await this.userRepository.findOne({
        where: { user_id: taskData.user_id },
      });
      task.assignee = user;
    }

    await this.taskRepository.save(task);
    return { msg: 'Success updated task', task: task };
  }

  async deleteTask(ids: TaskIdsDto): Promise<object> {
    const user = await this.userRepository.findOne({
      where: { user_id: ids.userId },
    });
    const project = await this.projectRepository.findOne({
      where: { project_id: ids.projectId },
    });
    const task = await this.taskRepository.findOne({
      where: { task_id: ids.taskId },
      relations: ['project', 'assignee'],
    });

    if (user.tasks) {
      user.tasks = user.tasks.filter((task) => task.task_id !== ids.taskId);
      await this.userRepository.save(user);
    }
    if (project.tasks) {
      project.tasks = project.tasks.filter(
        (task) => task.task_id !== ids.taskId,
      );
      await this.projectRepository.save(project);
    }

    await this.taskRepository.remove(task);

    return { msg: 'Success deleted task' };
  }
  /*
  async createTaskComment(
    taskId: number,
    taskComment: {
      userId: number;
      projectId: number;
      taskId: number;
      comment: { commentId: number; from: number; to: number; text: string };
    },
  ) {
    const task = await this.taskRepository.findOne({
      where: { task_id: taskId },
    });

    //task.comments.push(taskComment);
    return await this.taskRepository.save(task);
  }

  async getAllTaskComments(taskId: number) {
    const allCommentTask = await this.taskRepository.findOne({
      where: { task_id: taskId },
    });

    return allCommentTask.comments;
  }

  async patchTaskComment(taskId: number, commentId: number, text: string) {
    const task = await this.taskRepository.findOne({
      where: { task_id: taskId },
    });

    const foundComment = findObjectByValue(task.comments, commentId);
    //const comment = task.comments.findIndex(foundComment.index);
    //comment.text = text;
    console.log(foundComment);
    console.log(task.comments);
    console.log(typeof task.comments);
    console.log(text);

    //task.comments = comment;

    //return this.taskRepository.save(task);
    return 'loh';
  }

  async changeStatusTask(taskId: number, status: string) {
    const task = await this.taskRepository.findOne({
      where: { task_id: taskId },
    });

    return this.taskRepository.save(task);
  }

  async deleteTaskComment(taskId: number, commentId: number) {
    const task = await this.taskRepository.findOne({
      where: { task_id: taskId },
    });

    const foundCommet = findObjectByValue(task.comments, commentId);
    if (foundCommet) {
      //task.comments = removeObjectFromArray(task.comments, commentId);
      return this.taskRepository.save(task);
    }
  }


  async giveTaskToUser(project_id: number, user_id: number) {
    const userData = await this.projectRepository.findOne({
      where: { user_id: user_id },
    });

    userData.task_id = 66
  }

 */
}

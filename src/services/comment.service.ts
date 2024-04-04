import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommentIdsDto } from 'src/dto/comment-ids.dto';
import { CommentDto } from 'src/dto/comment.dto';
import { CommentEntity } from 'src/entities/comment.entity';
import { ProjectEntity } from 'src/entities/project.entity';
import { TaskEntity } from 'src/entities/task.entity';
import { UserEntity } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(CommentEntity)
    private commentRepository: Repository<CommentEntity>,
    @InjectRepository(ProjectEntity)
    private projectRepository: Repository<ProjectEntity>,
    @InjectRepository(TaskEntity)
    private taskRepository: Repository<TaskEntity>,
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async createTaskComment(
    ids: CommentIdsDto,
    commentData: CommentDto,
  ): Promise<object> {
    const comment = await this.commentRepository.create();
    const user = await this.userRepository.findOne({
      where: { user_id: ids.userId },
    });
    const task = await this.taskRepository.findOne({
      where: { task_id: ids.taskId },
    });
    const project = await this.projectRepository.findOne({
      where: { project_id: ids.projectId },
    });

    comment.text = { text: commentData.text };
    comment.user = user;
    comment.task = task;
    comment.project = project;

    await this.commentRepository.save(comment);
    return {
      msg: 'Added new comment to task',
      commentId: comment.comment_id,
      from: { userId: user.user_id, username: user.username },
      text: commentData.text,
      projectId: project.project_id,
      taskId: task.task_id,
    };
  }

  async createProjectComment(
    ids: CommentIdsDto,
    commentData: CommentDto,
  ): Promise<object> {
    const comment = await this.commentRepository.create();
    const user = await this.userRepository.findOne({
      where: { user_id: ids.userId },
    });
    const project = await this.projectRepository.findOne({
      where: { project_id: ids.projectId },
    });

    comment.text = { text: commentData.text };
    comment.user = user;
    comment.project = project;

    await this.commentRepository.save(comment);
    return {
      msg: 'Added new comment to project',
      comment: {
        commentId: comment.comment_id,
        from: { userId: user.user_id, username: user.username },
        text: commentData.text,
        projectId: project.project_id,
      },
    };
  }

  async getTaskComments(ids: CommentIdsDto): Promise<object> {
    const comments = await this.commentRepository.find({
      where: { task: { task_id: ids.taskId } },
      relations: ['user', 'project', 'task'],
    });

    const deserializeComments = comments.map((comment) => {
      const { comment_id, text, user, project, task } = comment;

      return {
        commentId: comment_id,
        projectId: project.project_id,
        task: task.task_id,
        from: { userId: user.user_id, username: user.username },
        text,
      };
    });

    return { comments: deserializeComments };
  }

  async getProjectComments(ids: CommentIdsDto): Promise<object> {
    const comments = await this.commentRepository.find({
      where: { project: { project_id: ids.projectId } },
      relations: ['user', 'project'],
    });
    const deserializeComments = comments.map((comment) => {
      const { comment_id, text, user, project } = comment;

      return {
        commentId: comment_id,
        projectId: project.project_id,
        from: { userId: user.user_id, username: user.username },
        text,
      };
    });

    return { comments: deserializeComments };
  }
}

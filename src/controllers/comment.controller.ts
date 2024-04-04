import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CommentIdsDto } from 'src/dto/comment-ids.dto';
import { CommentDto } from 'src/dto/comment.dto';
import { AuthGuard } from 'src/guards/auth.guard';
import { CommentService } from 'src/services/comment.service';

@UseGuards(AuthGuard)
@Controller('/:userId/projects/:projectId')
export class CommentController {
  constructor(private commentService: CommentService) {}

  /* POST */
  @Post('/tasks/:taskId/comments')
  async createTaskComment(
    @Param() ids: CommentIdsDto,
    @Body() text: CommentDto,
  ): Promise<object> {
    return await this.commentService.createTaskComment(ids, text);
  }

  @Post('/comments')
  async createProjectComment(
    @Param() ids: CommentIdsDto,
    @Body() text: CommentDto,
  ): Promise<object> {
    return await this.commentService.createProjectComment(ids, text);
  }

  /* GET */
  @Get('/tasks/:taskId/comments')
  async getTaskComments(@Param() ids: CommentIdsDto): Promise<object> {
    return await this.commentService.getTaskComments(ids);
  }

  @Get('/comments')
  async getProjectComments(@Param() ids: CommentIdsDto): Promise<object> {
    return await this.commentService.getProjectComments(ids);
  }
}

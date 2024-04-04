import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentEntity } from 'src/entities/comment.entity';
import { JwtModule } from '@nestjs/jwt';
import { CommentController } from 'src/controllers/comment.controller';
import { CommentService } from 'src/services/comment.service';
import { ProjectEntity } from 'src/entities/project.entity';
import { TaskEntity } from 'src/entities/task.entity';
import { UserEntity } from 'src/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CommentEntity,
      ProjectEntity,
      TaskEntity,
      UserEntity,
    ]),
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1h', algorithm: 'HS256' },
    }),
  ],
  controllers: [CommentController],
  providers: [CommentService],
  exports: [TypeOrmModule],
})
export class CommentModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { TaskContorller } from 'src/controllers/task.controller';
import { ProjectEntity } from 'src/entities/project.entity';
import { TaskEntity } from 'src/entities/task.entity';
import { UserEntity } from 'src/entities/user.entity';
import { TaskService } from 'src/services/task.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([TaskEntity, ProjectEntity, UserEntity]),
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1h', algorithm: 'HS256' },
    }),
  ],
  controllers: [TaskContorller],
  providers: [TaskService],
  exports: [TypeOrmModule],
})
export class TaskModule {}

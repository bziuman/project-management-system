import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskContorller } from 'src/controllers/task.controller';
import { TaskEntity } from 'src/entities/task.entity';
import { TaskService } from 'src/services/task.service';

@Module({
  imports: [TypeOrmModule.forFeature([TaskEntity])],
  controllers: [TaskContorller],
  providers: [TaskService],
})
export class TaskModule {}

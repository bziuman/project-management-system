import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user.module';
import { ProjectModule } from './modules/project.module';
import { TaskModule } from './modules/task.module';
import { UserService } from './services/user.service';
import { ProjectService } from './services/project.service';
import { TaskService } from './services/task.service';
import { UserController } from './controllers/user.controller';
import { ProjectCommentDto } from './dto/comment.dto';
import { TaskContorller } from './controllers/task.controller';
import { ProjectController } from './controllers/project.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1',
      database: 'project_management_db',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UserModule,
    ProjectModule,
    TaskModule,
  ],
})
export class AppModule {}

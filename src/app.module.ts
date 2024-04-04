import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user.module';
import { ProjectModule } from './modules/project.module';
import { TaskModule } from './modules/task.module';
import { AuthModule } from './modules/auth.module';
import { CommentModule } from './modules/comment.module';
import { MemberModule } from './modules/member.module';

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
    AuthModule,
    UserModule,
    ProjectModule,
    TaskModule,
    CommentModule,
    MemberModule,
  ],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { ProjectController } from 'src/controllers/project.controller';
import { UserEntity } from 'src/entities/user.entity';
import { ProjectEntity } from 'src/entities/project.entity';
import { ProjectService } from 'src/services/project.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProjectEntity, UserEntity]),
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1h', algorithm: 'HS256' },
    }),
  ],
  controllers: [ProjectController],
  providers: [ProjectService],
  exports: [TypeOrmModule],
})
export class ProjectModule {}

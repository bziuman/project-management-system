import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { MemberController } from 'src/controllers/member.controller';
import { MemberService } from 'src/services/member.service';
import { UserEntity } from 'src/entities/user.entity';
import { ProjectEntity } from 'src/entities/project.entity';
import { MemberEntity } from 'src/entities/member.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, ProjectEntity, MemberEntity]),
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1h', algorithm: 'HS256' },
    }),
  ],
  controllers: [MemberController],
  providers: [MemberService],
  exports: [TypeOrmModule],
})
export class MemberModule {}

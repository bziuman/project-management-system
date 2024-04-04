import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MemberIdsDto } from 'src/dto/member-ids.dto';
import { MemberEntity } from 'src/entities/member.entity';
import { ProjectEntity } from 'src/entities/project.entity';
import { UserEntity } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    @InjectRepository(ProjectEntity)
    private projectRepository: Repository<ProjectEntity>,
    @InjectRepository(MemberEntity)
    private memberRepository: Repository<MemberEntity>,
  ) {}

  async addMember(ids: MemberIdsDto, memberId: number): Promise<object> {
    const project = await this.projectRepository.findOne({
      where: { project_id: ids.projectId },
    });
    const member = await this.userRepository.findOne({
      where: { user_id: memberId },
    });

    const newMember = await this.memberRepository.create({
      user_id: memberId,
      project_id: ids.projectId,
      user: member,
      project: project,
    });

    await this.memberRepository.save(newMember);

    return { msg: 'A new member has been successfully added to the project' };
  }

  async getMembers(ids: MemberIdsDto): Promise<object> {
    const project = await this.projectRepository.findOne({
      where: { project_id: ids.projectId },
      relations: ['members'],
    });

    return { members: project.members };
  }

  async updateMember(ids: MemberIdsDto, memberId: number): Promise<object> {
    return { msg: 'TODO' };
  }

  async deleteMember(ids: MemberIdsDto, memberId: number): Promise<object> {
    const deleteMember = await this.memberRepository.findOne({
      where: { user_id: memberId, project_id: ids.projectId },
    });

    await this.memberRepository.remove(deleteMember);

    return { msg: 'Successful deleted member' };
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { MemberIdsDto } from 'src/dto/member-ids.dto';
import { AuthGuard } from 'src/guards/auth.guard';
import { MemberService } from 'src/services/member.service';

@UseGuards(AuthGuard)
@Controller('/:userId/projects/:projectId/members')
export class MemberController {
  constructor(private memberService: MemberService) {}

  /* POST */
  @Post()
  async addMember(
    @Param() ids: MemberIdsDto,
    @Body() memberId: { id: number },
  ): Promise<object> {
    return await this.memberService.addMember(ids, memberId.id);
  }

  /* GET */
  @Get()
  async getMembers(@Param() ids: MemberIdsDto): Promise<object> {
    return await this.memberService.getMembers(ids);
  }

  /* PUT&PATCH */
  @Put()
  async updateMember(
    @Param() ids: MemberIdsDto,
    @Body() memberId: number,
  ): Promise<object> {
    return await this.memberService.updateMember(ids, memberId);
  }

  /* DELETE */
  @Delete()
  async deleteMember(
    @Param() ids: MemberIdsDto,
    @Body() memberId: { id: number },
  ): Promise<object> {
    return await this.memberService.deleteMember(ids, memberId.id);
  }
}

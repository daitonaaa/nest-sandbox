import { Controller, Get, Param, Post } from '@nestjs/common';
import { CallsService } from './calls.service';

@Controller('calls')
export class CallsController {
  constructor(private readonly callService: CallsService) {}

  @Post(':name')
  addCall(@Param('name') name: string): string[] {
    return this.callService.addCall(name);
  }

  @Get()
  getCalls(): string[] {
    return this.callService.getCalls();
  }
}

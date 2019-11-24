import { Injectable } from '@nestjs/common';

@Injectable()
export class CallsService {
  private readonly calls = [];

  addCall(callName: string): string[] {
    this.calls.push(callName);
    return this.calls;
  }

  getCalls(): string[] {
    return this.calls;
  }
}

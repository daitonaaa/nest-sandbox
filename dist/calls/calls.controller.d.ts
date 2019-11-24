import { CallsService } from './calls.service';
export declare class CallsController {
    private readonly callService;
    constructor(callService: CallsService);
    addCall(name: string): string[];
    getCalls(): string[];
}

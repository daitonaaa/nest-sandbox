"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const calls_controller_1 = require("./calls.controller");
const calls_service_1 = require("./calls.service");
const logger_middleware_1 = require("./logger.middleware");
let CallsModule = class CallsModule {
    configure(consumer) {
        consumer
            .apply(logger_middleware_1.LoggerMiddleware)
            .forRoutes(calls_controller_1.CallsController);
    }
};
CallsModule = __decorate([
    common_1.Module({
        controllers: [calls_controller_1.CallsController],
        providers: [calls_service_1.CallsService],
    })
], CallsModule);
exports.CallsModule = CallsModule;
//# sourceMappingURL=calls.module.js.map
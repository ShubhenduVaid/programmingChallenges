"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ngx_codemirror_1 = require("../../../node_modules/@nomadreservations/ngx-codemirror");
var challenge_component_1 = require("./challenge/challenge.component");
var shared_module_1 = require("../shared/shared.module");
var challenge_router_1 = require("./challenge.router");
var ChallengeModule = /** @class */ (function () {
    function ChallengeModule() {
    }
    ChallengeModule = __decorate([
        core_1.NgModule({
            imports: [
                challenge_router_1.ChallengeRouter,
                shared_module_1.SharedModule,
                ngx_codemirror_1.CodemirrorModule
            ],
            exports: [
                shared_module_1.SharedModule
            ],
            declarations: [challenge_component_1.ChallengeComponent]
        })
    ], ChallengeModule);
    return ChallengeModule;
}());
exports.ChallengeModule = ChallengeModule;
//# sourceMappingURL=challenge.module.js.map
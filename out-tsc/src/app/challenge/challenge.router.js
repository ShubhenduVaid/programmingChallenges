"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var challenge_component_1 = require("./challenge/challenge.component");
var CHALLENGE_ROUTES = [
    {
        path: '',
        component: challenge_component_1.ChallengeComponent
    }
];
exports.ChallengeRouter = router_1.RouterModule.forChild(CHALLENGE_ROUTES);
//# sourceMappingURL=challenge.router.js.map
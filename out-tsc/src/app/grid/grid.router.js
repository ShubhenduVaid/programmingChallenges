"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var grid_component_1 = require("./grid/grid.component");
var GRID_ROUTES = [
    {
        path: 'grid',
        component: grid_component_1.GridComponent
    }
];
exports.GridRouter = router_1.RouterModule.forChild(GRID_ROUTES);
//# sourceMappingURL=grid.router.js.map
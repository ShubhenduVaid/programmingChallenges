"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shared_module_1 = require("./shared.module");
describe('SharedModule', function () {
    var sharedModule;
    beforeEach(function () {
        sharedModule = new shared_module_1.SharedModule();
    });
    it('should create an instance', function () {
        expect(sharedModule).toBeTruthy();
    });
});
//# sourceMappingURL=shared.module.spec.js.map
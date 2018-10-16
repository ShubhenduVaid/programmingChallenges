"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ngx_codemirror_1 = require("@nomadreservations/ngx-codemirror");
var router_1 = require("@angular/router");
var list_1 = require("language/list");
var data = require("language");
var ChallengeComponent = /** @class */ (function () {
    function ChallengeComponent(route, _codeMirror) {
        this.route = route;
        this._codeMirror = _codeMirror;
        this.config = {
            lineNumbers: true,
            lineWrapping: true,
            tabSize: 2,
            theme: 'monokai',
            styleActiveLine: true,
            matchBrackets: true
        };
        this.language = 'gfm';
    }
    ChallengeComponent.prototype.ngOnInit = function () {
        this._id = this.route.snapshot.params.id;
        this.setEditorValue();
        this._codeMirror.instance$.subscribe(function (editor) {
            // console.log(editor.state);
        });
    };
    ChallengeComponent.prototype.setEditorValue = function () {
        for (var index = 0; index < list_1.list.length; index++) {
            if (list_1.list[index].id === this._id) {
                this.record = list_1.list[index];
                break;
            }
        }
        this.value = data[this.record.link];
    };
    ChallengeComponent = __decorate([
        core_1.Component({
            selector: 'app-challenge',
            templateUrl: './challenge.component.html',
            styleUrls: ['./challenge.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            ngx_codemirror_1.CodemirrorService])
    ], ChallengeComponent);
    return ChallengeComponent;
}());
exports.ChallengeComponent = ChallengeComponent;
//# sourceMappingURL=challenge.component.js.map
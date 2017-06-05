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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var piplates_service_1 = require("./piplates.service");
var tempfan_1 = require("./tempfan");
var PiplatesComponent = (function () {
    //tempfan: Tempfan;
    function PiplatesComponent(piplatesService, router) {
        this.piplatesService = piplatesService;
        this.router = router;
        this.pp = "";
        this.pppp = "";
        this.mostRecent = "Loading values...";
        this.tempfan = new tempfan_1.Tempfan();
    }
    PiplatesComponent.prototype.ngOnInit = function () {
        // this.piplatesService.getPiplate()
        //     .then(top => this.mostRecent = top);
        var _this = this;
        this.piplatesService.getPiplate()
            .then(function (tempfan) { return _this.tempfan = tempfan; });
        this.piplatesService.getPiplates(5)
            .then(function (pppp) { return _this.pppp = pppp; });
    };
    PiplatesComponent.prototype.caba = function (response) {
        var vv = response;
        return response.TEMP_FAN_ID;
    };
    PiplatesComponent.prototype.cb = function (innn) {
        //this.ppp = innn;
    };
    PiplatesComponent.prototype.refresh = function () {
        var _this = this;
        this.piplatesService.getPiplate()
            .then(function (tempfan) { return _this.tempfan = tempfan; });
    };
    return PiplatesComponent;
}());
PiplatesComponent = __decorate([
    core_1.Component({
        selector: 'my-piplates',
        template: "\n        <h2>My PiPlates</h2>\n        <h2>{{ mostRecent }}</h2>\n        <h2>T1: {{ tempfan.TEMP_1 }} T2: {{ tempfan.TEMP_2 }} T3: {{ tempfan.TEMP_3 }} FAN ON: {{ tempfan.FAN_ON }} T1: {{ tempfan.VOLTAGE }} GMT: {{ tempfan.GMT }}</h2><button (click)=\"refresh()\">Refresh</button>\n        <h2>{{ pppp }}</h2>\n    "
    }),
    __metadata("design:paramtypes", [piplates_service_1.PiplatesService, router_1.Router])
], PiplatesComponent);
exports.PiplatesComponent = PiplatesComponent;
//# sourceMappingURL=piplates.component.js.map
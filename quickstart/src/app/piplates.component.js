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
        this.numRows = 0;
        // mostRecent = "Loading values...";
        this.tempfan = new tempfan_1.Tempfan();
        this.tempfans = new Array();
    }
    PiplatesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.piplatesService.getPiplate()
            .then(function (tempfan) { return _this.tempfan = tempfan; });
        this.piplatesService.getPiplates(5)
            .then(function (tempfans) { return _this.tempfans = tempfans; });
    };
    PiplatesComponent.prototype.refresh = function () {
        var _this = this;
        this.piplatesService.getPiplate()
            .then(function (tempfan) { return _this.tempfan = tempfan; });
    };
    PiplatesComponent.prototype.refreshRows = function (numRows) {
        var _this = this;
        this.numRows = numRows;
        this.piplatesService.getPiplates(this.numRows)
            .then(function (tempfans) { return _this.tempfans = tempfans; });
    };
    return PiplatesComponent;
}());
PiplatesComponent = __decorate([
    core_1.Component({
        selector: 'my-piplates',
        templateUrl: './piplates.component.html',
        styleUrls: ['./heroes.component.css']
    }),
    __metadata("design:paramtypes", [piplates_service_1.PiplatesService, router_1.Router])
], PiplatesComponent);
exports.PiplatesComponent = PiplatesComponent;
//# sourceMappingURL=piplates.component.js.map
"use strict";
var Tempfan = (function () {
    function Tempfan() {
    }
    // constructor(public TEMP_FAN_ID: string, public TEMP_1: string, public TEMP_2: string, public TEMP_3: string,
    //     public FAN_ON: string, public VOLTAGE: string, public GMT: string) { }
    Tempfan.fromJson = function (json) {
        var data = JSON.parse(json);
        return data;
        // return new Tempfan(data.id, data.temp_1, data.temp_2, data.temp_3, data.fan_on,
        //     data.voltage, data.dt);
    };
    return Tempfan;
}());
exports.Tempfan = Tempfan;
//# sourceMappingURL=tempfan.js.map
export class Tempfan {
  TEMP_FAN_ID: string;
  TEMP_1: string;
  TEMP_2: string;
  TEMP_3: string;
  FAN_ON: string;
  VOLTAGE: string;
  GMT: string;

    // constructor(public TEMP_FAN_ID: string, public TEMP_1: string, public TEMP_2: string, public TEMP_3: string,
    //     public FAN_ON: string, public VOLTAGE: string, public GMT: string) { }

    public static fromJson(json: string) {
        var data = JSON.parse(json);
        return data as Tempfan;
        // return new Tempfan(data.id, data.temp_1, data.temp_2, data.temp_3, data.fan_on,
        //     data.voltage, data.dt);
    }
}

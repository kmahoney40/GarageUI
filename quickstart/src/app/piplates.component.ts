import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { PiplatesService } from './piplates.service';
import { Tempfan } from './tempfan';
         
@Component({
    selector: 'my-piplates',
    template: `
        <h2>My PiPlates</h2>
        <h2>{{ mostRecent }}</h2>
        <h2>T1: {{ tempfan.TEMP_1 }} T2: {{ tempfan.TEMP_2 }} T3: {{ tempfan.TEMP_3 }} FAN ON: {{ tempfan.FAN_ON }} T1: {{ tempfan.VOLTAGE }} GMT: {{ tempfan.GMT }}</h2><button (click)="refresh()">Refresh</button>
        <h2>{{ pppp }}</h2>
    `
})
export class PiplatesComponent implements OnInit {
    pp = "";
    pppp = "";
    mostRecent = "Loading values...";
    tempfan = new Tempfan();
    //tempfan: Tempfan;

    constructor(private piplatesService: PiplatesService, private router: Router) {}

    ngOnInit(): void {        
        // this.piplatesService.getPiplate()
        //     .then(top => this.mostRecent = top);

        this.piplatesService.getPiplate()
            .then(tempfan => this.tempfan = tempfan);

        this.piplatesService.getPiplates(5)
            .then(pppp => this.pppp = pppp);
    }

    caba(response: Tempfan): string{
        var vv = response;
        return (response as Tempfan).TEMP_FAN_ID;
    }

    cb(innn: string): void {
        //this.ppp = innn;
    }   

    refresh():void{
        this.piplatesService.getPiplate()
            .then(tempfan => this.tempfan = tempfan);
    }
}
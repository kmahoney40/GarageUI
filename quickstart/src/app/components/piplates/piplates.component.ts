import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { PiplatesService } from './../../piplates.service';
import { Tempfan } from './tempfan';
         
@Component({
    selector: 'my-piplates',
    templateUrl: './piplates.component.html',
    styleUrls: ['./../../heroes.component.css']
})
export class PiplatesComponent implements OnInit {
    pp = "";
    pppp = "";
    numRows = 0;
    // mostRecent = "Loading values...";
    tempfan = new Tempfan();
    tempfans = new Array <Tempfan>();
    //tempfan: Tempfan;

    constructor(private piplatesService: PiplatesService, private router: Router) {}

    ngOnInit(): void {        
        this.piplatesService.getPiplate()
            .then(tempfan => this.tempfan = tempfan);

        this.piplatesService.getPiplates(5)
            .then(tempfans => this.tempfans = tempfans);
    }

    refresh(): void {
        this.piplatesService.getPiplate()
            .then(tempfan => this.tempfan = tempfan);
    }

    refreshRows(numRows: number): void {
        this.numRows = numRows;

        this.piplatesService.getPiplates(this.numRows)
            .then(tempfans => this.tempfans = tempfans);
    }

    toggleDoor(): void {
        //this.refresh();
         this.piplatesService.toggleDoor()
             .then();
    }
}
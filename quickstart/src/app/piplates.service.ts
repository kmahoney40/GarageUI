import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Tempfan } from './tempfan';

@Injectable()
export class PiplatesService {
    private piplatesUrl = 'http://localhost:51034/api/piplates';  // URL to web api
    private headers = new Headers({'Content-Type': 'application/json'});
    constructor(private http: Http) { }

    getPiplate(): Promise<Tempfan> {
        return this.http.get(this.piplatesUrl)
            .toPromise()
            .then(
                response => JSON.parse(response.json()) as Tempfan
                //response => Tempfan.fromJson(response.json())
            )

            //.then(response => response.json() as Tempfan)
            //.then(response => response.json() as TempFan)
            .catch(this.handleError);
    }

    getPiplates(numRows: number): Promise<string>{
        const url = `${this.piplatesUrl}/toprows/?rows=${numRows}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }   

}



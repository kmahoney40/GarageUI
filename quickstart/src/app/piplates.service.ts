import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Tempfan } from './components/piplates/tempfan';

@Injectable()

export class PiplatesService {
    //private piplatesUrl = 'http://localhost:51034/api/piplates';  // URL to web api
    private piplatesUrl = 'http://192.168.0.3:82/api/piplates';  // URL to web api
    //private doorUrl = 'http://localhost:51034/api/piplates';
    private doorUrl = 'http://192.168.0.3:82/api/piplates';
    private headers = new Headers({'Content-Type': 'application/json'});
    constructor(private http: Http) { }

    getPiplate(): Promise<Tempfan> {
        return this.http.get(this.piplatesUrl)
            .toPromise()
            .then(
                response => JSON.parse(response.json()) as Tempfan
            )
            .catch(this.handleError);
    }

    getPiplates(numRows: number): Promise<Tempfan[]>{
        const url = `${this.piplatesUrl}/toprows/?rows=${numRows}`;
        return this.http.get(url)
            .toPromise()
            //.then(response => response.json())
            .then(
                response => JSON.parse(response.json()) as Tempfan[]
            )
            .catch(this.handleError);
    }

    toggleDoor(): Promise<string>{
        const url = `${this.piplatesUrl}/door`;
        const my_headers = new Headers({'Content-Type': 'text;charset=utf-8;'});

        let body = "true";
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('http://localhost:51034/api/door', body, options)
            .toPromise()
            .then(response => "woot");
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }   
   
}



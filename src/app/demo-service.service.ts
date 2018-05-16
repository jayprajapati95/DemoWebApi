import { DemoInterface } from './demo-interface';
import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

@Injectable()
export class DemoServiceService {
  apiUrl = 'https://api.openaq.org/v1/cities';
  Cities: Array<any> = [];
  constructor(private _http: Http) {
    this._http.get(this.apiUrl)
    .subscribe(response => {
      this.Cities = response.json();
      console.log(response.json());
    });
  }

  getPosts(): Observable<DemoInterface[]> {
    return this._http
        .get(this.apiUrl)
        .map((response: Response) => {
            return <DemoInterface[]>response.json();
        });
}

}

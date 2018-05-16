import { DemoServiceService } from './../demo-service.service';
import { DemoInterface } from './../demo-interface';
import { Http, Response} from '@angular/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-demo-map-air-pollution-map',
  templateUrl: './demo-map-air-pollution-map.component.html',
  styleUrls: ['./demo-map-air-pollution-map.component.css'],
})

export class DemoMapAirPollutionMapComponent {
  _CitiesArray: DemoInterface[];

  constructor(private DemoService: DemoServiceService) { }
  // tslint:disable-next-line:no-trailing-whitespace
  
     getPosts(): void {
         this.DemoService.getPosts()
             .subscribe(
                 resultArray => this._CitiesArray = resultArray,
                 error => console.log('Error :: ' + error)
             );
     }
 // tslint:disable-next-line:no-trailing-whitespace
 
     // tslint:disable-next-line:use-life-cycle-interface
     ngOnInit(): void {
         this.getPosts();
     }
}

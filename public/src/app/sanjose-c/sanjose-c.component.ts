import { Component, OnInit } from '@angular/core';
import { HttpService } from '../wetherapi/http.service';

@Component({
  selector: 'app-sanjose-c',
  templateUrl: './sanjose-c.component.html',
  styleUrls: ['./sanjose-c.component.css']
})
export class SanjoseCComponent implements OnInit {

  constructor(private _httpService: HttpService) {

  }

  ngOnInit(): void {
  }

  wether: any = {};
  getWetherSanjose():void{
    this._httpService.requestWetherSanjose()
    .subscribe((data:any)=>{
      this.wether = data;
      console.log("Time by API San Francisco", this.wether);
    });
  }

}

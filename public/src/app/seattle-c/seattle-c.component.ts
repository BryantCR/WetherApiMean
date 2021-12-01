import { Component, OnInit } from '@angular/core';
import { HttpService } from '../wetherapi/http.service';


@Component({
  selector: 'app-seattle-c',
  templateUrl: './seattle-c.component.html',
  styleUrls: ['./seattle-c.component.css']
})
export class SeattleCComponent implements OnInit {
  flag: boolean = false;
  cityInfoSeattle: any = {};

  constructor(private _httpService: HttpService) {

  }

  ngOnInit(): void {
    this.getWetherSeattle();
  }

  getWetherSeattle():void{
    this._httpService.requestWetherSeattle()
    .subscribe((data:any)=>{
      this.cityInfoSeattle = data;
      console.log("Time by API Seattle", this.cityInfoSeattle);
    });
  }

}

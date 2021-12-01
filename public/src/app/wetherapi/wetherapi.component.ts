import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { SeattleCComponent } from './../seattle-c/seattle-c.component';

@Component({
  selector: 'app-wetherapi',
  templateUrl: './wetherapi.component.html',
  styleUrls: ['./wetherapi.component.css']
})
export class WetherapiComponent implements OnInit {

  constructor(private _httpService: HttpService){
    
  }

  ngOnInit(): void {
  }
  
  /*
  cityInfoSeattle: any[] = [];
  getWetherSeattle():void{
    this._httpService.requestWetherSeattle()
    .subscribe((data:any)=>{
      this.cityInfoSeattle = data;
      console.log("Time by API Seattle", this.cityInfoSeattle);
    });
  }

  cityInfoSanJose: any[] = [];
  getWetherSanJose():void{
    this._httpService.requestWetherSanjose()
    .subscribe((data:any)=>{
      this.cityInfoSanJose = data;
      console.log("Time by API Seattle", this.cityInfoSanJose);
    });
  }

  cityInfoWashington: any[] = [];
  getWetherWashington():void{
    this._httpService.requestWetherWashington()
    .subscribe((data:any)=>{
      this.cityInfoWashington = data;
      console.log("Time by API Washington", this.cityInfoWashington);
    });
  }

  cityInfoDallas: any[] = [];
  getWetherDallas():void{
    this._httpService.requestWetherDallas()
    .subscribe((data:any)=>{
      this.cityInfoDallas = data;
      console.log("Time by API Seattle", this.cityInfoDallas);
    });
  }

  cityInfoChicago: any[] = [];
  getWetherChicago():void{
    this._httpService.requestWetherChicago()
    .subscribe((data:any)=>{
      this.cityInfoChicago = data;
      console.log("Time by API Seattle", this.cityInfoChicago);
    });
  }

  cityInfoBurbank: any[] = [];
  getWetherBurbank():void{
    this._httpService.requestWetherBurbank()
    .subscribe((data:any)=>{
      this.cityInfoBurbank = data;
      console.log("Time by API Seattle", this.cityInfoBurbank);
    });
  }
  */

}

import { Component, OnInit } from '@angular/core';
import { HttpService } from '../wetherapi/http.service';

@Component({
  selector: 'app-washington-c',
  templateUrl: './washington-c.component.html',
  styleUrls: ['./washington-c.component.css']
})
export class WashingtonCComponent implements OnInit {

  constructor(private _httpService: HttpService) {
    
  }

  ngOnInit(): void {
  }

  cityInfoWashington: any = {};
  getWetherWashington():void{
    this._httpService.requestWetherWashington()
    .subscribe((data:any)=>{
      this.cityInfoWashington = data;
      console.log("Time by API Washington", this.cityInfoWashington);
    });
  }

}

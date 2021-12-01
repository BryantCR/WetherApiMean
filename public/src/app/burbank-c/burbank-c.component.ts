import { Component, OnInit } from '@angular/core';
import { HttpService } from '../wetherapi/http.service';

@Component({
  selector: 'app-burbank-c',
  templateUrl: './burbank-c.component.html',
  styleUrls: ['./burbank-c.component.css']
})
export class BurbankCComponent implements OnInit {

  constructor(private _httpService: HttpService) { 
    
  }

  ngOnInit(): void {
    this.getWetherWashington();
  }

  wether: any = {};
  getWetherWashington():void{
    this._httpService.requestWetherWashington()
    .subscribe((data:any)=>{
      this.wether = data;
      console.log("Time by API Burbank", this.wether);
    });
  }

}

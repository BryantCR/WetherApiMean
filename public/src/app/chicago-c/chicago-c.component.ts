import { Component, OnInit } from '@angular/core';
import { HttpService } from '../wetherapi/http.service';

@Component({
  selector: 'app-chicago-c',
  templateUrl: './chicago-c.component.html',
  styleUrls: ['./chicago-c.component.css']
})
export class ChicagoCComponent implements OnInit {

  constructor(private _httpService: HttpService) { 
    
  }

  ngOnInit(): void {
  }

  wether: any = {};
  getWetherChicago():void{
    this._httpService.requestWetherChicago()
    .subscribe((data:any)=>{
      this.wether = data;
      console.log("Time by API Chicago", this.wether);
    });
  }

}

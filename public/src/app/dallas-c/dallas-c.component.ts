import { Component, OnInit } from '@angular/core';
import { HttpService } from '../wetherapi/http.service';

@Component({
  selector: 'app-dallas-c',
  templateUrl: './dallas-c.component.html',
  styleUrls: ['./dallas-c.component.css']
})
export class DallasCComponent implements OnInit {

  constructor(private _httpService: HttpService) { 
    
  }

  ngOnInit(): void {
    this.getWetherDallas();
  }

  wether: any = {};
  getWetherDallas():void{
    this._httpService.requestWetherDallas()
    .subscribe((data:any)=>{
      this.wether = data;
      console.log("Time by API Seattle", this.wether);
    });
  }

}

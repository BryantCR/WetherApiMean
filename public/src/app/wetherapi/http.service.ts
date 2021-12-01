import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 

  }

  requestWetherSeattle(){
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=seattle&appid=cf2afc9d3eb1ff2bce9b6b1e42297641');
  }

  requestWetherSanjose(){
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=sanfrancisco&appid=cf2afc9d3eb1ff2bce9b6b1e42297641');
  }

  requestWetherBurbank(){
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=burbank&appid=cf2afc9d3eb1ff2bce9b6b1e42297641');
  }

  requestWetherDallas(){
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=cf2afc9d3eb1ff2bce9b6b1e42297641');
  }

  requestWetherWashington(){
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=washington&appid=cf2afc9d3eb1ff2bce9b6b1e42297641');
  }

  requestWetherChicago(){
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=chicago&appid=cf2afc9d3eb1ff2bce9b6b1e42297641');
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private api = 'https://api.openweathermap.org/data/2.5/'
  private key = '2b772b43bc42c5c9460f93881eefd515'
  constructor(private httpClient: HttpClient) { }

  public getCurrentWeather(lat,lng){
    return this.httpClient.get(this.api + 'onecall?lat=' + lat + '&lon=' + lng + '&exclude=current&appid=' + this.key)
  }
  

}

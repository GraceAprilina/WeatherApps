import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-next-day-weather',
  templateUrl: './next-day-weather.component.html',
  styleUrls: ['./next-day-weather.component.scss']
})
export class NextDayWeatherComponent implements OnInit {
@Input() data:any

  panelOpenState = false;
  img
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    if(this.data)
    console.log(this.data)
    
    this.data.forEach(val => {

    val.temp.day = this.KelCel(val.temp.day)
    val.temp.eve = this.KelCel(val.temp.eve)
    val.temp.morn = this.KelCel(val.temp.morn)
    val.temp.night = this.KelCel(val.temp.night)
    
    val.feels_like.day = this.KelCel(val.feels_like.day)
    val.feels_like.eve = this.KelCel(val.feels_like.eve)
    val.feels_like.morn = this.KelCel(val.feels_like.morn)
    val.feels_like.night = this.KelCel(val.feels_like.night)

    this.img = 'http://openweathermap.org/img/wn/' + val.weather[0].icon + '.png'
    
    });
  }

  public KelCel(val){
    let res = val - 273.15
    return res.toString().substr(0,2)
  }
}

import { Component, OnInit , ViewChild, ElementRef, NgZone} from '@angular/core';
import { MapsAPILoader } from '@agm/core';

import {WeatherService} from '../service/weather.service'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  title: string = 'AGM project';
  latitude: number;
  longitude: number;
  zoom:number;

  address: string;
  private geoCoder;
  @ViewChild('search')
  public searchElementRef: ElementRef;

  public dataCuaca:any
  jam
  suhu
  cuaca
  idicon
  atmosphere

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private weatherService : WeatherService) { }

  ngOnInit(): void {
    this.ngAfterViewInit()
  }

  ngAfterViewInit(){
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;
      console.log(this.searchElementRef.nativeElement)

      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            alert("Address Not Found")
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
          this.getAddress(this.latitude, this.longitude); 
          this.getCurrentWeather(this.latitude, this.longitude)
        });
      });
    });
}

  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position)
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 15;
        this.getCurrentWeather(this.latitude, this.longitude)
        this.getAddress(this.latitude, this.longitude)
      });
    }
  }


  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      // console.log(results);
      // console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
          localStorage.setItem('lat', latitude.toString())
          localStorage.setItem('lng', longitude.toString())
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  }

  getCurrentWeather(lat, lng){
    this.weatherService.getCurrentWeather(lat, lng).subscribe((data: any[])=>{
      console.log(data)
      let datanya:any = data
      this.dataCuaca = datanya.daily
      console.log(this.dataCuaca)
      this.jam = datanya.hourly[0].dt * 1000

      let hasilsuhu = datanya.hourly[0].temp - 273.15
      this.suhu = hasilsuhu.toString().substr(0,2)

      let hasilatm = datanya.hourly[0].dew_point - 273.15
      this.atmosphere = hasilatm.toString().substr(0,2)

      this.cuaca = datanya.hourly[0].weather[0].description
      this.idicon = datanya.hourly[0].weather[0].icon

        // this.weatherService.getIconHuge(idicon).subscribe((dataicon:any[])=>{
        //   console.log(dataicon)
        // })
    })
  }

}

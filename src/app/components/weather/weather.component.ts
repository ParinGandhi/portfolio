import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

import { URL } from '../../utilities/constants/URL';
import { APP_CONSTANTS } from '../../utilities/constants/APP_CONSTANTS';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  cityName: string;
  temp: number;
  weather: string;
  weatherLoaded = false;
  weatherIcon: string;

  constructor(
    private http: HttpService
  ) { }

  ngOnInit() {
    this.http.getWeather().subscribe(weatherInfo => {
      this.cityName = weatherInfo.name;
      this.temp = Math.floor(weatherInfo.main.temp);
      this.weather = weatherInfo.weather[0].main;
      this.weatherIcon = URL.WEATHER_ICON + weatherInfo.weather[0].icon + APP_CONSTANTS.ICON_EXTENTION;
      this.weatherLoaded = true;
    });
  }

}

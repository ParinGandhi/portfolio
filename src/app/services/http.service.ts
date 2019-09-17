import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL } from '../utilities/constants/URL';
import { APP_CONSTANTS } from '../utilities/constants/APP_CONSTANTS';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }



  getWeather(): Observable<any> {
    return this.http.get<any[]>(URL.WEATHER_API + APP_CONSTANTS.WEATHER_API_KEY);
  }

  getQuotes(): Observable<any> {
    return this.http.get<any[]>(URL.QUOTES_API);
  }
}

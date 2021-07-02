import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RegisterRider } from '../models/RegisterRider';
import { Rider } from '../models/Riders';

@Injectable({
  providedIn: 'root',
})
export class RidersService {
  apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) {}

  /**
   * Returns an array of riders
   * @param Riders
   */
  getRidersLis() {
    return this.http.get<Rider[]>(this.apiUrl + 'riders_list');
  }

  /**
   * post new riders
   * @param Riders
   */

  registerNewRider(newRider: any) {
     console.log(newRider);
    return this.http.post(environment.apiUrl + 'register_new_team', newRider);
  }
}

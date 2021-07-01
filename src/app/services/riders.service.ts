import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RidersService {
  apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) {}

  /**
   * Returns an array of riders
   * @param quotes
   */
  getRidersLis() {}

  /**
   * post new riders
   * @param quotes
   */

  InsertNewRiders() {}
}

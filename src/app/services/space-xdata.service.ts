import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SpaceXDataService {
  readonly rootUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  searchShips(year: string, launch: string, landing: string) {
    let filters = '';

    if (year) {
      filters += `&launch_year=${year}`;
    }

    if (launch) {
      filters += `&launch_success=${launch}`;
    }

    if (landing) {
      filters += `&land_success=${landing}`;
    }

    return this.http.get(this.rootUrl + filters);
  }
}

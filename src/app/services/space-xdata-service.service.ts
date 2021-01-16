import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpaceXDataService {

  readonly rootUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  searchShips() {
    return this.http.get(this.rootUrl);
  }

}

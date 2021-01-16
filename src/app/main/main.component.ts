import { Component } from '@angular/core';
import { SpaceXDataService } from '../services/space-xdata.service';
import { SpaceXObject } from '../models/models';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  year: string;
  launch: string;
  landing: string;
  shipsData: SpaceXObject[];

  constructor(private spaceXDataService: SpaceXDataService) {
    this.search();
  }

  yearClick(year: string) {
    this.year = year;
    this.search();
  }

  launchSuccessClick(launchFlag: string) {
    this.launch = launchFlag;
    this.search();
  }

  landingSuccessClick(landingFlag: string) {
    this.landing = landingFlag;
    this.search();
  }

  search() {
    this.spaceXDataService
      .searchShips(this.year, this.launch, this.landing)
      .subscribe((response: SpaceXObject[]) => {
        this.shipsData = response;
      });
  }
}

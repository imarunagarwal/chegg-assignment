import { Component } from '@angular/core';
import { SpaceXDataService } from './services/space-xdata-service.service';
import { RootObject } from './models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  yearFilter: number;
  launchFilter: boolean;
  landingFilter: boolean;

  constructor(private spaceXDataService: SpaceXDataService) { }

  search() {
    console.log(this.yearFilter);
    console.log(this.launchFilter);
    console.log(this.landingFilter);
    this.spaceXDataService.searchShips().subscribe((response: RootObject[]) => {
      response.map(
        data => {
          console.log(data.mission_id);
          console.log(data.launch_year);
          console.log(data.launch_success);
          console.log(data.rocket.first_stage.cores.map(coreData => {
            console.log(coreData.land_success);
          }));
        }
      );
    })
  }
}


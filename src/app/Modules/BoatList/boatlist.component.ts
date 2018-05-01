import { Component } from '@angular/core';

import { Boat, DispatchTime } from '../../ViewModels/Boat';
import { BOATS } from '../../ViewModels/StaticData';
import { DISPATCHTIMES } from '../../ViewModels/StaticData';

@Component({
  selector: 'app-boat-list',
  templateUrl: './boatlist.component.html',
  styleUrls: ['./boatlist.component.scss']
})
export class BoatListComponent {
  title = 'app';
  boatList = BOATS;
  dispatchTimes = DISPATCHTIMES;
  selectedBoat = null;
  selectedDate = Date.now();
  selectedDispatch = null;

  shouldDisplayDispatchView = false;
  shouldDisplayDateSelection = false;
  shouldDisplayDispatchSelection = false;

  boatChanged(value) {
    if (value === null || value === undefined) {
      this.shouldDisplayDateSelection = false;
      this.shouldDisplayDispatchSelection = false;
      this.shouldDisplayDispatchView = false;
      this.selectedBoat = null;
      this.selectedDate = null;
      this.selectedDispatch = null;

      return;
    }

    this.selectedBoat = BOATS.find(x => x.id === value);
    this.shouldDisplayDateSelection = true;
    this.shouldDisplayDispatchSelection = false;
    this.shouldDisplayDispatchView = false;
  }

  dateChanged(value) {
    this.selectedDate = value;
    this.selectedDispatch = null;
    this.shouldDisplayDispatchSelection = true;
    this.shouldDisplayDispatchView = false;
  }

  dispatchTimeChanged(value) {
    if (value === null || value === undefined) {
      return ;
    }

    this.selectedDispatch = DISPATCHTIMES.find(x => x.id === Number(value));
    this.shouldDisplayDispatchView = true;

    // query and display boat list for selected paramerters

    // if no boat found, ask to user to create new dispatch
  }
}

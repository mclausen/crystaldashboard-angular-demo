import { Component, Input, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';

import { BoatListService } from '../boatlist.service';
import { Boat, DispatchTime, BoatList } from '../../../ViewModels/Boat';

@Component({
  selector: 'app-boatdispatch',
  templateUrl: './boatdispatch.component.html',
  styleUrls: ['./boatdispatch.component.scss']
})
export class BoatDispatchComponent implements OnInit {
  boatListService: BoatListService;

  constructor(boatListService: BoatListService) {
    this.boatListService = boatListService;
  }

  @Input() disptchTime: DispatchTime;
  @Input() date: Date;
  @Input() boat: Boat;

  boatList: BoatList = null;

  shouldDisplayCustomDispatchTime: Boolean = false;
  shouldDisplayCreateNewDispatchButton: Boolean = false;

  ngOnInit() {
    this.boatListService.findDispatch(this.boat, this.date, this.disptchTime)
      .then(r => {
          if (r !== undefined) {
            this.boatList = r;
            this.shouldDisplayCreateNewDispatchButton = false;
          } else {
            this.shouldDisplayCreateNewDispatchButton = true;
          }

          this.displayCustomDispatchTime();
        });
  }


  displayCustomDispatchTime() {
    if (
      (this.disptchTime !== null || this.disptchTime !== undefined)
      && this.disptchTime.id === 4) {
        this.shouldDisplayCustomDispatchTime = true;
    } else {
        this.shouldDisplayCustomDispatchTime = false;
    }
  }
}

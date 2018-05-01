import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Boat } from '../../ViewModels/Boat';
import { BoatList } from '../../ViewModels/Boat';
import { DispatchTime } from '../../ViewModels/Boat';

@Injectable()
export class BoatListService {

  boatList: BoatList[] = [];
  constructor() { }

  async createDispatch(boat: Boat, date: Date, dispatchTime: DispatchTime): Promise<BoatList> {
    // Substitute with http call
    return new Promise<BoatList>((complete, reject) => {
        setTimeout(() => {
            complete(new BoatList(boat, dispatchTime, date));
          }, 1000);
    });
  }

  async findDispatch(boat: Boat, date: Date, dispatchTime: DispatchTime): Promise<BoatList> {
    // substitute with http call
    return new Promise<BoatList>((complete, reject) => {
        setTimeout(() => {

            // Potentiel error, use more rigid query to get correct dispatches during custom dispatchtime scenario
            complete(
              this.boatList.find(
                x => x.boat.id === boat.id
                && x.date === date
                && x.dispatch.id === dispatchTime.id)
              );
          }, 1000);
    });
  }
}

import { Time } from '@angular/common';

export class Boat {
    id: String;
    name: String;
    capacity: Capacity;

    constructor(id: String, name: String) {
        this.id = id;
        this.name = name;
    }
}

export class Capacity {
    numberOfTanks: Number;
    reserveTanks: Number;
}

export class BoatList {
    dispatch: DispatchTime;
    boat: Boat;
    date: Date;

    constructor(boat: Boat, dispatchTime: DispatchTime, date: Date) {
        this.boat = boat;
        this.date = date;
        this.dispatch = dispatchTime;
    }
}

export class DispatchTime {
    id: Number;
    date: Date;
    dispatchTime: Time;
    expectedReturnTime: Time;
    displayTitle: string;

    constructor(
        id: Number,
        dispatchTime: Time,
        expectedReturnTime: Time,
        displayTitle: string) {

            this.id = id;
            this.dispatchTime = dispatchTime;
            this.expectedReturnTime = expectedReturnTime;
            this.dispatchTime = dispatchTime;
            this.displayTitle = displayTitle;
        }

        SetDate(date: Date) {
            this.date = date;
        }
}

export class Customer {
    id: String;
    displayName: String;
    displayCertLevel: String;
    profilePictureUrl: String;
}

export class DispatchCustomerEntry {
    customer: Customer;
    equiptment: CustomerEquiptment;
}

export class CustomerEquiptment {
    hasRequlator: Boolean;
    hasBag: Boolean;
    hasBcd: Boolean;
    hasMask: Boolean;
}

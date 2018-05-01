import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BoatListService } from './boatlist.service';

import { BoatListComponent } from './boatlist.component';
import { BoatDispatchComponent } from './Dispatch/boatdispatch.component';

@NgModule({
    declarations: [
        BoatListComponent,
        BoatDispatchComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [
        BoatListService
    ],
    exports: [
        BoatListComponent,
        BoatDispatchComponent
    ]
})
export class BoatListModule { }

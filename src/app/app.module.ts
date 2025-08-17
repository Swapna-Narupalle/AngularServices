import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CompAComponent } from './comp-a/comp-a.component';
import {CarService} from './car.service';
import {HydCarService} from './HydCar.service';
import { CompBComponent } from './comp-b/comp-b.component';
import { CompCComponent } from './comp-c/comp-c.component';

@NgModule({
  declarations: [
    AppComponent,
    CompAComponent,
    CompBComponent,
    CompCComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CarService, HydCarService],
  bootstrap: [AppComponent]
})
export class AppModule { }

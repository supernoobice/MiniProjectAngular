import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { WelcomeComponentComponent } from "./welcome-component/welcome-component.component";
import { CarListComponent } from "./car-list/car-list.component";
import { CarItemComponent } from "./car-item/car-item.component";
import { CarService } from "./car.service";
import { CarDetailComponent } from './car-detail/car-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponentComponent,
    CarListComponent,
    CarItemComponent,
    CarDetailComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule {}

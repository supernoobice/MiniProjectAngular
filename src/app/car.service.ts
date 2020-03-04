import { Injectable } from "@angular/core";
import { Car } from "./car";
import { CARS } from "./mock-cars";

@Injectable({
  providedIn: "root"
})
export class CarService {
  constructor() {}

  printConsole(): void {
    console.log("Print Console");
  }

  getCars(): Car[] {
    return CARS;
  }

  getCarById(id: number): any {
    for (var i = 0; i < CARS.length; i++) {
      if (CARS[i].id == id) {
        return CARS[i];
      }
    }
    return false;
  }
}

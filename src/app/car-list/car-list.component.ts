import { Component, OnInit } from "@angular/core";
import { CarService } from "../car.service";
import { Car } from "../car";

@Component({
  selector: "app-car-list",
  templateUrl: "./car-list.component.html",
  styleUrls: ["./car-list.component.css"]
})
export class CarListComponent implements OnInit {
  cars: Car[] = [];
  constructor(private carService: CarService) {}

  getCars(): void {
    this.cars = this.carService.getCars();
  }

  ngOnInit(): void {
    this.getCars();
  }
}

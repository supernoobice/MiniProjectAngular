import { Component, OnInit } from "@angular/core";
import { CarService } from "../car.service";
import { ActivatedRoute } from "@angular/router";
import { Car } from "../car";

@Component({
  selector: "app-car-detail",
  templateUrl: "./car-detail.component.html",
  styleUrls: ["./car-detail.component.css"]
})
export class CarDetailComponent implements OnInit {
  public id: number;
  public car: Car;
  constructor(private carService: CarService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get("id"));
    this.car = this.carService.getCarById(this.id);
    console.log(this.car);
  }
}

import { Component, OnInit, Input } from "@angular/core";

import { Car } from "../car";

@Component({
  selector: "app-car-item",
  templateUrl: "./car-item.component.html",
  styleUrls: ["./car-item.component.css"]
})
export class CarItemComponent implements OnInit {
  constructor() {}

  @Input() car: Car;

  ngOnInit(): void {}
}

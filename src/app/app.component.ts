import { Component, OnInit } from '@angular/core';

import { Vehicle } from './shared/vehicle';
import { VehicleService } from './shared/vehicle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [VehicleService]
})
export class AppComponent implements OnInit {
  title = 'app works!';
  vehicles: Vehicle[];

  constructor(private vehicleService: VehicleService) { }

  getVehicles(): void {
    this.vehicleService.getVehicles().then(vehicles => this.vehicles = vehicles);
  }

  ngOnInit(): void {
    this.getVehicles();
  }
}

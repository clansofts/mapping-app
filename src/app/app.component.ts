import { Component, OnInit } from '@angular/core';

import * as L from 'leaflet';

import { Vehicle } from './shared/vehicle';
import { VehicleService } from './shared/vehicle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [VehicleService]
})
export class AppComponent implements OnInit {
  vehicles: Vehicle[];
  map: any;

  constructor(private vehicleService: VehicleService) { }

  getVehicles(): void {
    this.vehicleService.getVehicles().then(vehicles => {
      this.vehicles = vehicles;
      this.drawVehicles();
    });
  }

  drawVehicles(): void {
    this.vehicles.forEach(vehicle => {
      L.marker([vehicle.latitude, vehicle.longitude]).addTo(this.map).bindPopup(`vehicle {$vehicle.vehicleid}`);
    });
  }

  ngOnInit(): void {
    this.getVehicles();

    this.map = L.map('map').setView([50.5, 10], 7);

    L.tileLayer('http://{s}.{base}.maps.cit.api.here.com/maptile/2.1/{type}/{mapID}/{scheme}/{z}/{x}/{y}/{size}/{format}?app_id={app_id}&app_code={app_code}&lg={language}', {
      attribution: 'Map &copy; 2016 <a href="http://developer.here.com">HERE</a>',
      subdomains: '1234',
      base: 'base',
      type: 'maptile',
      scheme: 'normal.day',
      app_id: 'bh019fqesTaYVcgxh3ZQ',
      app_code: '_r2gguDrt9OEaSkV3ktRmg',
      mapID: 'newest',
      maxZoom: 20,
      language: 'eng',
      format: 'png8',
      size: '256'
    }).addTo(this.map);
  }
}

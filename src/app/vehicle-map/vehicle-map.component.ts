import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { Map, TileLayer, Marker } from 'leaflet';

import { Vehicle } from '../shared/vehicle';

@Component({
  selector: 'app-vehicle-map',
  templateUrl: './vehicle-map.component.html',
  styleUrls: ['./vehicle-map.component.scss']
})
export class VehicleMapComponent implements OnInit, OnChanges {
  @Input() vehicles: Vehicle[];
  map: Map;
  markers: Marker[];

  constructor() { }

  removeVehicles(): void {
    this.markers.forEach(marker => {
      this.map.removeLayer(marker);
    });
  }

  drawVehicles(): void {
    this.vehicles.forEach(vehicle => {
      const marker = new Marker([vehicle.latitude, vehicle.longitude]).addTo(this.map).bindPopup(`vehicle ${vehicle.vehicleId}`);
      this.markers.push(marker);
    });
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    const changedVehicles = changes['vehicles'];
    if (changedVehicles && changedVehicles.currentValue) {
      this.removeVehicles();
      this.drawVehicles();
    }
  }

  ngOnInit() {
    this.markers = new Array<Marker>();
    this.map = new Map('map').setView([50.5, 10], 7);

    new TileLayer('http://{s}.{base}.maps.cit.api.here.com/maptile/2.1/{type}/{mapID}/{scheme}/{z}/{x}/{y}/{size}/{format}?app_id={app_id}&app_code={app_code}&lg={language}', {
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

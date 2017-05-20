import { Injectable } from '@angular/core';

import { Vehicle } from './vehicle';
import { VEHICLES } from './mock-vehicles';

@Injectable()
export class VehicleService {

  constructor() { }

  getVehicles(): Promise<Vehicle[]> {
    // return new Promise(resolve => {
    //   setTimeout(() => resolve(VEHICLES), 2000);
    // });
    return Promise.resolve(VEHICLES);
  }
}

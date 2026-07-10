import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ShipmentData } from '../../models/shipment.model';

@Injectable({
  providedIn: 'root',
})
export class ShipmentService {
  //using behaviorsubject
  private shimentdata = new BehaviorSubject<ShipmentData[]> ([]);
  shipmentStreams$ = this.shimentdata.asObservable()

  addShipment(s:ShipmentData){
    const current = this.shimentdata.value; //read the current array (old array in a list)
    this.shimentdata.next([...current,s]);  // append old + new one
  }

  // using signals

  private shipmentSignal = signal<ShipmentData[]>([]);
  shipmentSignalStream = this.shipmentSignal.asReadonly()

  addShipmentSignal(s:ShipmentData){
    this.shipmentSignal.update(list => [...list,s]);
  }
}

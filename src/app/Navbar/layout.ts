import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ShipmentForm } from '../Shipments/shipment-form/shipment-form';
import { ShipmentData } from '../models/shipment.model';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [FormsModule, ShipmentForm,RouterLink,RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
    total: number = 0;
    pending: number = 0;
    delivered: number = 0;
    cancel: number = 0;
  
    updateCards(data: ShipmentData) {
      this.total++;
      if (data.status === 'pending') this.pending++;
      else if (data.status === 'delivered') this.delivered++;
      else this.cancel++;
    }
}

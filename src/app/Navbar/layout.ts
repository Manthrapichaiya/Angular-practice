import { Component } from '@angular/core';
import { Dashboard } from '../Shipments/Statcards-value/dashboard';
import { FormsModule } from '@angular/forms';
import { StatCard } from '../Shipments/Dashboard-cards/stat-card';
import { ShipmentForm } from '../Shipments/shipment-form/shipment-form';
import { ShipmentData } from '../models/shipment.model';

@Component({
  selector: 'app-layout',
  imports: [FormsModule, StatCard, ShipmentForm],
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

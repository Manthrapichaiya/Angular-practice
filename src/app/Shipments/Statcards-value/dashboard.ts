import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StatCard } from '../Dashboard-cards/stat-card';
import { ShipmentForm } from '../shipment-form/shipment-form';
import { ShipmentData  } from '../../models/shipment.model';

@Component({
  selector: 'app-dashboard',
  imports: [FormsModule, StatCard, ShipmentForm],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

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

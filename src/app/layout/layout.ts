import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Dashboard } from './dashboard/dashboard';
import { FormsModule } from '@angular/forms';
import { StatCard } from '../stat-card/stat-card';
import { ShipmentForm } from '../shipment-form/shipment-form';
import { ShipmentData } from '../models/shipment.model';

@Component({
  selector: 'app-layout',
  imports: [FormsModule, Navbar, StatCard, ShipmentForm],
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

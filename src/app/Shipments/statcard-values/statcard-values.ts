import { Component } from '@angular/core';
import { ShipmentData } from '../../models/shipment.model';
import { ShipmentForm } from '../shipment-form/shipment-form';
import { RouterLink, RouterOutlet } from '@angular/router';
import { StatCard } from '../Dashboard-cards/stat-card';

@Component({
  selector: 'app-statcard-values',
  imports: [ShipmentForm,RouterOutlet, RouterLink,StatCard],
  templateUrl: './statcard-values.html',
  styleUrl: './statcard-values.css',
})
export class StatcardValues {
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

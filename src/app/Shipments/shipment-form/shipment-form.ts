import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShipmentData } from '../../models/shipment.model';

@Component({
  selector: 'app-shipment-form',
  imports: [FormsModule],
  templateUrl: './shipment-form.html',
  styleUrl: './shipment-form.css',
})
export class ShipmentForm {
  @Output() formsubmitted = new EventEmitter<ShipmentData>();
  isDisabled: boolean = true;
  customer_name: string = '';
  status: string = '';
  checkForm() {
    this.isDisabled = this.customer_name === '' || this.status === '';
  }
  onSubmit() {
    this.formsubmitted.emit(
      {
        customer: this.customer_name,
        status: this.status as 'pending' | 'delivered' | 'cancelled'
      });
    this.customer_name = '';
    this.status = '';
    this.checkForm();
  }
}

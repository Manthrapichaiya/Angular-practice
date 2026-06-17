import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Navbar } from '../layout/navbar/navbar';
import { CustomerList } from '../customer-list/customer-list';
import { ShipmentData  } from '../models/shipment.model';

@Component({
  selector: 'app-shipment',
  imports: [CommonModule,Navbar,CustomerList],
  templateUrl: './shipment.html',
  styleUrl: './shipment.css',
})
export class Shipment {
    shipments : ShipmentData [] = [
    { customer : 'Manthra', status : 'delivered'},
    { customer : 'Kumar', status : 'pending'},
    { customer : 'Athvik', status : 'cancelled'},
    
  ]

  customersDetails =[
    { name : 'Manthra', age : '1997-07-21', city : 'Bangalore', languageknown:'kannada', salary : '500000'},
    { name : 'Kumar', age : '1997-05-12', city : 'Chennai', languageknown:'tamil', salary : '1500000'},
    { name : 'Athvik', age : '2025-11-05', city : 'Hyderabad', languageknown:'telugu', salary : '2500000'},
  ]
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Navbar } from '../layout/navbar/navbar';
import { CustomerList } from '../customer-list/customer-list';

@Component({
  selector: 'app-shipment',
  imports: [CommonModule,Navbar,CustomerList],
  templateUrl: './shipment.html',
  styleUrl: './shipment.css',
})
export class Shipment {
    shipments = [
    { customer : 'Manthra', status : 'delivered'},
    { customer : 'Kumar', status : 'pending'},
    { customer : 'Athvik', status : 'cancelled'},
    
  ]

  customersDetails =[
    { name : 'Manthra', age : 24, city : 'Bangalore', languageknown:'kannada'},
    { name : 'Kumar', age : 28, city : 'Chennai', languageknown:'tamil'},
    { name : 'Athvik', age : 22, city : 'Hyderabad', languageknown:'telugu'},
  ]
}

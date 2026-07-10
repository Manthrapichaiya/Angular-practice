import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { ShipmentData  } from '../../models/shipment.model';
import { CustomerList } from '../../Customer/Tables-practice/customer-list';
import { Layout } from '../../Navbar/layout';
import { ShipmentService } from '../../Service/shipment-service/shipment-service';

@Component({
  selector: 'app-shipment',
  imports: [CommonModule,CustomerList,Layout],
  templateUrl: './shipment.html',
  styleUrl: './shipment.css',
})
export class Shipment {
     shipmentService = inject(ShipmentService); //import shipment service


  customersDetails =[
    { name : 'Manthra', age : '1997-07-21', city : 'Bangalore', languageknown:'kannada', salary : '500000'},
    { name : 'Kumar', age : '1997-05-12', city : 'Chennai', languageknown:'tamil', salary : '1500000'},
    { name : 'Athvik', age : '2025-11-05', city : 'Hyderabad', languageknown:'telugu', salary : '2500000'},
  ]
}

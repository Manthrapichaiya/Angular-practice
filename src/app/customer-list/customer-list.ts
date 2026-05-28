import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-customer-list',
  imports: [CommonModule],
  templateUrl: './customer-list.html',
  styleUrl: './customer-list.css',
})
export class CustomerList {
  @Input() customers: { name: string; age: number; city: string; languageknown: string }[] = [];
 
  ngOnInit() {
    console.log('Customers on init:', this.customers);
  }


}

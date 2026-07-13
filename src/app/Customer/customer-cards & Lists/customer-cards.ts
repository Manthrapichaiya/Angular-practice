import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Employee } from '../../models/employee.model';

import { EmployeeService } from '../../Service/employee-service/employee';
import { combineLatest, debounceTime, distinctUntilChanged, map, startWith, Subject, timeout } from 'rxjs';
import { Customer } from '../../Service/customer-service/customer';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-customer-cards',
  imports: [AsyncPipe],
  templateUrl: './customer-cards.html',
  styleUrl: './customer-cards.css',
})

export class CustomerCards {
  // service initialization
   employeeservice = inject(EmployeeService)
   customerService = inject(Customer)
  private cdr = inject(ChangeDetectorRef);
  //  Using normal array
  customers: Employee[] = [];
  customers2: any;
  loading = true
  loading2 = true
  loading3 = true
  error: string | null = null

  ngOnInit() {
    // Using normal array ( not signal) 
    // this.employeeservice.getAll().pipe(timeout(8000)).subscribe({
    //   next: d => {
    //     // this.customers = d; 
    //     this.customers = d.slice(0, 6); // for display only 6 data
    //     this.loading = false;
    //     this.cdr.markForCheck()
    //     console.log(this.customers)
    //   },
    //   error: e => { this.error = 'Could not load data. Check your connection.'; this.loading = false }
    // })

    this.customerService.getCustomers().subscribe({
      next: data => {
        this.customers2 = data.users;
        this.loading2 = false;
        this.cdr.markForCheck()
      },
      error: e => { this.error = 'Could not load data. Check your connection.'; this.loading2 = false }

    })

    // this.customerService.getCustomers().subscribe((data: UsersResponse) => {
    // this.customers2 = data.users;
    // this.loading3 = false ;
    // });
  }

// client side search
  onSearch(event: Event) {
    const term = (event.target as HTMLInputElement).value;
    this.employeeservice.search(term)
  }

  // server side search
  onSearch_server(event:Event){
    const term = (event.target as HTMLInputElement).value;
    this.customerService.search(term)
  }


}

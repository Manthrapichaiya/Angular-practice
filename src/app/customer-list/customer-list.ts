import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, Input, signal } from '@angular/core';
import { timeout } from 'rxjs';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../Service/employee-service/employee';


@Component({
  standalone: true,
  selector: 'app-customer-list',
  imports: [CommonModule],
  templateUrl: './customer-list.html',
  styleUrl: './customer-list.css',
})

export class CustomerList {
  private customerservice = inject(EmployeeService)
  //Using @Input
  @Input() customers1: { name: string; age: string; city: string; languageknown: string, salary: string }[] = [];
  //  Using normal array
  customers2: Employee[] = [];
  loading = true
  error: string | null = null
  private cdr = inject(ChangeDetectorRef);

  //Using signal
  customer3 = signal<Employee[]>([])
  loading3 = signal(true);
  error3 = signal<string|null>(null)
  
  

  ngOnInit() {
    // Using normal array
    this.customerservice.getAll().pipe(timeout(8000)).subscribe({
      next: d => {
        this.customers2 = d; this.loading = false;
        this.cdr.markForCheck()
        console.log(this.customers2)
      },
      error: e => { this.error = 'Could not load data. Check your connection.'; this.loading = false }
    })

    // Using signal
    this.customerservice.getAll().pipe(timeout(8000)).subscribe({
      next: d => {
        this.customer3.set(d);
        this.loading3.set(false)
      },
      error: e => { 
        this.error3.set('Could not load check connections');
        this.loading3.set(false)
      }
    })


  }


}

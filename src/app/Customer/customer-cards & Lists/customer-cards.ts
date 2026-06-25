import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../Service/employee-service/employee';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-customer-cards',
  imports: [],
  templateUrl: './customer-cards.html',
  styleUrl: './customer-cards.css',
})
export class CustomerCards {
   private customerservice = inject(EmployeeService)
   //  Using normal array
  customers: Employee[] = [];
  loading = true
  error: string | null = null
  private cdr = inject(ChangeDetectorRef);

   ngOnInit() {
      // Using normal array
      this.customerservice.getAll().pipe(timeout(8000)).subscribe({
        next: d => {
          this.customers = d; this.loading = false;
          this.cdr.markForCheck()
          console.log(this.customers)
        },
        error: e => { this.error = 'Could not load data. Check your connection.'; this.loading = false }
      })
  
    
  
  
    }
}

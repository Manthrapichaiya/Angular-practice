import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EmployeeService } from '../employee';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee-details',
  imports: [RouterLink],
  templateUrl: './employee-details.html',
  styleUrl: './employee-details.css',
})
export class EmployeeDetails {
   private route = inject(ActivatedRoute);
  private empService = inject(EmployeeService);
  
  employee: Employee | null = null;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.empService.getEmployee().subscribe(data => {
      this.employee = data.find(e => e.id === Number(id)) || null;
    });
  }
}

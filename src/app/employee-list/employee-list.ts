import { Component, inject, Inject, signal } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeCard } from '../employee-card/employee-card';
import { EmployeeService } from '../employee';

@Component({
  selector: 'app-employee-list',
  imports: [EmployeeCard],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {
  selectedEmp!: Employee;
  employees = signal<Employee[]>([]);
  private employeeservice = inject(EmployeeService) //Data comes from service
  // employees = this.employeeservice.employees

  ngOnInit(){
 this.employeeservice.getEmployee().subscribe(data=>{
     this.employees.set(data)
   });
  }
  
  employeeSelected(data: Employee) {
    this.selectedEmp = data
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from '../models/employee.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee-card',
  imports: [RouterLink],
  templateUrl: './employee-card.html',
  styleUrl: './employee-card.css',
})
export class EmployeeCard {
 @Input() employee?: Employee;
 @Output() selectedEmployee = new EventEmitter<Employee>();

 selectedEmployeeFun(employee:Employee){
   this.selectedEmployee.emit(employee)
 }
}

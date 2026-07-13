import { Component, computed, inject, signal } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { EmployeeCard } from '../employee-card/employee-card';
import { EmployeeService } from '../../Service/employee-service/employee';

@Component({
  selector: 'app-employee-list',
  imports: [EmployeeCard],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {
  selectedEmp!: Employee;
  employees = signal<Employee[]>([]);
  searchTerm = signal<string>('');
  private employeeservice = inject(EmployeeService) //Data comes from service

ngOnInit(){
 this.employeeservice.getAll().subscribe(data=>{
     this.employees.set(data)
   });
  }
  
  employeeSelected(data: Employee) {
    this.selectedEmp = data
  }

  // search the employee using signals
onSearch(event:Event){
  const term = (event.target as HTMLInputElement).value;
  this.searchTerm.set(term)
}

results = computed(()=>
  this.employees().filter(e=>
    e.name.toLowerCase().includes(this.searchTerm().toLowerCase())
  )

);

}

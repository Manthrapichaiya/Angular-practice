import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
    employees = signal<Employee[]>([
    { id: 1, name: 'Manthra', role: 'Developer', department: 'MCA' },
    { id: 2, name: 'Kumar', role: 'Project Manager', department: 'Commerce' },
    { id: 3, name: 'Adhvick', role: 'Tester', department: 'IT' },
    { id: 3, name: 'Aarya', role: 'Tester', department: 'IT' },
  ]);

  private http = inject(HttpClient);

  getEmployee(){
    return this.http.get<Employee[]>('https://jsonplaceholder.typicode.com/users');
  }

  createEmployee(employee:Employee){
    return this.http.post<Employee>('https://jsonplaceholder.typicode.com/users',employee)
  }
}

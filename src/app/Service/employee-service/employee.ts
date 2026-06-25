import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
    employees = signal<Employee[]>([]);

  private http = inject(HttpClient);

  getAll(){
    return this.http.get<Employee[]>('https://jsonplaceholder.typicode.com/users');
  }

  getById(id: number) {
    return this.http.get<Employee>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

  createEmployee(employee:Employee){
    return this.http.post<Employee>('https://jsonplaceholder.typicode.com/users',employee)
  }
}

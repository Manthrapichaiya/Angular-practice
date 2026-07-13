import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../../models/employee.model';
import { combineLatest, debounceTime, distinctUntilChanged, startWith, Subject, switchMap, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private http = inject(HttpClient);
  employees = signal<Employee[]>([]);
 
  getAll() {
    return this.http.get<Employee[]>('https://jsonplaceholder.typicode.com/users');
  }
 
  getById(id: number) {
    return this.http.get<Employee>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
 
  createEmployee(employee: Employee) {
    return this.http.post<Employee>('https://jsonplaceholder.typicode.com/users', employee)
  }
 
   // For client side search (without switchmap) using employees array
  private searchTerms = new Subject<string>();
  private allUsers$ = this.http.get<Employee[]>('https://jsonplaceholder.typicode.com/users')
  
  // the search term stream (with initial empty term)
  term$ = this.searchTerms.pipe(
    startWith(''),               // show all on first load
    debounceTime(300),           // wait for typing to pause
    distinctUntilChanged(),      // skip if term didn't change

  );
  
  // combine: whenever the term changes, filter the full list
  result$ = combineLatest([this.allUsers$, this.term$]).pipe(
    map(([users, term]: [Employee[], string]) =>
      users.filter(u =>
        u.name.toLowerCase().includes(term.toLowerCase())
      ).slice(0,6)
    )
  )
 
  search(term: string) {
    this.searchTerms.next(term);
  }

 

   
}



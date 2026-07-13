import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { debounceTime, distinctUntilChanged, map, Observable, startWith, Subject, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Customer {
  private http = inject(HttpClient);

  getCustomers(): Observable<UsersResponse> {
    return this.http.get<UsersResponse>('https://dummyjson.com/users');
  }

  // For server side search (with switch map)using customer array
  private searchTerm2 = new Subject<string>();

  search(term: string) {
    this.searchTerm2.next(term);
  }

  results$ = this.searchTerm2.pipe(
    startWith(''),               // show all on first load
    debounceTime(300),           // wait for typing to pause
    distinctUntilChanged(),      // skip if term didn't change
    switchMap(term =>            // fire call, cancel previous
      this.http.get<UsersResponse>(`https://dummyjson.com/users/search?q=${term}`)
    ),  map((response: UsersResponse) => response.users)
  );

}

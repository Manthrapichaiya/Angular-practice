import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EmployeeService } from '../../Service/employee-service/employee';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-employee-details',
  imports: [RouterLink],
  templateUrl: './employee-details.html',
  styleUrl: './employee-details.css',
})
export class EmployeeDetails implements OnInit {
   private route = inject(ActivatedRoute);
  private empService = inject(EmployeeService);
  
  employee = signal<Employee | null>(null);

  ngOnInit() {

    //  const id = this.route.snapshot.paramMap.get('id');
    // this.empService.getAll().subscribe(data => {
    //   const found = data.find(e => e.id === Number(id)) || null;
    //   this.employee.set(found)
    // });
    
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.empService.getById(id).subscribe(data => this.employee.set(data));

  }
}

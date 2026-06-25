import { Routes } from '@angular/router';
import { Login } from './login/login';
import { authGuard } from './Service/auth-guard-service/auth-guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./Navbar/layout').then(m => m.Layout),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./Shipments/statcard-values/statcard-values').then(m => m.StatcardValues),
      },
      {
        path: 'employees',
        loadComponent: () =>
          import('./Employee/employee-list/employee-list').then(m => m.EmployeeList),
      },
      {
        path: 'employee/:id',
        // canActivate: [authGuard], // temporarily commented this
        loadComponent: () =>
          import('./Employee/employee-details/employee-details').then(m => m.EmployeeDetails),
      },
      {
        path: 'shipments',
        loadComponent: () =>
          import('./Shipments/shipment-list/shipment').then(m => m.Shipment),
      },
      {
        path: 'customers',
        loadComponent: () =>
          import('./Customer/customer-cards & Lists/customer-cards').then(m => m.CustomerCards),
      },
    
    ],
  },
    { path: 'login', loadComponent: () => import('./login/login').then(m => m.Login) }, 
  // {
  // path:'customers',
  // loadComponent:() =>
  //     import('./customer-list/customer-list').then(m => m.CustomerList)
  // },



];

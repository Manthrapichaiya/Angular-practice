import { Routes } from '@angular/router';
import { Login } from './login/login';
import { authGuard } from './Service/auth-guard-service/auth-guard';

export const routes: Routes = [
    {
        path: '',
        // loadComponent: () => import('./layout/layout').then(m => m.Layout)
          loadComponent: () => import('./Employee/employee-list/employee-list').then(m => m.EmployeeList)
    },
    {
        path: 'employee/:id',
        canActivate: [authGuard],
          loadComponent: () => import('./Employee/employee-details/employee-details').then(m => m.EmployeeDetails)
    },
    { path: 'login', component: Login },
    {
  path: 'shipment',
  loadComponent: () =>
    import('./Shipments/shipment-list/shipment')
      .then(m => m.Shipment)
},
{
path:'customers',
loadComponent:() =>
    import('./customer-list/customer-list').then(m => m.CustomerList)
},
{
path:'home',
loadComponent: () => import('./Navbar/layout').then(m => m.Layout)
},


];

import { Routes } from '@angular/router';
import { Login } from './login/login';
import { authGuard } from './auth-guard';

export const routes: Routes = [
    {
        path: '',
        // loadComponent: () => import('./layout/layout').then(m => m.Layout)
          loadComponent: () => import('./employee-list/employee-list').then(m => m.EmployeeList)
    },
    {
        path: 'employee/:id',
        canActivate: [authGuard],
          loadComponent: () => import('./employee-details/employee-details').then(m => m.EmployeeDetails)
    },
    { path: 'login', component: Login },
    {
  path: 'shipment',
  loadComponent: () =>
    import('./shipment/shipment')
      .then(m => m.Shipment)
},
// {
// path:'customers',
// loadComponent:() =>
//     import('./customer-list/customer-list').then(m => m.CustomerList)
// }

];

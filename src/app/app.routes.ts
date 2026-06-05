import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        // loadComponent: () => import('./layout/layout').then(m => m.Layout)
          loadComponent: () => import('./employee-list/employee-list').then(m => m.EmployeeList)
    },
    {
        path: 'employee/:id',
       
          loadComponent: () => import('./employee-details/employee-details').then(m => m.EmployeeDetails)
    },
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

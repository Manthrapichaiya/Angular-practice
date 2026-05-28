import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./layout/layout').then(m => m.Layout)
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

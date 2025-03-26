import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    loadComponent: () => import('./page-1/page-1.component').then(m => m.Page1Component),
    path: 'page-1',
  },
  {
    loadComponent: () => import('./page-2/page-2.component').then(m => m.Page2Component),
    path: 'page-2',
  }
];

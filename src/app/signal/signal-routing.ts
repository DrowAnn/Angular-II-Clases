import { Route } from '@angular/router';
import { SignalComponent } from './signal.component';

const ROUTES: Route[] = [
  {
    path: '',
    component: SignalComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        loadComponent: () => import('./home/home.component'),
      },
      {
        path: 'signal-ejemplo1',
        loadComponent: () =>
          import('./signal-ejemplo1/signal-ejemplo1.component'),
      },
      {
        path: 'signal-ejemplo2',
        loadComponent: () =>
          import('./signal-ejemplo2/signal-ejemplo2.component'),
      },
    ],
  },
];

export default ROUTES;

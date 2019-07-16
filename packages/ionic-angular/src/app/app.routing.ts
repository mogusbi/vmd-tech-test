import { Routes } from '@angular/router';

export const AppRouting: Routes = [
  {
    path: '',
    redirectTo: 'messages',
    pathMatch: 'full',
  },
  {
    path: 'messages',
    pathMatch: 'prefix',
    loadChildren: './messages/messages.module#MessagesModule',
  },
];

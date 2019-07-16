import { Routes } from '@angular/router';
import { MessageComponent } from './message/message.component';
import { MessagesComponent } from './messages.component';
import { MessageResolver } from './shared/message.resolver';

export const MessagesRouting: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MessagesComponent,
    resolve: {
      messages: MessageResolver,
    },
  },
  {
    path: ':id',
    pathMatch: 'full',
    component: MessageComponent,
    resolve: {
      message: MessageResolver,
    },
  },
];

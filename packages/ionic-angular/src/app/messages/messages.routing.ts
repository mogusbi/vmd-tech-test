import { Routes } from '@angular/router';
import { MessagesComponent } from './messages.component';
import { MessageResolver } from './shared/message.resolver';

export const MessagesRouting: Routes = [
  {
    path: '',
    component: MessagesComponent,
    resolve: {
      messages: MessageResolver,
    },
  },
];

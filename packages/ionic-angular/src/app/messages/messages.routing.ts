import { Routes } from '@angular/router';
import { CreateMessageComponent } from './create-message/create-message.component';
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
    path: 'create',
    pathMatch: 'full',
    component: CreateMessageComponent,
  },
  {
    path: 'view/:id',
    pathMatch: 'full',
    component: MessageComponent,
    resolve: {
      message: MessageResolver,
    },
  },
];

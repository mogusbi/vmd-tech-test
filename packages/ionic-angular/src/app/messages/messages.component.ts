import { Component } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Message } from './shared/message.model';

@Component({
  selector: 'messages',
  template: `
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>
          Messages
        </ion-title>
        <ion-buttons slot="primary">
          <ion-button routerLink="/messages/create">
            <ion-icon slot="end" name="create"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-item
          *ngFor="let message of messages$ | async"
          [routerLink]="generateLink(message._id)"
        >
          <ion-label>{{ message.title }}</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  `,
})
export class MessagesComponent {
  public get messages$(): Observable<Message[]> {
    return this.activatedRoute.data.pipe(
      map(({ messages }: Data) => messages.items)
    );
  }

  constructor(private activatedRoute: ActivatedRoute) {}

  public generateLink(id: string): string {
    return `/messages/view/${id}`;
  }
}

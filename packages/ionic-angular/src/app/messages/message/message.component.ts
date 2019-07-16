import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Message } from '../shared/message.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'message',
  template: `
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button defaultHref="messages"></ion-back-button>
        </ion-buttons>
        <ion-title>
          {{ (message$ | async)?.title }}
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content fullscreen padding>
      {{ (message$ | async)?.message }}
    </ion-content>
  `,
})
export class MessageComponent {
  public get message$(): Observable<Message> {
    return this.activatedRoute.data.pipe(
      map(({ message }: Data): Message => message)
    );
  }

  constructor(private activatedRoute: ActivatedRoute) {}
}

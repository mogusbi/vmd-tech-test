import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Message, Messages } from './message.model';
import { MessageService } from './message.service';
import { Observable } from 'rxjs';

@Injectable()
export class MessageResolver implements Resolve<Message | Messages> {
  constructor(private messageService: MessageService) {}

  public resolve({
    params,
  }: ActivatedRouteSnapshot): Observable<Message | Messages> {
    const { id } = params;

    if (id) {
      return this.messageService.readMessage$(id);
    }

    return this.messageService.listMessages$();
  }
}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageDto } from './message.dto';
import { Message, Messages } from './message.model';

@Injectable()
export class MessageService {
  private url = '/api/messages';

  constructor(private httpClient: HttpClient) {}

  public createMessage$(dto: MessageDto): Observable<Message> {
    const { title, message } = dto;

    return this.httpClient.post<Message>(this.url, {
      title,
      message,
    });
  }

  public listMessages$(
    skip: number = 0,
    limit: number = 10
  ): Observable<Messages> {
    const params: HttpParams = new HttpParams({
      fromObject: {
        limit: limit.toString(),
        skip: skip.toString(),
      },
    });

    return this.httpClient.get<Messages>(this.url, {
      params,
    });
  }

  public readMessage$(id: string): Observable<Message> {
    return this.httpClient.get<Message>(`${this.url}/${id}`);
  }
}

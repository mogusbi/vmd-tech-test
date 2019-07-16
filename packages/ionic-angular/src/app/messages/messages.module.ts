import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CreateMessageComponent } from './create-message/create-message.component';
import { MessageComponent } from './message/message.component';
import { MessagesComponent } from './messages.component';
import { MessagesRouting } from './messages.routing';
import { MessageResolver } from './shared/message.resolver';
import { MessageService } from './shared/message.service';

@NgModule({
  declarations: [CreateMessageComponent, MessageComponent, MessagesComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(MessagesRouting),
  ],
  providers: [MessageResolver, MessageService],
})
export class MessagesModule {}

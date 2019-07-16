import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MessageComponent } from './message/message.component';
import { MessagesComponent } from './messages.component';
import { MessagesRouting } from './messages.routing';
import { MessageResolver } from './shared/message.resolver';
import { MessageService } from './shared/message.service';

@NgModule({
  declarations: [MessageComponent, MessagesComponent],
  imports: [CommonModule, IonicModule, RouterModule.forChild(MessagesRouting)],
  providers: [MessageResolver, MessageService],
})
export class MessagesModule {}

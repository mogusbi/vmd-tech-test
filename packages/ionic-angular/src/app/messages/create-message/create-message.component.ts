import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { MessageDto } from '../shared/message.dto';
import { MessageService } from '../shared/message.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'create-message',
  template: `
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button defaultHref="messages"></ion-back-button>
        </ion-buttons>
        <ion-title>
          New message
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <form [formGroup]="form" (submit)="submitMessage()">
        <ion-item>
          <ion-label position="stacked">Title</ion-label>
          <ion-input formControlName="title" type="text"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="stacked">Message</ion-label>
          <ion-textarea formControlName="message"></ion-textarea>
        </ion-item>

        <ion-button expand="full" type="submit" [disabled]="isInvalid"
          >Create message</ion-button
        >
      </form>
    </ion-content>
  `,
})
export class CreateMessageComponent implements OnInit {
  public form: FormGroup;

  public get isInvalid(): boolean {
    return !this.form.valid;
  }

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private navController: NavController
  ) {}

  public ngOnInit(): void {
    this.createForm();
  }

  public submitMessage(): void {
    const input: MessageDto = this.form.value;

    this.messageService.createMessage$(input).subscribe(() => {
      this.navController.navigateBack(['/messages']);
    });
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      title: [null, Validators.required],
      message: [null, Validators.required],
    });
  }
}

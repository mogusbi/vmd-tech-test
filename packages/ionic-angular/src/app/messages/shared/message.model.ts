export class Message {
  // tslint:disable-next-line:variable-name
  public _id: string;
  public title: string;
  public messages: string;
}

export class Messages {
  items: Message[];
}

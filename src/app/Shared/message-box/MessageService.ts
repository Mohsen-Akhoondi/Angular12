import { Injectable, Output, EventEmitter, Directive } from '@angular/core';

@Directive()
@Injectable()
export class MessageService {
  @Output() MessageChange: EventEmitter<any> = new EventEmitter<any>();

  Show(Message) {
    this.MessageChange.emit({IsShow: true, Message: Message});
  }
}

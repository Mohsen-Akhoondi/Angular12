import { Injectable, Output, EventEmitter, Directive } from '@angular/core';

@Directive()
@Injectable()
export class LoadingService {
  @Output() LoadingChange: EventEmitter<any> = new EventEmitter<any>();

   Show() {
     this.LoadingChange.emit(true);
  }
  Hide() {
     this.LoadingChange.emit(false);
  }
}

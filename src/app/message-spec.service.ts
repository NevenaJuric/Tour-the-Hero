import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageSpecService {

  messagesSpec: string[] = [];

  addspec(messageSpec: string){
    this.messagesSpec.push(messageSpec);
  }

  clearspec(){
    this.messagesSpec = [];
  }

constructor() { }

}

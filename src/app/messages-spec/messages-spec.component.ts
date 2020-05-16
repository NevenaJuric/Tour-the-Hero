import { Component, OnInit } from '@angular/core';
import { MessageSpecService } from '../message-spec.service';

@Component({
  selector: 'app-messages-spec',
  templateUrl: './messages-spec.component.html',
  styleUrls: ['./messages-spec.component.css']
})
export class MessagesSpecComponent implements OnInit {

  constructor(public messageSpecService: MessageSpecService) { }

  ngOnInit() {
  }

}

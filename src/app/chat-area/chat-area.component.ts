import { Component, OnInit } from '@angular/core';

import IMessage from '../interfaces/IMessage';

@Component({
  selector: 'app-chat-area',
  templateUrl: './chat-area.component.html',
  styleUrls: ['./chat-area.component.scss']
})

export class ChatAreaComponent implements OnInit {
  public messages: IMessage[] = [
    { from: 'Mihail', content: 'hi', time: '11:14', type: 'sent'},
    { from: 'Gosho', content: 'hey', time: '11:15', type: 'sent'}
    ];

  constructor() { }

  ngOnInit(): void {
  }

}

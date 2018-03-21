import { Component, OnInit } from '@angular/core';
import * as socketIo from 'socket.io-client';
import { Channel } from '../models/channel.model';

@Component({
  selector: 'app-socket',
  templateUrl: './socket.component.html',
  styleUrls: ['./socket.component.css']
})
export class SocketComponent implements OnInit {
  channels: Channel[];
  channel: string;
  message: '';

  messages = [];
  socket = socketIo('http://localhost:3000');

  constructor() { }

  ngOnInit() {
    this.socket.on('messages', (data) => {
      this.messages = data;
    });
    
    this.channels = [
      { id: 1, name: 'channel 1' },
      { id: 2, name: 'channel 2' },
      { id: 3, name: 'channel 3' }
    ];
    this.channel = '1';
  }

  sendMessage() {
    this.socket.emit('new-message', { message: this.message, channel: this.channel });
    this.message = '';
  }

  changeChannel() {
    this.socket.emit('change channel', this.channel);
  }
}

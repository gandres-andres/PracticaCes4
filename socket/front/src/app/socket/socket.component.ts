import { Component, OnInit } from '@angular/core';
import * as socketIo from 'socket.io-client';

@Component({
  selector: 'app-socket',
  templateUrl: './socket.component.html',
  styleUrls: ['./socket.component.css']
})
export class SocketComponent implements OnInit {
  message: '';
  messages = [];
  socket = socketIo('http://localhost:3000');

  constructor() { }

  ngOnInit() {
    this.socket.on('message', (data) => {
      console.log('mensaje',data)
      this.messages= data;
    });
  }

  sendMessage() {
    this.socket.emit('message', this.message);
    this.message = '';
  }

}

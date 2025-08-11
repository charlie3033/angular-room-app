import { Component,OnInit,Input, Output,EventEmitter } from '@angular/core';
import { RoomList } from '../rooms_interface';

@Component({
  selector: 'app-rooms-list',
  standalone: false,
  templateUrl: './rooms-list.html',
  styleUrl: './rooms-list.css'
})
export class RoomsList implements OnInit{
  @Input() rooms:RoomList[] = [];
  @Output() selectedRoom = new EventEmitter<RoomList>();

  ngOnInit(): void{

  }

  selectRoom(room: RoomList){
    this.selectedRoom.emit(room);
  }
}


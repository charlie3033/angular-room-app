import { Component,OnInit,Input, Output,EventEmitter, ChangeDetectionStrategy, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { RoomList } from '../rooms_interface';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-rooms-list',
  standalone: false,
  templateUrl: './rooms-list.html',
  styleUrl: './rooms-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsList implements OnInit,OnChanges,OnDestroy{
  @Input() rooms:RoomList[] = [];
  @Input() title: string ='';
  @Output() selectedRoom = new EventEmitter<RoomList>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes['title'].firstChange == false){
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }
  ngOnInit(): void{

  }

  selectRoom(room: RoomList){
    this.selectedRoom.emit(room);
  }
  ngOnDestroy(): void {
    console.log('on destroy is called');
  }
}


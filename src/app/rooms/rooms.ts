import { AfterViewInit, Component,DoCheck,OnChanges,OnDestroy,OnInit, ViewChild } from '@angular/core';
import { Room,RoomList } from './rooms_interface';
import { Header } from './../header/header';
import { RoomsService } from './services/rooms.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-rooms',
  standalone: false,
  templateUrl: './rooms.html',
  styleUrls: ['./rooms.css']
})
export class Rooms implements OnInit, DoCheck, AfterViewInit{

  name = 'hilton hotel';
  numofrooms = 28;
  hiderooms = false;
  selectedRoom!:RoomList;


  rooms:Room ={
    available:10,
    booked:5,
    total:20,
  }
  title ='Room List';
  roomList : RoomList [] =[];

  stream = new Observable(observer =>{
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();
    // observer.error('error');
  });

  @ViewChild(Header) header!:Header;

  constructor(private roomsService : RoomsService){}

  ngOnInit(): void{
    this.stream.subscribe({
      next:(value)=>{console.log(value)},
      complete:()=>{console.log('complete')},
      error:(err)=>{console.log(err)},
    })
    this.stream.subscribe((data)=>{
      console.log(data);
    })

    this.roomsService.getRooms().subscribe(rooms =>{
      this.roomList = rooms;
    });

  }

  ngDoCheck(): void {
    console.log('on changes is called');
  }

  ngAfterViewInit(): void {
    setTimeout(()=>{
      this.header.title="Rooms View";
    });

  }
  toggle(){
    this.hiderooms = !this.hiderooms;
    this.title = 'Rooms List';
  };

  selectRoom(room: RoomList){
    this.selectedRoom = room;
  }

  addRoom(){
    const room :RoomList={
      rno :'4',
      roomType:'deluxe ',
      amenities:'a/c, free Wifi, Tv',
      price:500,
      photos:'https://unsplash.com/photos/a-close-up-of-a-colorful-butterflys-wings-tw4FCW4Gyx4',
      checkinTime:new Date('11-Nov-2021'),
      checkoutTime:new Date('12-Nov-2021'),
      rating: 3.5
    };

    // this.roomList=[...this.roomList, room];
    this.roomsService.addRooms(room).subscribe((data)=>{
      this.roomList = data;
    });
  }
}

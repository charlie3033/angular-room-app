import { Component,OnInit } from '@angular/core';
import { Room,RoomList } from './rooms_interface';


@Component({
  selector: 'app-rooms',
  standalone: false,
  templateUrl: './rooms.html',
  styleUrl: './rooms.css'
})
export class Rooms implements OnInit{

  name = 'hilton hotel';
  numofrooms = 28;
  hiderooms = false;

  rooms:Room ={
    available:10,
    booked:5,
    total:20,
  }

  roomList : RoomList [] =[];
  constructor(){}
  ngOnInit(): void{
      this.roomList=[
      {
        rno:101,
        roomType : 'delux',
        amenities:'a/c, free wifi, tv',
        price:5000,
        photos:'https://unsplash.com/photos/a-close-up-of-a-colorful-butterflys-wings-tw4FCW4Gyx4',
        checkinTime:new Date('11/Nov/2025'),
        checkoutTime:new Date('12/Nov/2025'),
        rating: 2.5,
      },{
        rno:102,
        roomType : 'delux',
        amenities:'a/c, free wifi, tv',
        price:1000,
        photos:'https://unsplash.com/photos/a-close-up-of-a-colorful-butterflys-wings-tw4FCW4Gyx4',
        checkinTime:new Date('11/Nov/2025'),
        checkoutTime:new Date('12/Nov/2025'),
        rating: 4.4,
      },{
        rno:103,
        roomType : 'private suite',
        amenities:'a/c, free wifi, tv',
        price:15000,
        photos:'https://unsplash.com/photos/a-close-up-of-a-colorful-butterflys-wings-tw4FCW4Gyx4',
        checkinTime:new Date('11/Nov/2025'),
        checkoutTime:new Date('12/Nov/2025'),
        rating: 3.6,
      }]
  }

  toggle(){
    this.hiderooms = !this.hiderooms;
  };

  selectRoom(room: RoomList){
    console.log(room);
  }
}

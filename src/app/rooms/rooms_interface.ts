export interface Room{
  available:number;
  booked:number;
  total:number;
}

export interface RoomList{
  rno ?: string;
  roomType:string;
  amenities:string;
  price:number;
  photos:string;
  checkinTime:Date;
  checkoutTime:Date;
  rating:number;
}

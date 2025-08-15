import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms_interface';
import { environment } from '../../../environments/environment';
import { APP_SERVICE_CONFIG } from './../../AppConfig/appconfig.service';
import { AppConfig } from '../../AppConfig/appconfig.interface';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomList : RoomList []=[
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

  constructor(@Inject(APP_SERVICE_CONFIG) private config : AppConfig){

    console.log('rooms service initialized');
  }
  getRooms(){
    return this.roomList;
  }
}

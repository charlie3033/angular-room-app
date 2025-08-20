import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms_interface';
import { environment } from '../../../environments/environment';
import { APP_SERVICE_CONFIG } from './../../AppConfig/appconfig.service';
import { AppConfig } from '../../AppConfig/appconfig.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomList : RoomList []=[];

  constructor(@Inject(APP_SERVICE_CONFIG) private config : AppConfig , private http: HttpClient){
    console.log(this.config.apiEndPoint)
    console.log('rooms service initialized');
  }
  getRooms(){
    return this.http.get<RoomList[]>('/api/rooms');
  }

  addRooms(rooms:RoomList){
    return this.http.post<RoomList[]>('/api/rooms',rooms)
  }
}

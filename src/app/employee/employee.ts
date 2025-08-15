import { Component } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
  // providers:[RoomsService]
})
export class Employee {
  empName :string = 'jhon';

  constructor( private roomsService:RoomsService){

  }
}

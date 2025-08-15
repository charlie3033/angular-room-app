import { AfterContentInit, Component, OnInit, ContentChild, Host } from '@angular/core';
import { AppRoutingModule } from "../app-routing-module";
import { Employee } from '../employee/employee';
import { RoomsService } from '../rooms/services/rooms.service';


@Component({
  selector: 'app-cont',
  standalone: true,
  imports: [AppRoutingModule],
  templateUrl: './cont.html',
  styleUrl: './cont.css',
  providers:[RoomsService]
})
export class Cont implements OnInit,AfterContentInit{

  @ContentChild(Employee) employee !: Employee;

  constructor(@Host() private roomsService:RoomsService){

  }

  ngOnInit(): void {

  }

  ngAfterContentInit(): void {
console.log(this.employee.empName);
    this.employee.empName='Rick';
    console.log(this.employee.empName);
  }
}

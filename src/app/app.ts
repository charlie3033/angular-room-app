import { Component, Inject, signal, OnInit } from '@angular/core';
import { localStorageToken } from './localstorage.token';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnInit{

  constructor(@Inject(localStorageToken) private localStorage: any ){

  }

  protected readonly title = signal('hotel-inventory');

  ngOnInit(){

    this.localStorage.setItem('name','HiltonHotel');
    

  }
}

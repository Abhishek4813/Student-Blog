import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getStarted(){
    if(sessionStorage.user)
      window.location.href="/student";
    else
      window.location.href="/register";
  }
}

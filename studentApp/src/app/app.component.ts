import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLogin="Login";

  constructor() { }
  logout(){
    if(sessionStorage.user){
      sessionStorage.removeItem("user");
    }
    this.isLogin="Login";
  }

  ngOnInit(): void {
    if(sessionStorage.user){
      this.isLogin=JSON.parse(sessionStorage.user).username+"(Logout)";
    }
  }
}

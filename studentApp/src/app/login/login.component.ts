import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  credential=new FormGroup({
    email:new FormControl("",Validators.required),
    password:new FormControl("",Validators.required),
  })

  constructor(private _service:BlogService) { }

  ngOnInit(): void {
  }

  loginSubmit(){
    this._service.login(this.credential.value).subscribe(data=>{
      if(data==null)
        window.alert("Login Filed. Wrong Credential.");
      else{
      sessionStorage.user=JSON.stringify(data);
      window.location.href="/student";
      }
    
    });
  }

}

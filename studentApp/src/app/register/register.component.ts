import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user=new FormGroup({
    username: new FormControl("",[Validators.required,Validators.minLength(3),Validators.pattern("^[a-zA-Z]*$")]),
    email: new FormControl("",[Validators.required,Validators.pattern("^[a-z.0-9]+@[a-z]+.[a-z]+$")]),
    password:new FormControl("",[Validators.required,Validators.minLength(6)])
  });

  constructor(private _service:BlogService) { }

  ngOnInit(): void {
  }
  registerSubmit(){
    this._service.register(this.user.value).subscribe(data=>sessionStorage.user=JSON.stringify(data));
    window.location.href="/student";
  }

}

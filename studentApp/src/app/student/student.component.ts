import { NullTemplateVisitor } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { BlogService } from '../blog.service';
import { Blog } from '../Model/blog';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  today:Date=new Date();
  year:number=this.today.getFullYear();
  month:number=this.today.getMonth()+1;
  day:number=this.today.getDate();
  monthStr:String=(this.month<10)?"0"+this.month:""+this.month;
  dayStr:String=(this.day<10)?"0"+this.day:""+this.day;

  blog=new FormGroup({
    username:new FormControl(JSON.parse(sessionStorage.user).username),
    date:new FormControl(this.year+"-"+this.month+"-"+this.day),
    desc:new FormControl("")
  })

  data:any=[];

  constructor(private _service:BlogService) { }

  ngOnInit(): void {
    this._service.getBlogs().subscribe(value=>this.data=value);
  }

  submit(){
    this._service.postBlog(this.blog.value).subscribe(value=>this.data.push(value));
  }

}

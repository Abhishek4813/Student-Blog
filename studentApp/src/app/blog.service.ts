import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Blog } from './Model/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private url="http://localhost:8000";
  constructor(private _http:HttpClient) { }

  register(data:any){
    return this._http.post(this.url+"/register",data);
  }

  login(data:any){
    return this._http.post(this.url+"/login",data);
  }

  postBlog(data:any){
    return this._http.post(this.url+"/post",data);
  }

  getBlogs(){
    return this._http.get<Blog[]>(this.url+"/blogList");
  }

}

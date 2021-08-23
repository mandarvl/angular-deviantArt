import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class PostService{

  constructor(private http: HttpClient) {
  
  }

  LoadPosts():any{
    return this.http.get("http://localhost:4300/posts") ;
  }

  GetPostById(id : number):any{
    this.http.get("http://localhost:4300/posts").subscribe((data:any) => {
      console.log(data) ;
    }) ;
    return {} ;
  }  
}
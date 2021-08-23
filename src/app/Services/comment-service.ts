import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class CommentService{
    
    constructor(private http: HttpClient) {
  
    }

    GetCommentByIdPost(idPost : number){
        return this.http.get("http://localhost:4300/comments/"+idPost) ;
    }
}
import { Component, OnInit } from '@angular/core';
import { postService } from '../Services/Post-service';
import { ActivatedRoute } from '@angular/router';
import { commentService } from '../Services/comment-service';
import axios from 'axios';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css'] 
})
export class PostCommentComponent implements OnInit {
  pathimg !: string;
  iduser !: number;
  comments !: any[];
  textinput !: string;
  profil !: any;
  nbrComments !: number;

  addcomment(){
    if(this.textinput != '')
      this.comments.unshift({id:1,id_user:1,id_post:this.iduser,commentary:this.textinput});
      this.textinput ="";
  }

  constructor(private postservice : postService, private route : ActivatedRoute, private commentservice : commentService) { 
    
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.pathimg = this.postservice.GetPostById(+id)!.imgpath;
    this.iduser = this.postservice.GetPostById(+id)!.id_user;

    axios.get("http://localhost:4300/post?id="+this.iduser).then((res)=>{
      this.pathimg = res.data.saryPublication;
      this.profil = res.data;  
    });
    axios.get("http://localhost:4300/comments?id="+this.iduser).then((resultComm)=>{
      this.comments = resultComm.data;
      this.nbrComments = resultComm.data.length;
    })
  }
  
}

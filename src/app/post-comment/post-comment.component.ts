import { Component, OnInit } from '@angular/core';
import { PostService } from '../Services/post-service';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from '../Services/comment-service';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css']
})
export class PostCommentComponent implements OnInit {
  currentPost !: any ;
  textinput !: any ;
  comments !: any ;
  postLoaded !: Promise<boolean> ;
  addcomment(){
    if(this.textinput === "")
      return;
    this.textinput ="";
  }

  constructor(private postService : PostService, private route : ActivatedRoute, private commentService : CommentService) { 
    this.currentPost = {} ;
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.postService.GetPostById(id).subscribe((data:any) => {
      this.currentPost = data ;
      this.postLoaded = Promise.resolve(true);
    }) ;

    this.commentService.GetCommentByIdPost(id).subscribe((data:any) => {
      this.comments = data ;
    }) ;
  }
  
}

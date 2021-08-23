import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../Services/post-service';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {

  posts !: any[];

  constructor(private postService : PostService) { }

  ngOnInit(): void {
    this.postService.LoadPosts().subscribe((data:any) => {
      this.posts = data ;
    }) ;
  }

}

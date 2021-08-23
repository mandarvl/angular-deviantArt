import { Component, OnInit, Input } from '@angular/core';
import { postService } from '../Services/Post-service';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {

  posts !: any[];

  constructor(private postservice : postService) { }

  ngOnInit(): void {
    this.posts = this.postservice.posts;
  }

}

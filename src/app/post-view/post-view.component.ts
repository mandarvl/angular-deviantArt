import { Component, OnInit, Input } from '@angular/core';
import { postService } from '../Services/Post-service';
import axios from 'axios';

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
    axios.get('http://localhost:4300/posts').then((res)=>{
      this.posts = res.data;
      console.log(res.data);
    });
  }

}

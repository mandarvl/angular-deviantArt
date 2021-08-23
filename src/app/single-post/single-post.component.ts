import { Component, OnInit, Input } from '@angular/core';
import { usersService } from '../Services/users-service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

@Input()
  post : any ;

  constructor(private userservice : usersService) { 
  }

  ngOnInit(): void {
    
  }

}

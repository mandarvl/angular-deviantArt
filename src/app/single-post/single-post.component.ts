import { Component, OnInit, Input } from '@angular/core';
import { usersService } from '../Services/users-service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

@Input()
  idpost !: number;
@Input()
  titlepost !: string;
@Input()
  pathimg !: string;
@Input()
  user_id !: number;

  name !: string;
  path !: string;
  constructor(private userservice : usersService) { 
  }

  ngOnInit(): void {
    this.name = this.userservice.GetUserById(+this.user_id)!.name;
    this.path = this.userservice.GetUserById(+this.user_id)!.imgpath;
  }

}

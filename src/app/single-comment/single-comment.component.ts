import { Component, OnInit, Input } from '@angular/core';
import { usersService } from '../Services/users-service';
import { commentService } from '../Services/comment-service';

@Component({
  selector: 'app-single-comment',
  templateUrl: './single-comment.component.html',
  styleUrls: ['./single-comment.component.css']
})
export class SingleCommentComponent implements OnInit {

    @Input()
      iduser !: number;
    @Input() 
      idpost !: number;
    @Input()
      comment!: string;
    @Input()
      contenu !: string;
    @Input()
     nomMembre !: string;
    @Input()
      saryMembre !: string;

  constructor(private userservice : usersService) { }

  ngOnInit(): void {
  }

}

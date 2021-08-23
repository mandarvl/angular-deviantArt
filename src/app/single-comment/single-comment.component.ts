import { Component, OnInit, Input } from '@angular/core';
import { usersService } from '../Services/users-service';

@Component({
  selector: 'app-single-comment',
  templateUrl: './single-comment.component.html',
  styleUrls: ['./single-comment.component.css']
})
export class SingleCommentComponent implements OnInit {

    @Input()
    comment!: any;
  @Input()
  date !: Date;
  constructor(private userservice : usersService) { 
    
  }

  ngOnInit(): void {
    var t = "2010-06-09 13:12:01".split(/[- :]/);

    // Apply each element to the Date function
    this.date = new Date(Date.UTC(Number(t[0]), Number(t[1])-1, Number(t[2]), Number(t[3]), Number(t[4]), Number(t[5])));
  }

}

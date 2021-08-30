import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
@Input()
  vues !: number;
@Input()
nbrComments !: number;
  constructor() { }

  ngOnInit(): void {
  }

}

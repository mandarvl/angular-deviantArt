import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
@Input()
userName !: string;
@Input()
posteTitre !: string;
@Input()
pdp !: string;
@Input()
vues !: number;

  constructor() { 
  }

  ngOnInit(): void {
   
  }

}

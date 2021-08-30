import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { usersService } from '../Services/users-service';
import axios from 'axios';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css']
})
export class UserProfilComponent implements OnInit {

  us !: any [];
  pers !: any ;
  constructor(private user : usersService) { }

  ngOnInit(): void {
    this.us = this.user.users;
    this.pers = this.GetUserById();
    console.log(this.pers);


    /**insersion donnée publication vers bd*/

  }
  onSubmit(form: NgForm) {
    console.log(form.value);
  }
  GetUserById(){
    const user = this.us.find(
        (user) => {
          return user.id === 1
        }
      );
      return user;
  }
}

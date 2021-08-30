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
  uploadedFile !: any ;
  constructor(private user : usersService) { }

  ngOnInit(): void {
    this.us = this.user.users;
    this.pers = this.GetUserById();
  }

  fileChange(element:any){
    this.uploadedFile = element.target.files.item(0);
  }

  onSubmit(form: NgForm) {
    const date = new Date() ;
    let file: File = this.uploadedFile;
    let formData: FormData = new FormData();
    formData.append("titre", form.value.titre) ;
    formData.append("description", form.value.desc) ;
    formData.append("membre", this.pers.id) ;
    formData.append("date", date.toISOString().split('T')[0] + ' ' 
    + date.toTimeString().split(' ')[0]) ;

    if (file !== undefined) { // a file was selected
      formData.append('image', file);
      axios.post("http://localhost:4300/post/new", formData).then((res)=>{
        if(res.data.success !== undefined && res.data.success == true){
          alert("Publication ajoutée avec succès") ;
          form.reset() ;
        }else{
          alert("Une erreur s'est produite, veuillez réeessayer") ;
        }
      }) ;
    }
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

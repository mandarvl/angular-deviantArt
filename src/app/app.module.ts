import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from'@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { PostViewComponent } from './post-view/post-view.component';

import {postService} from './Services/Post-service'
import {usersService} from './Services/users-service'
import { Routes, RouterModule } from '@angular/router';
import { PostCommentComponent } from './post-comment/post-comment.component';
import { SingleCommentComponent } from './single-comment/single-comment.component';
import {commentService} from'./Services/comment-service';
import { OptionComponent } from './option/option.component';
import { ProfilComponent } from './profil/profil.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { SeeMoreComponent } from './see-more/see-more.component';
import { UserProfilComponent } from './user-profil/user-profil.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  { path: 'comment', component: PostCommentComponent },
  { path: 'post/:id', component: PostCommentComponent },
  { path: 'profil', component: UserProfilComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component:  PostViewComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    SinglePostComponent,
    PostViewComponent,
    PostCommentComponent,
    SingleCommentComponent,
    OptionComponent,
    ProfilComponent,
    PostDetailComponent,
    SeeMoreComponent,
    UserProfilComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule
  ],
  providers: [
    postService,
    usersService,
    commentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

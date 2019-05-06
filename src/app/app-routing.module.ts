import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from './view/main/not-found/not-found.component';
import {PostComponent} from './view/main/post/post.component';
import {PostsComponent} from './view/main/posts/posts.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'posts'},
  {path: 'posts', component: PostsComponent},
  {path: 'post/:id', component: PostComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

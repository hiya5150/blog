import {BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './view/main/posts/posts.component';
import { PostComponent } from './view/main/post/post.component';
import { NotFoundComponent } from './view/main/not-found/not-found.component';
import { StubPipe } from './controller/pipes/stub.pipe';



@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    NotFoundComponent,
    StubPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

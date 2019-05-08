import {BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './view/main/posts/posts.component';
import { PostComponent } from './view/main/post/post.component';
import { NotFoundComponent } from './view/main/not-found/not-found.component';
import { StubPipe } from './controller/pipes/stub.pipe';
import { CardModule } from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {ToggleButtonModule} from 'primeng/primeng';
import {FormsModule} from '@angular/forms';




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
    CardModule,
    ButtonModule,
    MenubarModule,
    ToggleButtonModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

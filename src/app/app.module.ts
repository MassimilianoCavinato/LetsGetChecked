//MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//ANGULAR MATERIALS
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

//SERVICES
import { BlogService } from './services/blog.service';

//COMPONENTS
import { AppComponent } from './app.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { CommentItemComponent } from './components/comment-item/comment-item.component';
import { ReplyFormComponent } from './components/reply-form/reply-form.component';

import { HttpClientModule } from '@angular/common/http';
import { Error404Component } from './components/error404/error404.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'posts', component: PostListComponent },
  { path: 'posts/:id', component: PostDetailComponent },
  { path: '**',component: Error404Component }
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostItemComponent,
    PostDetailComponent,
    CommentItemComponent,
    ReplyFormComponent,
    Error404Component
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    RouterModule.forRoot( appRoutes ),
  ],
  providers: [ 
    BlogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

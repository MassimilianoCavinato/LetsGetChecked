import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  public posts = [];

  constructor( private _blogService: BlogService ) { }
  
  ngOnInit() {
    
    this._blogService.getPosts()
    .subscribe( posts => {
      this.posts = posts.sort((a,b) => a.publish_date > b.publish_date ? -1 : 1); //<-- sorting by publish date
    });

    this._blogService.loadPosts();
  }
}

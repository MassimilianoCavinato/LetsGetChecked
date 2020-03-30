import { Component, OnInit, Input } from '@angular/core';
import { PostInterface } from '../../interfaces/post.interface';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {
  @Input() post: PostInterface;
  public id;
  public title;
  public author;
  public publish_date;
  public description;

  constructor() { }

  ngOnInit() {
    if(typeof this.post != 'undefined'){
      this.id = this.post.id;
      this.title = this.post.title;
      this.author = this.post.author;
      this.publish_date = this.post.publish_date;
      this.description = this.post.description;
      
    }
  }
}

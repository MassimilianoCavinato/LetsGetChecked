import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss']
})

export class CommentItemComponent implements OnInit {

  @Input() comment : any;
  @Input() replyBox: number;

  public postId;
  public id;
  public parent_id;
  public user;
  public date;
  public content;
  public children = [];

  constructor(
    private _blogService: BlogService
  ) { }
  
  ngOnInit() {
    if(typeof this.comment != 'undefined'){
      this.postId = this.comment.data.postId;
      this.id = this.comment.data.id;
      this.parent_id = this.comment.data.parent_id;
      this.user = this.comment.data.user;
      this.date = this.comment.data.date;
      this.content = this.comment.data.content;
      this.children = this.comment.children;
    }
  }

  setReplyBox(){
    this._blogService.setReplyBox(this.id);
  }
}

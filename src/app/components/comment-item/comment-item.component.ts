import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { CommentInterface } from '../../interfaces/comment.interface';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss']
})

export class CommentItemComponent implements OnInit {

  @Input() comment : any;
  @Input() replyBox: number;

  public postId: number;
  public id : number;
  public parent_id: number| null;
  public user: string;
  public date : string;
  public content : string;
  public children : CommentInterface[] = [];

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

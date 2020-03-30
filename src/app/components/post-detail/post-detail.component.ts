import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { arrayToTree } from 'performant-array-to-tree';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  
  //args
  public title;
  public id;
  public parent_id;
  public author;
  public publish_date;
  public content; 

  //state
  public loaded = false;
  public commentsCounter = 0;
  public commentsTree = [];
  public replyBox = false;


  constructor( 
    private _route: ActivatedRoute, 
    private _blogService: BlogService

  )  { }

  ngOnInit() {
    
    this.id = this._route.snapshot.params['id'];

    this._blogService.getPost().subscribe(post=>{
      if(post !== null){
        this.author = post.author;
        this.publish_date = post.publish_date;
        this.content = post.content;
        this.title = post.title;
        this.loaded = true;
      }
      
    });

    this._blogService.loadPostById(this.id)
    this._blogService.getComments().subscribe(comments=> {
      this.commentsCounter = comments.length;
      this.setCommentsTree(comments);
      
    });

    this._blogService.loadCommentsByPostId(this.id);
    this._blogService.getReplyBox().subscribe(replyBox => {
      this.replyBox = replyBox;
    });
   
  }

  setCommentsTree(comments) {
    this.commentsTree = arrayToTree(comments, {parentId: "parent_id"});
  }

  setReplyBox(){
    this._blogService.setReplyBox(null);
  }
}

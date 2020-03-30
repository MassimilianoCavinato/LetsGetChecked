import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-reply-form',
  templateUrl: './reply-form.component.html',
  styleUrls: ['./reply-form.component.scss']
})
export class ReplyFormComponent implements OnInit {

  @Input() content = "";
  @Input() postId;
  @Input() parent_id; 


  constructor( private _blogService: BlogService ) { }

  ngOnInit() {
  }
 
  getContent(){
    //returns content trimmed, first 300 chars
    //this should never throw exceptions on the following validityCheck
    return this.content.trim().substring(0,300);
  }

  validityCheck(content): boolean{

    //make sure content is not empty, this should be avoided alreadyt disabling the submit button
    //put arbitrary max length of 300, no particular reasons...

    let content_not_empty = content.trim().length > 0; 
    let content_not_longer_than_300 = content.trim().length <= 300;
   
    return content_not_empty && content_not_longer_than_300;
  }

  addComment() {

    let postId = this.postId;
    let parent_id = this.parent_id;
    let content = this.getContent();
    
    if(this.validityCheck(content)){ 
      this._blogService.addComment(postId, parent_id, content);
    }
  }
}

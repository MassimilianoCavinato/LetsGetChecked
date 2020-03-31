import { Injectable } from '@angular/core';
import axios from 'axios'; // <-- this is not that different from the classic jQuery call
import { BehaviorSubject } from 'rxjs';
import { PostInterface } from '../interfaces/post.interface';
import { CommentInterface } from '../interfaces/comment.interface';

@Injectable({
  providedIn: 'root'
})

export class BlogService {

  private _api = axios.create({
    baseURL: "http://localhost:9003/",
    timeout: 1000,
  });

  private _posts = new BehaviorSubject<PostInterface[]>([]);
  private _post = new BehaviorSubject<PostInterface>(null);
  private _comments = new BehaviorSubject<CommentInterface[]>([]);
  private _replyBox = new BehaviorSubject(false);

  constructor( ) { }

  loadPosts(){

    this._api({
      method: "GET",
      url: `posts`
    })
    .then(response => {
      this._posts.next(response.data);
    })
    .catch(error => {
      console.warn("POSTS LOAD ERROR", error);
    });
  } 

  loadPostById(postId: number){
    this._api({
        method: "GET",
        url: `posts/${postId}`
    })
    .then(response => {
      this._post.next(response.data);
    })
    .catch(error => {
      console.warn("POST ID", postId, "LOAD ERROR", error);
    });
  }

  loadCommentsByPostId(postId: number){

    this._api({
      method: "GET",
      url: `posts/${postId}/comments`
    })
    .then(response => {
      let comments = response.data.map(c => Object.assign(c, {showReplyBox: true }))
      this._comments.next(comments);
    })
    .catch(error => {
      console.warn("COMMENTS LOAD ERROR", error);
    });
  }

  addComment(postId, parent_id, content){
    
    let payload = JSON.stringify({
      parent_id: parent_id,
      user: "LetsGetChecked", //<--- this is hardcoded for you in this code challnge
      date: new Date().toISOString().split('T')[0], //<-- also date should be created server side
      content: content.trim() 
    });
    this.setReplyBox(false);
    this._api({
        method: "POST",
        url: `posts/${postId}/comments`,
        data: payload,
        headers: {
          "content-type": "application/json",
        }
    })
    .then(response => {
      this._comments.next([
        ...this._comments.getValue(), 
        ...[response.data]
      ]);

      //if the parent id is null ( not nested comment )
      //give a small timeout to make sure element has been added to page therefore increasing the body height of the document
      //and then scroll to bottom
      if(parent_id === null){
        setTimeout(() => {
          window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
        }, 300);
        
      }
     
    })
    .catch(error => {
      console.warn("COMMENT ADD ERROR", error);
    });
  }

  getPosts(){
    return this._posts.asObservable();
  }

  getPost(){
    return this._post.asObservable();
  }

  getComments(){
    return this._comments.asObservable();
  }
  
  setReplyBox(id){
    this._replyBox.next(id);
  }

  getReplyBox(){
    return this._replyBox.asObservable();
  }

}

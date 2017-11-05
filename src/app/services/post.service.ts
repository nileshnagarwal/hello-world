import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PostService {

  constructor(private http: Http) {}
  
  private url = 'https://jsonplaceholder.typicode.com/posts'; 

  getPosts(){
    return this.http.get(this.url);
  }

  createPost(post){
    return this.http.post(this.url, JSON.stringify(post));    
  }

  updatePost(id){
    return this.http.patch(this.url + "/" + id, JSON.stringify({ isRead : true }));
  }

  deletePost(id){
    return this.http.delete(this.url + '/' + id);
  }
}

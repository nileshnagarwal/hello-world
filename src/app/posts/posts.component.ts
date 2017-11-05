import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  posts : any[];
  private url = 'https://jsonplaceholder.typicode.com/posts'; 

  constructor(private http: Http) {
      http.get(this.url)
        .subscribe(response => {
          this.posts = response.json();
      });
  }

  createPost(input: HTMLInputElement){
    let post = {title: input.value};
    input.value = "";
    this.http.post(this.url, JSON.stringify(post))
      .subscribe(response => {
        post['id'] = response.json().id;
        this.posts.splice(0,0,post);
        console.log(response.json());
      });
  }

  updatePost(post){
    // this.http.put(this.url + "/" + post.id, JSON.stringify(post)) 
    // --In "put" method we pass the whole object instead of just the keys that have been modified

    this.http.patch(this.url + "/" + post.id, JSON.stringify({ isRead : true }))
      .subscribe(Response => {
        console.log(Response.json());
      });
  }
    
}
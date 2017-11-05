import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{

  posts : any[];
  
  constructor(private service: PostService) {}

  ngOnInit(){
    this.service.getPosts()
      .subscribe(
        response => {
          this.posts = response.json();
        }, 
        (error : Response) => {
          if(error.status === 400){
            // this.form.setErrors({error.json()})
          }
          else
            alert("An unexpected error occured");
        }
      );
  }

  createPost(input: HTMLInputElement){
    let post = {title: input.value};
    input.value = "";
    this.service.createPost(post)
      .subscribe(
        response => {
          post['id'] = response.json().id;
          this.posts.splice(0,0,post);
          console.log(response.json());
        }, 
        error => {
          alert("An unexpected error occured");
        }
      );
  }

  updatePost(post){
    // this.http.put(this.url + "/" + post.id, JSON.stringify(post)) 
    // --In "put" method we pass the whole object instead of just the keys that have been modified

    this.service.updatePost(post.id)
      .subscribe(
        response => {
          console.log(response.json());
        }, 
        error => {
          alert("An unexpected error occured");
        }
      );
  }

  deletePost(post){
    this.service.deletePost(post.id)
      .subscribe(
        response => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index,1);
        }, 
        (error : Response) => {
          if(error.status === 404)
            alert("The post has already been deleted");  
          else
            alert("An unexpected error occured");
        }
      );
  }
    
}
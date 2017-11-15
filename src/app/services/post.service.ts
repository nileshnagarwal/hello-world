import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';
import 'rxjs/add/observable/throw';

@Injectable()
export class PostService {

  constructor(private http: Http) {}
  
  private url = 'https://jsonplaceholder.typicode.com/posts'; 

  getPosts(){
    return this.http.get(this.url)
      .catch((error: Response) => {
        if(error.status === 400)
          return Observable.throw(new BadInput(error.json()));
        return Observable.throw(new AppError(error.json()));
      });
  }

  createPost(post){
    return this.http.post(this.url, JSON.stringify(post));    
  }

  updatePost(id){
    return this.http.patch(this.url + "/" + id, JSON.stringify({ isRead : true }));
  }

  deletePost(id){
    return this.http.delete(this.url + '/' + id)
      .catch(( error : Response ) => {
        if(error.status === 404)
          return Observable.throw(new NotFoundError());
        return Observable.throw(new AppError(error));
      });
  }
}

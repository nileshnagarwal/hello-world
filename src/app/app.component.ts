import { Component } from '@angular/core';
import { FavouriteChangedEventArgs } from './favourite/favourite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular app';

  post = {
    title : "Title",
    isFavourite : true
  }

  onFavouriteChanged(eventArgs : FavouriteChangedEventArgs){
    console.log("Favourite was changed", eventArgs.newValue);
  }

  tweet = {
    body:"Here is the body of a tweet...",
    isLiked:true,
    likesCount:10
  }

  viewMode = 'map';
}

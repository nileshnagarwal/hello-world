import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})

export class FavouriteComponent implements OnInit {
  @Input('is-favourite') isFavourite : boolean;
  @Output('change') click = new EventEmitter();

  onClick(){
    this.isFavourite = !this.isFavourite;
    this.click.emit({ newValue : this.getStatus() });
    console.log("The button is ", this.isFavourite);
  }
    
  getStatus(){
    return this.isFavourite;
  }
  ngOnInit() {
  }

}

export interface FavouriteChangedEventArgs{
  newValue : boolean
}


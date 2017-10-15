import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  @Input() isFavourite : boolean;
  onClick(){
    this.isFavourite = !this.isFavourite;
    console.log("The button is ", this.isFavourite);
  }
  getStatus(){
    return this.isFavourite;
  }
  ngOnInit() {
  }

}

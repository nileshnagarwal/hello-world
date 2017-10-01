import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fav-star',
  templateUrl: './fav-star.component.html',
  styleUrls: ['./fav-star.component.css']
})
export class FavStarComponent implements OnInit {
  isActive = false;
  onClick(){
    this.isActive = !this.isActive;
    console.log("The button is ", this.isActive);
  }
  getStatus(){
    return this.isActive;
  }
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // let id = this.route.snapshot.paramMap.get('id'); 
    // console.log('id');
    // Alternative to using paramMap as an observable is 
    // to use the actual paramMap object. 
    // Explained in lecture 132.
    
    this.route.paramMap
      .subscribe(params => {
        let id = +params.get('id');
        console.log(params);
      });
  }

}

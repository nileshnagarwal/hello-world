import { Component } from '@angular/core';
import { FavouriteChangedEventArgs } from './favourite/favourite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  courses: Array<{id: number, name: string}>;

  loadCourses(){
    this.courses = [
      { id : 1, name : "course1" },
      { id : 2, name : "course2" },
      { id : 3, name : "course3" }
    ];
  }

  onAdd(){
    this.courses.push({id: this.courses.length+1, 
      name: "course"+(this.courses.length+1) });
  }

  onRemove(course){
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  trackCourse(index, course){
    return course? course.id : undefined;
  }
}

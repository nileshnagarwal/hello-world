import { FormsModule } from '@angular/forms';
import { AuthorsService } from './authors/authors.service';
import { CoursesService } from './courses.service';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { FavStarComponent } from './fav-star/fav-star.component';
import { TitlecaseComponent } from './titlecase/titlecase.component';
import { TitlecasePipe } from './titlecase.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    AuthorsComponent,
    FavStarComponent,
    TitlecaseComponent,
    TitlecasePipe 
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CoursesService,
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

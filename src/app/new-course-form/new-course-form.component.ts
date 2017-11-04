import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent  {

  form;

  constructor(fb: FormBuilder){
    this.form = fb.group({
      name: ['',Validators.required],
      contact: fb.group({
        phone: [],
        email: []}),
      topics: fb.array([])
    });
  }
  

  addTopic(topic: HTMLInputElement){
    // (this.form.get('topics') as FormArray).push(new FormControl (topic.value));
    this.topics.push(new FormControl (topic.value));
    topic.value="";
  }

  get topics(){
    return this.form.get('topics') as FormArray;
  }

  removeTopic(topic: FormControl){
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

}

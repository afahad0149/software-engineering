import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TopicsService } from '../../topics.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Output() newPost = new EventEmitter<any>();
  newTopicForm = this.formBuilder.group({
    title: ['', Validators.required],
  });

  userInput: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private topicsService: TopicsService
  ) {}

  ngOnInit(): void {
    this.newTopicForm.valueChanges.subscribe((input) => console.log(input));
  }

  postNewTopic(): void {
    this.userInput = '' + this.newTopicForm.value.title;
    this.newTopicForm.reset();
    this.newPost.emit(this.userInput);
  }
}
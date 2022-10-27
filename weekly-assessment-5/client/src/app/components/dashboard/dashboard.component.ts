import { Component, OnInit } from '@angular/core';
import { Topic } from '../../topic';
import { TopicsService } from '../../topics.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  topics: Topic[] = [];
  postDate: String = '';

  constructor(private topicsService: TopicsService) {}

  ngOnInit(): void {
    this.getAllTopics();
  }

  getAllTopics(): void {
    this.topicsService
      .getAllTopics()
      .subscribe((topic: any) => (this.topics = topic));
  }

  postNewTopic(userInput: string): void {
    this.topicsService
      .addTopic(userInput)
      .subscribe(() => console.log('Post successful'));
    setTimeout(() => {
      this.ngOnInit();
    }, 10);
  }

  vote(id: String, val: number): void {
    this.topicsService
      .vote(id, val)
      .subscribe(() => console.log('Vote successful'));
    setTimeout(() => {
      this.ngOnInit();
    }, 10);
  }

  deletePost(id: String): void {
    this.topicsService
      .deleteTopic(id)
      .subscribe(() => console.log('Delete successful'));
    setTimeout(() => {
      this.ngOnInit();
    }, 10);
  }

  displayDate(timestamp: string): void {
    const date = new Date(timestamp);
    this.postDate = date.toLocaleDateString();
  }
}
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Topic } from './topic';

@Injectable({
  providedIn: 'root',
})
export class TopicsService {
  baseUrl: string = `http://localhost:3000/topics`;

  constructor(private http: HttpClient) {}

  getAllTopics(): Observable<Topic[]> {
    return this.http.get<Topic[]>(this.baseUrl);
  }

  vote(id: String, val: number): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}/${val}`, '');
  }

  addTopic(input: string): Observable<Topic> {
    return this.http.post<any>(`${this.baseUrl}`, {
      title: input,
      votes: 0,
    });
  }

  deleteTopic(id: String): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  now = new Date();

  year = this.now.getFullYear();
  month = this.now.getMonth() + 1;
  day = this.now.getDate();
  date = `${this.year}-${this.month}-${this.day}`;
  private url =
    'https://newsapi.org/v2/everything?q=tesla&from=2024-07-28&sortBy=publishedAt&apiKey=ce0791cf7cb34350929466338dfff3a9';

  constructor(private http: HttpClient) {
    this.url =
      'https://newsapi.org/v2/everything?q=tesla&from=`${this.date}`&sortBy=publishedAt&apiKey=ce0791cf7cb34350929466338dfff3a9';

  }

  getNews(): Observable<any> {
    return this.http.get(this.url);
  }

  
}

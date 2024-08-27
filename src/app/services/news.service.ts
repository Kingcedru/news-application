import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private url =
    'https://newsapi.org/v2/everything?q=tesla&from=2024-07-27&sortBy=publishedAt&apiKey=ce0791cf7cb34350929466338dfff3a9';

  constructor(private http: HttpClient) {}

  getNews(): Observable<any> {
    return this.http.get(this.url);
  }
}

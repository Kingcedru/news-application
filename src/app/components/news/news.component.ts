import { Component, OnInit } from '@angular/core';
import { newsDto } from 'src/app/Dto/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
})
export class NewsComponent implements OnInit {
  newList?: newsDto;
  constructor(private readonly newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getNews().subscribe(
      (response) => {
        this.newList = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articles, newsDto } from 'src/app/Dto/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
})
export class NewsComponent implements OnInit {
  articles?: Articles[];
  authors?: Articles[];
  constructor(
    private readonly newsService: NewsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.newsService.getNews().subscribe(
      (response) => {
        this.articles = response.articles.splice(0, 10);
        this.authors = response.articles;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getArticle(id: string): void {
    this.router.navigate(['/article', id]);
  }
}

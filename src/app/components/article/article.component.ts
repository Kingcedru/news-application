import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, map, of, switchMap } from 'rxjs';
import { Articles } from 'src/app/Dto/news';
import { NewsService } from 'src/app/services/news.service';
import { decord } from 'src/app/utils/decord';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
})
export class ArticleComponent implements OnInit {
  articleTitle: string | null = null;
  article?: Articles;
  noteMessage: string =
    'This page is supposed to display the full text of the article, however, the news API we are using for this exercise project does not deliver the full text of the article. That’s why you are only seeing an article summary.';

  constructor(
    private route: ActivatedRoute,
    private readonly newsService: NewsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          const title = params.get('id');
          if (title) {
            return this.newsService.getNews().pipe(
              map((response) =>
                response.articles.find(
                  (article: any) => article.title === title
                )
              ),
              catchError((error) => {
                console.error(error);
                return of(undefined); // Return empty result on error
              })
            );
          } else {
            return of(undefined); // Return empty result if no title
          }
        })
      )
      .subscribe((article) => {
        this.article = article || undefined;
      });
  }
}

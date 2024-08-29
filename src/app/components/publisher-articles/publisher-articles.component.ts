import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map, of, switchMap } from 'rxjs';
import { Articles } from 'src/app/Dto/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-publisher-articles',
  templateUrl: './publisher-articles.component.html',
})
export class PublisherArticlesComponent implements OnInit {
  articles?: Articles[];
  publisher: string = '';

  constructor(
    private route: ActivatedRoute,
    private readonly newsService: NewsService,
    private router: Router
  ) {}
  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          const publisher = params.get('id');
          this.publisher = publisher || 'Unknown Publisher';
          if (publisher) {
            return this.newsService.getNews().pipe(
              map((response: any) =>
                response.articles.filter(
                  (article: any) => article.source.name === publisher
                )
              ),
              catchError((error) => {
                console.error(error);
                return of(undefined);
              })
            );
          }
          return [];
        })
      )
      .subscribe((article) => {
        this.articles = article || undefined;
      });
  }
  getArticleTitle(id: string) {
    const publishedId = this.route.snapshot.paramMap.get('id');
    this.router.navigate(['/article', id]);
  }
}

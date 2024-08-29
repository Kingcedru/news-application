import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './components/article/article.component';
import { NewsComponent } from './components/news/news.component';
import { PublisherArticlesComponent } from './components/publisher-articles/publisher-articles.component';

const routes: Routes = [
  {
    path: '',
    component: NewsComponent,
  },
  {
    path: 'article/:id',
    component: ArticleComponent,
  },
  {
    path: 'publisher/:id',
    component: PublisherArticlesComponent,
    children: [{ path: 'article/:id', component: ArticleComponent }],
  },
  // { path: '', redirectTo: '/publisher', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { Routes } from '@angular/router';
import { BlogArticleListComponent } from '../blog-article-list/blog-article-list.component';
import { NewArticlePageComponent } from '../new-article-page/new-article-page.component';

export const routes: Routes = [{
  path: '',
  component: BlogArticleListComponent
}, {
  path: 'new',
  component: NewArticlePageComponent
}];

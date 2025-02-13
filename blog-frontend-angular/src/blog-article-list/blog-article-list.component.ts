import { Component } from "@angular/core";
import { BlogArticleComponent } from "../blog-article/blog-article.component";
import { ArticleFetcherService } from "./article-fetcher.service";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'blog-article-list',
  templateUrl: './blog-article-list.component.html',
  imports: [BlogArticleComponent, RouterLink]
})
export class BlogArticleListComponent {

  isLoadingArticles = true;
  articles = [{ headline: 'A headline', body: 'A body'}]

  constructor(private articleFetcherService: ArticleFetcherService) {
    this.articleFetcherService.getArticles().then(articles => {
      this.articles = articles;
      this.isLoadingArticles = false;
    })
  }
}

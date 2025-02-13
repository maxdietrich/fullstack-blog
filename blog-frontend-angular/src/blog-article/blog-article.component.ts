import { Component, Input } from "@angular/core";

@Component({
  selector: 'blog-article',
  templateUrl: './blog-article.component.html',
})
export class BlogArticleComponent {
  @Input() headline = '';
  @Input() body = '';
}
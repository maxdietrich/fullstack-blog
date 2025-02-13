import { Component } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { NewArticleSubmissionService } from "./new-article-submission.service";
import { RouterLink } from "@angular/router";

@Component({
  templateUrl: './new-article-page.component.html',
  imports: [FormsModule, RouterLink]
})
export class NewArticlePageComponent {
  showSuccessMessage = false;
  errorMessage: string | null = null;

  headline = '';
  body = '';

  async submitArticle() {
    const result = await this.newArticleSubmissionService.submitNewArticle({ headline: this.headline, body: this.body });
    if (!result.errorMessage) {
      this.showSuccessMessage = true;
      this.errorMessage = null;
    } else {
      this.showSuccessMessage = false;
      this.errorMessage = result.errorMessage
    }
  }

  constructor(private newArticleSubmissionService: NewArticleSubmissionService) {}
}
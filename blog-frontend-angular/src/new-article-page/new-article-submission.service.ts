import { Injectable } from "@angular/core";

interface NewArticleDTO {
  headline: string;
  body: string;
}

interface NewArticleSubmissionResult {
  errorMessage?: string;
}

@Injectable({ providedIn: 'root' })
export class NewArticleSubmissionService {
  async submitNewArticle(newArticleDTO: NewArticleDTO): Promise<NewArticleSubmissionResult> {
    const response = await fetch('http://localhost:8080/articles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ headline: newArticleDTO.headline, body: newArticleDTO.body })
    });
    if (response.ok) {
      return {};
    } else {
      const responseBody = await response.text();
      return { errorMessage: responseBody }
    }
  }
}
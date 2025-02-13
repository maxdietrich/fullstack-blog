import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class ArticleFetcherService {
  async getArticles() {
    const response = await fetch('http://localhost:8080/articles', {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const articles = await response.json() as Array<{ headline: string; body: string }>;
    return articles;
  }
}
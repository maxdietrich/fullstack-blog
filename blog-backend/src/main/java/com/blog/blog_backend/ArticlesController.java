package com.blog.blog_backend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ArticlesController {

    @GetMapping("/articles")
    public ArticleDTO[] getArticles() {
        ArticleDTO firstArticle = new ArticleDTO("Some article", "This is an article");
        ArticleDTO secondArticle = new ArticleDTO("Another article", "This is another article");
        return new ArticleDTO[]{firstArticle, secondArticle};
    }
}

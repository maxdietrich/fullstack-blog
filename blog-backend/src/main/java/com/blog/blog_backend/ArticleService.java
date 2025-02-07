package com.blog.blog_backend;

import com.blog.blog_backend.persistence.Article;
import com.blog.blog_backend.persistence.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArticleService {

    @Autowired
    private ArticleRepository articleRepository;

    public void createArticle(ArticleDTO articleDTO) {
        Article article = new Article();
        article.setHeadline(articleDTO.headline);
        article.setBody(articleDTO.body);
        articleRepository.save(article);
    }

    public List<Article> getAllArticles() {
        return articleRepository.findAll();
    }
}

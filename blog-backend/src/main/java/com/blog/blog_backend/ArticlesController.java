package com.blog.blog_backend;

import com.blog.blog_backend.persistence.Article;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class ArticlesController {

    @Autowired
    private ArticleService articleService;

    @GetMapping("/articles")
    public List<ArticleDTO> getArticles() {
        List<ArticleDTO> articleDTOs = new ArrayList<ArticleDTO>();
        articleService.getAllArticles().forEach((article -> {
            articleDTOs.add(new ArticleDTO(article.getHeadline(), article.getBody()));
        }));
        return articleDTOs;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/articles")
    public void createArticle(@Valid @RequestBody ArticleDTO articleDTO) {
        articleService.createArticle(articleDTO);
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String, String> handleValidationExceptions(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        return errors;
    }
}

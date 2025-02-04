package com.blog.blog_backend;

public class ArticleDTO {
    String headline;
    String body;

    public ArticleDTO(String headline, String body) {
        this.headline = headline;
        this.body = body;
    }

    public String getBody() {
        return body;
    }

    public String getHeadline() {
        return headline;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public void setHeadline(String headline) {
        this.headline = headline;
    }
}

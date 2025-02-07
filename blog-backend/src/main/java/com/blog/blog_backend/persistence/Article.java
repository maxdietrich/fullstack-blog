package com.blog.blog_backend.persistence;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Article {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String headline;
    private String body;

    public String getHeadline() {
        return headline;
    }

    public String getBody() {
        return body;
    }

    public void setHeadline(String headline) {
        this.headline = headline;
    }

    public void setBody(String body) {
        this.body = body;
    }
}

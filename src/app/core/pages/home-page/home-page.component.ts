import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article, ArticleGetPayload } from '../../models/article.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(private articleService: ArticleService) {}

  articles: Article[];
  loading: boolean = false;

  ngOnInit(): void {
    this.loadArticles();
  }

  loadArticles() {
    this.loading = true;
    this.articleService.getArticles().subscribe({
      next: (data: ArticleGetPayload) => {
        this.articles = data.message;
        this.loading = false;
      },
    });
  }
}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-article-item-full',
  templateUrl: './article-item-full.component.html',
  styleUrls: ['./article-item-full.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ArticleItemFullComponent implements OnInit {
  article: Article;
  ngOnInit() {
    console.log(history.state);
    this.article = history.state.selectedArticle;
  }
}

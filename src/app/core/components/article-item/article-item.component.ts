import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss'],
})
export class ArticleItemComponent implements OnInit {
  @Input() article: Article;
  @Output() newTagAddToSearchEvent = new EventEmitter<string>();

  ngOnInit(): void {
    console.log(this.article);
  }

  addTagToSearch(tag: string, e: Event) {
    e.stopImmediatePropagation();
    console.log('click');
    this.newTagAddToSearchEvent.emit(tag);
  }
}

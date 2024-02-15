import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article, ArticleGetPayload } from '../../models/article.model';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(
    private articleService: ArticleService,
    private messageService: MessageService
  ) {}

  articles: Article[];
  loading: boolean = false;
  rows: number;
  totalRecords: number;

  searchQueryModel: string;

  selectedFilter = { name: 'Newest', value: 'dateAsc' };

  selectedTags: string[] = [];

  filters = [
    { name: 'Newest', value: 'dateAsc' },
    { name: 'Oldest', value: 'dateDesc' },
    { name: 'By Title A-Z', value: 'titleAZ' },
    { name: 'By Title Z-A', value: 'titleZA' },
  ];

  ngOnInit(): void {
    this.loadArticles();
  }

  addTagToSearch(e: string) {
    console.log(e);
    if (this.selectedTags.length < 3) {
      this.selectedTags = this.selectedTags.concat(e);
      this.loadArticles();
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Too many tags',
      });
    }
  }

  executeSearch() {
    this.loadArticles();
  }

  resetSearch() {
    this.searchQueryModel = '';
    this.selectedTags = [];
    this.selectedFilter = { name: 'Newest', value: 'dateAsc' };
    this.loadArticles();
  }

  loadArticles(page: number = 1) {
    this.loading = true;
    this.articleService
      .getArticles(
        this.searchQueryModel,
        this.selectedFilter.value,
        this.selectedTags,
        page
      )
      .subscribe({
        next: (data: ArticleGetPayload) => {
          this.articles = data.message;
          this.rows = data.offset;
          this.totalRecords = data.total_count;
          this.loading = false;
        },
      });
  }

  paginate(event: any) {
    this.loadArticles(event.page + 1);
    //event.first = Index of the first record
    //event.rows = Number of rows to display in new page
    //event.page = Index of the new page
    //event.pageCount = Total number of pages
  }
}

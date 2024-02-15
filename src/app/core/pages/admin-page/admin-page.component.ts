import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { AuthService } from '../../services/auth.service';
import { Article } from '../../models/article.model';
import {
  ConfirmationService,
  ConfirmEventType,
  MessageService,
} from 'primeng/api';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit {
  constructor(
    private articleService: ArticleService,
    private authService: AuthService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  activeUserId: string;
  articles: Article[];

  ngOnInit(): void {
    this.activeUserId = this.authService.getUserId();
    if (this.authService.isCreator() && this.activeUserId) {
      this.loadArticles();
      console.log(this.articles);
    }
  }

  confirmRemoveAction(id: string) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.articleService.deleteArticleById(id).subscribe({
          next: () => {
            this.messageService.add({
              severity: 'info',
              summary: 'Confirmed',
              detail: 'Article has been deleted',
            });
            this.loadArticles();
          },
          error: () => {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Error occurred while deleting article.',
            });
          },
        });
      },
      reject: (type: ConfirmEventType) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({
              severity: 'error',
              summary: 'Rejected',
              detail: 'You have rejected',
            });
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({
              severity: 'warn',
              summary: 'Cancelled',
              detail: 'You have cancelled',
            });
            break;
        }
      },
    });
  }

  loadArticles() {
    this.articleService.getAllArticlesByAuthor(this.activeUserId).subscribe({
      next: (res) => {
        this.articles = res.message;
      },
    });
  }
}

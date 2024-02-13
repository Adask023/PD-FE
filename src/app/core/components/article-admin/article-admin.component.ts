import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ArticleService } from '../../services/article.service';
import { MessageService } from 'primeng/api';
import { UserData } from '../../pages/login-page/login.model';

@Component({
  selector: 'app-article-admin',
  templateUrl: './article-admin.component.html',
  styleUrls: ['./article-admin.component.scss'],
})
export class ArticleAdminComponent {
  articleForm!: FormGroup;
  userData: UserData;

  constructor(
    private messageService: MessageService,
    private articleService: ArticleService
  ) {}

  ngOnInit() {
    const userDataToParse = sessionStorage.getItem('userData');
    if (typeof userDataToParse === 'string') {
      this.userData = JSON.parse(userDataToParse);
    }

    console.log(this.userData);
    this.articleForm = new FormGroup({
      title: new FormControl(),
      tags: new FormControl(),
      links: new FormControl(),
      body: new FormGroup({
        title: new FormControl(),
        body: new FormControl(),
      }),
    });
  }

  // "title": "string",
  // "tags": [],
  // "links": [],
  // "body": {
  //   "title": "string",
  //   "body": "string"
  // }

  onSubmit() {
    console.log(this.articleForm.value);

    this.articleService.createArticle(this.articleForm.value).subscribe({
      next: (res) => {
        console.log(res);
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'New Article has been added',
        });
      },
      error: (er) => {
        console.log(er);

        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: er?.error?.detail,
        });
      },
    });
  }
}

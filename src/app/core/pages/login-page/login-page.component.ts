import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../services/auth.service';
import { LoginResponse } from './login.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  loginForm!: FormGroup;

  constructor(
    private router: Router,
    private messageService: MessageService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      user_name: new FormControl(),
      password: new FormControl(),
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe({
      next: (res: LoginResponse) => {
        console.log(res);
        sessionStorage.setItem('userData', JSON.stringify(res));
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Login succesfuly',
        });
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1000);
      },
      error: (er) => {
        console.log(er);

        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: er?.error?.detail,
        });
        this.loginForm.reset();
      },
    });
  }
}

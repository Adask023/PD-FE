import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent {
  registerForm!: FormGroup;

  users: any[] = [
    { name: 'User', key: 'user' },
    { name: 'Creator', key: 'creator' },
];

  constructor(
    private router: Router,
    private messageService: MessageService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.registerForm = new FormGroup({
      user_id: new FormControl(),
      user_name: new FormControl(),
      password: new FormControl(),
      email: new FormControl(),
      name: new FormControl(),
      surname: new FormControl(),
      userType: new FormControl(),
    });
  }

  // "user_id": "string",
  // "user_name": "string",
  // "password": "string",
  // "email": "user@example.com",
  // "name": "string",
  // "surname": "string",
  // "userType": "user"
  // onSubmit(){
  //   console.log(this.registerForm.value)
  //   // this.router.navigate(['/home'])
  // }

  onSubmit() {
    console.log(this.registerForm.value);
    this.authService.register(this.registerForm.value).subscribe({
      next: (res) => {
        console.log(res); 
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Register succesfuly, please log in',
        });
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 1000);
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

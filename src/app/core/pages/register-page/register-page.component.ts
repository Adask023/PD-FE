import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {


  registerForm!: FormGroup;

  constructor( private router: Router ) {}

  ngOnInit() {
    this.registerForm = new FormGroup({
      login: new FormControl(),
      password: new FormControl(),
      rePassword: new FormControl(),
      email: new FormControl(),
      name: new FormControl(),
      lastName: new FormControl(),
      userType: new FormControl(),
    });
  }

  onSubmit(){
    console.log(this.registerForm.value)
    this.router.navigate(['/home'])
  }

}



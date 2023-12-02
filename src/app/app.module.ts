import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { StarterPageComponent } from './core/pages/starter-page/starter-page.component';
import { HomePageComponent } from './core/pages/home-page/home-page.component';
import { AdminPageComponent } from './core/pages/admin-page/admin-page.component';
import { LoginPageComponent } from './core/pages/login-page/login-page.component';
import { RegisterPageComponent } from './core/pages/register-page/register-page.component';
import { PasswordModule } from 'primeng/password';
import { CardModule } from 'primeng/card';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ArticleItemComponent } from './core/components/article-item/article-item.component';

@NgModule({
  declarations: [
    AppComponent,
    StarterPageComponent,
    HomePageComponent,
    AdminPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ArticleItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CardModule,
    PasswordModule,
    ReactiveFormsModule,
    InputTextModule,
    RadioButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

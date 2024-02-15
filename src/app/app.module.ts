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
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './core/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { TopNavComponent } from './core/components/top-nav/top-nav.component';
import { ArticleAdminComponent } from './core/components/article-admin/article-admin.component';
import { ChipsModule } from 'primeng/chips';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ArticleService } from './core/services/article.service';
import { AccordionModule } from 'primeng/accordion';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SafePipe } from './core/pipes/safe.pipe';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { EditorModule } from 'primeng/editor';
import { PaginatorModule } from 'primeng/paginator';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';

@NgModule({
  declarations: [
    AppComponent,
    StarterPageComponent,
    HomePageComponent,
    AdminPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ArticleItemComponent,
    TopNavComponent,
    ArticleAdminComponent,
    SafePipe,
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
    ToastModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ChipsModule,
    InputTextareaModule,
    AccordionModule,
    ProgressSpinnerModule,
    FormsModule,
    DropdownModule,
    EditorModule,
    PaginatorModule,
    ConfirmDialogModule,
    TabMenuModule,
  ],
  providers: [MessageService, AuthService, ArticleService, ConfirmationService],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarterPageComponent } from './core/pages/starter-page/starter-page.component';
import { HomePageComponent } from './core/pages/home-page/home-page.component';
import { AdminPageComponent } from './core/pages/admin-page/admin-page.component';
import { LoginPageComponent } from './core/pages/login-page/login-page.component';
import { RegisterPageComponent } from './core/pages/register-page/register-page.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: StarterPageComponent, pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterPageComponent, pathMatch: 'full' },
  {
    path: 'home',
    component: HomePageComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'admin',
    component: AdminPageComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

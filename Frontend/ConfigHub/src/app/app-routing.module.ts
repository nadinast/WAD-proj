import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewConfigFileComponent} from "./new-config-file/new-config-file.component";
import {HomeComponent} from "./home/home.component";
import {ConfigFileViewComponent} from "./config-file-view/config-file-view.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./home/register/register.component";
import {LoginGuardService} from "./services/router-guards/loginGuard.service";
import {FallbackLoginComponent} from "./fallback-login/fallback-login.component";
import {LogoutGuardService} from "./services/router-guards/logoutGuard.service";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'new-file',
    component: NewConfigFileComponent,
    canActivate: [LoginGuardService]
  },
  {
    path: 'view-files',
    component: ConfigFileViewComponent,
    canActivate: [LoginGuardService]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LogoutGuardService]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [LogoutGuardService]
  },
  {
    path: 'login/oops',
    component: FallbackLoginComponent,
    canActivate: [LogoutGuardService]
  },
  {path: '**', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuardService, LogoutGuardService]
})
export class AppRoutingModule { }

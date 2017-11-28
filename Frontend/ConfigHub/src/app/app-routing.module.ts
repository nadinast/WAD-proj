import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewConfigFileComponent} from "./new-config-file/new-config-file.component";
import {HomeComponent} from "./home/home.component";
import {ConfigFileViewComponent} from "./config-file-view/config-file-view.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./home/register/register.component";
import {LoginGuardService} from "./services/http/loginGuard.service";
import {FallbackLoginComponent} from "./fallback-login/fallback-login.component";

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
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login/oops', component: FallbackLoginComponent},
  {path: '**', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuardService]
})
export class AppRoutingModule { }

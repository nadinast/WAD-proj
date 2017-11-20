import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewConfigFileComponent} from "./new-config-file/new-config-file.component";
import {HomeComponent} from "./home/home.component";
import {ConfigFileViewComponent} from "./config-file-view/config-file-view.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./home/register/register.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'new-file', component: NewConfigFileComponent},
  {path: 'view-files', component: ConfigFileViewComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

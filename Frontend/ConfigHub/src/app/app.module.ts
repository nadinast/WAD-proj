import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {GrowlModule, InputTextModule, MenubarModule, MenuItem, PasswordModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {MenuModule} from 'primeng/primeng';
import {PanelModule} from 'primeng/primeng';
import {InputTextareaModule} from 'primeng/primeng';
import {ToolbarModule} from 'primeng/primeng';
import {FileUploadModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {ConfirmDialogModule,ConfirmationService} from 'primeng/primeng';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './home/register/register.component';
import { ConfigFileListComponent } from './config-file-view/config-file-list/config-file-list.component';
import { ConfigFileViewComponent } from './config-file-view/config-file-view.component';
import { NewConfigFileComponent } from './new-config-file/new-config-file.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import {UserRegisterService} from "./services/http/userRegister.service";
import {HttpModule} from "@angular/http";
import {UserCalcService} from "./usage-stats/calculation/user-calc.service";
import {StatisticsService} from "./services/http/statistics.service";
import { UsageVisitorComponent } from './usage-stats/usage-visitor/usage-visitor.component';
import { EmailDomainVisitorComponent } from './usage-stats/email-domain-visitor/email-domain-visitor.component';
import {UserLoginService} from "./services/http/userLogin.service";
import { FallbackLoginComponent } from './fallback-login/fallback-login.component';
import {FileUploadService} from "./services/http/fileUpload.service";

@NgModule({
  declarations: [
    AppComponent,
    NavigationMenuComponent,
    HomeComponent,
    RegisterComponent,
    ConfigFileListComponent,
    ConfigFileViewComponent,
    NewConfigFileComponent,
    LoginComponent,
    UsageVisitorComponent,
    EmailDomainVisitorComponent,
    FallbackLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    ButtonModule,
    MenuModule,
    PanelModule,
    BrowserAnimationsModule,
    InputTextareaModule,
    ToolbarModule,
    InputTextModule,
    PasswordModule,
    FormsModule,
    HttpModule,
    FileUploadModule,
    DialogModule,
    ConfirmDialogModule,
    GrowlModule
  ],
  providers: [UserRegisterService, StatisticsService, UserLoginService, FileUploadService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

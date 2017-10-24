import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MenubarModule,MenuItem} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {MenuModule} from 'primeng/primeng';
import {PanelModule} from 'primeng/primeng';
import {InputTextareaModule} from 'primeng/primeng';
import {ToolbarModule} from 'primeng/primeng';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './home/register/register.component';
import { ConfigFileListComponent } from './config-file-view/config-file-list/config-file-list.component';
import { ConfigFileViewComponent } from './config-file-view/config-file-view.component';
import { NewConfigFileComponent } from './new-config-file/new-config-file.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationMenuComponent,
    HomeComponent,
    RegisterComponent,
    ConfigFileListComponent,
    ConfigFileViewComponent,
    NewConfigFileComponent
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
    ToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

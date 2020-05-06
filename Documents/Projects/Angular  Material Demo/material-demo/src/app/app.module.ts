import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ButtonComponent } from './button/button.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { FormComponent } from './form/form.component';
import { TextComponent } from './text/text.component';
import { TabComponent } from './tab/tab.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { IconComponent } from './icon/icon.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ButtonToggleComponent,
    FormComponent,
    TextComponent,
    TabComponent,
    ProgressBarComponent,
    IconComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

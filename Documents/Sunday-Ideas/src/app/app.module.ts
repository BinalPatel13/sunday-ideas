import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/header/header.component';
import { HomeComponent } from './modules/home/home.component';
import { GalleryComponent } from './modules/gallery/gallery.component';
import { ContactUsComponent } from './modules/contact-us/contact-us.component';
import { ExploreArtComponent } from './modules/explore-art/explore-art.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    GalleryComponent,
    ContactUsComponent,
    ExploreArtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { GalleryComponent } from './modules/gallery/gallery.component';
import { ContactUsComponent } from './modules/contact-us/contact-us.component';
import { ExploreArtComponent } from './modules/explore-art/explore-art.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'explore-art',
    component: ExploreArtComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

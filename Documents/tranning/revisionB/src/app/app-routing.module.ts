import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { FlowerComponent } from './flower/flower.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';


const appRoutes: Routes = [
    { path: '',redirectTo:'/home', pathMatch: 'full' },
    { path: 'home', component: FlowerComponent },    
    { path: 'auth', component: AuthComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'about', component: AboutComponent }
];

@NgModule({
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule {
  
  }


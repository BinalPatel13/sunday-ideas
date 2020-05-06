import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { TextComponent } from './text/text.component';
import { ButtonComponent } from './button/button.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';


const routes: Routes = [
  { path: "", redirectTo: "/mat-form", pathMatch: "full" },
  {
    path: 'mat-text',
    component: TextComponent
  },
  {
    path: 'mat-button',
    component: ButtonComponent
  },
  {
    path: 'mat-button-toggle',
    component: ButtonToggleComponent
  },
  {
    path:'mat-form',
    component: FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

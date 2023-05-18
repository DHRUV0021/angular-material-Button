import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from 'src/page/main/main.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';

const routes: Routes = [
  {
    path:'button',
    component:MainComponent
  },
  {
    path:'ButtonToggle',
    component:ButtonToggleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from './appModules/mat.module';
import { HeaderComponent } from './header/header.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { MainComponent } from 'src/page/main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderComponent,
    MainComponent,
    ButtonToggleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

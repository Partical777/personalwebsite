import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainContentComponent } from './components/main-content/maincontent.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, MainContentComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

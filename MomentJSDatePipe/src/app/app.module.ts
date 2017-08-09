import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import {MyDatePipe} from './app.date.pipe'

@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent, MyDatePipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

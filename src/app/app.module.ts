import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RidersListComponent } from './components/riders-list/riders-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RidersListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClient,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

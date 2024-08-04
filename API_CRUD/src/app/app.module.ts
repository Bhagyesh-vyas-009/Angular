import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacultyComponent } from './faculty/faculty.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailFacultyComponent } from './detail-faculty/detail-faculty.component';


@NgModule({
  declarations: [
    AppComponent,
    FacultyComponent,
    DetailFacultyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './components/events/events.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AddEventPageComponent } from './pages/add-event-page/add-event-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    EventsComponent,
    AboutPageComponent,
    NavigationComponent,
    AdminPageComponent,
    AddEventPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

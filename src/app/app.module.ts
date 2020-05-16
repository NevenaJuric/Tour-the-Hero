import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroSpecialityComponent } from './hero-speciality/hero-speciality.component';
import { MessagesComponent } from './messages/messages.component';
import { MessagesSpecComponent } from './messages-spec/messages-spec.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClientModule } from '@angular/common/http';

// imitira server
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroListComponent } from './hero-list/hero-list.component';


@NgModule({
   declarations: [
      AppComponent,
      HeroesComponent,
      HeroDetailComponent,
      HeroSpecialityComponent,
      MessagesComponent,
      MessagesSpecComponent,
      DashboardComponent,
      HeroSearchComponent,
      CrisisListComponent,
      HeroListComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule,
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,
      {dataEncapsulation: false}
      )
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

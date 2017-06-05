import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }   from '@angular/http';
import { AppRoutingModule }    from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }        from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import { DashboardComponent }  from './dashboard.component';
import { HeroService }         from './hero.service';
import { PiplatesService}      from './piplates.service';
import { PiplatesComponent }   from './piplates.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService,
      { passThruUnknownUrl: true }
    ),
  ],
  declarations: [ 
      AppComponent,
      HeroDetailComponent,
      HeroesComponent,
      DashboardComponent,
      PiplatesComponent
    ],
    providers: [ 
      HeroService,
      PiplatesService
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

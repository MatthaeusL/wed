import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartseiteComponent } from './startseite/startseite.component';
import { FormularseiteComponent } from './formularseite/formularseite.component';
import { KartenansichtseiteComponent } from './kartenansichtseite/kartenansichtseite.component';

@NgModule({
  declarations: [
    AppComponent,
    StartseiteComponent,
    FormularseiteComponent,
    KartenansichtseiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

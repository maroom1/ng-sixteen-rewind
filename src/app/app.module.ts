import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonComponent } from './components/person/person.component';
import { PersonListComponent } from './components/person-list/person-list.component';
import { AddPersonComponent } from './components/add-person/add-person.component';
import { PersonService } from './services/person.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PersonListComponent,
    AddPersonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }

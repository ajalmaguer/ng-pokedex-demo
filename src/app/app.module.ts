import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PokeService } from './poke.service'

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { CollectionComponent } from './collection/collection.component';

@NgModule({
  declarations: [ // componentes go here
    AppComponent,
    ListComponent,
    DetailsComponent,
    CollectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [ // services go here
	PokeService
	// spriteSerivce
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { StoreModule } from '@ngrx/store';
import { bookReducer } from './state/books/books.reducer';
import { collectionReducer } from './state/collection/collection.reducer';
@NgModule({
  declarations: [
    AppComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ books: bookReducer, collection: collectionReducer}),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

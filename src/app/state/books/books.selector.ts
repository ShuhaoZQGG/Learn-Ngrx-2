import { createFeatureSelector } from "@ngrx/store";
import { Book } from "src/app/books/books.model";

export const selectBooks = createFeatureSelector<ReadonlyArray<Book>>('books');

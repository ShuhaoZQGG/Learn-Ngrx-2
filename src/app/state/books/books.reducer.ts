import { createReducer, on } from "@ngrx/store";
import { retrieveBookList } from "./books.action";
import { Book } from "../../books/books.model";

export const initialState: ReadonlyArray<Book> = []; 

export const bookReducer = createReducer(
  initialState,
  on(retrieveBookList, (state, { books }) => books)
)
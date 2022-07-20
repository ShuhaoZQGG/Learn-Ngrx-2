import { createAction, props } from "@ngrx/store";
import { Book } from "../../books/books.model";
import { RETRIEVE_BOOK_List } from "./books.constants";

export const retrieveBookList = createAction (
  RETRIEVE_BOOK_List,
  props<{ books: ReadonlyArray<Book>}>()
)
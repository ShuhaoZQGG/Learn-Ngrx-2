import { createSelector } from "@ngrx/store";
import { selectBooks } from "./books/books.selector";
import { selectCollection } from "./collection/collection.selector";

export const select = createSelector(
  selectBooks,
  selectCollection,
  (books, collection) => {
    return collection.map((id) => books.find((book) => book.id === id))
  }
)
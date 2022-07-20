import { createReducer, on } from "@ngrx/store";
import { addBook, removeBook } from "./collection.action";

export const initialState: ReadonlyArray<string> = [];

export const collectionReducer = createReducer(
  initialState,
  on(removeBook, (state, { bookId }) => state.filter((id: string) => id != bookId)),
  on(addBook, (state, { bookId } ) => {
    if (state.indexOf(bookId) > -1) {
      return state;
    } 

    return [...state, bookId];
  })
)
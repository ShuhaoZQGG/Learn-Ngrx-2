import { createAction, props } from "@ngrx/store";

export const addBook = createAction(
  ADD_BOOK,
  props<{ bookId: string}>()
)

export const removeBook = createAction(
  REMOVE_BOOK,
  props<{ bookId: string }>()
)
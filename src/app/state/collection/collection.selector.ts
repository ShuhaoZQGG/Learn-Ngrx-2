import { createFeatureSelector } from "@ngrx/store";

export const selectCollection = createFeatureSelector<ReadonlyArray<string>>('collection');
import { configureStore } from '@reduxjs/toolkit';
import annotationReducer from './annotationSlice';

/**
 * Combinez les reducers dans l'objet store.
 * 
 * @returns store 
 */
export function makeStore() {
  return configureStore({
    reducer: {
      annotation: annotationReducer
    }
  });
};

const store = makeStore()

export default store
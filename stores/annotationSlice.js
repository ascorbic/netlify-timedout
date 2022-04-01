import { ConstructionOutlined } from "@mui/icons-material";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

/**
 * Rq: It's safe to call mutating functions like Array.push()
 * or modify object fields like state.someField = someValue inside of
 * createSlice(), because it converts those mutations into safe immutable
 * updates internally using the Immer library, but don't try to mutate any
 * data outside of createSlice!
 */
export const slice = createSlice({
  name: "annotation",
  initialState: {
    anno: [],
  },
  reducers: {
    /**
     * Reset le store à l'ouverture
     * @param {*} state
     * @param {*} action
     */
    resetAnnoStore: (state, action) => {
      state.anno = [];
    },
  }
});

/**
 * Ajouter un élément dans le store :
 * @param {*} array anno
 * @param {*} action payload
 * @param {*} obj custom obj
 * @returns
 */
function insertItem(array, action, obj) {
  let newArray = array.slice();
  newArray.splice(action.index, 0, obj);
  return newArray;
}

export const {
  addAnnotation,
  resetAnnoStore,
  reduceAnnotation,
} = slice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (annotation) => (dispatch) => {
  setTimeout(() => {
    dispatch(addAnnotation(annotation));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const selectCount = state => state.counter.value;
export const selectAnno = (state) => state.annotation;

// DEBUG
// export const tryAnno = state => state.map(annotation => reduceAnnotation(annotation, action));

export default slice.reducer;

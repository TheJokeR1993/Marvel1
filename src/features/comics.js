import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  limit: 8,
  page: 1,
  offset: 0,
  paginationLimit: [8, 24, 48, 96],
};

export const comics = createSlice({
  name: "comics",
  initialState,
  reducers: {
    changePageComics: (state, action) => {
      return {
        ...state,
        page: action.payload,
        offset: action.payload * state.limit - state.limit,
      };
    },
    changeLimitComics: (state, action) => {
      return { ...state, limit: action.payload, page: 1, offset: 0 };
    },
  },
});

export const { changePageComics, changeLimitComics } = comics.actions;

export default comics.reducer;

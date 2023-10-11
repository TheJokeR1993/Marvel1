import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  limit: 9,
  page: 1,
  offset: 0,
  active: "",
  paginationLimit: [9, 27, 54, 99],
};

export const character = createSlice({
  name: "character",
  initialState,
  reducers: {
    changePageCharacter: (state, action) => {
      return {
        ...state,
        page: action.payload.page,
        offset: action.payload.offset,
      };
    },
    changeActiveCharacter: (state, action) => {
      state.active = action.payload;
    },
    changeLimitCharacter: (state, action) => {
      return { ...state, limit: action.payload, page: 1, offset: 0 };
    },
  },
});

export const {
  changePageCharacter,
  changeActiveCharacter,
  changeLimitCharacter,
} = character.actions;

export default character.reducer;

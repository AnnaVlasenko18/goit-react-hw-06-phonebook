import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter(state, actions) {
      return (state = actions.payload);
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { changeFilter } = filterSlice.actions;

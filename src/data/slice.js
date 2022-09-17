import { createSlice } from '@reduxjs/toolkit';

/* interface InitState {
  value: number;
} */

const initialState = {
  items: [],
};

const itemSlice = createSlice({
  name: 'item',
  initialState: initialState,
  reducers: {
    addItem: (state, { payload }) => {
      state.items.push(payload);
    },
  },
});

export const { addItem } = itemSlice.actions;
export default itemSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

/* interface InitState {
  value: number;
} */

const initialState = {
  items: [],
  total: {},
};

const itemSlice = createSlice({
  name: 'item',
  initialState: initialState,
  reducers: {
    addItem: (state, { payload }) => {
      state.items.push(payload);
      state.total = totalCostHelper(state.items);
    },
    increaseCount: (state, { payload }) => {
      state.items = state.items.map((el) => {
        return el.id === payload ? { ...el, count: el.count + 1 } : el;
      });
      state.total = totalCostHelper(state.items);
    },
    decreaseCount: (state, { payload }) => {
      state.items = state.items.map((el) => {
        if (el.count === 0) return el;
        return el.id === payload ? { ...el, count: el.count - 1 } : el;
      });
      state.total = totalCostHelper(state.items);
    },
  },
});

export const { addItem, increaseCount, decreaseCount } = itemSlice.actions;
export default itemSlice.reducer;

const totalCostHelper = (items) => {
  const count = items.reduce((acc, current) => {
    return acc + current.count;
  }, 0);
  const cost = items
    .reduce((acc, current) => {
      return acc + current.count * current.prices[0].amount;
    }, 0)
    .toFixed(2);
  return { count, cost };
};

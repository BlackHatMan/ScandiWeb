import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  total: {},
  indexSelectedCurrency: 0,
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
      state.items = state.items
        .map((el) => {
          return el.id === payload ? { ...el, count: el.count - 1 } : el;
        })
        .filter((el) => el.count !== 0);

      state.total = totalCostHelper(state.items);
    },
    setCurrency: (state, { payload }) => {
      state.indexSelectedCurrency = payload;
    },
  },
});

export const { addItem, increaseCount, decreaseCount, setCurrency } = itemSlice.actions;
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
  const tax = (cost * 1.21 - cost).toFixed(2);
  const total = tax + cost;
  return { count, cost, tax, total };
};

import { createSlice } from '@reduxjs/toolkit';
import { item } from './../types/types';

const initialState: state = {
  items: [],
  total: { count: 0, cost: 0, tax: 0, total: 0 },
  indexSelectedCurrency: 0,
  symbol: '$',
};
interface state {
  items: item[];
  total: {
    count: number;
    cost: number;
    tax: number;
    total: number;
  };
  indexSelectedCurrency: number;
  symbol: string;
}

const itemSlice = createSlice({
  name: 'item',
  initialState: initialState,
  reducers: {
    addItem: (state, { payload }) => {
      state.items.push(payload);
      state.total = totalCostHelper(state.items, state.indexSelectedCurrency);
    },
    increaseCount: (state, { payload }) => {
      state.items = state.items.map((el) => {
        return el.id === payload ? { ...el, count: el.count + 1 } : el;
      });
      state.total = totalCostHelper(state.items, state.indexSelectedCurrency);
    },
    decreaseCount: (state, { payload }) => {
      state.items = state.items
        .map((el) => {
          return el.id === payload ? { ...el, count: el.count - 1 } : el;
        })
        .filter((el) => el.count !== 0);

      state.total = totalCostHelper(state.items, state.indexSelectedCurrency);
    },
    setCurrency: (state, { payload }) => {
      state.indexSelectedCurrency = payload.index;
      state.symbol = payload.symbol;
      state.total = totalCostHelper(state.items, payload.index);
    },
  },
});

export const { addItem, increaseCount, decreaseCount, setCurrency } = itemSlice.actions;
export default itemSlice.reducer;

const totalCostHelper = (items: item[], indexCurrency: number) => {
  const count = +items.reduce((acc, current) => {
    return acc + current.count;
  }, 0);

  const cost = +items
    .reduce((acc, current) => {
      return acc + current.count * current.prices[indexCurrency].amount;
    }, 0)
    .toFixed(2);

  const tax = +(cost * 1.21 - cost).toFixed(2);

  const total = tax + cost;
  return { count, cost, tax, total };
};

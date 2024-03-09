import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  items: [],
  selectedItem: null,
};

const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    updateItem: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },
    selectItem: (state, action) => {
      state.selectedItem = action.payload;
    },
  },
});

export const { addItem, removeItem, updateItem, selectItem } = slice.actions;

export default slice.reducer;

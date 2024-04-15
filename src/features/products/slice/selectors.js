import inititialState from ".";
import { createSelector } from "@reduxjs/toolkit";
import dayjs from "../../../utils/day";

export const selectProducts = (state) => state.products || inititialState;

export const selectItems = createSelector(
  selectProducts,
  (products) => products.items
);

export const selectSelectedItem = createSelector(
  selectProducts,
  (products) => products.selectedItem
);

export const selectLoading = createSelector(
  selectProducts,
  (products) => products.loading
);

export const selectError = createSelector(
  selectProducts,
  (products) => products.error
);

// get the product with the latest created date using dayjs
export const selectLatestProduct = createSelector(selectItems, (items) =>
  items.reduce(
    (prev, current) =>
      dayjs(prev.createdAt) > dayjs(current.createdAt) ? prev : current,
    {}
  )
);

export const selectProductState = createSelector(
  selectItems,
  selectSelectedItem,
  selectLoading,
  selectError,
  (items, selectedItem, loading, error) => ({
    items,
    selectedItem,
    loading,
    error,
  })
);

export const selectProductById = (id) =>
  createSelector(selectItems, (items) => items.find((item) => item.id == id));

export const selectProductByCategory = (category) =>
  createSelector(selectItems, (items) =>
    items.filter((item) => item.category === category)
  );

export const selectProductByNotSold = createSelector(selectItems, (items) =>
  items.filter((item) => !item.isSold)
);

export const selectProductBySold = createSelector(selectItems, (items) =>
  items.filter((item) => item.isSold)
);

export const selectProductByDeleted = createSelector(selectItems, (items) =>
  items.filter((item) => item.deleted)
);

export const selectProductByNotDeleted = createSelector(selectItems, (items) =>
  items.filter((item) => !item.deleted)
);

export const selectActiveProducts = createSelector(selectItems, (items) =>
  items.filter((item) => !item.deleted && !item.isSold)
);

// select a random product
export const selectRandomProduct = createSelector(
  selectItems,
  (items) => items[Math.floor(Math.random() * items.length)]
);

// select a random product that is not sold or deleted
export const selectRandomActiveProduct = createSelector(
  selectActiveProducts,
  (items) => items[Math.floor(Math.random() * items.length)]
);

// select product by orientation width, height - portrait, landscape
export const selectProductByOrientation = (orientation) =>
  createSelector(selectItems, (items) =>
    items.filter((item) =>
      item.width > item.height
        ? orientation === "landscape"
        : orientation === "portrait"
    )
  );

// select active products by orientation width, height - portrait, landscape
export const selectActiveProductsByOrientation = (orientation) => {
  if (orientation === "all") {
    return selectActiveProducts;
  } else {
    return createSelector(selectActiveProducts, (items) =>
      items.filter((item) =>
        item.width > item.height
          ? orientation === "landscape"
          : orientation === "portrait"
      )
    );
  }
};

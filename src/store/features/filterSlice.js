import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../data/products";

const initialState = {
    products: [...products],
};

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        handleSort: (state, action) => {
            if (action.payload === "Low") {
                state.products = [...state.products.sort((a, b) => a.price > b.price ? 1 : -1)]
            } else if (action.payload === "High") {
                state.products = [...state.products.sort((a, b) => a.price < b.price ? 1 : -1)]
            } else {
                state.products = [...state.products.sort((a, b) => a.id > b.id ? 1 : -1)]
            }
        },
        handleCategory: (state, action) => {
            if (action.payload === "All") {
                state.products = [...products];
            } else {
                const categoryItems = products.filter((item) => {
                    return item.category === action.payload;
                });
                state.products = categoryItems;
            }
        },

    },
});

export const filterReducer = filterSlice.reducer;
export const { handleSort, handleCategory } =
    filterSlice.actions;
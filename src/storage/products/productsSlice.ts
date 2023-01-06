import { createSlice } from "@reduxjs/toolkit";
import packageInfo from "../../products.json"

const products = packageInfo.products

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
            items: products,
            budget: 100000000000,
    },
    reducers:{
        budgetCounter:(state, action)=>{}

    }
});

export const { budgetCounter } = productsSlice.actions;
export default productsSlice.reducer;
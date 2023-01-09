import { createSlice } from "@reduxjs/toolkit";
import packageInfo from "../../products.json"

const products = packageInfo.products

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
            items: products,
            budget: 100000000000,
            initialMoney: 100000000000,
    },
    reducers:{
        budgetCounter:(state, action)=>{
            //setting count data
            const { count } = action.payload;
            const product = state.items.find(
              (product) => product.id === action.payload.id
            );
            product!.count = count;
            //budget update
            let price = 0;
            state.items.map((product) => {
              price += Number(product.count) * Number(product.productPrice);
            });
            state.budget = Number(state.initialMoney) - Number(price);
        }

    }
});

export const { budgetCounter } = productsSlice.actions;
export default productsSlice.reducer;
import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        products:[],
        quantity:0,
        total:0,
    },
    reducers:{
        logoutProduct(state,action){
            state.quantity = 0;
            state.products = [];
            state.total = 0;
        },
        addProduct:(state,action) => {
            state.quantity +=1;
            state.products.push(action.payload);
            state.total += action.payload.price;
        },
        removeProduct:(state,action) => {
            state.quantity -=1;
            state.products.pop(action.payload);
            state.total -= action.payload.price;
        },
    },
});

export const {addProduct,removeProduct,logoutProduct} = cartSlice.actions;
export default cartSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

    const initialState = {
        products: [],
        productsNumber: 0
    }

export const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addToCart: (state,action) => {
            // check product already in cart or not 
            const addProductExists = state.products.find((product)=> product.id === action.payload.id )
            if (addProductExists){
                addProductExists.quantity += parseInt(action.payload.quantity);
            } 
             else{
                state.products.push({...action.payload, quantity: parseInt(action.payload.quantity)});
             }

            state.productsNumber = state.productsNumber + parseInt(action.payload.quantity) ;
            
        },
        removeFromCart: (state,action) => {
            // find the product to removing from array
            const productToRemove = state.products.find((product) => product.id === action.payload )
            // Remove the quantity from product number
            state.productsNumber = state.productsNumber - productToRemove.quantity
            // Find Index of product Removing
            const index = state.products.findIndex((product)=> product.id === action.payload )
            // Remove from the Array
            state.products.splice(index,1)
        }
    }
});

export const {addToCart,removeFromCart} = CartSlice.actions;
export default CartSlice.reducer;
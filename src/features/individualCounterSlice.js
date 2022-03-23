import { createSlice } from "@reduxjs/toolkit";
import { jets } from "../data";

export const individualCounterSlice = createSlice ({
    name: 'individualCounter',
    initialState: {
        value: [{id: 0, quantity: 0}]
    },
    reducers: {
        addItem: (state, action) => {
            const customLength = jets.length+2;
            let index = action.payload;
            state.value.length = customLength;


            if(state.value[index]){  
            let initial_q = state.value[index].quantity;
            let new_q = initial_q + 1;
            state.value.splice(index, 1, {id: index, quantity: new_q});
            }

            else{
                state.value.splice(index, 0, {id: index, quantity: 1});
            }
        },
        clearList: (state) => {
            state.value = [{id: 0, quantity: 0}];
        },
        removeItem: (state, action) => {
            let index = action.payload;
            let initial_q = state.value[index].quantity;
            let new_q = initial_q - 1;
            state.value.splice(index, 1, {id: index, quantity: new_q});
        },
        clearItems: (state, action) => {
            let index = action.payload;
            state.value.splice(index, 1, {id: index, quantity: 0});
        }
    }
})

export const {addItem, clearList, removeItem, clearItems} = individualCounterSlice.actions

export default individualCounterSlice.reducer
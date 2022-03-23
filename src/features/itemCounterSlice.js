import { createSlice } from "@reduxjs/toolkit";

export const itemCounterSlice = createSlice ({
    name: 'itemCounter',
    initialState: {
        value: 0
    },
    reducers: {
        setCounter: (state) => {
            state.value += 1;
        },
        clearCounter: (state) => {
            state.value = 0;
        },
        removeOneItem: (state) => {
            state.value -= 1;
        },
        removeAllItems: (state, action) => {
            state.value -= action.payload;
        }
    }
})

export const {setCounter, clearCounter, removeOneItem, removeAllItems} = itemCounterSlice.actions

export default itemCounterSlice.reducer
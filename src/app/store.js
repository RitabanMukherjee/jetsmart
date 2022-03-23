import { configureStore } from "@reduxjs/toolkit";
import itemCounterReducer from '../features/itemCounterSlice';
import individualCounterReducer from '../features/individualCounterSlice';

export const store = configureStore ({
    reducer:{
    itemCounter: itemCounterReducer,
    individualCounter: individualCounterReducer
    }
})

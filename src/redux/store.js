import { configureStore } from "@reduxjs/toolkit";
import itemCounterReducer from './itemCount';

export default configureStore({
    reducer: {
        itemCounter: itemCounterReducer
    }
});
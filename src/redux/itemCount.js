import {createSlice, configureStore} from '@reduxjs/toolkit';

export const itemCounterSlice = createSlice({
    name: 'itemCounter',
    initialState: {
        value: 0
    },
    reducers: {
        incremented: (state) => {
            state.value += 1
        },
        decremented: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        decrementByAmount: (state, action) => {
            state.value -= action.payload
        }
    }
})

export const {incremented, decremented, incrementByAmount, decrementByAmount} = itemCounterSlice.actions;

export default itemCounterSlice.reducer;
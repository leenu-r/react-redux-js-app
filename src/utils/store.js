import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import userDetailsSlice from './userDetailsSlice';

const store = configureStore({
    reducer: {
        counter: counterSlice,
        userDetails: userDetailsSlice,
    }
});

export default store;
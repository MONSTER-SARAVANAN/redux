import { configureStore} from "@reduxjs/toolkit";
import CounterReducer from '../features/counter/counterSlice'


export const store = configureStore({
    reducer:{
       counter : CounterReducer,

    }
})
import { configureStore } from "@reduxjs/toolkit";
import reservationsReducer from "../features/reservationSlice";
import customerReducer from "../features/customerSlice";


export const store = configureStore({
    //inside im gonna have different slices//
    reducer: {
        reservations: reservationsReducer,
        customer: customerReducer
    }
})

//exporting the state
export type RootState = ReturnType<typeof store.getState>
//exporting boilerplate 
export type AppDispatch = typeof store.dispatch
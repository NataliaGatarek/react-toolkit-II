import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface ReservationState {
    value: string[]
}

const initialState: ReservationState = {
    value:[]
}

export const reservationsSlice = createSlice({
    name: "reservations",
    initialState,
    // in reducers bunch of methods that are going to update the state//
    reducers: {
        // Im going to create the method that is going to update the initial state//
        addReservation: (state, action: PayloadAction<string>) => {
            state.value.push(action.payload)
        },
        removeReservation: (state, action: PayloadAction<number>)  => {
            state.value.splice(action.payload, 1)
        }
    }
});

export const {addReservation, removeReservation} = reservationsSlice.actions
// Im able to access the reducer from other place//
export default reservationsSlice.reducer;
// need to go to the store and add there the reducer that was created//

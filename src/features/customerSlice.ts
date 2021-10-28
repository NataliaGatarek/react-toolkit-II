import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface CustomerState {
    value: Customer[]
}
interface AddFoodToCustomerPayload {
    food: string;
    id: string;
}
interface Customer {
    id: string;
    blue: string;
    food:string[]
}
const initialState: CustomerState = {
    value:[]
}

export const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {
        addCustomer: (state, action: PayloadAction<Customer>) => {
            state.value.push(action.payload);
        },
        addFoodToCustomer: (state, action: PayloadAction<AddFoodToCustomerPayload>) => {
            state.value.forEach((customer => {
                if (customer.id === action.payload.id) {
                    customer.food.push(action.payload.food)
                }
            }))
        }
    }
});

export const {addCustomer, addFoodToCustomer} = customerSlice.actions
export default customerSlice.reducer;


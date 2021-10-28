import React, {useState} from 'react';
import {useDispatch } from "react-redux";
import { addFoodToCustomer } from '../features/customerSlice';

interface CustomerCardType {
    id: string,
    blue: string,
    food: string[]
}

 function CustomerCard({ id, blue, food }: CustomerCardType) {
    const dispatch = useDispatch();
    const [customerFoodInput, setCustomerFoodInput] = useState("");

    return (
            <div className="customer-food-container">
          <div className="customer-food-card-container">
                <p>{blue}</p>
            <div className="customer-foods-container">
                    <div className="customer-food">
                        {food.map((food) => {
                            return <p>{food}</p>
                        })}
              </div>
              <div className="customer-food-input-container">
                        <input
                            value={customerFoodInput} 
                            onChange= {(e)=>setCustomerFoodInput(e.target.value)}/>
                        <button onClick={() => {
                            if (!customerFoodInput) return;
                            dispatch(addFoodToCustomer({
                                id,
                                food: customerFoodInput
                            })
                            );
                            setCustomerFoodInput("");
                }}>Add</button>
              </div>
            </div>
          </div>
        </div>
    )
}
export default CustomerCard;
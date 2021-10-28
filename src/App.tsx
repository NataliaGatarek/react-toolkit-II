import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { RootState } from "./app/store";
import CustomerCard from "./components/CustomerCard";
import ReservationCard from "./components/ReservationCard";
import { addReservation } from "./features/reservationSlice";

function App() {

  const reservations = useSelector((state: RootState) => state.reservations.value)

  const [reservationNameInput, setReservationNameInput] = useState("")
  
  const handleAddReservations = () => {
    if (!reservationNameInput) return;
    dispatch(addReservation(reservationNameInput));
    setReservationNameInput("");
    // dispatch action useDispatch//
  };
  
  const dispatch = useDispatch();

  const customer = useSelector((state: RootState) => state.customer.value)
  
  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          {customer.map((customer) => {
            return <CustomerCard id={customer.id} blue={customer.blue} food={customer.food}/>
          })}
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((blue, orange) => {
                return <ReservationCard blue={blue} orange={orange}/>
              })}
            </div>
          </div>
          <div className="reservation-input-container">
              <input value={reservationNameInput} onChange={(e)=>setReservationNameInput(e.target.value)} />
                <button onClick={handleAddReservations}>Add</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

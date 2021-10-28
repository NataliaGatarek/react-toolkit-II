import React from 'react'
import { useDispatch } from 'react-redux'
import { removeReservation } from '../features/reservationSlice';
import { addCustomer } from '../features/customerSlice';
import { v4 as uuid } from "uuid"; 

interface ReservationCardType {
    blue: string
    orange: number
}

export default function ReservationCard({ blue, orange }: ReservationCardType) {
    const dispatch = useDispatch();
    return (
        <div className="reservation-card-container"
            onClick={() => {
                dispatch(removeReservation(orange));
                dispatch(addCustomer({
                    id: uuid(),
                    blue,
                    food:[]
                }))
        }}
           >{blue}</div>
    )
}



import React from "react";
import { useSeatContext } from "./SeatProvider";

export default function Calculate() {
    const { selected, film } = useSeatContext();

    return (
        <div className="calculate">
            You have selected{" "}
            <span className="seatTotal">{selected.length}</span>seats for a
            price of £
            <span className="priceTotal">{film.price * selected.length}</span>
        </div>
    );
}

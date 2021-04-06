import React from "react";
import { useSeatContext } from "./SeatProvider";

export default function Calculate() {
    const { selected } = useSeatContext();

    return (
        <div className="calculate">
            You have selected{" "}
            <span className="seatTotal">{selected.length}</span>seats for a
            price of £<span className="priceTotal">00</span>
        </div>
    );
}

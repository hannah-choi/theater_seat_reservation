import React from "react";
import { useSeatContext } from "./SeatProvider";

export default function SelectSeat({ selectSeat }) {
    const { seatArray } = useSeatContext();

    return (
        <div className="selectSeat">
            <div className="screen"></div>
            <div className="seatsContainer">{seatArray}</div>
        </div>
    );
}

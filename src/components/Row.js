import React from "react";
import Seat from "./Seat";

export default function Row({ selectSeat }) {
    const seatArray = Array.from({ length: 8 }).map((item, i) => (
        <Seat key={i} selectSeat={selectSeat} />
    ));

    // const selectedSeats = seatArray.map(item =>
    //     item.classList.contains("selected")
    // );
    console.log(seatArray);

    return <section className="row">{seatArray}</section>;
}

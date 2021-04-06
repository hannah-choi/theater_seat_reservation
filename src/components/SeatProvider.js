import React, { useState, useContext, createContext } from "react";

export const SeatContext = createContext(SeatProvider);
export const useSeatContext = () => useContext(SeatContext);

export default function SeatProvider({ children }) {
    const [selected, setSelected] = useState([]);

    const selectSeat = e => {
        if (!e.target.classList.contains(".occupied")) {
            if (!e.target.classList.contains("selected")) {
                e.target.classList.add("selected");
                setSelected([...selected, e.target.dataset.index]);
            } else {
                e.target.classList.remove("selected");
                setSelected(
                    selected.filter(item => item !== e.target.dataset.index)
                );
            }
        }
    };

    const rows = 8;
    const columns = 6;
    let seats = [];

    const seatArray = Array(rows * columns)
        .join(" ")
        .split(" ")
        .map((_, i) => {
            return (
                <button
                    key={i}
                    data-index={i}
                    className="seat"
                    onClick={e => selectSeat(e)}
                ></button>
            );
        });

    return (
        <SeatContext.Provider
            value={{
                selected,
                selectSeat,
                seatArray,
            }}
        >
            {children}
        </SeatContext.Provider>
    );
}

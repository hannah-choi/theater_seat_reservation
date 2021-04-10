import React, { useState, useEffect, useContext, createContext } from "react";

export const SeatContext = createContext(SeatProvider);
export const useSeatContext = () => useContext(SeatContext);

export default function SeatProvider({ children }) {
    const [selected, setSelected] = useState([]);
    const [film, setFilm] = useState({
        index: +localStorage.getItem("index"),
        price: +localStorage.getItem("price"),
    });

    // useEffect(() => {
    //     let savedIndex = localStorage.getItem("index");
    //     let savedPrice = localStorage.getItem("price");

    //     if (savedIndex && savedPrice) {
    //         setFilm({ index: +savedIndex, price: +savedPrice });
    //     } else {
    //         setFilm({ index: 0, price: 12 });
    //     }
    // }, []);

    const updateCost = e => {
        setFilm({ index: e.target.selectedIndex, price: +e.target.value });
        localStorage.setItem("index", e.target.selectedIndex);
        localStorage.setItem("price", e.target.value);
        // updateNumbers();
    };

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
                updateCost,
                film,
            }}
        >
            {children}
        </SeatContext.Provider>
    );
}

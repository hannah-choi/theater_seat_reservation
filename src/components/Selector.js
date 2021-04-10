import React, { useRef, useEffect } from "react";
import { useSeatContext } from "./SeatProvider";

export default function Selector() {
    const { updateCost, film } = useSeatContext();

    return (
        <div className="selector">
            <label htmlFor="select">Select film:</label>
            <select
                name="film"
                id="film"
                onChange={e => updateCost(e)}
                value={film.price ? film.price : "12"}
            >
                <option value="12">In the Mood for Love (2000) £12</option>
                <option value="10">House of Hummingbird (2018) £10</option>
                <option value="9">The Lives of Others (2006) £9</option>
                <option value="11">
                    Portrait of Lady on the Fire (2019) £11
                </option>
            </select>
        </div>
    );
}

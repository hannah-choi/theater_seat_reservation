import React from "react";

export default function Showcase() {
    return (
        <div className="showcase">
            <span>
                <button className="seat"></button> Available
            </span>
            <span>
                <button className="seat selected"></button> Selected
            </span>
            <span>
                <button className="seat occupied"></button> Occupied
            </span>
        </div>
    );
}

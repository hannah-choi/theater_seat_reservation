const selectSeat = document.querySelector(".selectSeat");
const select = document.querySelector("select");
const seats = selectSeat.querySelectorAll(".seat:not(.occupied)");
const seatTotal = document.querySelector(".seatTotal");
const priceTotal = document.querySelector(".priceTotal");

let cost = +select.value;

const getData = () => {
    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeatIndex"));

    if (selectedSeats && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add("selected");
            }
        });
    }

    let filmIndex = localStorage.getItem("filmIndex");
    let price = localStorage.getItem("price");

    if (filmIndex && price) {
        select.selectedIndex = +filmIndex;
        cost = +price;
    }
};

setFilmData = (index, price) => {
    localStorage.setItem("filmIndex", index);
    localStorage.setItem("price", price);
};

const updateNumbers = () => {
    let selectedSeats = selectSeat.querySelectorAll(".seat.selected");

    let selectedSeatsIndex = [...selectedSeats].map(seat =>
        [...seats].indexOf(seat)
    );

    localStorage.setItem(
        "selectedSeatIndex",
        JSON.stringify(selectedSeatsIndex)
    );

    seatTotal.innerHTML = selectedSeats.length;
    priceTotal.innerHTML = selectedSeats.length * cost;
};

select.addEventListener("change", ({ target }) => {
    cost = +target.value;
    setFilmData(target.selectedIndex, target.value);
    updateNumbers();
});

selectSeat.addEventListener("click", ({ target }) => {
    if (target.tagName === "BUTTON" && !target.classList.contains("occupied")) {
        target.classList.toggle("selected");
        updateNumbers();
    }
});

getData();
updateNumbers();

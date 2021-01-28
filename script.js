const selectSeat = document.querySelector(".selectSeat");
const select = document.querySelector("select");
const seats = selectSeat.querySelectorAll(".seat:not(.occupied)");
const seatTotal = document.querySelector(".seatTotal");
const priceTotal = document.querySelector(".priceTotal");

let cost = +select.value;

select.addEventListener("change", e => {
    cost = +e.target.value;
    seats.forEach(seat => seat.classList.remove("selected"));
    updateNumbers();
});

const updateNumbers = () => {
    let numberOfSeats = document.querySelectorAll(".row .seat.selected");
    seatTotal.innerHTML = numberOfSeats.length;
    priceTotal.innerHTML = cost * numberOfSeats.length;
};

selectSeat.addEventListener("click", ({ target }) => {
    if (target.tagName === "BUTTON" && !target.classList.contains("occupied")) {
        target.classList.toggle("selected");
        updateNumbers();
    }
});

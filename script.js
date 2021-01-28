const selectSeat = document.querySelector(".selectSeat");
const select = document.querySelector("select");
const seats = selectSeat.querySelectorAll(".seat:not(.occupied)");
const seatTotal = document.querySelector(".seatTotal");
const priceTotal = document.querySelector(".priceTotal");

let cost = +select.value;

const updateNumbers = () => {
    let numberOfSeats = selectSeat.querySelectorAll(".seat.selected");
    seatTotal.innerHTML = numberOfSeats.length;
    priceTotal.innerHTML = numberOfSeats.length * cost;
};

select.addEventListener("change", ({ target }) => {
    cost = +target.value;
    updateNumbers();
});

selectSeat.addEventListener("click", ({ target }) => {
    if (target.tagName === "BUTTON" && !target.classList.contains("occupied")) {
        target.classList.toggle("selected");
        updateNumbers();
    }
});

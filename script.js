const selectSeat = document.querySelector(".selectSeat");
const select = document.querySelector("select");
const seats = selectSeat.querySelectorAll(".seat");
const seatTotal = document.querySelector(".seatTotal");
const priceTotal = document.querySelector(".priceTotal");

let cost = 12;
let numberOfSeats = 0;

select.addEventListener("change", e => {
    cost = parseInt(e.target.value);
    numberOfSeats = 0;
    updateNumbers();
    seats.forEach(seat => seat.classList.remove("selected"));
});

const updateNumbers = () => {
    seatTotal.innerHTML = numberOfSeats;
    priceTotal.innerHTML = cost * numberOfSeats;
};

seats.forEach(seat => {
    seat.addEventListener("click", ({ target }) => {
        if (target.classList.contains("occupied")) {
            return;
        }
        if (!target.classList.contains("selected")) {
            target.classList.add("selected");
            numberOfSeats++;
            updateNumbers();
        } else {
            target.classList.remove("selected");
            numberOfSeats--;
            updateNumbers();
        }
    });
});

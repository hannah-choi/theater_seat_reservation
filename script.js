const selectSeat = document.querySelector(".selectSeat");
const select = document.querySelector("select");
const seats = selectSeat.querySelectorAll(".seat:not(.occupied)");
const seatTotal = document.querySelector(".seatTotal");
const priceTotal = document.querySelector(".priceTotal");

let cost = +select.value;

getData();

const calculate = () => {
    let numberOfSeats = selectSeat.querySelectorAll(".selected");

    const selectedSeatsIndex = [...numberOfSeats].map(seat =>
        [...seats].indexOf(seat)
    );

    localStorage.setItem("selectedSeats", JSON.stringify(selectedSeatsIndex));

    seatTotal.innerHTML = numberOfSeats.length;
    priceTotal.innerHTML = numberOfSeats.length * cost;

    const newArray = Array.from(numberOfSeats);
    console.log(newArray);
};

const setFilmInfo = (index, price) => {
    localStorage.setItem("titleIndex", JSON.stringify(index));
    localStorage.setItem("price", JSON.stringify(price));
};

const getData = () => {
    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add("selected");
            }
        });
    }
};

select.addEventListener("change", ({ target }) => {
    cost = +target.value;
    calculate();
    setFilmInfo(target.selectedIndex, target.value);
});

selectSeat.addEventListener("click", ({ target }) => {
    if (
        target.tagName === "BUTTON" &&
        !target.classList.contains(".occupied")
    ) {
        target.classList.toggle("selected");
        calculate();
    }
});

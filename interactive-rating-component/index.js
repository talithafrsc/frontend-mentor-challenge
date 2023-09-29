const mainCard = document.querySelector(".card");
const successCard = document.getElementById("success_card");
const submitButton = document.getElementById("submit_button");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".ratings > button");

submitButton.addEventListener("click", () => {
    if (rating.innerHTML) {
        successCard.classList.remove("hide");
        mainCard.classList.add("hide");
    }
});

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML;
        rates.forEach((rate) => {
            rate.classList.remove("active");
        });
        rate.classList.add("active");
    });
});
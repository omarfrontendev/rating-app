const ratings = {
    sony: 4.7,
    samsung: 3.4,
    vizio: 2.3,
    panasonic: 3.6,
    philips: 4.1
}
document.addEventListener("DOMContentLoaded", getRating);


const productSelected = document.querySelector('select');
const input = document.querySelector('input');
let product;
productSelected.addEventListener('change',(e)=> {
    product = e.target.value;
    input.disabled = false;
    input.placeholder = ratings[product];
})

input.addEventListener('input', (e) => {
    const rating = e.target.value;

    if (rating > 5 || ratings < 0) {
        alert('please rate 1 - 5');
        return;
    }

    ratings[product] = rating;
    getRating()
})



function getRating() {
    for (let rating in ratings){
        const starsTotal = 5;

        // get stars Percentage:
        const starsPercentage = (ratings[rating] / starsTotal) * 100;
        console.log(starsPercentage);

        const starsPercentageRounded = `${Math.round(starsPercentage /10) * 10}%`;
        console.log(starsPercentageRounded);
        document.querySelector(`.${rating} .stars-outer .stars-inner`).style.width = starsPercentageRounded;
        document.querySelector(`.${rating} .number-rating`).innerHTML =  ratings[rating];
    }
}
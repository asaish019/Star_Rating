const stars = document.querySelectorAll(".star");
const rating = document.querySelector(".num")



stars.forEach((star) => {
    star.addEventListener('mouseover', function (e) {

        if (e.target.classList = 'star') {
            const value = parseInt(star.getAttribute("data-value"));
            updatestar(value);
        }

    })

    star.addEventListener('mouseout', function (e) {

        updatestar(0);


    })

})




function updatestar(value) {


    const stars = document.querySelectorAll(".star")
    stars.forEach((star) => {
        const star_val = star.getAttribute("data-value");
        star.classList.toggle("fillstar", star_val <= value);
    })

    rating.textContent = value;
}


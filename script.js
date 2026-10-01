// SUPERELON WEBSITE

console.log("SUPERELON website loaded.");


// NAVIGATION SCROLL EFFECT

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(5,7,11,0.98)";

    } else {

        navbar.style.background = "rgba(5,7,11,0.90)";

    }

});


// CARD ANIMATION

const cards = document.querySelectorAll(".card");


const observer = new IntersectionObserver(

    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },

    {
        threshold: 0.15
    }

);


cards.forEach(function(card) {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(30px)";

    card.style.transition =
        "all 0.7s ease";

    observer.observe(card);

});
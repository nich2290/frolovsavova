/*Navigationsmenu - undermenuer */

$(document).ready(
    function () {
        $('.menu-toggle').click(function () {
            $('nav').toggleClass('active')
            document.querySelector(".menu-toggle").classList.toggle("toggle");
        })

        $('ul li').click(function (toggleBurger) {
            $(this).siblings().removeClass('active');
            $(this).toggleClass('active');

        })

    }
)

document.querySelector(".container1").addEventListener("click", popUps);
document.querySelector(".container2").addEventListener("click", popUps2);
document.querySelector(".container3").addEventListener("click", popUps3);

function popUps() {
    console.log("AKTIV")
    document.querySelector(".popup1").classList.toggle("display");
}

function popUps2() {
    console.log("AKTIV")
    document.querySelector(".popup2").classList.toggle("display");
}

function popUps3() {
    console.log("AKTIV")
    document.querySelector(".popup3").classList.toggle("display");
}

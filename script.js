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

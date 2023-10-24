/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
//

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Slick Carousel
    $(document).ready(function () {
        $('.carousel').slick({
            // centerMode: true,
            // centerPadding: '60px',
            dots: true, // Mostra i punti di navigazione
            arrow: true,
            slidesToShow: 3, // Mostra due team-member alla volta
            slidesToScroll: 1, // Scorri un team-member alla volta
            autoplay: false,
            infinite: true, // Loop infinito
            autoplaySpeed: 2000, // Velocità di scorrimento

            responsive: [
                {
                    breakpoint: 768, // Per schermi con larghezza minore di 768px
                    settings: {
                        slidesToShow: 1, // Mostra 1 elemento alla volta su schermi più piccoli
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992, // Per schermi con larghezza minore di 992px
                    settings: {
                        slidesToShow: 2, // Mostra 2 elementi alla volta su schermi di larghezza media
                        slidesToScroll: 2
                    }
                }
            ]
        });
    });

});

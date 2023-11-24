// scrolling clic al look del producto

document.addEventListener("DOMContentLoaded", function () {
    var lookLink = document.getElementById('lookLink');

    lookLink.addEventListener('click', function (event) {
        event.preventDefault();

        var tarjetasSection = document.getElementById('tarjetas');

        tarjetasSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// link al footer
document.addEventListener("DOMContentLoaded", function () {
    var contactLink = document.querySelector('.dropdown-item[href="#"]');
    contactLink.addEventListener('click', function (event) {
        event.preventDefault();
        var footerPosition = document.querySelector('footer').offsetTop;
        window.scrollTo({
            top: footerPosition,
            behavior: 'smooth'
        });
    });
});


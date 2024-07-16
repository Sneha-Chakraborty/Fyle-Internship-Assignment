//-----------------------------------------------------------------//
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

const changeSlide = (index) => {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - index) * 100}%)`;
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
};

const nextSlide = () => {
    currentSlide = (currentSlide + 1) % slides.length;
    changeSlide(currentSlide);
};

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        currentSlide = Number(dot.getAttribute('data-slide'));
        changeSlide(currentSlide);
    });
});

setInterval(nextSlide, 3000);

changeSlide(currentSlide);


// ------------------------------------------------------------------//


$(document).ready(function() {
    $('#contactUsButton').click(function() {
        $('#contactModal').modal('show');
    });
});


// -----------------------------------------------------------------//
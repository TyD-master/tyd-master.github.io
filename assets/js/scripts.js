// scripts.js

// Carousel functionality
const carousel = document.querySelector('.carousel-inner');
const items = carousel.querySelectorAll('.carousel-item');
let currentIndex = 0;

function showSlide(index) {
    if (index < 0) {
        currentIndex = items.length - 1;
    } else if (index >= items.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

document.querySelector('.prev').addEventListener('click', (e) => {
    e.preventDefault();
    showSlide(currentIndex - 1);
});

document.querySelector('.next').addEventListener('click', (e) => {
    e.preventDefault();
    showSlide(currentIndex + 1);
});

// Auto-advance the carousel every 5 seconds
setInterval(() => {
    showSlide(currentIndex + 1);
}, 5000);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle menu functionality
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('show');
});
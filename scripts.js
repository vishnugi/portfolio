// scripts.js

// Example: Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example: Simple form validation
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Form submitted!');
    // Implement actual form handling here
});

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Close mobile menu after clicking a link
            if (document.body.classList.contains('nav-open')) {
                document.body.classList.remove('nav-open');
                document.querySelector('.nav').classList.remove('active');
                document.querySelector('.burger-menu').classList.remove('active');
            }
        });
    });

    // Mobile menu toggle
    const burgerMenu = document.querySelector('.burger-menu');
    const nav = document.querySelector('.nav');

    burgerMenu.addEventListener('click', () => {
        nav.classList.toggle('active');
        burgerMenu.classList.toggle('active');
        document.body.classList.toggle('nav-open'); // Add a class to body to prevent scrolling when menu is open
    });

    // Optional: Add scroll animation for sections
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible'); // Optional: remove when out of view
            }
        });
    }, { threshold: 0.1 }); // Adjust threshold as needed

    document.querySelectorAll('.phase-section, .hero-section').forEach(section => {
        section.classList.add('fade-in'); // Add a class for animation styling
        observer.observe(section);
    });
});
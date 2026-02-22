/**
 * mechanics.js - Dynamic Interactivity & Reveal System
 */

class DynamicMechanics {
    constructor() {
        this.sections = document.querySelectorAll('section');
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
        this.setupParallax();
        console.log("Dynamic Mechanics: Engaged");
    }

    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        this.sections.forEach(section => observer.observe(section));
    }

    setupParallax() {
        const grid = document.querySelector('.quantum-grid');
        window.addEventListener('mousemove', (e) => {
            const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
            const moveY = (e.clientY - window.innerHeight / 2) * 0.01;

            if (grid) {
                grid.style.transform = `perspective(500px) rotateX(60deg) translate(${moveX}px, ${moveY}px)`;
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new DynamicMechanics();
});

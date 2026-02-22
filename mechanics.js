/**
 * mechanics.js - High-Impact Orchestration & Energy Motion
 */

class VibrantMechanics {
    constructor() {
        this.sections = document.querySelectorAll('section');
        this.grid = document.querySelector('.energy-grid');
        this.init();
    }

    init() {
        this.setupVibrantReveals();
        this.setupEnergyMotion();
        console.log("Vibrant Core: Operational");
    }

    setupVibrantReveals() {
        const options = {
            threshold: 0.12,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-active');
                }
            });
        }, options);

        this.sections.forEach(section => observer.observe(section));
    }

    setupEnergyMotion() {
        if (!this.grid) return;

        window.addEventListener('mousemove', (e) => {
            const x = (e.clientX - window.innerWidth / 2) * 0.015;
            const y = (e.clientY - window.innerHeight / 2) * 0.015;

            // Influence the energy grid perspective sutilly
            this.grid.style.transform = `perspective(600px) rotateX(55deg) translate(${x}px, ${y}px)`;
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new VibrantMechanics();
});

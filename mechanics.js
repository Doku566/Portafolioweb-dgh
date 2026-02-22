/**
 * mechanics.js - Orchestrated Motion & UX Reveal
 */

class EliteMechanics {
    constructor() {
        this.sections = document.querySelectorAll('section');
        this.grid = document.querySelector('.grid-plane');
        this.init();
    }

    init() {
        this.setupRevealSystem();
        this.setupNeuralMotion();
        console.log("Elite Systems: Functional");
    }

    setupRevealSystem() {
        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // We don't unobserve so users can re-experience the reveal if scrolling back
                    // Actually, for elite professional feel, usually one-time reveal is better
                    // observer.unobserve(entry.target);
                }
            });
        }, options);

        this.sections.forEach(section => observer.observe(section));
    }

    setupNeuralMotion() {
        if (!this.grid) return;

        window.addEventListener('mousemove', (e) => {
            const x = (e.clientX - window.innerWidth / 2) * 0.005;
            const y = (e.clientY - window.innerHeight / 2) * 0.005;

            this.grid.style.transform = `perspective(1000px) rotateX(45deg) translate(${x}px, ${y}px)`;
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new EliteMechanics();
});

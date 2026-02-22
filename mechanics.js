/**
 * mechanics.js - Robotic HUD & System Telemetry
 * Hand-crafted for Domingo González
 */

class RoboticHUD {
    constructor() {
        this.statusIndicators = document.querySelectorAll('.status-value');
        this.coordinates = document.querySelector('.hud-coords');
        this.init();
    }

    init() {
        this.animateStats();
        this.updateCoordinates();
        console.log("HUD Mechanics: Online");
    }

    animateStats() {
        setInterval(() => {
            this.statusIndicators.forEach(indicator => {
                const base = parseInt(indicator.getAttribute('data-base')) || 50;
                const variance = Math.floor(Math.random() * 5) - 2;
                indicator.textContent = `${base + variance}%`;
            });
        }, 2000);
    }

    updateCoordinates() {
        if (!this.coordinates) return;
        window.addEventListener('mousemove', (e) => {
            const x = ((e.clientX / window.innerWidth) * 100).toFixed(2);
            const y = ((e.clientY / window.innerHeight) * 100).toFixed(2);
            this.coordinates.textContent = `LOC: [${x}, ${y}]`;
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new RoboticHUD();
});

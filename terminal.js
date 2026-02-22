/**
 * terminal.js - elite Aether Assistant
 * Persistent Bubble UX v3.0
 */

class EliteAssistant {
    constructor() {
        this.trigger = document.getElementById('elite-trigger');
        this.window = document.getElementById('elite-window');
        this.input = document.getElementById('elite-input');
        this.output = document.getElementById('elite-output');

        this.responses = {
            'help': 'Comandos de enlace disponibles: info, proyectos, habilidades, contacto, clear',
            'info': 'Sistema: Aether Elite v3.0. Desarrollador principal: Domingo González (Ing. Software/Robótica).',
            'proyectos': 'Foco actual: AetherVoice. Nodo activo en el sector 0x01 del portafolio.',
            'habilidades': 'Matriz de competencias cargada: IA Profunda, C++ de baja latencia y Sistemas de Control Robótico.',
            'contacto': 'Puerta de enlace activa: GitHub (@Doku566).',
            'clear': 'DATA_FLUSH'
        };

        this.init();
    }

    init() {
        if (!this.trigger) return;

        this.trigger.addEventListener('click', () => {
            this.window.classList.toggle('is-active');
            if (this.window.classList.contains('is-active')) {
                this.input.focus();
            }
        });

        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && this.input.value.trim()) {
                this.handleInput(this.input.value.toLowerCase().trim());
                this.input.value = '';
            }
        });

        // Professional delayed greeting
        setTimeout(() => {
            this.addMessage('System', 'Enlace Aether establecido. Bienvenido al núcleo de ingeniería de Domingo González.');
        }, 1500);
    }

    handleInput(cmd) {
        this.addMessage('User', cmd);

        if (cmd === 'clear') {
            this.output.innerHTML = '';
            return;
        }

        const response = this.responses[cmd] || `Advertencia: Protocolo "${cmd}" no reconocido. Intente "help".`;
        setTimeout(() => this.addMessage('Aether', response), 300);
    }

    addMessage(sender, text) {
        const line = document.createElement('div');
        line.style.marginBottom = '1.5rem';
        line.style.opacity = '0';
        line.style.transform = 'translateY(10px)';
        line.style.transition = '0.3s ease out';

        const labelColor = sender === 'Aether' ? '#818cf8' : '#64748b';

        line.innerHTML = `
            <div style="font-family: 'JetBrains Mono'; font-size: 0.6rem; color: ${labelColor}; margin-bottom: 0.5rem; letter-spacing: 0.1em">
                [${sender.toUpperCase()}]
            </div>
            <div style="font-weight: 300; line-height: 1.4">${text}</div>
        `;

        this.output.appendChild(line);

        // Trigger animation
        requestAnimationFrame(() => {
            line.style.opacity = '1';
            line.style.transform = 'translateY(0)';
        });

        this.output.scrollTop = this.output.scrollHeight;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new EliteAssistant();
});

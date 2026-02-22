/**
 * terminal.js - Vibrant Aether Assistant
 * High-Impact UX v3.5
 */

class VibrantAssistant {
    constructor() {
        this.trigger = document.getElementById('vibrant-trigger');
        this.window = document.getElementById('vibrant-window');
        this.input = document.getElementById('vibrant-input');
        this.output = document.getElementById('vibrant-output');

        this.responses = {
            'help': 'Comandos de núcleo vivos: info, proyectos, habilidades, contacto, clear',
            'info': 'Sistema: Aether Vibrant v3.5. Desarrollador: Domingo González (Software & Robotics Engineer).',
            'proyectos': 'Echa un vistazo a AetherVoice arriba. Es un nodo de visión/voz por WebGPU de alto rendimiento.',
            'habilidades': 'Matriz cargada: IA (Transformers), C++ (Low Latency), Robótica de Control.',
            'contacto': 'Puerta de enlace abierta: GitHub (@Doku566).',
            'clear': 'DATA_FLUSH'
        };

        this.init();
    }

    init() {
        if (!this.trigger) return;

        this.trigger.addEventListener('click', () => {
            this.window.classList.toggle('is-open');
            if (this.window.classList.contains('is-open')) {
                this.input.focus();
            }
        });

        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && this.input.value.trim()) {
                this.handleInput(this.input.value.toLowerCase().trim());
                this.input.value = '';
            }
        });

        // Vibrant greeting
        setTimeout(() => {
            this.addMessage('System', 'Vibrant Core Establecido. ¿Qué protocolos iniciamos hoy?');
        }, 1000);
    }

    handleInput(cmd) {
        this.addMessage('User', cmd);

        if (cmd === 'clear') {
            this.output.innerHTML = '';
            return;
        }

        const response = this.responses[cmd] || `Alerta: Protocolo "${cmd}" no reconocido por el núcleo. Intente "help".`;
        setTimeout(() => this.addMessage('Aether', response), 250);
    }

    addMessage(sender, text) {
        const msg = document.createElement('div');
        msg.style.marginBottom = '1.8rem';
        msg.style.padding = '1rem';
        msg.style.borderRadius = '12px';
        msg.style.background = sender === 'User' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 242, 255, 0.08)';
        msg.style.borderLeft = sender === 'Aether' ? '4px solid #00f2ff' : 'none';
        msg.style.boxShadow = sender === 'Aether' ? '0 0 15px rgba(0, 242, 255, 0.1)' : 'none';

        msg.innerHTML = `
            <div style="font-family: 'JetBrains Mono'; font-size: 0.65rem; color: ${sender === 'Aether' ? '#00f2ff' : '#ff8c00'}; margin-bottom: 0.6rem; letter-spacing: 0.1em">
                [${sender.toUpperCase()}]
            </div>
            <div style="font-weight: 300; line-height: 1.5; color: #ffffff">${text}</div>
        `;

        this.output.appendChild(msg);
        this.output.scrollTop = this.output.scrollHeight;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new VibrantAssistant();
});

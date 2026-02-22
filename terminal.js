/**
 * terminal.js - Aether Assistant Chat Bubble
 * Pure JS Implementation v2.0
 */

class AetherAssistant {
    constructor() {
        this.trigger = document.getElementById('chat-trigger');
        this.window = document.getElementById('chat-window');
        this.input = document.getElementById('chat-input');
        this.output = document.getElementById('chat-output');

        this.responses = {
            'help': 'Comandos: info, proyectos, habilidades, contacto, clear',
            'info': 'Sistema: Aether Assistant v2.0. Desarrollador: Domingo González, Ing. de Software y Robótica.',
            'proyectos': 'Explora AetherVoice arriba. Es un nodo de visión/voz por WebGPU.',
            'habilidades': 'Especialidades: IA (Transfomers/Compute), C++ 23, Control de Robótica.',
            'contacto': 'Conectado: GitHub (@Doku566).',
            'clear': 'CLEARING'
        };

        this.init();
    }

    init() {
        if (!this.trigger) return;

        this.trigger.addEventListener('click', () => {
            this.window.classList.toggle('active');
            if (this.window.classList.contains('active')) {
                this.input.focus();
            }
        });

        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && this.input.value.trim()) {
                this.handleInput(this.input.value.toLowerCase().trim());
                this.input.value = '';
            }
        });

        this.addMessage('System', 'Aether Online. ¿En qué puedo ayudarte?');
    }

    handleInput(cmd) {
        this.addMessage('User', cmd);

        if (cmd === 'clear') {
            this.output.innerHTML = '';
            return;
        }

        const response = this.responses[cmd] || `Error: Comando de sistema "${cmd}" inválido. Escribe "help".`;
        setTimeout(() => this.addMessage('Aether', response), 400);
    }

    addMessage(sender, text) {
        const msg = document.createElement('div');
        msg.style.marginBottom = '1rem';
        msg.style.padding = '0.8rem';
        msg.style.borderRadius = '8px';
        msg.style.background = sender === 'User' ? 'rgba(255,255,255,0.05)' : 'rgba(99, 102, 241, 0.1)';
        msg.style.borderLeft = sender === 'Aether' ? '3px solid #6366f1' : 'none';

        msg.innerHTML = `
            <div style="font-size:0.6rem; text-transform:uppercase; color: #808080; margin-bottom: 0.3rem">${sender}</div>
            <div style="font-family: 'Outfit', sans-serif">${text}</div>
        `;

        this.output.appendChild(msg);
        this.output.scrollTop = this.output.scrollHeight;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new AetherAssistant();
});

/**
 * terminal.js - Aether Assistant Chatbot
 * Pure JS Implementation for GitHub Pages
 */

class AetherTerminal {
    constructor() {
        this.terminal = document.getElementById('terminal-interface');
        this.output = document.getElementById('terminal-output');
        this.input = document.getElementById('terminal-input');
        this.responses = {
            'help': 'Comandos disponibles: info, proyectos, habilidades, contacto, clear',
            'info': 'Sistema: Aether Assistant v1.0. Desarrollador: Domingo González, Ing. de Software y Robótica.',
            'proyectos': 'Proyecto actual: AetherVoice. Un experimento de IA local con WebGPU y síntesis de voz.',
            'habilidades': 'Especialidades: IA (Transfomers), C++ Moderno, Sistemas de control en tiempo real y Robótica.',
            'contacto': 'Puedes contactar al desarrollador vía GitHub (@Doku566).',
            'clear': 'CLEARING'
        };
        this.init();
    }

    init() {
        if (!this.terminal) return;

        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.handleInput(this.input.value.toLowerCase().trim());
                this.input.value = '';
            }
        });

        this.addMessage('System', 'Aether Assistant Inicializado. Escribe "help" para comenzar.');
    }

    handleInput(cmd) {
        this.addMessage('User', cmd);

        if (cmd === 'clear') {
            this.output.innerHTML = '';
            return;
        }

        const response = this.responses[cmd] || `Error: Comando "${cmd}" no reconocido. Escribe "help".`;
        setTimeout(() => {
            this.addMessage('Aether', response);
        }, 300);
    }

    addMessage(sender, text) {
        const line = document.createElement('div');
        line.className = `terminal-line ${sender.toLowerCase()}`;
        line.innerHTML = `<span class="prompt">[${sender}]</span> ${text}`;
        this.output.appendChild(line);
        this.output.scrollTop = this.output.scrollHeight;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new AetherTerminal();
});

# -*- coding: utf-8 -*-
import re

file_path = r'c:\Users\domin\Desktop\Portafolioweb-dgh\index.html'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update Tailwind Colors
content = content.replace("'deep-bg': '#050505'", "'deep-bg': '#202124'") # Google dark bg
content = content.replace("'accent-orange': '#f97316'", "'accent-orange': '#8ab4f8'") # Google Blue dark
content = content.replace("'card-bg': '#0d0d0d'", "'card-bg': '#303134'") # Google dark card
content = content.replace("background-color: #050505;", "background-color: #202124;")

# 2. Update CSS colors in <style>
content = content.replace("background: #F9731633;", "background: rgba(138, 180, 248, 0.2);")
content = content.replace("background: #F97316;", "background: #8ab4f8;")
content = content.replace("border: 1px solid #F97316;", "border: 1px solid #8ab4f8;")
content = content.replace("rgba(249, 115, 22,", "rgba(138, 180, 248,")
content = content.replace("#F97316", "#8ab4f8")

# 3. Remove Scanlines
content = re.sub(r'<div class="scanline"></div>\s*', '', content)

# 4. Remove Terminal Diagnostic Widget in Hero
terminal_regex = r'<!-- Mission Control Terminal -->.*?</div>\s*</div>\s*</section>'
content = re.sub(terminal_regex, '</div>\n        </section>', content, flags=re.DOTALL)

# 5. Remove Terminal JS Logic
js_terminal_regex = r'// Terminal Diagnostics Simulation.*?addLog\(\); // Initial run'
content = re.sub(js_terminal_regex, '', content, flags=re.DOTALL)

# 6. Change specific text to be less "AI/Hacker"
content = content.replace("DG // TECHNOLOGY_CORE", "Domingo González // Portfolio")
content = content.replace("Audio_IA_Voice", "Audio_Processing")
content = content.replace("IT_Automation_Cloud", "Cloud_Infrastructure")
content = content.replace("Assistent_AI", "Asistente Virtual")
content = content.replace("Portafolio de Proyectos //\n                        The Forge", "Proyectos Destacados")
content = content.replace("Matriz de Habilidades //\n                        Stack", "Habilidades Técnicas")
content = content.replace("Experiencia & Hitos //\n                        Mastered", "Experiencia Profesional")
content = content.replace("Journal // Insights", "Artículos y Notas")

# 7. Clean up Chatbot initialized text
old_chat_init = r"INITIALIZING DIAGNOSTICS...<br>SYSTEM PROTOCOLS \[OK\]<br>READY FOR QUERY_"
new_chat_init = r"¡Hola! Soy el asistente virtual. ¿En qué puedo ayudarte?"
content = re.sub(old_chat_init, new_chat_init, content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Aesthetic refactor applied successfully.")

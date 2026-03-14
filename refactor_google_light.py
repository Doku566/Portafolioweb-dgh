# -*- coding: utf-8 -*-
import re

file_path = r'c:\Users\domin\Desktop\Portafolioweb-dgh\index.html'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Tailwind Config Update (Shift to Light & Google Primary Blue)
content = content.replace("'deep-bg': '#202124'", "'deep-bg': '#ffffff'")
content = content.replace("'card-bg': '#303134'", "'card-bg': '#f8f9fa'")
content = content.replace("'tech-gray': '#9aa0a6'", "'tech-gray': '#5f6368'")
content = content.replace("'accent-orange': '#8ab4f8'", "'accent-orange': '#4285f4'") # Google Primary Blue

# 2. General CSS Update
content = content.replace("background-color: #202124;", "background-color: #ffffff;")
content = content.replace("color: #d1d5db;", "color: #202124;")
content = content.replace("rgba(138, 180, 248, 0.3)", "rgba(66, 133, 244, 0.2)")
content = content.replace("rgba(138, 180, 248", "rgba(66, 133, 244")
content = content.replace("#8ab4f8", "#4285f4")

# 3. HTML Core Layout & Typography
content = content.replace("text-white/40", "text-gray-500")
content = content.replace("text-white/30", "text-gray-500")
content = content.replace("text-white/20", "text-gray-400")
content = content.replace("text-white", "text-[#202124]")
content = content.replace("border-white/5", "border-gray-200")
content = content.replace("border-white/10", "border-gray-200")
content = content.replace("bg-white/5", "bg-gray-100")
content = content.replace("bg-white/10", "bg-gray-100")
content = content.replace("text-slate-400", "text-gray-600")
content = content.replace("text-slate-500", "text-gray-600")
content = content.replace("text-deep-bg", "text-white") # Since deep-bg is now white, buttons that used deep-bg for contrast should be white text
content = content.replace("bg-neutral-900", "bg-gray-100")
content = content.replace("bg-black/80", "bg-black/40 backdrop-blur-sm")

# Material Design refinements
content = content.replace("hover:border-accent-orange/50", "hover:shadow-xl rounded-2xl")
content = content.replace("rounded-xl", "rounded-2xl")
content = content.replace("font-mono text-[10px] uppercase tracking-[0.5em] font-bold", "font-sans font-bold text-sm tracking-widest text-[#4285f4] bg-blue-50 px-4 py-2 rounded-full")
content = content.replace("font-mono uppercase tracking-[0.2em]", "font-sans font-semibold text-xs tracking-wide text-gray-600")
content = content.replace("font-mono w", "font-sans uppercase font-bold w")
content = content.replace("tracking-[0.3em]", "tracking-wider")

# Specific Hero & Header fixes
content = content.replace("DG // TECHNOLOGY_CORE", "Domingo González")
content = content.replace("bg-deep-bg/80 border-b border-white/5", "bg-white/90 border-b border-gray-200 shadow-sm")
content = content.replace("text-[#202124]/40", "text-gray-400")

# Remove obsolete grid classes
content = re.sub(r'<div class="fixed inset-0 grid-layers[^>]*></div>', '', content)
content = re.sub(r'\.grid-layers \{[^}]*\}', '', content, flags=re.DOTALL)
content = re.sub(r'blueprint-pattern', '', content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Google Light aesthetic refactor applied completely.")

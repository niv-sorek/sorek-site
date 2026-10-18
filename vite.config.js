import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Keeps the "years of experience" in <meta> tags current (career start: 1990)
const years = () => ({
  name: 'years-of-experience',
  transformIndexHtml: (html) => html.replaceAll('%YEARS%', String(new Date().getFullYear() - 1990)),
})

export default defineConfig({ plugins: [react(), years()], base: './' })

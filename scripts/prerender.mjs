// Post-build: render the app to static HTML (so crawlers and social bots see real content)
// and write sitemap.xml with today's date.
import fs from 'node:fs'
import { createServer } from 'vite'
import React from 'react'
import { renderToString } from 'react-dom/server'

const SITE = 'https://sorek.co.il'
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' })
try {
  const { default: App } = await server.ssrLoadModule('/src/App.jsx')
  const html = renderToString(React.createElement(App))
  const file = 'dist/index.html'
  const page = fs.readFileSync(file, 'utf8')
  if (!page.includes('<!--app-html-->')) throw new Error('placeholder <!--app-html--> missing in dist/index.html')
  fs.writeFileSync(file, page.replace('<!--app-html-->', html))
  const today = new Date().toISOString().slice(0, 10)
  fs.writeFileSync('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${SITE}/</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>1.0</priority></url>\n</urlset>\n`)
  console.log(`prerendered ${html.length} chars, sitemap written`)
} finally {
  await server.close()
}

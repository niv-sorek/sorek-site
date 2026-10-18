// Post-build: render every route to static HTML (so crawlers and social bots see real content),
// with per-route <head> tags, JSON-LD, 404.html and sitemap.xml.
import fs from 'node:fs'
import path from 'node:path'
import { createServer } from 'vite'
import React from 'react'
import { renderToString } from 'react-dom/server'

const server = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' })
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
try {
  const { default: App } = await server.ssrLoadModule('/src/App.jsx')
  const { ALL_PATHS, SITE, routeMeta, routeLd } = await server.ssrLoadModule('/src/pages.js')
  const template = fs.readFileSync('dist/index.html', 'utf8')
  if (!template.includes('<!--app-html-->')) throw new Error('placeholder <!--app-html--> missing in dist/index.html')

  const build = (route, meta) => {
    let html = template.replace('<!--app-html-->', renderToString(React.createElement(App, { path: route })))
    if (meta) {
      const set = (re, val) => { if (!re.test(html)) throw new Error('head tag missing: ' + re); html = html.replace(re, val) }
      set(/<title>[\s\S]*?<\/title>/, `<title>${esc(meta.title)}</title>`)
      set(/(<meta name="description" content=")[^"]*"/, `$1${esc(meta.description)}"`)
      set(/(<link rel="canonical" href=")[^"]*"/, `$1${meta.canonical}"`)
      set(/(<meta property="og:url" content=")[^"]*"/, `$1${meta.canonical}"`)
      set(/(<meta property="og:title" content=")[^"]*"/, `$1${esc(meta.title)}"`)
      set(/(<meta property="og:description" content=")[^"]*"/, `$1${esc(meta.description)}"`)
      set(/(<meta name="twitter:title" content=")[^"]*"/, `$1${esc(meta.title)}"`)
      set(/(<meta name="twitter:description" content=")[^"]*"/, `$1${esc(meta.description)}"`)
      if (meta.noindex) set(/(<meta name="robots" content=")[^"]*"/, '$1noindex"')
      html = html.replace(/<link rel="preload" as="image"[^>]*>\s*/, '') // hero preload only on home
    }
    const ld = routeLd(route).map((o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join('\n    ')
    if (ld) html = html.replace('</head>', `    ${ld}\n  </head>`)
    return html
  }

  for (const route of ALL_PATHS) {
    const meta = routeMeta(route)
    const html = build(route, meta)
    if (route === '/') fs.writeFileSync('dist/index.html', html)
    else {
      const dir = path.join('dist', route)
      fs.mkdirSync(dir, { recursive: true })
      fs.writeFileSync(path.join(dir, 'index.html'), html)
    }
  }
  fs.writeFileSync('dist/404.html', build('/__not-found__/', routeMeta('/__not-found__/')))

  const today = new Date().toISOString().slice(0, 10)
  const urls = ALL_PATHS.map((r) => `  <url><loc>${SITE}${r}</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>${r === '/' ? '1.0' : /privacy|accessibility/.test(r) ? '0.3' : '0.8'}</priority></url>`).join('\n')
  fs.writeFileSync('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`)
  console.log(`prerendered ${ALL_PATHS.length} routes + 404, sitemap written`)
} finally {
  await server.close()
}

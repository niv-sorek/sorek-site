const p = { width: 28, height: 28, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }
export const Icon = ({ name }) => {
  switch (name) {
    case 'building': return <svg {...p}><path d="M4 21V6l8-3 8 3v15M2 21h20M9 21v-4h6v4M8 9h2M14 9h2M8 13h2M14 13h2" /></svg>
    case 'calc': return <svg {...p}><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M8 7h8M8 12h2M12 12h2M16 12h0M8 16h2M12 16h2M16 16h0" /></svg>
    case 'check': return <svg {...p}><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" /><path d="M8.5 12l2.5 2.5 4.5-5" /></svg>
    case 'grad': return <svg {...p}><path d="M2 9l10-5 10 5-10 5z" /><path d="M6 11v5c0 1.5 3 3 6 3s6-1.500 6-3v-5M22 9v6" /></svg>
    case 'phone': return <svg {...p}><path d="M5 4h4l2 5-2.500 1.500a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" /></svg>
    case 'mail': return <svg {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
    case 'pin': return <svg {...p}><path d="M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11z" /><circle cx="12" cy="10" r="2.500" /></svg>
    case 'arrow': return <svg {...p} width="18" height="18"><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
    case 'close': return <svg {...p}><path d="M6 6l12 12M18 6L6 18" /></svg>
    case 'menu': return <svg {...p}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
    default: return null
  }
}

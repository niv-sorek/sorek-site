import { useCallback, useEffect, useState, useRef } from 'react'
import { CONTACT, STATS, SERVICES, PROJECTS, CLIENTS, YEARS, FAQ } from './data.js'
import { Icon } from './icons.jsx'

const NAV = [
  ['services', 'תחומי התמחות'],
  ['projects', 'פרויקטים'],
  ['about', 'אודות'],
  ['clients', 'לקוחות'],
  ['contact', 'יצירת קשר'],
]
const img = (n) => `./img/${n}.webp`

function useReveal(dep) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.in)')
    if (!('IntersectionObserver' in window)) return els.forEach((e) => e.classList.add('in'))
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add('in'), io.unobserve(e.target))),
      { threshold: 0.12 }
    )
    els.forEach((e) => io.observe(e))
    return () => io.disconnect()
  }, [dep])
}

function Header() {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  useEffect(() => {
    const f = () => setSolid(window.scrollY > 40)
    f()
    window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  return (
    <header className={`hdr ${solid || open ? 'solid' : ''}`}>
      <div className="wrap hdr-in">
        <a href="#top" className="logo" aria-label="שורק מהנדסים יועצים – לדף הבית">
          <img src="./img/logo-mark.svg" alt="שורק מהנדסים יועצים" width="77" height="56" />
        </a>
        <nav className={`nav ${open ? 'open' : ''}`} aria-label="ניווט ראשי">
          {NAV.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </nav>
        <a className="btn btn-primary hdr-cta" href={`tel:${CONTACT.tel}`}>
          <Icon name="phone" /> <span>{CONTACT.phone}</span>
        </a>
        <button className="burger" aria-label={open ? 'סגירת תפריט' : 'פתיחת תפריט'} aria-expanded={open} onClick={() => setOpen(!open)}>
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </div>
    </header>
  )
}

const SLIDES = [
  { base: 'hero', small: 'hero-sm', sw: 800, w: 1600, pos: '60% 50%', label: 'הרימון נוף הגליל' },
  { base: 'hero-malka', small: 'hero-malka-sm', sw: 700, w: 1200, pos: '50% 40%', label: 'הרב מלכה, יהוד' },
  { base: 'hero-caesarea', small: 'hero-caesarea-sm', sw: 700, w: 1200, pos: '50% 50%', label: 'קיסריה' },
  { base: 'hero-peqiin', small: 'hero-peqiin-sm', sw: 700, w: 1200, pos: '50% 50%', label: 'פקיעין' },
]

function Hero() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setInterval(() => setI((n) => (n + 1) % SLIDES.length), 5500)
    return () => clearInterval(t)
  }, [paused])
  return (
    <section className="hero" id="top" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {SLIDES.map((s, k) => (
        <img
          key={s.base}
          className={`hero-img ${k === i ? 'on' : ''}`}
          src={img(s.base)}
          srcSet={`${img(s.small)} ${s.sw}w, ${img(s.base)} ${s.w}w`}
          sizes="100vw"
          alt=""
          style={{ objectPosition: s.pos }}
          {...(k === 0 ? { fetchpriority: 'high' } : { loading: 'lazy' })}
        />
      ))}
      <div className="hero-shade" />
      <div className="hero-dots" role="group" aria-label="תמונות רקע">
        {SLIDES.map((s, k) => (
          <button key={s.base} className={k === i ? 'on' : ''} aria-label={`תמונה ${k + 1}: ${s.label}`} aria-pressed={k === i} onClick={() => setI(k)} />
        ))}
      </div>
      <div className="wrap hero-in">
        <p className="eyebrow">משרד מהנדסים יועצים · חיפה</p>
        <h1>תכנון קונסטרוקציה<br />שבונים עליו בביטחון</h1>
        <p className="lead">{YEARS} שנות ניסיון בתכנון קונסטרוקציות. פתרונות יצירתיים וכלכליים, בדיקת חלופות ועמידה בלוחות זמנים.</p>
        <div className="hero-cta">
          <a className="btn btn-primary btn-lg" href="#contact">קבלו הצעה לפרויקט <Icon name="arrow" /></a>
          <a className="btn btn-ghost btn-lg" href={`tel:${CONTACT.tel}`}><Icon name="phone" /> {CONTACT.phone}</a>
        </div>
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section className="stats" aria-label="עובדות על המשרד">
      <div className="wrap stats-grid">
        {STATS.map((s) => (
          <div key={s.label} className="stat reveal">
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="sec" id="services">
      <div className="wrap">
        <h2 className="reveal">תחומי התמחות</h2>
        <p className="sub reveal">מהתכנון הראשוני ועד בקרה והכשרה – כל מה שפרויקט בנייה צריך מבחינה הנדסית.</p>
        <div className="cards">
          {SERVICES.map((s) => (
            <article key={s.title} className="card reveal">
              <span className="ico"><Icon name={s.icon} /></span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
        <p className="center reveal"><a className="btn btn-primary" href="#contact">יש לכם פרויקט? נשמח לשמוע <Icon name="arrow" /></a></p>
      </div>
    </section>
  )
}

function ProjectDialog({ project, onClose }) {
  const [n, setN] = useState(0)
  const count = project.gallery
  const src = (k) => `./img/projects/${project.id}-${k + 1}.webp`
  const next = () => setN((i) => (i + 1) % count)
  const prev = () => setN((i) => (i - 1 + count) % count)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') next()
      if (e.key === 'ArrowRight') prev()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey) }
  }, [count, onClose])

  return (
    <div className="lb" role="dialog" aria-modal="true" aria-label={project.title} onClick={onClose}>
      <div className="pd" onClick={(e) => e.stopPropagation()}>
        <button className="lb-x" aria-label="סגירה" onClick={onClose} autoFocus><Icon name="close" /></button>
        <div className="pd-media">
          <div className="pd-main">
            <img key={n} src={src(n)} alt={`${project.title} – תמונה ${n + 1} מתוך ${count}`} />
            {count > 1 && (
              <>
                <button className="pd-nav pd-prev" onClick={prev} aria-label="התמונה הקודמת"><Icon name="arrow" /></button>
                <button className="pd-nav pd-next" onClick={next} aria-label="התמונה הבאה"><Icon name="arrow" /></button>
              </>
            )}
          </div>
          {count > 1 && (
            <div className="pd-thumbs">
              {Array.from({ length: count }, (_, k) => (
                <button key={k} className={k === n ? 'on' : ''} onClick={() => setN(k)} aria-label={`תמונה ${k + 1}`} aria-pressed={k === n}>
                  <img src={src(k)} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="pd-info">
          <small>{project.cat}</small>
          <h3>{project.title}</h3>
          <p>{project.desc}</p>
          <a className="btn btn-primary" href="#contact" onClick={onClose}>רוצים פרויקט דומה? דברו איתנו <Icon name="arrow" /></a>
        </div>
      </div>
    </div>
  )
}

function Projects() {
  const cats = ['הכל', ...new Set(PROJECTS.map((p) => p.cat))]
  const [cat, setCat] = useState('הכל')
  const [sel, setSel] = useState(null)
  const list = PROJECTS.filter((p) => cat === 'הכל' || p.cat === cat)
  const opener = useRef(null)
  const close = useCallback(() => { setSel(null); opener.current?.focus() }, [])

  return (
    <section className="sec alt" id="projects">
      <div className="wrap">
        <h2 className="reveal">פרויקטים נבחרים</h2>
        <div className="chips" role="group" aria-label="סינון פרויקטים">
          {cats.map((c) => (
            <button key={c} className={`chip ${c === cat ? 'on' : ''}`} aria-pressed={c === cat} onClick={() => setCat(c)}>{c}</button>
          ))}
        </div>
        <div className="grid">
          {list.map((p) => (
            <button key={p.id} className="proj" onClick={(e) => { opener.current = e.currentTarget; setSel(p) }} aria-label={`לפרטי הפרויקט: ${p.title}`}>
              <img src={img(p.img)} alt={p.alt || p.title} loading="lazy" width="1000" height="750" />
              <span className="proj-badge">{p.gallery} תמונות</span>
              <span className="proj-cap"><small>{p.cat}</small>{p.title}</span>
            </button>
          ))}
        </div>
      </div>
      {sel && <ProjectDialog project={sel} onClose={close} />}
    </section>
  )
}

function About() {
  return (
    <section className="sec" id="about">
      <div className="wrap about">
        <div className="about-img reveal"><img src={img('about')} alt="תוכניות בנייה פרושות על שולחן" loading="lazy" width="900" height="675" /></div>
        <div className="reveal">
          <h2>על המשרד</h2>
          <p>משרד שורק מהנדסים יועצים בע"מ הוקם בשנת 2014 בניהולו של <b>טל שורק</b>, בוגר הטכניון בחיפה (1990, מסלול מבנים), עם ותק וניסיון מקצועי של {YEARS} שנים.</p>
          <p>המשרד מתמחה בתכנון קונסטרוקציות במגוון תחומים וחומרים. צוות המהנדסים, המהנדסות והשרטטות ידוע במקצועיות ובשירות מעולה: זריזות בעבודה, פתרונות כלכליים ובדיקת חלופות, תוך הקפדה על פרטים ועמידה בלוחות זמנים.</p>
          <ul className="ticks">
            <li>פתרונות יצירתיים המותאמים למבנה וללקוח</li>
            <li>זריזות ועמידה בלוחות זמנים</li>
            <li>משרד מאמן מטעם משרד הכלכלה מאז 2014</li>
          </ul>
          <a className="btn btn-primary" href="#contact">דברו איתנו <Icon name="arrow" /></a>
        </div>
      </div>
    </section>
  )
}

function Clients() {
  return (
    <section className="sec alt" id="clients">
      <div className="wrap">
        <h2 className="reveal">בין לקוחותינו</h2>
        <p className="sub reveal">גופים ציבוריים, חברות בנייה ויזמים פרטיים.</p>
        <ul className="logos">
          {CLIENTS.map((c) => (
            <li key={c.name} className="reveal"><img src={img(c.img)} alt={c.name} loading="lazy" width="150" height="150" /></li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Faq() {
  const ld = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
  return (
    <section className="sec" id="faq">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <div className="wrap">
        <h2 className="reveal">שאלות נפוצות</h2>
        <div className="faq">
          {FAQ.map((f) => (
            <details key={f.q} className="reveal">
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [state, setState] = useState('idle')
  const [err, setErr] = useState('')
  async function submit(e) {
    e.preventDefault()
    const f = Object.fromEntries(new FormData(e.currentTarget))
    if (f.website) return
    if (!f.name.trim()) return setErr('אנא הזינו שם')
    if (!/^\+?\d{8,13}$/.test(f.phone.replace(/[\s-]/g, ''))) return setErr('אנא הזינו מספר טלפון תקין')
    setErr('')
    if (CONTACT.formEndpoint) {
      setState('sending')
      try {
        const r = await fetch(CONTACT.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ name: f.name, phone: f.phone, email: f.email, message: f.message }),
        })
        if (!r.ok) throw new Error()
        setState('done')
      } catch {
        setState('idle')
        setErr(`אירעה שגיאה. אפשר להתקשר אלינו: ${CONTACT.phone}`)
      }
    } else {
      const body = `שם: ${f.name}\nטלפון: ${f.phone}\nדוא"ל: ${f.email || ''}\n\n${f.message || ''}`
      window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent('פנייה מהאתר – ' + f.name)}&body=${encodeURIComponent(body)}`
      setState('done')
    }
  }
  return (
    <section className="sec contact" id="contact">
      <div className="wrap contact-grid">
        <div className="reveal">
          <h2>בואו נדבר על הפרויקט שלכם</h2>
          <p className="sub">השאירו פרטים ונחזור אליכם בהקדם, או התקשרו ישירות.</p>
          <ul className="cinfo">
            <li><Icon name="phone" /><a href={`tel:${CONTACT.tel}`}>{CONTACT.phone}</a></li>
            <li><Icon name="mail" /><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
            <li><Icon name="pin" /><span>{CONTACT.address}</span></li>
          </ul>
          <p className="navlinks"><a href={CONTACT.waze} target="_blank" rel="noreferrer">ניווט ב-Waze</a> · <a href={CONTACT.maps} target="_blank" rel="noreferrer">Google Maps</a></p>
          <iframe className="map" title="מפת המשרד – שדרות גולומב 19, חיפה" src={CONTACT.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
        </div>
        {state === 'done' ? (
          <div className="form done" role="status">
            <h3>תודה! הפרטים התקבלו</h3>
            <p>ניצור איתכם קשר בהקדם. לשיחה מיידית: <a href={`tel:${CONTACT.tel}`}>{CONTACT.phone}</a></p>
          </div>
        ) : (
          <form className="form reveal" onSubmit={submit} noValidate>
            <label>שם מלא<input name="name" required autoComplete="name" /></label>
            <label>טלפון<input name="phone" type="tel" required autoComplete="tel" inputMode="tel" dir="ltr" className="ltr" /></label>
            <label>דוא"ל (לא חובה)<input name="email" type="email" autoComplete="email" dir="ltr" className="ltr" /></label>
            <label>ספרו לנו על הפרויקט<textarea name="message" rows="4" /></label>
            <input name="website" tabIndex="-1" autoComplete="off" className="hp" aria-hidden="true" />
            {err && <p className="err" role="alert">{err}</p>}
            <p className="fine">בשליחת הטופס הנך מאשר את השימוש בפרטים לצורך יצירת קשר עמך, בהתאם ל <a href="#privacy">מדיניות פרטיות</a>.</p>
            <button className="btn btn-primary btn-lg" disabled={state === 'sending'}>{state === 'sending' ? 'שולח…' : 'שליחה'}</button>
          </form>
        )}
      </div>
    </section>
  )
}

function A11yToolbar() {
  const [open, setOpen] = useState(false)
  const [s, setS] = useState(() => {
    try { return JSON.parse(localStorage.getItem('a11y')) || { size: 0, contrast: false, links: false } } catch { return { size: 0, contrast: false, links: false } }
  })
  useEffect(() => {
    const r = document.documentElement
    r.style.fontSize = `${100 + s.size * 12.5}%`
    r.classList.toggle('hc', s.contrast)
    r.classList.toggle('ul', s.links)
    try { localStorage.setItem('a11y', JSON.stringify(s)) } catch {}
  }, [s])
  return (
    <div className="a11y">
      <button className="a11y-fab" aria-expanded={open} aria-controls="a11y-panel" aria-label="תפריט נגישות" onClick={() => setOpen(!open)}>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="4.5" r="1.8" /><path d="M5 8.5l7 1.5 7-1.500M12 10v4.500M12 14.500l-3 6M12 14.500l3 6" /></svg>
      </button>
      {open && (
        <div id="a11y-panel" className="a11y-panel" role="region" aria-label="הגדרות נגישות">
          <button onClick={() => setS({ ...s, size: Math.min(s.size + 1, 3) })}>הגדלת טקסט +</button>
          <button onClick={() => setS({ ...s, size: Math.max(s.size - 1, 0) })}>הקטנת טקסט −</button>
          <button aria-pressed={s.contrast} onClick={() => setS({ ...s, contrast: !s.contrast })}>ניגודיות גבוהה</button>
          <button aria-pressed={s.links} onClick={() => setS({ ...s, links: !s.links })}>הדגשת קישורים</button>
          <button onClick={() => setS({ size: 0, contrast: false, links: false })}>איפוס</button>
          <a href="#accessibility" onClick={() => setOpen(false)}>הצהרת נגישות</a>
        </div>
      )}
    </div>
  )
}

function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap ftr-in">
        <img src="./img/logo-full-reversed.svg" alt="שורק מהנדסים יועצים" width="163" height="120" className="ftr-logo" />
        <div className="ftr-text">
          <p>© {new Date().getFullYear()} ז.ש.א שורק מהנדסים יועצים בע"מ</p>
          <p>{CONTACT.address}</p>
        </div>
        <nav className="ftr-links" aria-label="מידע משפטי">
          <a href="#accessibility">הצהרת נגישות</a>
          <a href="#privacy">מדיניות פרטיות</a>
        </nav>
      </div>
    </footer>
  )
}

function MobileBar() {
  return (
    <div className="mbar">
      <a className="btn btn-primary" href={`tel:${CONTACT.tel}`}><Icon name="phone" /> התקשרו</a>
      <a className="btn btn-light" href="#contact">השאירו פרטים</a>
    </div>
  )
}

const UPDATED = '18-10-2026'

function Legal({ title, children }) {
  return (
    <section className="sec legal">
      <div className="wrap">
        <p><a href="#top">← חזרה לאתר</a></p>
        <h1>{title}</h1>
        {children}
        <p className="legal-date">עודכן לאחרונה: {UPDATED}</p>
      </div>
    </section>
  )
}

function Accessibility() {
  return (
    <Legal title="הצהרת נגישות">
      <p>ז.ש.א שורק מהנדסים יועצים בע"מ מייחסת חשיבות רבה לכך שכל לקוחותיה, ובכללם אנשים עם מוגבלות, יוכלו לקבל שירות מכבד, שוויוני, נגיש ומקצועי, גם באתר האינטרנט. בהתאם לחוק שוויון זכויות לאנשים עם מוגבלויות, התשנ"ח-1998, ולתקנות שהותקנו מכוחו, אנו פועלים להנגשת האתר ושירות הלקוחות ולשיפורם באופן שוטף.</p>

      <h2>נגישות האתר</h2>
      <p>האתר נבנה במטרה לעמוד בהמלצות התקן הישראלי ת"י 5568 לנגישות תכנים באינטרנט ברמה AA, המבוסס על הנחיות WCAG הבינלאומיות. האתר החדש טרם עבר בדיקת נגישות חיצונית מלאה, ואנו פועלים להשלמתה.</p>
      <ul>
        <li>ניווט מלא באמצעות המקלדת: מקש Tab למעבר בין רכיבים, Enter להפעלה, Esc לסגירת חלון, ומקשי החצים לדפדוף בגלריית הפרויקטים.</li>
        <li>קישור "דילוג לתוכן" בראש כל עמוד.</li>
        <li>מבנה סמנטי וכותרות מסודרות, לתמיכה בטכנולוגיות מסייעות וקוראי מסך. לקריאה נוחה עם קורא מסך מומלץ להשתמש בתוכנת NVDA העדכנית.</li>
        <li>טקסט חלופי לתמונות, וניגודיות צבעים גבוהה.</li>
        <li>תפריט נגישות באתר (הכפתור בפינת המסך): הגדלה והקטנה של הטקסט, ניגודיות גבוהה והדגשת קישורים. ההגדרות נשמרות בדפדפן שלכם בלבד.</li>
        <li>התאמה למכשירים ניידים, והקטנת תנועה למי שהגדיר זאת במכשיר.</li>
      </ul>

      <h2>מגבלות ידועות</h2>
      <p>מפת Google המוטמעת בעמוד יצירת הקשר היא תוכן של צד שלישי, וייתכן שאינה נגישה במלואה. ניתן לקבל את פרטי הכתובת בטלפון, בדוא"ל או בטקסט שבעמוד. אם נתקלתם ברכיב או בתוכן שאינו נגיש, פנו אלינו ונטפל בכך.</p>

      <h2>שירות לקוחות נגיש</h2>
      <p>המשרד אינו מקבל קהל. השירות ניתן בטלפון, בדוא"ל ובטופס שבאתר, במענה אישי ובשפה ברורה. מידע ניתן לקבל גם בפורמט נגיש, ללא עלות, לאנשים עם מוגבלות. לבקשה כזו פנו לרכז הנגישות.</p>
      <p>דרכי יצירת קשר: טלפון <a href={`tel:${CONTACT.tel}`}>{CONTACT.phone}</a>, דוא"ל <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.</p>

      <h2>רכז הנגישות</h2>
      <p>טל שורק<br />טלפון: <a href={`tel:${CONTACT.tel}`}>{CONTACT.phone}</a><br />דוא"ל: <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></p>
    </Legal>
  )
}

function Privacy() {
  return (
    <Legal title="מדיניות פרטיות">
      <p>ז.ש.א שורק מהנדסים יועצים בע"מ ({CONTACT.address}) מכבדת את פרטיותם של המבקרים באתר. מדיניות זו מפרטת את המידע הנאסף, את מטרות השימוש בו ואת זכויותיהם של המבקרים.</p>

      <h2>המידע הנאסף</h2>
      <p>נאסף אך ורק המידע שמוסר המבקר בטופס יצירת הקשר: שם, מספר טלפון, כתובת דוא"ל (לא חובה) והודעה חופשית. מסירת המידע אינה חובה על פי דין, אך בלעדיו לא נוכל ליצור קשר עם הפונה.</p>

      <h2>מטרות השימוש</h2>
      <p>המידע ישמש אך ורק ליצירת קשר עם הפונה ולטיפול בפנייתו. המידע לא יימכר, ולא ישמש לדיוור שיווקי ללא הסכמת הפונה.</p>

      <h2>העברת מידע לצדדים שלישיים</h2>
      <p>הפנייה מגיעה לדוא"ל המשרד. בהתאם לאופן שבו הטופס מוגדר, היא עשויה לעבור דרך שירות טפסים של צד שלישי, ועשויה להיות מעובדת בשרתים מחוץ לישראל, או להישלח דרך תוכנת הדוא"ל שבמכשיר שלכם. מעבר לכך, המידע לא יימסר לגורם אחר, אלא אם נידרש לכך על פי דין.</p>

      <h2>תקופת שמירת המידע</h2>
      <p>המידע יישמר כל עוד הדבר נדרש לטיפול בפנייה ולהמשך הקשר עם הפונה, ולאחר מכן יימחק.</p>

      <h2>עוגיות ואחסון בדפדפן</h2>
      <p>האתר אינו משתמש בעוגיות פרסום או במעקב, ואינו כולל כלי ניתוח תנועה. הגדרות תפריט הנגישות נשמרות בדפדפן שלכם בלבד. כאשר מפת Google נטענת בעמוד, Google עשויה לאסוף נתונים בהתאם למדיניות הפרטיות שלה.</p>

      <h2>זכויות הפונים</h2>
      <p>על פי חוק הגנת הפרטיות, התשמ"א-1981, כל אדם רשאי לבקש לעיין במידע שנשמר אודותיו, לתקנו או למחקו. לפנייה: <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> או בטלפון <a href={`tel:${CONTACT.tel}`}>{CONTACT.phone}</a>.</p>
    </Legal>
  )
}

export default function App() {
  const read = () => typeof window === 'undefined' ? 'home' : (window.location.hash === '#accessibility' ? 'a11y' : window.location.hash === '#privacy' ? 'privacy' : 'home')
  const [page, setPage] = useState(read)
  useEffect(() => {
    const f = () => {
      const next = read()
      setPage(next)
      if (next !== 'home') return window.scrollTo(0, 0)
      const id = window.location.hash.slice(1)
      if (id) requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView())
    }
    window.addEventListener('hashchange', f)
    return () => window.removeEventListener('hashchange', f)
  }, [])
  useReveal(page)
  return (
    <>
      <a className="skip" href="#main">דילוג לתוכן</a>
      <Header />
      <main id="main">
        {page === 'a11y' ? <Accessibility /> : page === 'privacy' ? <Privacy /> : (
          <>
            <Hero /><Stats /><Services /><Projects /><About /><Clients /><Faq /><Contact />
          </>
        )}
      </main>
      <Footer />
      <MobileBar />
      <A11yToolbar />
    </>
  )
}

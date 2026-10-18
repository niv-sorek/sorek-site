export const CONTACT = {
  phone: '04-8370003',
  tel: '+97248370003',
  email: 'sorek-eng@walla.co.il',
  address: 'שדרות גולומב 19, חיפה 3339116',
  maps: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('שדרות גולומב 19 חיפה'),
  mapEmbed: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13413.392927736373!2d34.989328!3d32.809537!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151dbbadfd38a05f%3A0xefedc7e21a9ec4fc!2sSderot%20Eliyahu%20Golomb%2019%2C%20Haifa%2C%20Israel!5e0!3m2!1siw!2sil!4v1719413869165!5m2!1siw!2sil',
  waze: 'https://waze.com/ul?q=' + encodeURIComponent('שדרות גולומב 19 חיפה') + '&navigate=yes',
  // Optional: set a Formspree/Getform endpoint to receive leads by email without opening a mail app
  formEndpoint: import.meta.env.VITE_FORM_ENDPOINT || '',
}

export const CAREER_START = 1990
export const YEARS = new Date().getFullYear() - CAREER_START

export const STATS = [
  { value: String(YEARS), label: 'שנות ניסיון מקצועי' },
  { value: '2014', label: 'שנת הקמת המשרד' },
  { value: '1990', label: 'בוגר הטכניון, מסלול מבנים' },
  { value: '9+', label: 'גופים ציבוריים, חברות ויזמים' },
]

export const SERVICES = [
  { href: '/structural-design/', icon: 'building', title: 'תכנון קונסטרוקציה למבנים', text: 'תכנון קונסטרוקציות במגוון תחומים וחומרים – פתרונות יצירתיים המותאמים למבנה וללקוח.' },
  { href: '/bill-of-quantities/', icon: 'calc', title: 'כתבי כמויות, אומדנים ומפרטים', text: 'הכנת כתבי כמויות, אומדנים ומפרטים מדויקים לתכנון תקציבי ולפתרונות כלכליים.' },
  { href: '/design-review/', icon: 'check', title: 'בקרת תכנון', text: 'בדיקת חלופות ובקרה קפדנית על הפרטים, כדי להגיע לתכנון בטוח, חסכוני ויעיל.' },
  { icon: 'grad', title: 'הכשרת מהנדסים', text: 'המשרד מלווה ומכשיר מהנדסים צעירים בשנותיהם הראשונות, ומשרד מאמן מטעם משרד הכלכלה.' },
]

export const PROJECTS = [
  { id: 'rimon', cat: 'מגורים', title: 'הרימון נוף הגליל', alt: "פרויקט מגורים 'הרימון' בנוף הגליל – תכנון קונסטרוקציה", img: 'p-rimon', gallery: 3, desc: '102 יחידות דיור בשלושה מבנים על חניון משותף, תוכנן עבור חברת בונה ריינה בע"מ.' },
  { id: 'caesarea', cat: 'מגורים', title: 'קיסריה', alt: 'פרויקט מגורים ומסחר בקיסריה – תכנון קונסטרוקציה', img: 'p-caesarea', gallery: 3, desc: '80 יחידות דיור ו-900 מ"ר של מסחר, מעל 7,500 מ"ר של 2 קומות חניון תת-קרקעי. תוכנן עבור חברת עץ השקד בע"מ.' },
  { id: 'malka', cat: 'מגורים', title: 'הרב מלכה יהוד', alt: 'שני בנייני מגורים ברחוב הרב מלכה ביהוד – תכנון קונסטרוקציה', img: 'p-malka', gallery: 2, desc: '182 יחידות דיור בשני מבנים בני 16 קומות, מעל 2 קומות חניון בשטח של כ-6,000 מ"ר.' },
  { id: 'ramat-hanasi', cat: 'קירות תומכים', title: 'חיזוק קיר תומך בשכונת רמת הנשיא בחיפה', img: 'p-ramat-hanasi', gallery: 2, desc: 'חיזוק הקיר בעוגני קרקע. תוכנן עבור עיריית חיפה על ידי חברת יפה נוף.' },
  { id: 'peqiin', cat: 'קירות תומכים', title: 'הקמת שכונת חיילים משוחררים בפקיעין', img: 'p-peqiin', gallery: 2, desc: '22,000 מ"ר של קירות תומכים. תוכנן עבור משרד השיכון, החברה המנהלת עמק איילון בע"מ.' },
  { id: 'sports-hall', cat: 'אולמות ספורט', title: "אולם ספורט עבד אלרחמן חאג'", img: 'p-sports-hall', gallery: 2, desc: 'בנייה קונבנציונלית עם גג פלדה. תוכנן עבור עיריית חיפה על ידי חברת יפה נוף.' },
]

export const CLIENTS = [
  { name: 'משרד הבינוי והשיכון', img: 'c-moh' },
  { name: 'עיריית חיפה', img: 'c-haifa' },
  { name: 'עמק איילון', img: 'c-emek-ayalon' },
  { name: 'אזורים', img: 'c-azorim' },
  { name: 'יפה נוף', img: 'c-yafe-nof' },
  { name: 'אפ.ד. מהנדסים', img: 'c-afd' },
  { name: 'מ.י. שמשינס', img: 'c-shemshins' },
  { name: 'בונה ריינה', img: 'c-boneh-renih' },
  { name: 'עץ השקד', img: 'c-etz-hashaked' },
]

export const FAQ = [
  { q: 'מה עושה מהנדס קונסטרוקציה?', a: 'מהנדס קונסטרוקציה מתכנן את השלד הנושא של המבנה – יסודות, עמודים, קורות, תקרות וקירות – כך שהמבנה יהיה בטוח, יציב ועומד בתקנים ובדרישות היתר הבנייה.' },
  { q: 'באילו אזורים המשרד פועל?', a: 'המשרד שוכן בחיפה ופועל בכל רחבי הארץ.' },
  { q: 'אילו סוגי מבנים אתם מתכננים?', a: 'מבני מגורים רבי קומות וחניונים תת-קרקעיים, מבנים מסחריים, אולמות ספורט, קירות תומכים וחיזוק קירות בעוגני קרקע, בבטון, פלדה ובחומרים נוספים.' },
  { q: 'מה כולל שירות בקרת תכנון?', a: 'בדיקה בלתי תלויה של תכנית הקונסטרוקציה: בדיקת חלופות, בקרה על הפרטים והחישובים, והמלצות לתכנון בטוח, חסכוני ויעיל יותר.' },
  { q: 'איך מקבלים הצעת מחיר?', a: 'מתקשרים ל-04-8370003 או משאירים פרטים בטופס. נעבור על תכניות הפרויקט והיקפו ונחזור אליכם עם הצעה בהקדם.' },
]

export const CONTACT = {
  phone: '04-8370003',
  tel: '+97248370003',
  email: 'sorek-eng@walla.co.il',
  address: 'שדרות גולומב 19, חיפה 3339116',
  maps: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('שדרות גולומב 19 חיפה'),
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
  { icon: 'building', title: 'תכנון קונסטרוקציה למבנים', text: 'תכנון קונסטרוקציות במגוון תחומים וחומרים – פתרונות יצירתיים המותאמים למבנה וללקוח.' },
  { icon: 'calc', title: 'כתבי כמויות, אומדנים ומפרטים', text: 'הכנת כתבי כמויות, אומדנים ומפרטים מדויקים לתכנון תקציבי ולפתרונות כלכליים.' },
  { icon: 'check', title: 'בקרת תכנון', text: 'בדיקת חלופות ובקרה קפדנית על הפרטים, כדי להגיע לתכנון בטוח, חסכוני ויעיל.' },
  { icon: 'grad', title: 'הכשרת מהנדסים', text: 'המשרד מלווה ומכשיר מהנדסים צעירים בשנותיהם הראשונות, ומשרד מאמן מטעם משרד הכלכלה.' },
]

export const PROJECTS = [
  { id: 'rimon', cat: 'מגורים', title: 'הרימון נוף הגליל', img: 'p-rimon' },
  { id: 'caesarea', cat: 'מגורים', title: 'קיסריה', img: 'p-caesarea' },
  { id: 'malka', cat: 'מגורים', title: 'הרב מלכה יהוד', img: 'p-malka' },
  { id: 'ramat-hanasi', cat: 'קירות תומכים', title: 'חיזוק קיר תומך בשכונת רמת הנשיא בחיפה', img: 'p-ramat-hanasi' },
  { id: 'peqiin', cat: 'קירות תומכים', title: 'הקמת שכונת חיילים משוחררים בפקיעין', img: 'p-peqiin' },
  { id: 'sports-hall', cat: 'אולמות ספורט', title: "אולם ספורט עבד אלרחמן חאג'", img: 'p-sports-hall' },
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

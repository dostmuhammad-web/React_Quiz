export const lessons = [
  {
    id: 'kirish',
    title: 'React nima?',
    minutes: 5,
    summary:
      'React — foydalanuvchi interfeyslarini yaratish uchun JavaScript kutubxonasi. Bu darsda uning asosiy g’oyasi va nima uchun ommalashganini bilib olasiz.',
    sections: [
      {
        t: 'p',
        text: 'React — sahifadagi interfeysni kichik, mustaqil qismlarga (komponentlarga) bo’lib yaratishga yordam beradigan JavaScript kutubxonasi. Uni Meta (sobiq Facebook) jamoasi yaratgan va hozirda minglab kompaniyalar ishlatadi.',
      },
      {
        t: 'p',
        text: 'React’ning asosiy g’oyasi oddiy: har bir komponent o’z holati (state) va ko’rinishini boshqaradi. Ma’lumot o’zgarsa, React faqat kerakli qismni qayta chizadi — butun sahifani emas.',
      },
      { t: 'h', text: 'Nega React?' },
      {
        t: 'list',
        items: [
          'Komponentlarga asoslangan arxitektura — kodni qayta ishlatish oson.',
          'Virtual DOM orqali tez va silliq yangilanish.',
          'Bir marta o’rganib, veb va mobil (React Native) uchun foydalanish mumkin.',
          'Juda katta hamjamiyat va tayyor kutubxonalar.',
        ],
      },
      {
        t: 'note',
        text: 'React — framework emas, kutubxona. Marshrutlash, ma’lumot olish yoki holatni boshqarish uchun qo’shimcha kutubxonalar (React Router, TanStack Query va boshqalar) ishlatiladi.',
      },
      {
        t: 'demo',
        id: 'hello',
        title: 'Birinchi React ko’rinishi',
        desc: 'Quyidagi karta aynan React komponenti tomonidan chizilgan.',
      },
    ],
    quiz: [
      {
        q: 'React aslida nima?',
        options: ['CSS freymvork', 'JavaScript kutubxonasi', 'Ma’lumotlar bazasi', 'Brauzer'],
        answer: 1,
        why: 'React — interfeys yaratish uchun JavaScript kutubxonasi.',
      },
      {
        q: 'React’ni qaysi kompaniya yaratgan?',
        options: ['Google', 'Microsoft', 'Meta (Facebook)', 'Amazon'],
        answer: 2,
        why: 'React 2013-yilda Meta (o’sha paytda Facebook) tomonidan taqdim etilgan.',
      },
      {
        q: 'Interfeys React’da qanday qismlarga bo’linadi?',
        options: ['Komponentlarga', 'Jadvallarga', 'Fayllarga', 'Sahifalarga'],
        answer: 0,
        why: 'React’da interfeys qayta ishlatiladigan komponentlardan tuziladi.',
      },
    ],
  },
  {
    id: 'ornatish',
    title: 'Loyihani boshlash',
    minutes: 6,
    summary:
      'Vite yordamida yangi React loyihasini yaratish, papka tuzilishi va birinchi ishga tushirish.',
    sections: [
      {
        t: 'p',
        text: 'React loyihasini yaratishning eng qulay yo’li — Vite. U tez ishlaydi va ortiqcha sozlamalarni o’zi bajaradi. Kompyuterda Node.js (18+ versiya) o’rnatilgan bo’lishi kerak.',
      },
      { t: 'h', text: 'Loyihani yaratish' },
      {
        t: 'code',
        lang: 'Terminal',
        code: `npm create vite@latest mening-ilova -- --template react
cd mening-ilova
npm install
npm run dev`,
      },
      {
        t: 'p',
        text: 'Oxirgi buyruqdan keyin terminalda manzil paydo bo’ladi (odatda http://localhost:5173). Shu manzilni brauzerda ochsangiz, tayyor React sahifasini ko’rasiz.',
      },
      { t: 'h', text: 'Loyiha tuzilishi' },
      {
        t: 'list',
        items: [
          'index.html — sahifaning yagona HTML fayli.',
          'src/main.jsx — React ilovasini ishga tushiruvchi kirish nuqtasi.',
          'src/App.jsx — asosiy komponent.',
          'src/index.css — global stillar.',
          'package.json — kutubxonalar va buyruqlar ro’yxati.',
        ],
      },
      {
        t: 'code',
        lang: 'src/main.jsx',
        code: `import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)`,
      },
      {
        t: 'note',
        text: 'index.html ichida <div id="root"></div> bo’ladi. React butun interfeysni aynan shu element ichiga joylashtiradi.',
      },
    ],
    quiz: [
      {
        q: 'React loyihasini yaratish uchun qaysi vosita qulay?',
        options: ['Vite', 'Photoshop', 'MySQL', 'Docker Compose'],
        answer: 0,
        why: 'Vite — zamonaviy va tez qurilish vositasi, React shabloni mavjud.',
      },
      {
        q: 'React ilovasi qaysi element ichiga chiziladi?',
        options: ['#app', '#root', '#main', 'body'],
        answer: 1,
        why: 'Standart holatda index.html dagi <div id="root"> ishlatiladi.',
      },
      {
        q: 'Qaysi fayl asosiy komponent hisoblanadi?',
        options: ['index.html', 'package.json', 'src/App.jsx', 'vite.config.js'],
        answer: 2,
        why: 'src/App.jsx — loyihadagi asosiy komponent.',
      },
    ],
  },
  {
    id: 'jsx',
    title: 'JSX asoslari',
    minutes: 7,
    summary:
      'JSX — JavaScript ichida HTML’ga o’xshash kod yozish imkonini beruvchi sintaksis. Uning qoidalarini o’rganamiz.',
    sections: [
      {
        t: 'p',
        text: 'JSX — JavaScript’ning kengaytmasi. U HTML’ga juda o’xshaydi, lekin aslida JavaScript ifodasi hisoblanadi va brauzer tushunadigan kodga aylantiriladi.',
      },
      {
        t: 'code',
        lang: 'JSX',
        code: `const element = <h1>Salom, dunyo!</h1>`,
      },
      { t: 'h', text: 'Asosiy qoidalar' },
      {
        t: 'list',
        items: [
          'Komponent bitta ota element qaytarishi kerak (yoki <>...</> fragment).',
          'HTML’dagi class o’rniga className ishlatiladi.',
          'JavaScript ifodalari figurali qavslar ichida yoziladi: {ism}.',
          'Barcha teglar yopilishi shart: <img />, <br />.',
          'Atributlar camelCase ko’rinishida: onClick, tabIndex.',
        ],
      },
      {
        t: 'code',
        lang: 'JSX',
        code: `function Salom() {
  const ism = 'Aziza'
  const yil = new Date().getFullYear()

  return (
    <div className="karta">
      <h2>Salom, {ism}!</h2>
      <p>Hozir {yil}-yil.</p>
      <p>2 + 2 = {2 + 2}</p>
    </div>
  )
}`,
      },
      {
        t: 'note',
        text: 'JSX ichida faqat ifoda (expression) yozish mumkin. if yoki for kabi operatorlarni to’g’ridan-to’g’ri qo’yib bo’lmaydi — ular o’rniga shartli operator yoki map ishlatiladi.',
      },
      {
        t: 'demo',
        id: 'hello',
        title: 'JSX ifodalari',
        desc: 'Figurali qavslar ichidagi JavaScript qiymatlari qanday ko’rinishga kelishini kuzating.',
      },
    ],
    quiz: [
      {
        q: 'JSX’da CSS klassini qanday yozamiz?',
        options: ['class="karta"', 'className="karta"', 'css="karta"', 'styleClass="karta"'],
        answer: 1,
        why: 'class — JavaScript’da band so’z, shuning uchun JSX’da className ishlatiladi.',
      },
      {
        q: 'JavaScript ifodasini JSX ichida qanday qo’shamiz?',
        options: ['{{ ifoda }}', '{ifoda}', '[[ifoda]]', '(ifoda)'],
        answer: 1,
        why: 'Bitta figurali qavs juftligi ifodani joylashtiradi.',
      },
      {
        q: 'Komponent nechta ota element qaytarishi mumkin?',
        options: ['Cheksiz', 'Aynan bitta', 'Kamida ikkita', 'Hech qanday'],
        answer: 1,
        why: 'Bitta ota element yoki fragment (<>...</>) qaytarish kerak.',
      },
    ],
  },
  {
    id: 'komponentlar',
    title: 'Komponentlar',
    minutes: 7,
    summary:
      'Komponent — React’ning eng kichik qurilish bloki. Uni yaratish, chaqirish va qayta ishlatishni o’rganamiz.',
    sections: [
      {
        t: 'p',
        text: 'Komponent — JSX qaytaradigan JavaScript funksiyasi. Nomi katta harf bilan boshlanadi, shunda React uni oddiy HTML tegidan ajratadi.',
      },
      {
        t: 'code',
        lang: 'src/components/Karta.jsx',
        code: `function Karta() {
  return (
    <article className="karta">
      <h3>React o’quv kursi</h3>
      <p>Komponentlar bilan tanishamiz.</p>
    </article>
  )
}

export default Karta`,
      },
      { t: 'h', text: 'Komponentdan foydalanish' },
      {
        t: 'code',
        lang: 'src/App.jsx',
        code: `import Karta from './components/Karta'

function App() {
  return (
    <main>
      <Karta />
      <Karta />
      <Karta />
    </main>
  )
}`,
      },
      {
        t: 'p',
        text: 'Bitta komponentni bir necha marta chaqirish mumkin. Har bir chaqiruv — mustaqil nusxa. Shu sababli interfeysni kichik bo’laklarga bo’lish oson va xavfsiz.',
      },
      {
        t: 'note',
        text: 'Komponent nomini kichik harf bilan boshlasangiz (masalan karta), React uni oddiy HTML teg deb o’ylaydi va hech narsa chiqmaydi.',
      },
    ],
    quiz: [
      {
        q: 'Komponent nomi qanday harf bilan boshlanishi kerak?',
        options: ['Kichik harf', 'Katta harf', 'Raqam', 'Pastki chiziq'],
        answer: 1,
        why: 'Katta harf React’ga bu komponent ekanini bildiradi.',
      },
      {
        q: 'Komponent aslida nima?',
        options: ['JSX qaytaradigan funksiya', 'CSS fayl', 'HTML sahifa', 'Ma’lumotlar bazasi jadvali'],
        answer: 0,
        why: 'Funksional komponent — JSX qaytaruvchi oddiy funksiya.',
      },
      {
        q: 'Bitta komponentni necha marta ishlatish mumkin?',
        options: ['Faqat bir marta', 'Faqat ikki marta', 'Istalgancha', 'Faqat siklda'],
        answer: 2,
        why: 'Komponentlar qayta ishlatish uchun yaratiladi.',
      },
    ],
  },
  {
    id: 'props',
    title: 'Props',
    minutes: 8,
    summary:
      'Props — komponentga tashqaridan ma’lumot uzatish usuli. Ular komponentni moslashuvchan qiladi.',
    sections: [
      {
        t: 'p',
        text: 'Props (properties) — ota komponentdan bola komponentga uzatiladigan ma’lumotlar. Ular funksiya argumentlari kabi ishlaydi.',
      },
      {
        t: 'code',
        lang: 'JSX',
        code: `function Salomlash({ ism, kasb }) {
  return (
    <div className="karta">
      <h3>Salom, {ism}!</h3>
      <p>Kasbingiz: {kasb}</p>
    </div>
  )
}

function App() {
  return (
    <div>
      <Salomlash ism="Ali" kasb="dasturchi" />
      <Salomlash ism="Malika" kasb="dizayner" />
    </div>
  )
}`,
      },
      {
        t: 'p',
        text: 'Yuqoridagi misolda Salomlash komponenti ikki marta chaqirilgan, lekin har safar boshqa props olgani uchun boshqacha ko’rinadi.',
      },
      { t: 'h', text: 'Muhim qoidalar' },
      {
        t: 'list',
        items: [
          'Props faqat o’qish uchun — ularni komponent ichida o’zgartirib bo’lmaydi.',
          'Qiymatlar qo’shtirnoq ichida satr, figurali qavsda esa o’zgaruvchi yoki ifoda bo’ladi.',
          'children — teglar orasidagi kontentni uzatish uchun maxsus prop.',
        ],
      },
      {
        t: 'note',
        text: 'Agar bola komponent props’ni o’zgartirishi kerak bo’lsa, ota komponentdan funksiya (callback) uzatiladi va u chaqiriladi.',
      },
      {
        t: 'demo',
        id: 'props',
        title: 'Props bilan ishlash',
        desc: 'Ismni o’zgartiring — props orqali bola komponent yangilanadi.',
      },
    ],
    quiz: [
      {
        q: 'Props nima uchun kerak?',
        options: ['Stillarni yozish', 'Komponentga ma’lumot uzatish', 'Serverni sozlash', 'Fayllarni saqlash'],
        answer: 1,
        why: 'Props ota komponentdan bola komponentga ma’lumot uzatadi.',
      },
      {
        q: 'Props’ni komponent ichida o’zgartirish mumkinmi?',
        options: ['Ha, har doim', 'Yo’q, ular faqat o’qish uchun', 'Faqat useState bilan', 'Faqat class komponentda'],
        answer: 1,
        why: 'Props immutable — faqat o’qiladi.',
      },
      {
        q: 'Teglar orasidagi kontent qaysi prop orqali keladi?',
        options: ['content', 'inner', 'children', 'slot'],
        answer: 2,
        why: 'Teglar orasidagi hamma narsa children prop’i bo’lib keladi.',
      },
    ],
  },
  {
    id: 'state',
    title: 'State va useState',
    minutes: 9,
    summary:
      'State — komponentning o’zgaruvchi ma’lumoti. useState hook yordamida interaktivlik qo’shamiz.',
    sections: [
      {
        t: 'p',
        text: 'State — komponentning vaqt o’tishi bilan o’zgaradigan ma’lumoti. Oddiy o’zgaruvchidan farqli, state o’zgarganda React komponentni qayta chizadi.',
      },
      {
        t: 'code',
        lang: 'JSX',
        code: `import { useState } from 'react'

function Hisoblagich() {
  const [son, setSon] = useState(0)

  return (
    <div className="karta">
      <p>Qiymat: {son}</p>
      <button onClick={() => setSon(son + 1)}>+1</button>
      <button onClick={() => setSon(0)}>Tozalash</button>
    </div>
  )
}`,
      },
      { t: 'h', text: 'useState qanday ishlaydi?' },
      {
        t: 'list',
        items: [
          'useState(boshlangich) — joriy qiymat va uni o’zgartiruvchi funksiyani qaytaradi.',
          'setSon(...) chaqirilganda React yangi qiymatni eslab qoladi va komponentni qayta render qiladi.',
          'Har bir renderda useState yangi holat yaratmaydi — mavjud qiymatni qaytaradi.',
        ],
      },
      {
        t: 'code',
        lang: 'JSX',
        code: `// Oldingi qiymatga asoslangan yangilash — xavfsiz usul
setSon((oldingi) => oldingi + 1)`,
      },
      {
        t: 'note',
        text: 'State’ni to’g’ridan-to’g’ri o’zgartirmang: son = son + 1 yoki massivni push qilish React’ni qayta chizishga majbur qilmaydi. Har doim setter funksiyasidan foydalaning.',
      },
      {
        t: 'demo',
        id: 'counter',
        title: 'Jonli hisoblagich',
        desc: 'Tugmalarni bosib state qanday yangilanishini kuzating.',
      },
    ],
    quiz: [
      {
        q: 'useState nimani qaytaradi?',
        options: [
          'Faqat qiymatni',
          'Faqat funksiyani',
          'Qiymat va setter funksiyani',
          'Promise',
        ],
        answer: 2,
        why: 'Massiv shaklida [qiymat, setQiymat] qaytadi.',
      },
      {
        q: 'State qanday o’zgartiriladi?',
        options: ['To’g’ridan-to’g’ri o’zgaruvchini o’zgartirib', 'Setter funksiyasi orqali', 'CSS bilan', 'Faqat qayta yuklash bilan'],
        answer: 1,
        why: 'Setter funksiyasi React’ga o’zgarishni bildiradi va qayta render qiladi.',
      },
      {
        q: 'setSon(son + 1) ni takror chaqirishda qaysi usul ishonchli?',
        options: ['setSon(son + 1) ni ko’paytirish', 'setSon((old) => old + 1)', 'son++', 'son = son + 1'],
        answer: 1,
        why: 'Funksional yangilash oldingi holatga tayanadi va xavfsizroq.',
      },
    ],
  },
  {
    id: 'hodisalar',
    title: 'Hodisalar',
    minutes: 7,
    summary:
      'onClick, onChange kabi hodisalarni React’da qanday ushlash va handler funksiyalarni to’g’ri uzatish.',
    sections: [
      {
        t: 'p',
        text: 'React’da hodisalar camelCase’da yoziladi va funksiya qiymat sifatida beriladi: onClick, onChange, onSubmit, onMouseEnter va hokazo.',
      },
      {
        t: 'code',
        lang: 'JSX',
        code: `function Tugma() {
  function bosildi() {
    alert('Tugma bosildi!')
  }

  return <button onClick={bosildi}>Bosish</button>
}`,
      },
      { t: 'h', text: 'Argument uzatish' },
      {
        t: 'code',
        lang: 'JSX',
        code: `// Noto'g'ri: funksiya darhol chaqiriladi
<button onClick={bosildi()}>Xato</button>

// To'g'ri: yangi funksiya qaytariladi
<button onClick={() => bosildi('salom')}>To'g'ri</button>`,
      },
      {
        t: 'p',
        text: 'Hodisa obyekti handler’ga avtomatik uzatiladi. Undan value, target, preventDefault kabi ma’lumotlarni olish mumkin.',
      },
      {
        t: 'code',
        lang: 'JSX',
        code: `function Forma() {
  function yuborildi(event) {
    event.preventDefault()
    console.log('Forma yuborildi')
  }

  return (
    <form onSubmit={yuborildi}>
      <button type="submit">Yuborish</button>
    </form>
  )
}`,
      },
      {
        t: 'note',
        text: 'onClick={funksiya} deb yozing, onClick={funksiya()} emas. Ikkinchi holatda funksiya render vaqtida darhol ishlaydi.',
      },
    ],
    quiz: [
      {
        q: 'React’da bosish hodisasi qanday yoziladi?',
        options: ['onclick', 'onClick', 'on-click', 'click'],
        answer: 1,
        why: 'React hodisalari camelCase: onClick.',
      },
      {
        q: 'Handler’ga argument uzatishning to’g’ri usuli?',
        options: ['onClick={fn(arg)}', 'onClick={() => fn(arg)}', 'onClick=fn(arg)', 'onClick="fn(arg)"'],
        answer: 1,
        why: 'Yangi funksiya yaratib, uning ichida chaqirish kerak.',
      },
      {
        q: 'Forma yuborilishida sahifa yangilanishini qanday to’xtatamiz?',
        options: ['event.stop()', 'event.preventDefault()', 'return false', 'event.cancel()'],
        answer: 1,
        why: 'event.preventDefault() brauzerning standart xatti-harakatini to’xtatadi.',
      },
    ],
  },
  {
    id: 'royxatlar',
    title: 'Ro’yxatlar va kalitlar',
    minutes: 8,
    summary:
      'Massivni map yordamida JSX’ga aylantirish va key prop’ining nima uchun muhimligi.',
    sections: [
      {
        t: 'p',
        text: 'React’da ro’yxat chiqarish uchun JavaScript’ning map metodidan foydalanamiz. Har bir element uchun JSX qaytaramiz.',
      },
      {
        t: 'code',
        lang: 'JSX',
        code: `function Mevalar() {
  const mevalar = ['Olma', 'Banan', 'Uzum']

  return (
    <ul>
      {mevalar.map((meva) => (
        <li key={meva}>{meva}</li>
      ))}
    </ul>
  )
}`,
      },
      { t: 'h', text: 'key nima uchun kerak?' },
      {
        t: 'p',
        text: 'key — React’ga har bir elementni boshqasidan ajratishga yordam beradigan maxsus prop. Ro’yxat o’zgarganda React qaysi element qo’shilgani, o’chirilgani yoki ko’chirilganini shu orqali tushunadi.',
      },
      {
        t: 'list',
        items: [
          'key noyob va barqaror bo’lishi kerak (odatda ma’lumotlar bazasidagi id).',
          'Indeksni key sifatida ishlatish faqat statik ro’yxatlarda maqbul.',
          'key bola komponentga prop sifatida uzatilmaydi.',
        ],
      },
      {
        t: 'note',
        text: 'Kalitlar noto’g’ri tanlansa, React noto’g’ri elementlarni qayta ishlatishi va forma maydonlari aralashib ketishi mumkin.',
      },
      {
        t: 'demo',
        id: 'todo',
        title: 'Vazifalar ro’yxati',
        desc: 'Vazifa qo’shing, belgilang yoki o’chiring — ro’yxat state bilan boshqariladi.',
      },
    ],
    quiz: [
      {
        q: 'Massivni JSX ro’yxatiga aylantirish uchun qaysi metod qulay?',
        options: ['filter', 'map', 'reduce', 'sort'],
        answer: 1,
        why: 'map har bir elementni JSX’ga aylantiradi.',
      },
      {
        q: 'key prop nima uchun ishlatiladi?',
        options: ['Stillar uchun', 'Elementlarni ajratish uchun', 'Ma’lumot yuborish uchun', 'Hodisalarni ushlash uchun'],
        answer: 1,
        why: 'React ro’yxat elementlarini key orqali ajratadi.',
      },
      {
        q: 'Eng yaxshi key qanday bo’ladi?',
        options: ['Har doim indeks', 'Tasodifiy son', 'Noyob va barqaror id', 'Element nomi'],
        answer: 2,
        why: 'Barqaror va noyob id eng ishonchli tanlov.',
      },
    ],
  },
  {
    id: 'formalar',
    title: 'Formalar',
    minutes: 8,
    summary:
      'Boshqariladigan (controlled) maydonlar, value va onChange, forma yuborish hamda validatsiya asoslari.',
    sections: [
      {
        t: 'p',
        text: 'React’da forma maydonlarini state bilan bog’lash odatiy amaliyotdir. Bunday maydonlar boshqariladigan (controlled) deyiladi: qiymat state’dan keladi, o’zgarish esa onChange orqali state’ga yoziladi.',
      },
      {
        t: 'code',
        lang: 'JSX',
        code: `import { useState } from 'react'

function IsmFormasi() {
  const [ism, setIsm] = useState('')

  function yuborildi(event) {
    event.preventDefault()
    alert('Salom, ' + ism)
  }

  return (
    <form onSubmit={yuborildi}>
      <input
        value={ism}
        onChange={(e) => setIsm(e.target.value)}
        placeholder="Ismingiz"
      />
      <button type="submit">Yuborish</button>
    </form>
  )
}`,
      },
      { t: 'h', text: 'Boshqariladigan va boshqarilmaydigan' },
      {
        t: 'list',
        items: [
          'Boshqariladigan: qiymat state’da, to’liq nazorat, validatsiya oson.',
          'Boshqarilmaydigan: qiymat DOM’da, useRef orqali o’qiladi.',
          'Boshlang’ich loyihalarda boshqariladigan yondashuv tavsiya etiladi.',
        ],
      },
      {
        t: 'note',
        text: 'Agar input’ga value berib, onChange bermasangiz, maydon o’qish uchun yopiq (read-only) bo’lib qoladi.',
      },
      {
        t: 'demo',
        id: 'form',
        title: 'Boshqariladigan forma',
        desc: 'Maydonlarni to’ldiring — qiymatlar state’da saqlanadi va yuborilganda ko’rsatiladi.',
      },
    ],
    quiz: [
      {
        q: 'Boshqariladigan input qaysi ikki prop bilan ishlaydi?',
        options: ['value va onChange', 'default va onClick', 'name va id', 'placeholder va disabled'],
        answer: 0,
        why: 'Qiymat value’dan keladi, o’zgarish onChange orqali state’ga yoziladi.',
      },
      {
        q: 'Forma yuborilganda sahifa yangilanishini to’xtatish uchun?',
        options: ['event.stopPropagation()', 'event.preventDefault()', 'return null', 'setState(false)'],
        answer: 1,
        why: 'preventDefault brauzerning standart forma yuborishini to’xtatadi.',
      },
      {
        q: 'value berilgan, onChange berilmagan input qanday bo’ladi?',
        options: ['Oddiy ishlaydi', 'O’qish uchun yopiq bo’lib qoladi', 'Xato beradi', 'Avtomatik tozalanadi'],
        answer: 1,
        why: 'Qiymat state’dan kelib, o’zgarishni qayd etish yo’li bo’lmaydi.',
      },
    ],
  },
  {
    id: 'useeffect',
    title: 'useEffect',
    minutes: 9,
    summary:
      'Yon ta’sirlar (side effects): taymerlar, ma’lumot olish, obuna bo’lish va tozalash funksiyasi.',
    sections: [
      {
        t: 'p',
        text: 'useEffect — renderdan keyin yon ta’sirlarni bajarish uchun hook. Masalan, taymer qo’yish, API’dan ma’lumot olish yoki hujjat sarlavhasini o’zgartirish.',
      },
      {
        t: 'code',
        lang: 'JSX',
        code: `import { useEffect, useState } from 'react'

function Soat() {
  const [vaqt, setVaqt] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => setVaqt(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  return <p>{vaqt.toLocaleTimeString()}</p>
}`,
      },
      { t: 'h', text: 'Bog’liqliklar massivi' },
      {
        t: 'list',
        items: [
          'useEffect(() => {...}) — har renderdan keyin ishlaydi.',
          'useEffect(() => {...}, []) — faqat birinchi renderda (mount) ishlaydi.',
          'useEffect(() => {...}, [a, b]) — a yoki b o’zgarganda ishlaydi.',
          'return () => {...} — tozalash (cleanup) funksiyasi.',
        ],
      },
      {
        t: 'note',
        text: 'Taymer, obuna yoki hodisa tinglovchisi qo’shsangiz, albatta cleanup funksiyasida ularni tozalang. Aks holda xotira sizib chiqadi va xatolar paydo bo’ladi.',
      },
      {
        t: 'demo',
        id: 'clock',
        title: 'Jonli soat',
        desc: 'useEffect taymerni boshqaradi va komponent yo’qolganda uni tozalaydi.',
      },
    ],
    quiz: [
      {
        q: 'useEffect nima uchun ishlatiladi?',
        options: ['Stillar yozish', 'Yon ta’sirlarni bajarish', 'Komponent yaratish', 'Marshrutlash'],
        answer: 1,
        why: 'useEffect renderdan keyin yon ta’sirlarni bajaradi.',
      },
      {
        q: 'Faqat birinchi renderda ishlashi uchun bog’liqliklar massivi qanday bo’ladi?',
        options: ['Yo’q', '[]', '[true]', '[null]'],
        answer: 1,
        why: 'Bo’sh massiv effect faqat mount’da ishlashini bildiradi.',
      },
      {
        q: 'Cleanup funksiyasi nima qiladi?',
        options: ['Komponentni o’chiradi', 'Taymer va obunalarni tozalaydi', 'State’ni nolga qaytaradi', 'CSS’ni yangilaydi'],
        answer: 1,
        why: 'Cleanup resurslarni bo’shatadi (clearInterval, unsubscribe va h.k.).',
      },
    ],
  },
  {
    id: 'keyingi',
    title: 'Keyingi qadamlar',
    minutes: 6,
    summary:
      'Asoslarni o’zlashtirdingiz. Endi marshrutlash, global holat, ma’lumot olish va loyiha qurish yo’nalishlari.',
    sections: [
      {
        t: 'p',
        text: 'Tabriklaymiz! Endi siz komponentlar, props, state, hodisalar, ro’yxatlar, formalar va useEffect bilan tanishsiz. Bu — React’dagi asosiy poydevor.',
      },
      { t: 'h', text: 'O’rganishni davom ettirish' },
      {
        t: 'list',
        items: [
          'React Router — sahifalar orasida o’tish (SPA marshrutlash).',
          'Context va useReducer — global holatni boshqarish.',
          'Ma’lumot olish — fetch, TanStack Query yoki SWR.',
          'Maxsus hooklar — mantiqni qayta ishlatish.',
          'Testlash — Vitest va React Testing Library.',
        ],
      },
      { t: 'h', text: 'Amaliyot uchun g’oyalar' },
      {
        t: 'list',
        items: [
          'Vazifalar ro’yxati (to-do) ilovasi.',
          'Ob-havo ilovasi (ochiq API bilan).',
          'Kinolar yoki kitoblar katalogi.',
          'Byudjet hisoblagichi.',
        ],
      },
      {
        t: 'code',
        lang: 'JSX',
        code: `// Kichik loyihadan boshlang: bitta komponent, bitta state
function App() {
  const [vazifalar, setVazifalar] = useState([])
  return <VazifaRoyxati vazifalar={vazifalar} />
}`,
      },
      {
        t: 'note',
        text: 'Eng muhim maslahat: kod yozishda davom eting. Har bir kichik loyiha yangi tushunchalarni mustahkamlaydi.',
      },
    ],
    quiz: [
      {
        q: 'Sahifalar orasida o’tish uchun qaysi kutubxona keng ishlatiladi?',
        options: ['React Router', 'Redux', 'Axios', 'Jest'],
        answer: 0,
        why: 'React Router — SPA marshrutlash uchun standart tanlov.',
      },
      {
        q: 'Global holatni boshqarishga qaysi React ichki vositalari yordam beradi?',
        options: ['useRef va useMemo', 'Context va useReducer', 'useId va useLayoutEffect', 'Suspense va lazy'],
        answer: 1,
        why: 'Context va useReducer global holat uchun asosiy ichki vositalar.',
      },
      {
        q: 'Yangi boshlovchi uchun eng foydali narsa nima?',
        options: ['Faqat video ko’rish', 'Kichik loyihalar yozish', 'Kutubxonalarni yodlash', 'Hech narsa qilmaslik'],
        answer: 1,
        why: 'Amaliyot — nazariyani mustahkamlashning eng samarali yo’li.',
      },
    ],
  },
]

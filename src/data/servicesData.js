import { Smartphone, Code, Layout, Settings, RefreshCw, ShoppingCart, Video, Search } from 'lucide-react';

export const ServicesData = [
  {
    id: 'web',
    icon: Layout,
    title: 'Prezentační web',
    packageLabel: 'Nejpopulárnější',
    target: 'Živnostníci a malé firmy',
    price: 'od 12 900 Kč',
    deliveryTime: '2-4 týdny',
    isPopular: true,
    desc: 'Kompletní web od A do Z. Moderní vzhled, blesková rychlost a kód optimalizovaný pro Google.',
    longDesc: 'Nemusíte mít vlastní grafický návrh. Stačí mi říct vaši představu. Vytvořím pro vás přehledné stránky přímo v kódu, což zajišťuje maximální rychlost načítání. Samozřejmostí je plná přizpůsobivost pro mobily a základní nastavení pro vyhledávače.',
    features: ["Moderní design na míru", "Plná mobilní responzivita", "Základní SEO optimalizace", "Nasazení na doménu a hosting"]
  },
  {
    id: 'dev',
    icon: Code,
    title: 'Webová aplikace',
    packageLabel: 'Pro náročné',
    target: 'Startupy a online projekty',
    price: 'od 19 900 Kč',
    deliveryTime: '1-2 měsíce',
    isPopular: false,
    desc: 'Pokročilé interaktivní systémy s dynamickým obsahem a databází na míru.',
    longDesc: 'Pokud potřebujete víc než jen statickou stránku. Naprogramuji vám webovou aplikaci na technologiích React, Next.js nebo Vue. To zajišťuje okamžitou odezvu a možnost budoucího rozšiřování. Ideální pro klientské portály, systémy s administrací nebo interaktivní weby.',
    features: ["Špičkové tech. stacky (React/Python)", "Vysoká rychlost a zabezpečení", "Propojení s databází a API", "Snadná rozšiřitelnost do budoucna"]
  },
  {
    id: 'eshop',
    icon: ShoppingCart,
    title: 'Tvorba E-shopu',
    packageLabel: 'Prodej online',
    target: 'Obchodníci a značky',
    price: 'od 29 900 Kč',
    deliveryTime: '1-3 měsíce',
    isPopular: false,
    desc: 'Kompletní internetový obchod navržený pro maximální konverze a pohodlný nákup.',
    longDesc: 'Převeďte své podnikání do online světa. Vytvořím pro vás rychlý e-shop, ve kterém se zákazníci neztratí. Postarám se o přehledný katalog produktů, intuitivní průchod košíkem a integraci platebních bran, aby lidé mohli pohodlně nakupovat i z mobilu.',
    features: [
      "Přehledný katalog a filtrace",
      "Optimalizovaný nákupní proces",
      "Snadná správa produktů a objednávek",
      "Bezpečné napojení na platební brány"
    ]
  },
  {
    id: 'redesign',
    icon: RefreshCw,
    title: 'Kompletní redesign',
    packageLabel: 'Nový dech',
    target: 'Firmy se starším webem',
    price: 'od 14 900 Kč',
    deliveryTime: '2-4 týdny',
    isPopular: false,
    desc: 'Váš web už neodpovídá moderním trendům nebo je pomalý? Přepíšu ho od základů.',
    longDesc: 'Vezmu váš stávající obsah a texty, ale zabalím je do úplně nového, moderního vizuálu. Web kompletně vyčistím od starého kódu, extrémně zrychlím jeho načítání a zajistím, aby bezchybně fungoval na nejnovějších telefonech bez ztráty pozic na Google.',
    features: [
      'Kompletní UX/UI modernizace',
      'Zachování stávajícího SEO a textů',
      'Extrémní zrychlení načítání',
      'Přechod na moderní technologie'
    ]
  },
  {
    id: 'seo-analytics',
    icon: Search, /* Změněno na Search pro lepší vizuální rozlišení */
    title: 'SEO & Analytika',
    packageLabel: 'Viditelnost',
    target: 'Weby, které chtějí růst',
    price: 'od 3 500 Kč',
    deliveryTime: '1 týden',
    isPopular: false,
    desc: 'Optimalizace webu pro vyhledávače a přesné měření chování uživatelů.',
    longDesc: 'Pomohu vašemu webu získat lepší pozice na Google a Seznamu. Nastavím profesionální měření přes Google Analytics 4, optimalizuji rychlost webu, klíčová slova a správné indexování stránek, abyste přesně věděli, odkud vaši zákazníci přicházejí.',
    features: ["Nastavení Google Analytics 4", "Optimalizace rychlosti a struktury", "Správná indexace na vyhledávačích", "Analýza klíčových slov"]
  },
  {
    id: 'video-produkce',
    icon: Video,
    title: 'Video a Postprodukce',
    packageLabel: 'Vizuální obsah',
    target: 'Tvůrci, brandy a firmy',
    price: 'Na domluvě',
    deliveryTime: '3-7 dní',
    isPopular: false,
    desc: 'Profesionální střih krátkých Reels, TikToků, promo videí nebo dynamických pozadí pro váš web.',
    longDesc: 'Kvalitní web si zaslouží poutavý vizuální obsah. Postarám se o kompletní postprodukci vašich surových záběrů – od střihu do rytmu hudby přes pokročilý color grading (barvy) a sound design až po formátování pro sociální sítě s cílem maximalizovat dosahy.',
    features: [
      "Dynamický střih Reels / TikTok / YouTube",
      "Filmové úpravy barev a sound design",
      "Tvorba optimalizovaných videopozadí na web"
    ]
  },
  {
    id: 'maintenance',
    icon: Settings,
    title: 'Správa a údržba',
    packageLabel: 'Dlouhodobě',
    target: 'Dlouhodobá spolupráce',
    price: 'od 400 Kč / hod',
    deliveryTime: 'Dle domluvy',
    isPopular: false,
    desc: 'Potřebujete na webu něco změnit, upravit texty nebo přidat fotky? Jsem k dispozici.',
    longDesc: 'Web není jednorázová záležitost. Nabízím dlouhodobou pomoc při úpravách obsahu. Ať už potřebujete přepsat ceník, vyměnit fotky v galerii nebo provést drobné úpravy v kódu. Platíte férově jen za čas, který na webu reálně strávím.',
    features: ["Pravidelné aktualizace obsahu", "Drobné programátorské úpravy", "Prioritní komunikace a zálohování"]
  }
];
import { Smartphone, Code, Layout, Settings, RefreshCw, ShoppingCart, Video } from 'lucide-react';

export const ServicesData = [
  {
    id: 'web',
    icon: Layout,
    title: 'Prezentační web',
    packageLabel: 'Nejpopulárnější',
    target: 'Živnostníci a malé firmy',
    price: 'od 10 000 Kč',
    deliveryTime: '2-4 týdny',
    isPopular: true,
    desc: 'Postavím vám web od A do Z. Moderní vzhled, blesková rychlost a čistý kód.',
    longDesc: 'Nemusíte mít vlastní grafický návrh. Stačí mi říct vaši představu nebo poslat ukázku webu, který se vám líbí. Vytvořím pro vás moderní, přehledné stránky rovnou v kódu. Výsledkem je rychlý web, který vypadá profesionálně a funguje na jedničku.',
    features: ["Moderní design na míru", "Základní SEO optimalizace", "Responzivita", "Nasazení na doménu"]
  },
  {
    id: 'dev',
    icon: Code,
    title: 'Webová aplikace',
    packageLabel: 'Pro náročné',
    target: 'Startupy a větší projekty',
    price: 'od 12 000 Kč',
    deliveryTime: '1-2 měsíce',
    isPopular: false,
    desc: 'Pro náročnější projekty. Rychlé interaktivní aplikace s dynamickým obsahem.',
    longDesc: 'Pokud potřebujete víc než jen statickou stránku. Naprogramuji vám webovou aplikaci na technologii React nebo Next.js. To zajišťuje bleskové načítání a možnost budoucího rozšiřování. Ideální pro složitější weby, portfolia s administrací nebo interaktivní projekty.',
    features: ["Moderní technologie", "Vysoká rychlost a výkon", "Pokročilé funkce", "Snadná rozšiřitelnost"]
  },
  {
    id: 'redesign',
    icon: RefreshCw,
    packageLabel: 'NOVÝ DECH',
    title: 'Kompletní redesign',
    desc: 'Váš současný web už neodpovídá moderním trendům nebo je pomalý? Postavím ho úplně od znova – moderně, rychle a s ohledem na dnešní standardy.',
    target: 'Firmy se starým webem',
    deliveryTime: '3-5 týdnů',
    price: 'od 15 000 Kč',
    isPopular: false,
    features: [
      'Vylepšení současného stavu',
      'Nový moderní UX/UI design',
      'Zachování SEO',
      'Extrémní zrychlení načítání webu'
    ]
  },
  {
    id: 'eshop',
    icon: ShoppingCart,
    title: 'Tvorba E-shopu',
    packageLabel: 'Prodej online',
    target: 'Obchodníci a tvůrci',
    price: 'od 25 000 Kč',
    deliveryTime: '1-3 měsíce',
    isPopular: false,
    desc: 'Kompletní internetový obchod navržený tak, aby z návštěvníků dělal platící zákazníky.',
    longDesc: 'Převeďte své podnikání do online světa. Vytvořím pro vás moderní a rychlý e-shop, ve kterém se lidé neztratí. Postarám se o přehledný katalog produktů, plynulý průchod košíkem a responzivní design, aby zákazníci mohli pohodlně nakupovat i z mobilu.',
    features: [
      "Přehledný katalog a filtrování",
      "Optimalizace nákupního procesu",
      "Snadná správa produktů",
      "Napojení na platební brány"
    ]
  },
  {
    id: 'responsive',
    icon: Smartphone,
    title: 'Responzivita & Mobilní optimalizace',
    packageLabel: 'Rychlá pomoc',
    target: 'Firmy s rozbitým webem',
    price: 'od 2 500 Kč',
    deliveryTime: 'Pár dní',
    isPopular: false,
    desc: 'Váš web se bude perfektně zobrazovat na telefonech, tabletech i počítačích.',
    longDesc: 'Máte web, který se na mobilu špatně čte nebo má rozbité menu? Opravím to. Upravím styly (CSS) tak, aby se váš obsah automaticky přizpůsobil velikosti displeje. Dnes je mobilní verze důležitější než ta počítačová.',
    features: ["Mobile-first přístup", "Oprava rozbitého menu", "Testování na zařízeních", "Lepší čitelnost textu"]
  },
  {
    id: 'seo-analytics',
    icon: Layout,
    title: 'SEO & Analytika',
    packageLabel: 'Viditelnost',
    target: 'Weby, které chtějí růst',
    price: 'od 3 500 Kč',
    deliveryTime: '1 týden',
    isPopular: false,
    desc: 'Nastavím váš web tak, aby ho lidé i Google milovali. Od měření návštěvnosti po pozice ve vyhledávání.',
    features: ["Nastavení Google Analytics 4", "Optimalizace pro vyhledávače", "Indexace stránek", "Rychlostní audit"]
  },
  {
    id: 'maintenance',
    icon: Settings,
    title: 'Správa a údržba',
    packageLabel: 'Hodinová sazba',
    target: 'Dlouhodobí klienti',
    price: '400 Kč / hod',
    deliveryTime: 'Dle domluvy',
    isPopular: false,
    desc: 'Potřebujete něco změnit, opravit texty nebo aktualizovat fotky? Jsem tu pro vás.',
    longDesc: 'Web není jednorázová záležitost. Nabízím dlouhodobou spolupráci při správě vašeho webu. Ať už potřebujete přepsat ceník, vyměnit fotky v galerii nebo provést drobné úpravy v kódu. Platíte jen za čas, který reálně odpracuji.',
    features: ["Aktualizace obsahu", "Drobné opravy kódu", "Prioritní komunikace", "Zálohování webu"]
  },
  {
    id: 'video-postprodukce',
    icon: Video,
    title: 'Střih & Postprodukce',
    packageLabel: 'Vizuální obsah',
    target: 'Tvůrci a firmy',
    price: 'Na domluvě',
    deliveryTime: '3-7 dní',
    isPopular: false,
    desc: 'Proměňte své surové záběry v poutavý příběh. Střihám Reels, reklamy i produktová videa pro váš web.',
    longDesc: 'Kvalitní web si zaslouží kvalitní video. Ať už potřebujete dynamické Reels na Instagram, krátkou video-vizitku na úvodní stránku nebo sestříhat záznam z akce, postarám se o barvy, zvuk i rytmus tak, aby výsledek zaujal na první pohled.',
    features: [
      "Barevné korekce a sound design",
      "Tvorba videopozadí pro web",
      "Dodání v libovolném formátu"
    ]
  },
  {
    id: 'video-reels',
    icon: Video,
    title: 'Reels & Krátká videa',
    packageLabel: 'Vizuální obsah',
    target: 'Tvůrci a firmy',
    price: 'Na domluvě',
    deliveryTime: '3-7 dní',
    isPopular: false,
    desc: 'Proměňte své surové záběry v poutavý příběh. Střihám Reels, reklamy i produktová videa pro váš web.',
    longDesc: 'Kvalitní web si zaslouží kvalitní video. Ať už potřebujete dynamické Reels na Instagram, krátkou video-vizitku na úvodní stránku nebo sestříhat záznam z akce, postarám se o barvy, zvuk i rytmus tak, aby výsledek zaujal na první pohled.',
    features: [
      "Střih pro sociální sítě (Instagram/TikTok)",
      "Dynamické úpravy pro maximální engagement",
      "Dodání v libovolném formátu"
    ]
  }
];
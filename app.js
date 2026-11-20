const STORAGE_KEY = "nomada-demo-v1";
const CATALOG_VERSION = 2;
const destinationsSeed = [
  {
    id: "lisboa", name: "Lisboa", country: "Portugal", region: "Europa", category: "Cultura",
    short: "Luz atlántica, barrios históricos y mesas que invitan a quedarse.",
    description: "Descubre Lisboa a ritmo de barrio: tranvías históricos, miradores sobre el Tajo, azulejos y una escena gastronómica que mira al futuro sin perder sus raíces.",
    season: "Mar–jun · sep–oct", duration: "4–5 días", from: 890, currency: "EUR",
    image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1400&q=85",
    alt: "Tejados de Lisboa con el río Tajo al fondo", lat: 38.7223, lng: -9.1393,
    places: [
      { name: "Praça do Comércio", type: "Plaza histórica", address: "Praça do Comércio, Lisboa", lat: 38.7078, lng: -9.1366 },
      { name: "Torre de Belém", type: "Monumento", address: "Av. Brasília, Lisboa", lat: 38.6916, lng: -9.2160 },
      { name: "Castelo de São Jorge", type: "Mirador y castillo", address: "Rua de Santa Cruz do Castelo, Lisboa", lat: 38.7139, lng: -9.1335 }
    ],
    experiences: [
      { id:"lisboa-ribeira", name:"Paseo por Alfama y sus miradores", type:"Cultura", duration:"3 horas", price:48, image:"https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=500&q=80", lat:38.7139,lng:-9.1335,address:"Alfama, Lisboa" },
      { id:"lisboa-sabores", name:"Sabores de los mercados lisboetas", type:"Gastronomía", duration:"2.5 horas", price:62, image:"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=500&q=80", lat:38.7135,lng:-9.1395,address:"Baixa, Lisboa" },
      { id:"lisboa-belem", name:"Belém junto al río", type:"Historia", duration:"4 horas", price:54, image:"https://images.unsplash.com/photo-1498307833015-e7b400441eb8?auto=format&fit=crop&w=500&q=80", lat:38.6916,lng:-9.2160,address:"Belém, Lisboa" }
    ]
  },
  {
    id: "kyoto", name: "Kioto", country: "Japón", region: "Asia", category: "Naturaleza",
    short: "Jardines silenciosos, caminos de cedros y tradición viva.",
    description: "Entre templos, senderos y casas de té, Kioto revela una forma distinta de viajar. Explora sus barrios con tiempo y descubre la calma entre cada estación.",
    season: "Mar–may · oct–nov", duration: "5–7 días", from: 1450, currency: "EUR",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1400&q=85",
    alt: "Calle tradicional de Kioto junto a un templo", lat: 35.0116, lng: 135.7681,
    places: [
      { name: "Fushimi Inari-taisha", type: "Santuario", address: "68 Fukakusa Yabunouchicho, Kyoto", lat: 34.9671, lng: 135.7727 },
      { name: "Kiyomizu-dera", type: "Templo", address: "1-294 Kiyomizu, Higashiyama Ward, Kyoto", lat: 34.9949, lng: 135.7850 },
      { name: "Arashiyama Bamboo Forest", type: "Naturaleza", address: "Ukyo Ward, Kyoto", lat: 35.0170, lng: 135.6713 }
    ],
    experiences: [
      { id:"kyoto-torii", name:"Sendero de los mil torii", type:"Cultura", duration:"3 horas", price:35, image:"https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?auto=format&fit=crop&w=500&q=80", lat:34.9671,lng:135.7727,address:"Fushimi Inari-taisha, Kioto" },
      { id:"kyoto-jardin", name:"Templos y jardines de Higashiyama", type:"Historia", duration:"4 horas", price:58, image:"https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=500&q=80", lat:34.9949,lng:135.7850,address:"Higashiyama, Kioto" },
      { id:"kyoto-arashi", name:"Mañana entre bambúes", type:"Naturaleza", duration:"3 horas", price:42, image:"https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=500&q=80", lat:35.0170,lng:135.6713,address:"Arashiyama, Kioto" }
    ]
  },
  {
    id: "barcelona", name: "Barcelona", country: "España", region: "Europa", category: "Arte y diseño",
    short: "Arquitectura audaz, Mediterráneo y cultura a cada paso.",
    description: "Una ciudad de contrastes donde el modernismo convive con talleres contemporáneos, playas urbanas y una cultura gastronómica hecha para compartir.",
    season: "Abr–jun · sep–oct", duration: "4–6 días", from: 760, currency: "EUR",
    image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1400&q=85",
    alt: "Arquitectura de Barcelona al atardecer", lat: 41.3874, lng: 2.1686,
    places: [
      { name: "Sagrada Família", type: "Monumento", address: "Carrer de Mallorca, 401, Barcelona", lat: 41.4036, lng: 2.1744 },
      { name: "Park Güell", type: "Parque y arquitectura", address: "08024 Barcelona", lat: 41.4145, lng: 2.1527 },
      { name: "Barceloneta", type: "Playa", address: "La Barceloneta, Barcelona", lat: 41.3784, lng: 2.1925 }
    ],
    experiences: [
      { id:"bcn-gaudi", name:"La ciudad de Gaudí", type:"Arte y diseño", duration:"3 horas", price:52, image:"https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=500&q=80", lat:41.4036,lng:2.1744,address:"Eixample, Barcelona" },
      { id:"bcn-gotico", name:"Historias del barrio Gótico", type:"Cultura", duration:"2 horas", price:32, image:"https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=500&q=80", lat:41.3825,lng:2.1769,address:"Barri Gòtic, Barcelona" },
      { id:"bcn-costa", name:"Un día junto al Mediterráneo", type:"Naturaleza", duration:"Medio día", price:45, image:"https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=500&q=80", lat:41.3784,lng:2.1925,address:"Barceloneta, Barcelona" }
    ]
  },
  {
    id: "reikiavik", name: "Reikiavik", country: "Islandia", region: "Europa", category: "Aventura",
    short: "Horizontes volcánicos, aire limpio y noches de aurora.",
    description: "Haz de Reikiavik tu punto de partida para conocer paisajes volcánicos, aguas termales y una cultura nórdica creativa. La naturaleza marca el ritmo.",
    season: "Jun–ago · sep–mar", duration: "5–8 días", from: 1680, currency: "EUR",
    image: "https://images.unsplash.com/photo-1504829857797-ddff29c27927?auto=format&fit=crop&w=1400&q=85",
    alt: "Paisaje volcánico islandés bajo un cielo luminoso", lat: 64.1466, lng: -21.9426,
    places: [
      { name: "Hallgrímskirkja", type: "Iglesia y mirador", address: "Hallgrímstorg 1, Reykjavík", lat: 64.1417, lng: -21.9266 },
      { name: "Harpa", type: "Arquitectura y cultura", address: "Austurbakki 2, Reykjavík", lat: 64.1504, lng: -21.9326 },
      { name: "Sun Voyager", type: "Escultura costera", address: "Sæbraut, Reykjavík", lat: 64.1475, lng: -21.9220 }
    ],
    experiences: [
      { id:"reyk-city", name:"Reikiavik a pie: arte y arquitectura", type:"Cultura", duration:"2.5 horas", price:39, image:"https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=500&q=80", lat:64.1417,lng:-21.9266,address:"Centro de Reikiavik" },
      { id:"reyk-harbor", name:"Paseo por el puerto antiguo", type:"Naturaleza", duration:"2 horas", price:28, image:"https://images.unsplash.com/photo-1504829857797-ddff29c27927?auto=format&fit=crop&w=500&q=80", lat:64.1504,lng:-21.9326,address:"Puerto de Reikiavik" },
      { id:"reyk-coast", name:"La costa y el Sun Voyager", type:"Naturaleza", duration:"1.5 horas", price:24, image:"https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=500&q=80", lat:64.1475,lng:-21.9220,address:"Sæbraut, Reikiavik" }
    ]
  },
  {
    id: "paris", name: "París", country: "Francia", region: "Europa", category: "Arte y diseño",
    short: "Museos, calles llenas de historia y rincones junto al Sena.",
    description: "Recorre París sin prisa: desde sus grandes museos y avenidas hasta los cafés de barrio, jardines y paseos a orillas del Sena.",
    season: "Abr–jun · sep–oct", duration: "4–6 días", from: 980, currency: "EUR",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=85",
    alt: "Torre Eiffel y tejados de París", lat: 48.8566, lng: 2.3522,
    places: [
      { name: "Torre Eiffel", type: "Monumento", address: "Champ de Mars, París", lat: 48.8584, lng: 2.2945 },
      { name: "Museo del Louvre", type: "Museo", address: "Rue de Rivoli, París", lat: 48.8606, lng: 2.3376 },
      { name: "Catedral de Notre-Dame", type: "Catedral histórica", address: "Île de la Cité, París", lat: 48.8530, lng: 2.3499 }
    ],
    experiences: [
      { id:"paris-seine", name:"Paseo por las orillas del Sena", type:"Cultura", duration:"2 horas", price:38, image:"https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=500&q=80", lat:48.8584,lng:2.2945,address:"Río Sena, París" },
      { id:"paris-louvre", name:"Arte e historias del Louvre", type:"Arte y diseño", duration:"3 horas", price:64, image:"https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=500&q=80", lat:48.8606,lng:2.3376,address:"Museo del Louvre, París" },
      { id:"paris-montmartre", name:"Calles y talleres de Montmartre", type:"Cultura", duration:"2.5 horas", price:45, image:"https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=500&q=80", lat:48.8867,lng:2.3431,address:"Montmartre, París" }
    ]
  },
  {
    id: "roma", name: "Roma", country: "Italia", region: "Europa", category: "Historia",
    short: "Capas de historia, plazas animadas y cocina para compartir.",
    description: "Roma se descubre caminando entre ruinas antiguas, plazas vivas y pequeñas trattorias. Una ciudad para alternar grandes monumentos y pausas largas.",
    season: "Abr–jun · sep–oct", duration: "4–6 días", from: 920, currency: "EUR",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1400&q=85",
    alt: "Coliseo romano al atardecer", lat: 41.9028, lng: 12.4964,
    places: [
      { name: "Coliseo", type: "Monumento antiguo", address: "Piazza del Colosseo, Roma", lat: 41.8902, lng: 12.4922 },
      { name: "Fontana di Trevi", type: "Fuente histórica", address: "Piazza di Trevi, Roma", lat: 41.9009, lng: 12.4833 },
      { name: "Panteón", type: "Monumento antiguo", address: "Piazza della Rotonda, Roma", lat: 41.8986, lng: 12.4769 }
    ],
    experiences: [
      { id:"roma-coliseo", name:"Roma antigua y el Coliseo", type:"Historia", duration:"3 horas", price:58, image:"https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=500&q=80", lat:41.8902,lng:12.4922,address:"Coliseo, Roma" },
      { id:"roma-centro", name:"Plazas y fuentes del centro histórico", type:"Cultura", duration:"2.5 horas", price:36, image:"https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=500&q=80", lat:41.9009,lng:12.4833,address:"Centro histórico, Roma" },
      { id:"roma-sabores", name:"Sabores de barrio en Trastevere", type:"Gastronomía", duration:"3 horas", price:52, image:"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=500&q=80", lat:41.8897,lng:12.4708,address:"Trastevere, Roma" }
    ]
  },
  {
    id: "nueva-york", name: "Nueva York", country: "Estados Unidos", region: "América", category: "Arte y diseño",
    short: "Barrios distintos, museos icónicos y energía a cualquier hora.",
    description: "Explora Nueva York barrio a barrio: parques urbanos, museos, arquitectura y una diversidad cultural que cambia en cada avenida.",
    season: "Abr–jun · sep–nov", duration: "5–7 días", from: 1850, currency: "EUR",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1400&q=85",
    alt: "Rascacielos de Manhattan en Nueva York", lat: 40.7128, lng: -74.0060,
    places: [
      { name: "Central Park", type: "Parque urbano", address: "Central Park, Nueva York", lat: 40.7829, lng: -73.9654 },
      { name: "Times Square", type: "Plaza y distrito teatral", address: "Manhattan, Nueva York", lat: 40.7580, lng: -73.9855 },
      { name: "Puente de Brooklyn", type: "Puente histórico", address: "Brooklyn Bridge, Nueva York", lat: 40.7061, lng: -73.9969 }
    ],
    experiences: [
      { id:"ny-central-park", name:"Paseo por Central Park", type:"Naturaleza", duration:"2.5 horas", price:42, image:"https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?auto=format&fit=crop&w=500&q=80", lat:40.7829,lng:-73.9654,address:"Central Park, Nueva York" },
      { id:"ny-brooklyn", name:"Atardecer sobre el puente de Brooklyn", type:"Cultura", duration:"2 horas", price:35, image:"https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=500&q=80", lat:40.7061,lng:-73.9969,address:"Brooklyn Bridge, Nueva York" },
      { id:"ny-moma", name:"Arte moderno en Manhattan", type:"Arte y diseño", duration:"3 horas", price:62, image:"https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=500&q=80", lat:40.7614,lng:-73.9776,address:"Museum of Modern Art, Nueva York" }
    ]
  },
  {
    id: "cusco", name: "Cusco", country: "Perú", region: "América", category: "Aventura",
    short: "Herencia andina, plazas de piedra y paisajes de altura.",
    description: "Cusco combina legado inca, arquitectura colonial y cultura andina contemporánea. Aclimátate con calma y planifica las excursiones de altura con antelación.",
    season: "May–sep", duration: "4–6 días", from: 1320, currency: "EUR",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1400&q=85",
    alt: "Montañas y terrazas de Machu Picchu en Perú", lat: -13.5320, lng: -71.9675,
    places: [
      { name: "Plaza de Armas de Cusco", type: "Plaza histórica", address: "Centro histórico, Cusco", lat: -13.5164, lng: -71.9785 },
      { name: "Sacsayhuamán", type: "Complejo arqueológico", address: "Parque Arqueológico de Sacsayhuamán, Cusco", lat: -13.5087, lng: -71.9818 },
      { name: "Valle Sagrado", type: "Paisaje y patrimonio", address: "Valle Sagrado de los Incas, Perú", lat: -13.3333, lng: -72.0833 }
    ],
    experiences: [
      { id:"cusco-centro", name:"Calles incas y plazas de Cusco", type:"Historia", duration:"3 horas", price:38, image:"https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=500&q=80", lat:-13.5164,lng:-71.9785,address:"Centro histórico, Cusco" },
      { id:"cusco-sacsayhuaman", name:"Piedra y paisaje en Sacsayhuamán", type:"Historia", duration:"3 horas", price:46, image:"https://images.unsplash.com/photo-1531065208531-4036c0dba3ca?auto=format&fit=crop&w=500&q=80", lat:-13.5087,lng:-71.9818,address:"Sacsayhuamán, Cusco" },
      { id:"cusco-valle", name:"Paisajes del Valle Sagrado", type:"Aventura", duration:"6 horas", price:74, image:"https://images.unsplash.com/photo-1531065208531-4036c0dba3ca?auto=format&fit=crop&w=500&q=80", lat:-13.3333,lng:-72.0833,address:"Valle Sagrado, Perú" }
    ]
  },
  {
    id: "sevilla", name: "Sevilla", country: "España", region: "Europa", category: "Cultura",
    short: "Patios, naranjos y una vida cultural que se disfruta al aire libre.",
    description: "Descubre Sevilla entre patios, plazas monumentales y paseos junto al Guadalquivir. La ciudad invita a alternar visitas culturales con tiempo en sus barrios.",
    season: "Mar–may · oct–nov", duration: "3–5 días", from: 690, currency: "EUR",
    image: "https://images.unsplash.com/photo-1559386484-97dfc0e15539?auto=format&fit=crop&w=1400&q=85",
    alt: "Plaza de España de Sevilla", lat: 37.3891, lng: -5.9845,
    places: [
      { name: "Real Alcázar de Sevilla", type: "Palacio histórico", address: "Patio de Banderas, Sevilla", lat: 37.3830, lng: -5.9902 },
      { name: "Plaza de España", type: "Plaza monumental", address: "Parque de María Luisa, Sevilla", lat: 37.3772, lng: -5.9869 },
      { name: "Catedral de Sevilla", type: "Catedral histórica", address: "Avenida de la Constitución, Sevilla", lat: 37.3861, lng: -5.9925 }
    ],
    experiences: [
      { id:"sevilla-alcazar", name:"Patios y jardines del Alcázar", type:"Historia", duration:"2.5 horas", price:42, image:"https://images.unsplash.com/photo-1559386484-97dfc0e15539?auto=format&fit=crop&w=500&q=80", lat:37.3830,lng:-5.9902,address:"Real Alcázar, Sevilla" },
      { id:"sevilla-plaza", name:"Paseo por Plaza de España y sus jardines", type:"Cultura", duration:"2 horas", price:30, image:"https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=500&q=80", lat:37.3772,lng:-5.9869,address:"Parque de María Luisa, Sevilla" },
      { id:"sevilla-triana", name:"Cerámica y sabores de Triana", type:"Gastronomía", duration:"3 horas", price:44, image:"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=500&q=80", lat:37.3847,lng:-6.0031,address:"Triana, Sevilla" }
    ]
  }
];

const money = (amount, currency = "EUR") => new Intl.NumberFormat("es-ES", { style: "currency", currency, maximumFractionDigits: 0 }).format(amount);
const escapeHtml = (value = "") => String(value).replace(/[&<>"']/g, char => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" })[char]);
const mapUrl = (lat, lng, label = "") => `https://www.openstreetmap.org/?mlat=${encodeURIComponent(lat)}&mlon=${encodeURIComponent(lng)}#map=15/${encodeURIComponent(lat)}/${encodeURIComponent(lng)}`;
const state = loadState();
let currentMap = null;
let activeDay = "all";
let itineraryView = "day";
let currentExploreMode = "cards";

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    const destinations = Array.isArray(saved.destinations) ? saved.destinations : structuredClone(destinationsSeed);
    if (Array.isArray(saved.destinations) && (saved.catalogVersion || 1) < CATALOG_VERSION) {
      const additions = destinationsSeed.slice(4).filter(seed => !destinations.some(item => item.id === seed.id));
      destinations.push(...structuredClone(additions));
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...saved, destinations, catalogVersion: CATALOG_VERSION }));
      } catch (error) {
        console.error("No se pudo actualizar el catálogo local de demostración.", error);
      }
    }
    return {
      destinations,
      quotes: Array.isArray(saved.quotes) ? saved.quotes : [],
      itinerary: Array.isArray(saved.itinerary) ? saved.itinerary : [],
      favorites: Array.isArray(saved.favorites) ? saved.favorites : [],
      adminTab: "overview"
    };
  } catch (error) {
    console.error("No se pudo leer la información local de demostración.", error);
    return { destinations: structuredClone(destinationsSeed), quotes: [], itinerary: [], favorites: [], adminTab: "overview" };
  }
}
function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ destinations: state.destinations, quotes: state.quotes, itinerary: state.itinerary, favorites: state.favorites, catalogVersion: CATALOG_VERSION }));
  } catch (error) {
    console.error("No se pudo guardar la información local de demostración.", error);
    toast("No se pudieron guardar los cambios en este navegador.");
  }
}
function destinationById(id) { return state.destinations.find(destination => destination.id === id); }
function currentRoute() { return (location.hash.replace(/^#\/?/, "").split("?")[0] || "inicio"); }
function go(route) {
  if (location.hash === `#${route}`) render();
  else location.hash = route;
  document.querySelector(".main-nav")?.classList.remove("is-open");
  document.querySelector(".menu-toggle")?.setAttribute("aria-expanded", "false");
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function toast(message) {
  const region = document.getElementById("toast-region");
  const item = document.createElement("div");
  item.className = "toast";
  item.setAttribute("role", "status");
  item.textContent = message;
  region.append(item);
  window.setTimeout(() => item.remove(), 4200);
}
function photoCard(destination) {
  return `<a class="photo-card" href="#destino/${encodeURIComponent(destination.id)}" aria-label="Ver destino ${escapeHtml(destination.name)}">
    <img src="${escapeHtml(destination.image)}" alt="${escapeHtml(destination.alt)}" loading="lazy" />
    <span class="photo-card-top">${escapeHtml(destination.region)} · ${escapeHtml(destination.category)}</span>
    <div class="photo-card-content"><h3>${escapeHtml(destination.name)}, ${escapeHtml(destination.country)}</h3><p>${escapeHtml(destination.short)}</p></div>
  </a>`;
}
function headerActive(route) {
  const nav = document.querySelector(".main-nav");
  nav?.querySelectorAll("a").forEach(link => {
    const active = (link.dataset.nav === "explorar" && (route === "destinos" || route.startsWith("destino/"))) ||
      (link.dataset.nav === "itinerario" && route === "itinerario") ||
      (link.dataset.nav === "nosotros" && route === "nosotros");
    if (active) link.setAttribute("aria-current", "page"); else link.removeAttribute("aria-current");
  });
}
function renderHome() {
  return `<section class="hero"><div class="container hero-grid">
    <div class="hero-copy"><span class="eyebrow">VIAJAR CON OTRA MIRADA</span><h1>Hay lugares que te <span>cambian el mapa.</span></h1>
      <p>Encuentra destinos que conectan contigo. Diseñamos cada viaje para que descubras más, con calma y a tu manera.</p>
      <div class="hero-actions"><a class="button button-gradient" href="#destinos">EXPLORAR DESTINOS <span aria-hidden="true">↗</span></a><a class="button button-outline" href="#cotizar">DISEÑAR MI VIAJE</a></div>
    </div><div class="hero-orb" aria-hidden="true"><div class="orb-core"></div>${Array.from({length:48},(_,i)=>{const angle=i*2.399;const radius=8+Math.sqrt(i/48)*42;return `<i class="orb-dot" style="left:${50+Math.cos(angle)*radius}%;top:${50+Math.sin(angle)*radius}%;animation-delay:-${(i%9)*.37}s"></i>`}).join("")}</div>
    <form class="search-panel" id="home-search" role="search">
      <div class="search-field"><label for="home-destination">¿A dónde quieres ir?</label><input id="home-destination" name="destination" placeholder="Ciudad, país o experiencia" /></div>
      <div class="search-field"><label for="home-date">Fecha aproximada</label><input id="home-date" name="date" type="month" /></div>
      <div class="search-field"><label for="home-travelers">Viajeros</label><select id="home-travelers" name="travelers"><option value="">Cualquiera</option><option>1 viajero</option><option>2 viajeros</option><option>3–4 viajeros</option><option>5+ viajeros</option></select></div>
      <button class="button button-gradient" type="submit">BUSCAR <span aria-hidden="true">↗</span></button>
    </form>
  </div></section>
  <section class="section"><div class="container"><div class="section-heading"><div><span class="eyebrow">LUGARES QUE INSPIRAN</span><h2>Tu próxima historia empieza aquí.</h2></div><a class="route-link" href="#destinos">Ver todos los destinos ↗</a></div>
    <div class="destination-grid">${state.destinations.slice(0,3).map(photoCard).join("")}</div>
  </div></section>
  <section class="section-tight"><div class="container feature-grid">
    <article class="surface-card feature-card"><div class="number">01</div><h3>Viajes a tu ritmo</h3><p>Ideas y rutas que parten de tus intereses, no de itinerarios prefabricados.</p></article>
    <article class="surface-card feature-card"><div class="number">02</div><h3>Cada lugar, en el mapa</h3><p>Ubicaciones, actividades y tiempos orientativos para planificar con claridad.</p></article>
    <article class="surface-card feature-card"><div class="number">03</div><h3>Personas que te acompañan</h3><p>Un equipo atento antes y durante el viaje. Sin letra pequeña ni sorpresas.</p></article>
  </div></section>
  <section class="section"><div class="container map-preview"><div class="map-preview-copy"><span class="eyebrow">DESCUBRE A TU MANERA</span><h2>Un mapa lleno de posibilidades.</h2><p>Explora lugares destacados, conoce qué puedes hacer cerca y guarda tus paradas favoritas en un itinerario propio.</p><a class="button button-outline" href="#destinos?mapa=1">EXPLORAR EN EL MAPA ↗</a></div>
    <div class="map-preview-art" aria-label="Ilustración de una ruta de viaje"><span class="map-route"></span><i class="map-pin one"></i><i class="map-pin two"></i><i class="map-pin three"></i><span class="map-label one">Lisboa</span><span class="map-label two">Kioto</span><span class="map-label three">Barcelona</span></div>
  </div></section>
  <section class="section-tight"><div class="container testimonial"><span class="eyebrow">UNA FORMA DISTINTA DE VIAJAR</span><blockquote>“El viaje no fue una lista de lugares. Fue el tiempo que tuvimos para vivirlos.”</blockquote><span class="small">Testimonio editorial de demostración, no verificado</span></div></section>
  <section class="section"><div class="container footer-cta"><h2>¿Ya tienes un destino en mente? Hagamos que suceda.</h2><a class="button button-gradient" href="#cotizar">CUÉNTANOS TU IDEA ↗</a></div></section>`;
}
function filteredDestinations(params) {
  const query = (params.get("q") || "").trim().toLocaleLowerCase("es");
  const region = params.get("region") || "";
  const type = params.get("type") || "";
  return state.destinations.filter(item => {
    const matchQuery = !query || `${item.name} ${item.country} ${item.short} ${item.category}`.toLocaleLowerCase("es").includes(query);
    return matchQuery && (!region || item.region === region) && (!type || item.category === type);
  });
}
function renderExplore(params = new URLSearchParams(location.hash.split("?")[1] || "")) {
  const items = filteredDestinations(params);
  const isMap = currentExploreMode === "map" || params.get("mapa") === "1";
  if (params.get("mapa") === "1") currentExploreMode = "map";
  return `<section class="container page-intro"><span class="eyebrow">ENCUENTRA TU PRÓXIMO LUGAR</span><h1>Explora el mundo, a tu manera.</h1><p>Busca por destino, región o estilo de viaje. La información y los precios de este catálogo son orientativos y de demostración.</p></section>
  <section class="container section-tight">
    <form id="explore-form" class="explore-toolbar">
      <div class="form-field"><label for="explore-q">Buscar destino</label><input id="explore-q" name="q" value="${escapeHtml(params.get("q") || "")}" placeholder="Ej. Lisboa, cultura..." /></div>
      <div class="form-field"><label for="explore-region">Región</label><select id="explore-region" name="region"><option value="">Todas las regiones</option>${[...new Set(state.destinations.map(item=>item.region))].map(region=>`<option ${params.get("region")===region?"selected":""}>${escapeHtml(region)}</option>`).join("")}</select></div>
      <div class="form-field"><label for="explore-type">Estilo</label><select id="explore-type" name="type"><option value="">Todos los estilos</option>${[...new Set(state.destinations.map(item=>item.category))].map(type=>`<option ${params.get("type")===type?"selected":""}>${escapeHtml(type)}</option>`).join("")}</select></div>
      <button class="button" type="submit">FILTRAR</button>
      <div class="toolbar-actions"><button type="button" class="toggle-button" data-action="view-cards" aria-pressed="${!isMap}">Tarjetas</button><button type="button" class="toggle-button" data-action="view-map" aria-pressed="${isMap}">Mapa</button></div>
    </form>
    <p class="results-count" aria-live="polite">${items.length} ${items.length===1?"destino encontrado":"destinos encontrados"}</p>
    <div class="explore-layout ${isMap?"with-map":""}">
      <div class="destination-grid">${items.length?items.map(photoCard).join(""):`<div class="empty-state"><h3>No encontramos ese destino</h3><p>Prueba con otra búsqueda o quita algún filtro.</p><button class="button button-outline" data-action="clear-filters">Limpiar filtros</button></div>`}</div>
      <aside class="map-panel" ${isMap?"":"hidden"} aria-label="Mapa de destinos"><div id="explore-map" class="map-canvas"></div><div class="map-caption">Mapa demostrativo · OpenStreetMap</div></aside>
    </div>
  </section>`;
}
function renderDestination(id) {
  const destination = destinationById(id);
  if (!destination) return `<section class="container section"><div class="empty-state"><h2>Destino no encontrado</h2><a class="button" href="#destinos">VOLVER A DESTINOS</a></div></section>`;
  const favorite = state.favorites.includes(destination.id);
  return `<section class="detail-hero"><img src="${escapeHtml(destination.image)}" alt="${escapeHtml(destination.alt)}" /><div class="detail-hero-content"><span class="eyebrow">${escapeHtml(destination.country)} · ${escapeHtml(destination.category)}</span><h1>${escapeHtml(destination.name)}</h1><p>${escapeHtml(destination.short)}</p><div class="hero-actions"><a class="button button-gradient" href="#cotizar?destino=${encodeURIComponent(destination.id)}">SOLICITAR COTIZACIÓN ↗</a><button class="button button-outline" data-action="favorite" data-id="${escapeHtml(destination.id)}">${favorite?"♥ GUARDADO":"♡ GUARDAR DESTINO"}</button></div></div></section>
  <section class="container section-tight"><div class="detail-layout"><article><span class="eyebrow">UNA MIRADA LOCAL</span><h2>${escapeHtml(destination.name)}, sin prisa.</h2><p>${escapeHtml(destination.description)}</p>
    <div class="info-list"><div class="info-chip"><span>Mejor temporada</span><strong>${escapeHtml(destination.season)}</strong></div><div class="info-chip"><span>Duración sugerida</span><strong>${escapeHtml(destination.duration)}</strong></div><div class="info-chip"><span>Desde · precio orientativo</span><strong>${money(destination.from,destination.currency)}</strong></div></div>
    <h2 class="section-tight">Experiencias para descubrir</h2><p class="small">Las actividades y tarifas son ejemplos de catálogo; disponibilidad no conectada.</p>
    <div class="activity-list">${destination.experiences.map(experience=>`<article class="activity-card"><img src="${escapeHtml(experience.image)}" alt="" loading="lazy" /><div><h3>${escapeHtml(experience.name)}</h3><p>${escapeHtml(experience.type)} · ${escapeHtml(experience.duration)} · Desde ${money(experience.price)}</p><p>${escapeHtml(experience.address)}</p><a class="route-link" href="${mapUrl(experience.lat,experience.lng)}" target="_blank" rel="noreferrer">Ver ubicación ↗</a></div><button class="button button-outline" data-action="add-stop" data-destination="${escapeHtml(destination.id)}" data-experience="${escapeHtml(experience.id)}">AÑADIR AL VIAJE</button></article>`).join("")}</div>
  </article><aside class="detail-aside"><div class="surface-card"><span class="eyebrow">LUGARES EN EL MAPA</span><h3>Puntos para empezar</h3><p class="small">Coordenadas de referencia. Consulta las fuentes oficiales antes de viajar.</p><div id="destination-map" class="map-canvas" role="region" aria-label="Mapa de lugares en ${escapeHtml(destination.name)}">${Number.isFinite(destination.lat)?"":'<div class="map-fallback"><p>Coordenadas pendientes de verificar. No se mostrará una ubicación inventada.</p></div>'}</div><div class="activity-list section-tight">${destination.places.map(place=>`<div><strong>${escapeHtml(place.name)}</strong><p class="small">${escapeHtml(place.type)} · ${escapeHtml(place.address)}</p><a class="route-link" href="${mapUrl(place.lat,place.lng)}" target="_blank" rel="noreferrer">Cómo llegar ↗</a></div>`).join("")}</div></div></aside></div></section>`;
}
function localDate(offset) {
  const date=new Date();
  date.setDate(date.getDate()+offset);
  const pad=value=>String(value).padStart(2,"0");
  return `${date.getFullYear()}-${pad(date.getMonth()+1)}-${pad(date.getDate())}`;
}
function itineraryDay(stop) { return stop.day || localDate(7); }
function getDayStops(day = activeDay) { return state.itinerary.filter(stop=>day==="all" || itineraryDay(stop)===day).sort((a,b)=>`${itineraryDay(a)}${a.time}`.localeCompare(`${itineraryDay(b)}${b.time}`)); }
function conflictsFor(stops) {
  const issues = [];
  for (let i=1;i<stops.length;i++) {
    const previous = stops[i-1], next = stops[i];
    if (itineraryDay(previous)!==itineraryDay(next)) continue;
    const end = timeToMinutes(previous.time)+previous.duration;
    if (timeToMinutes(next.time)<end) issues.push(`Puede haber un cruce de horario entre «${previous.name}» y «${next.name}».`);
  }
  return issues;
}
function timeToMinutes(time) { const [hours,minutes]=String(time||"09:00").split(":").map(Number); return (hours*60)+(minutes||0); }
function durationInMinutes(value) {
  const match=String(value||"").match(/(\d+(?:[.,]\d+)?)\s*horas?/i);
  if(match) return Math.round(Number(match[1].replace(",", "."))*60);
  if(/medio día/i.test(String(value||""))) return 240;
  return 120;
}
function nextAvailableStart(dayStops,duration) {
  let start=9*60;
  for(const stop of [...dayStops].sort((a,b)=>a.time.localeCompare(b.time))) {
    const stopStart=timeToMinutes(stop.time);
    if(start+duration<=stopStart) break;
    start=Math.max(start,stopStart+stop.duration+30);
  }
  return start+duration<=22*60?start:null;
}
function renderItinerary() {
  const days=[...new Set(state.itinerary.map(itineraryDay))].sort();
  const shownDays=itineraryView==="list"?[activeDay]:(activeDay==="all"?days:[activeDay]);
  const stops=getDayStops(activeDay);
  const dayLabel=day=>new Intl.DateTimeFormat("es-ES",{day:"numeric",month:"short"}).format(new Date(`${day}T12:00:00`));
  return `<section class="container page-intro"><span class="eyebrow">TU VIAJE, A TU RITMO</span><h1>Un itinerario que se siente tuyo.</h1><p>Organiza paradas por día y consulta sus ubicaciones. Los tiempos de traslado requieren un proveedor de rutas y no están disponibles en esta demostración.</p></section>
  <section class="container section-tight"><div class="itinerary-top"><div><h2>Mi itinerario</h2><p class="small">Guardado localmente en este navegador · no es una reserva.</p></div><div class="itinerary-controls"><button class="button button-outline" data-action="locate">USAR MI UBICACIÓN</button><button class="button button-outline" data-action="clear-itinerary">VACIAR VIAJE</button></div></div>
    <div class="itinerary-controls">${["list","day","map"].map(view=>`<button class="toggle-button" data-action="itinerary-view" data-view="${view}" aria-pressed="${itineraryView===view}">${view==="list"?"Lista":view==="day"?"Por día":"Mapa"}</button>`).join("")}</div>
    <div class="day-tabs"><button class="day-tab" data-action="select-day" data-day="all" aria-pressed="${activeDay==="all"}">Todo el viaje</button>${days.map(day=>`<button class="day-tab" data-action="select-day" data-day="${day}" aria-pressed="${activeDay===day}">${dayLabel(day)}</button>`).join("")}</div>
    <div class="notice">Modo demostración: las ubicaciones se basan en coordenadas de referencia. Los segmentos, distancia y duración de ruta no se calculan sin un proveedor de rutas configurado.</div>
    <div class="itinerary-layout section-tight"><div>
      ${state.itinerary.length===0?`<div class="empty-state"><h3>Tu mapa está en blanco (por ahora)</h3><p>Explora un destino y añade las actividades que te interesen.</p><a class="button button-gradient" href="#destinos">DESCUBRIR ACTIVIDADES</a></div>`:
      `${shownDays.map(day=>{const dayStops=getDayStops(day);return `<section class="day-block"><h3>${itineraryView==="list"?"Lista de actividades":day==="all"?"Todas las paradas":`Día · ${dayLabel(day)}`}</h3><div class="stop-list">${dayStops.map((stop,index)=>{const dayIndex=getDayStops(itineraryDay(stop)).findIndex(item=>item.id===stop.id);return `<article class="stop-row"><div class="stop-edit">${day==="all"?`<span class="stop-day-label">${dayLabel(itineraryDay(stop))}</span>`:""}<label class="sr-only" for="stop-date-${escapeHtml(stop.id)}">Fecha para ${escapeHtml(stop.name)}</label><input class="stop-date-input" id="stop-date-${escapeHtml(stop.id)}" type="date" value="${escapeHtml(itineraryDay(stop))}" data-stop-date="${escapeHtml(stop.id)}" /><label class="sr-only" for="stop-time-${escapeHtml(stop.id)}">Hora para ${escapeHtml(stop.name)}</label><input class="stop-time-input" id="stop-time-${escapeHtml(stop.id)}" type="time" value="${escapeHtml(stop.time)}" data-stop-time="${escapeHtml(stop.id)}" /></div><div><h3>${escapeHtml(stop.name)}</h3><p>${escapeHtml(stop.destinationName)} · ${escapeHtml(stop.address)} · ${stop.duration} min de actividad</p><a class="route-link" href="${mapUrl(stop.lat,stop.lng)}" target="_blank" rel="noreferrer">Abrir mapa ↗</a></div><div class="stop-actions"><button class="icon-button" data-action="move-stop" data-id="${escapeHtml(stop.id)}" data-direction="-1" aria-label="Mover ${escapeHtml(stop.name)} antes" ${dayIndex===0?"disabled":""}>↑</button><button class="icon-button" data-action="move-stop" data-id="${escapeHtml(stop.id)}" data-direction="1" aria-label="Mover ${escapeHtml(stop.name)} después" ${dayIndex===getDayStops(itineraryDay(stop)).length-1?"disabled":""}>↓</button><button class="icon-button" data-action="remove-stop" data-id="${escapeHtml(stop.id)}" aria-label="Quitar ${escapeHtml(stop.name)}">×</button></div></article>`}).join("")}</div>${conflictsFor(dayStops).map(issue=>`<p class="warning" role="status">${escapeHtml(issue)}</p>`).join("")}<div class="day-summary">${dayStops.length} actividades · ${Math.round(dayStops.reduce((sum,stop)=>sum+stop.duration,0)/60*10)/10} h reservadas · tiempo libre y traslados por definir.</div></section>`}).join("")}`}</div>
      <aside class="map-panel" ${itineraryView==="map"?"":"hidden"}><div id="itinerary-map" class="map-canvas" role="region" aria-label="Mapa de paradas de itinerario"></div><div class="map-caption">Paradas seleccionadas · demostración OpenStreetMap</div></aside>
    </div></div>
    ${itineraryView==="list"?`<p class="small">Vista de lista seleccionada. Cambia a «Por día» para revisar horarios o a «Mapa» para ver las ubicaciones.</p>`:""}
  </section>`;
}
function renderQuote(params = new URLSearchParams(location.hash.split("?")[1] || "")) {
  const preset=destinationById(params.get("destino")||"");
  return `<section class="container page-intro"><span class="eyebrow">EMPECEMOS POR TU IDEA</span><h1>Cuéntanos qué viaje imaginas.</h1><p>Esto crea una solicitud de cotización de demostración guardada en este navegador. El equipo no recibirá tus datos ni se enviará ningún correo.</p></section>
  <section class="container section-tight"><div class="quote-card"><div class="notice">Solicitud no vinculante · No hay pagos ni disponibilidad en tiempo real. Los datos se almacenan únicamente en este dispositivo.</div>
    <form id="quote-form" class="quote-form section-tight">
      <div class="form-field"><label for="quote-name">Nombre</label><input id="quote-name" name="name" required minlength="2" autocomplete="name" /></div>
      <div class="form-field"><label for="quote-email">Correo electrónico</label><input id="quote-email" name="email" type="email" required autocomplete="email" /></div>
      <div class="form-field"><label for="quote-destination">Destino de interés</label><select id="quote-destination" name="destination" required><option value="">Elige un destino</option>${state.destinations.map(item=>`<option value="${escapeHtml(item.id)}" ${preset?.id===item.id?"selected":""}>${escapeHtml(item.name)}, ${escapeHtml(item.country)}</option>`).join("")}<option value="otro">Aún no lo sé</option></select></div>
      <div class="form-field"><label for="quote-date">Fecha aproximada</label><input id="quote-date" name="date" type="date" min="${localDate(0)}" required /></div>
      <div class="form-field"><label for="quote-travelers">Número de viajeros</label><select id="quote-travelers" name="travelers" required><option value="">Seleccionar</option>${[1,2,3,4,5,6,7,8].map(count=>`<option value="${count}">${count} ${count===1?"viajero":"viajeros"}</option>`).join("")}</select></div>
      <div class="form-field"><label for="quote-budget">Presupuesto por persona (EUR)</label><select id="quote-budget" name="budget"><option value="">Por definir</option><option>Menos de 1.000 €</option><option>1.000–2.000 €</option><option>2.000–3.500 €</option><option>Más de 3.500 €</option></select></div>
      <div class="form-field full"><label for="quote-notes">¿Qué te gustaría vivir?</label><textarea id="quote-notes" name="notes" maxlength="1000" placeholder="Intereses, ritmo de viaje, accesibilidad u otras preferencias..."></textarea></div>
      <div class="form-field full"><label class="check-row"><input type="checkbox" name="consent" required /><span>Autorizo el uso de estos datos únicamente para registrar esta solicitud de demostración. Comprendo que no se transmitirá a la agencia.</span></label></div>
      <button class="button button-gradient" type="submit">GUARDAR SOLICITUD ↗</button>
    </form></div>
    ${state.quotes.length?`<div class="section-tight"><h3>Solicitudes en este dispositivo</h3><div class="data-table-wrap"><table class="data-table"><thead><tr><th>Referencia</th><th>Destino</th><th>Fecha</th><th>Estado</th></tr></thead><tbody>${state.quotes.map(quote=>`<tr><td>${escapeHtml(quote.reference)}</td><td>${escapeHtml(quote.destinationName)}</td><td>${escapeHtml(quote.date)}</td><td><span class="status">${escapeHtml(quote.status)}</span></td></tr>`).join("")}</tbody></table></div></div>`:""}
  </section>`;
}
function renderAbout() {
  return `<section class="container page-intro"><span class="eyebrow">LA AGENCIA</span><h1>Más cerca de lo que hace único a cada lugar.</h1><p>NÓMADA es una marca conceptual para este proyecto de demostración. Sus datos de contacto y operaciones reales aún no están configurados.</p></section>
  <section class="container section-tight about-grid"><div><span class="eyebrow">VIAJAR CON SENTIDO</span><h2>La curiosidad también puede tener un buen plan.</h2><p>Diseñamos rutas con espacio para descubrir. Reunimos inspiración, actividades y ubicaciones en una experiencia clara para que planificar sea parte del viaje, no una carrera de reservas.</p><p>Este prototipo usa datos de muestra y mapas públicos. Ninguna opinión, precio, disponibilidad o solicitud representa una transacción real.</p><a class="button button-gradient" href="#cotizar">HABLEMOS DE TU VIAJE ↗</a></div><div class="about-art" aria-label="Orbe gráfico de rutas"></div></section>
  <section class="container section"><div class="surface-card"><span class="eyebrow">PREGUNTAS FRECUENTES</span><details><summary>¿Puedo reservar y pagar desde aquí?</summary><p>No. La web permite registrar una solicitud local de demostración; no hay pasarela de pago ni conexión de inventario.</p></details><details><summary>¿Los mapas y lugares son reales?</summary><p>Los marcadores usan coordenadas de referencia para puntos conocidos. Los mapas los sirve OpenStreetMap; valida siempre horarios, accesos y condiciones con fuentes oficiales.</p></details><details><summary>¿Adónde se envía mi solicitud?</summary><p>A ningún servidor. Se guarda únicamente en el almacenamiento local de este navegador y puede consultarse en la sección de administración demo.</p></details></div></section>`;
}
function adminQuoteRows() {
  if (!state.quotes.length) return `<tr><td colspan="5">Aún no hay solicitudes guardadas en este dispositivo.</td></tr>`;
  return state.quotes.map((quote,index)=>`<tr><td>${escapeHtml(quote.reference)}</td><td>${escapeHtml(quote.name)}<br><span class="small">${escapeHtml(quote.email)}</span></td><td>${escapeHtml(quote.destinationName)}</td><td><select class="admin-status" data-index="${index}" aria-label="Estado de ${escapeHtml(quote.reference)}">${["Pendiente","En revisión","Cotización enviada","Cerrada"].map(status=>`<option ${quote.status===status?"selected":""}>${status}</option>`).join("")}</select></td><td>${escapeHtml(quote.date)}</td></tr>`).join("");
}
function renderAdmin() {
  const tabs=[["overview","Resumen"],["destinations","Destinos"],["quotes","Solicitudes"]];
  const active=state.adminTab||"overview";
  let content="";
  if(active==="overview") content=`<div class="notice">Área administrativa de demostración. Los cambios solo afectan el almacenamiento de este navegador; no existe autenticación ni servidor.</div><div class="admin-stats section-tight"><div class="admin-stat"><strong>${state.destinations.length}</strong><span>Destinos en catálogo</span></div><div class="admin-stat"><strong>${state.quotes.length}</strong><span>Solicitudes locales</span></div><div class="admin-stat"><strong>${state.itinerary.length}</strong><span>Paradas de itinerario</span></div></div><div class="surface-card"><h3>Operación transparente</h3><p>Los datos de muestra no son reservas, ventas ni disponibilidad real. Las solicitudes que se creen en este dispositivo aparecen en la pestaña «Solicitudes».</p><p>Para uso productivo hace falta implementar servidor, autenticación con roles, base de datos, correo transaccional y proveedores de pago/rutas.</p></div>`;
  if(active==="destinations") content=`<div class="notice">Catálogo demo: puedes añadir destinos para este navegador. Las entradas iniciales son ejemplos de contenido y no representan inventario.</div><div class="admin-tools"><h3>Destinos</h3><button class="button button-outline" data-action="reset-destinations">RESTAURAR EJEMPLOS</button></div><div class="data-table-wrap"><table class="data-table"><thead><tr><th>Destino</th><th>País</th><th>Tipo</th><th>Precio orientativo</th><th>Acción</th></tr></thead><tbody>${state.destinations.map(destination=>`<tr><td>${escapeHtml(destination.name)}</td><td>${escapeHtml(destination.country)}</td><td>${escapeHtml(destination.category)}</td><td>${money(destination.from,destination.currency)}</td><td><button class="icon-button" data-action="delete-destination" data-id="${escapeHtml(destination.id)}" aria-label="Eliminar ${escapeHtml(destination.name)}">×</button></td></tr>`).join("")}</tbody></table></div><form id="add-destination" class="admin-add-form"><input name="name" placeholder="Ciudad" required aria-label="Ciudad" /><input name="country" placeholder="País" required aria-label="País" /><input name="category" placeholder="Estilo de viaje" required aria-label="Estilo de viaje" /><button class="button button-small" type="submit">AÑADIR</button></form><p class="small">Los nuevos destinos se guardan como registros demo sin coordenadas verificadas; no aparecen en el mapa hasta completar su ficha geográfica.</p>`;
  if(active==="quotes") content=`<div class="notice">Las solicitudes son locales, de prueba y no se han enviado a ningún equipo comercial.</div><div class="admin-tools"><h3>Solicitudes recibidas en este dispositivo</h3></div><div class="data-table-wrap"><table class="data-table"><thead><tr><th>Referencia</th><th>Cliente</th><th>Destino</th><th>Estado</th><th>Fecha</th></tr></thead><tbody>${adminQuoteRows()}</tbody></table></div>`;
  return `<section class="container page-intro"><span class="eyebrow">ESPACIO DE OPERACIONES</span><h1>Panel administrativo.</h1><p>Herramientas locales de demostración; no uses información personal real.</p></section><section class="container section-tight"><div class="admin-layout"><nav class="admin-nav" aria-label="Administración">${tabs.map(([id,label])=>`<button data-action="admin-tab" data-tab="${id}" aria-pressed="${active===id}">${label}</button>`).join("")}</nav><div class="admin-content">${content}</div></div></section>`;
}
function render() {
  const route=currentRoute();
  headerActive(route);
  const app=document.getElementById("app");
  if(route==="inicio") app.innerHTML=renderHome();
  else if(route==="destinos") app.innerHTML=renderExplore();
  else if(route.startsWith("destino/")) app.innerHTML=renderDestination(decodeURIComponent(route.slice("destino/".length).split("?")[0]));
  else if(route==="itinerario") app.innerHTML=renderItinerary();
  else if(route==="cotizar") app.innerHTML=renderQuote();
  else if(route==="nosotros") app.innerHTML=renderAbout();
  else if(route==="admin") app.innerHTML=renderAdmin();
  else { app.innerHTML=renderHome(); }
  setTimeout(initVisibleMaps, 0);
  if(route.startsWith("destino/")) {
    const id=decodeURIComponent(route.slice("destino/".length).split("?")[0]);
    const destination=destinationById(id);
    if(destination) document.title=`${destination.name} — NÓMADA`;
  } else document.title=`${route==="admin"?"Administración demo":route==="itinerario"?"Mi itinerario":route==="destinos"?"Explorar destinos":"NÓMADA — Viajes con sentido"}`;
}
function initLeafletMap(elementId, center, markers, zoom=12) {
  const container=document.getElementById(elementId);
  if(!container) return;
  if(!window.L) {
    const links=markers.map(marker=>`<p><strong>${escapeHtml(marker.name)}</strong><br>${escapeHtml(marker.address||"")} · <a href="${mapUrl(marker.lat,marker.lng)}" target="_blank" rel="noreferrer">Abrir mapa externo ↗</a></p>`).join("");
    container.innerHTML=`<div class="map-fallback"><p>El mapa interactivo requiere conexión a internet. Consulta las ubicaciones en OpenStreetMap:</p>${links}</div>`;
    return;
  }
  const map=L.map(container,{scrollWheelZoom:false}).setView([center.lat,center.lng],zoom);
  const tiles=L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'});
  tiles.on("tileerror",()=>{
    if(container.querySelector(".map-error-overlay")) return;
    const notice=document.createElement("div");
    notice.className="map-error-overlay";
    notice.setAttribute("role","status");
    const text=document.createElement("span");
    text.textContent="No se pudieron cargar las teselas del mapa. Consulta la ubicación directamente: ";
    const link=document.createElement("a");
    link.href=mapUrl(center.lat,center.lng);
    link.target="_blank";
    link.rel="noreferrer";
    link.textContent="Abrir OpenStreetMap ↗";
    notice.append(text,link);
    container.append(notice);
  });
  tiles.addTo(map);
  const bounds=[];
  markers.forEach(marker=>{
    if(typeof marker.lat!=="number"||typeof marker.lng!=="number") return;
    const point=[marker.lat,marker.lng];bounds.push(point);
    const popup=`<strong>${escapeHtml(marker.name)}</strong><br>${escapeHtml(marker.type||marker.address||"Lugar destacado")}<br><a href="${mapUrl(marker.lat,marker.lng)}" target="_blank" rel="noreferrer">Cómo llegar ↗</a>`;
    L.marker(point,{title:marker.name,alt:`Ubicación de ${marker.name}`}).addTo(map).bindPopup(popup);
  });
  if(bounds.length>1) map.fitBounds(bounds,{padding:[25,25],maxZoom:13});
  currentMap=map;
  setTimeout(()=>map.invalidateSize(),50);
}
function initVisibleMaps() {
  const route=currentRoute();
  if(route==="destinos"&&currentExploreMode==="map") {
    const items=filteredDestinations(new URLSearchParams(location.hash.split("?")[1]||"")).filter(item=>Number.isFinite(item.lat));
    if(items.length) initLeafletMap("explore-map",{lat:items[0].lat,lng:items[0].lng},items.map(item=>({name:`${item.name}, ${item.country}`,type:item.category,lat:item.lat,lng:item.lng,address:item.country})),3);
    else if(document.getElementById("explore-map")) document.getElementById("explore-map").innerHTML='<div class="map-fallback"><p>No hay coordenadas verificadas para los resultados.</p></div>';
  } else if(route.startsWith("destino/")) {
    const destination=destinationById(decodeURIComponent(route.slice("destino/".length).split("?")[0]));
    if(destination&&Number.isFinite(destination.lat)) initLeafletMap("destination-map",destination,destination.places,12);
  } else if(route==="itinerario"&&itineraryView==="map") {
    const stops=getDayStops(activeDay).filter(stop=>Number.isFinite(stop.lat));
    if(stops.length) initLeafletMap("itinerary-map",stops[0],stops.map(stop=>({name:stop.name,type:stop.destinationName,lat:stop.lat,lng:stop.lng,address:stop.address})),12);
    else if(document.getElementById("itinerary-map")) document.getElementById("itinerary-map").innerHTML='<div class="map-fallback"><p>Añade paradas con ubicación para verlas en el mapa.</p></div>';
  }
}
function addExperience(destinationId, experienceId) {
  const destination=destinationById(destinationId);
  const experience=destination?.experiences.find(item=>item.id===experienceId);
  if(!destination||!experience) { toast("No se encontró esa actividad."); return; }
  if(state.itinerary.some(stop=>stop.experienceId===experience.id)) { toast("Esa actividad ya está en tu itinerario."); return; }
  const duration=durationInMinutes(experience.duration);
  let day="",start=null;
  for(let offset=7;offset<=30;offset++) {
    const candidateDay=localDate(offset);
    const candidateStart=nextAvailableStart(state.itinerary.filter(stop=>itineraryDay(stop)===candidateDay),duration);
    if(candidateStart!==null) { day=candidateDay;start=candidateStart;break; }
  }
  if(start===null) { day=localDate(31);start=9*60; }
  const time=`${String(Math.floor(start/60)).padStart(2,"0")}:${String(start%60).padStart(2,"0")}`;
  state.itinerary.push({id:globalThis.crypto?.randomUUID?.()||`${Date.now()}-${Math.random().toString(36).slice(2)}`,experienceId:experience.id,destinationId:destination.id,destinationName:destination.name,name:experience.name,address:experience.address,lat:experience.lat,lng:experience.lng,duration,time,day,type:experience.type});
  saveState();toast("Actividad añadida a tu itinerario.");go("itinerario");
}
function createQuote(form) {
  const values=Object.fromEntries(new FormData(form).entries());
  const destination=destinationById(values.destination);
  const quote={reference:`NM-${Date.now().toString().slice(-7)}`,name:values.name.trim(),email:values.email.trim(),destinationId:values.destination,destinationName:destination?.name||(values.destination==="otro"?"Por definir":"Destino personalizado"),date:values.date,travelers:Number(values.travelers),budget:values.budget||"Por definir",notes:values.notes.trim(),status:"Pendiente",createdAt:new Date().toISOString()};
  state.quotes.unshift(quote);saveState();
  toast(`Solicitud ${quote.reference} guardada en este dispositivo (sin envío).`);
  form.reset();
  render();
}
function distanceKm(a,b) {
  const radians=value=>value*Math.PI/180;
  const dLat=radians(b.lat-a.lat),dLng=radians(b.lng-a.lng);
  const part=Math.sin(dLat/2)**2+Math.cos(radians(a.lat))*Math.cos(radians(b.lat))*Math.sin(dLng/2)**2;
  return 6371*2*Math.atan2(Math.sqrt(part),Math.sqrt(1-part));
}
async function requestLocation() {
  if(!navigator.geolocation) { toast("Este navegador no ofrece geolocalización. Puedes seguir usando la búsqueda manual.");return; }
  toast("Solicitando permiso del navegador para usar tu ubicación una sola vez…");
  navigator.geolocation.getCurrentPosition(position=>{
    const user={lat:position.coords.latitude,lng:position.coords.longitude};
    const places=state.destinations.flatMap(destination=>destination.places.map(place=>({...place,destinationName:destination.name}))).filter(place=>Number.isFinite(place.lat));
    const nearest=places.sort((a,b)=>distanceKm(user,a)-distanceKm(user,b))[0];
    toast(nearest?`Lugar de referencia más cercano: ${nearest.name}, ${nearest.destinationName} (aprox. ${Math.round(distanceKm(user,nearest))} km en línea recta). No se guarda tu ubicación.`:"No hay lugares guardados para comparar.");
  },error=>{
    const messages={1:"Permiso de ubicación denegado. Busca por ciudad o destino.",2:"No se pudo determinar tu ubicación. Puedes buscar manualmente.",3:"La solicitud de ubicación tardó demasiado. Inténtalo de nuevo."};
    toast(messages[error.code]||"No se pudo acceder a tu ubicación.");
  },{enableHighAccuracy:false,timeout:10000,maximumAge:0});
}
function moveStop(id,direction) {
  const stop=state.itinerary.find(item=>item.id===id);if(!stop)return;
  const dayStops=state.itinerary.filter(item=>itineraryDay(item)===itineraryDay(stop)).sort((a,b)=>a.time.localeCompare(b.time));
  const index=dayStops.findIndex(item=>item.id===id),other=dayStops[index+Number(direction)];
  if(!other)return;
  const oldTime=stop.time;stop.time=other.time;other.time=oldTime;
  saveState();render();
}
document.addEventListener("click",event=>{
  const action=event.target.closest("[data-action]");
  if(!action)return;
  const type=action.dataset.action;
  if(type==="view-map"||type==="view-cards") {currentExploreMode=type==="view-map"?"map":"cards";render();return;}
  if(type==="clear-filters") {currentExploreMode="cards";go("destinos");return;}
  if(type==="favorite") {
    const index=state.favorites.indexOf(action.dataset.id);
    if(index<0)state.favorites.push(action.dataset.id);else state.favorites.splice(index,1);
    saveState();render();toast(index<0?"Destino guardado en favoritos.":"Destino eliminado de favoritos.");return;
  }
  if(type==="add-stop"){addExperience(action.dataset.destination,action.dataset.experience);return;}
  if(type==="select-day"){activeDay=action.dataset.day;render();return;}
  if(type==="itinerary-view"){itineraryView=action.dataset.view;render();return;}
  if(type==="clear-itinerary"){if(!state.itinerary.length){toast("El itinerario ya está vacío.");return;}if(confirm("¿Quitar todas las paradas de tu itinerario local?")){state.itinerary=[];saveState();render();toast("Itinerario vacío.");}return;}
  if(type==="remove-stop"){state.itinerary=state.itinerary.filter(stop=>stop.id!==action.dataset.id);saveState();render();toast("Parada eliminada.");return;}
  if(type==="move-stop"){moveStop(action.dataset.id,Number(action.dataset.direction));return;}
  if(type==="locate"){requestLocation();return;}
  if(type==="admin-tab"){state.adminTab=action.dataset.tab;render();return;}
  if(type==="delete-destination") {
    const destination=destinationById(action.dataset.id);
    if(destination&&confirm(`¿Eliminar ${destination.name} de este catálogo de demostración?`)) {
      state.destinations=state.destinations.filter(item=>item.id!==destination.id);saveState();render();toast("Destino eliminado del catálogo local.");
    }return;
  }
  if(type==="reset-destinations"){if(confirm("¿Restaurar los destinos iniciales? Los destinos creados localmente se perderán.")){state.destinations=structuredClone(destinationsSeed);saveState();render();toast("Catálogo de ejemplo restaurado.");}return;}
});
document.addEventListener("submit",event=>{
  const form=event.target;
  if(form.id==="home-search") {
    event.preventDefault();const value=new FormData(form).get("destination")||"";
    currentExploreMode="cards";go(`destinos?q=${encodeURIComponent(value)}`);return;
  }
  if(form.id==="explore-form") {event.preventDefault();const params=new URLSearchParams(new FormData(form));currentExploreMode="cards";go(`destinos?${params.toString()}`);return;}
  if(form.id==="quote-form") {event.preventDefault();if(!form.reportValidity())return;createQuote(form);return;}
  if(form.id==="add-destination") {
    event.preventDefault();const values=Object.fromEntries(new FormData(form).entries());
    const id=values.name.trim().toLocaleLowerCase("es").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
    if(state.destinations.some(item=>item.id===id)){toast("Ya existe un destino con ese nombre.");return;}
    state.destinations.push({id,name:values.name.trim(),country:values.country.trim(),region:"Por clasificar",category:values.category.trim(),short:"Ficha pendiente de completar.",description:"Destino añadido en la administración de demostración.",season:"Por confirmar",duration:"Por definir",from:0,currency:"EUR",image:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",alt:"Paisaje de demostración",places:[],experiences:[]});
    saveState();render();toast("Destino guardado en el catálogo local. Completa su ubicación antes de publicarlo.");return;
  }
});
document.addEventListener("change",event=>{
  if(event.target.matches("[data-stop-time]")) {
    const stop=state.itinerary.find(item=>item.id===event.target.dataset.stopTime);
    if(stop){stop.time=event.target.value;saveState();render();}
  }
  if(event.target.matches("[data-stop-date]")) {
    const stop=state.itinerary.find(item=>item.id===event.target.dataset.stopDate);
    if(stop){stop.day=event.target.value;saveState();render();}
  }
  if(event.target.matches(".admin-status")) {
    const quote=state.quotes[Number(event.target.dataset.index)];
    if(quote){quote.status=event.target.value;saveState();toast("Estado de solicitud actualizado localmente.");}
  }
});
document.querySelector(".menu-toggle")?.addEventListener("click",event=>{
  const button=event.currentTarget,nav=document.querySelector(".main-nav"),isOpen=nav.classList.toggle("is-open");
  button.setAttribute("aria-expanded",String(isOpen));
});
window.addEventListener("hashchange",()=>{currentExploreMode="cards";activeDay="all";render();});
window.addEventListener("DOMContentLoaded",render);

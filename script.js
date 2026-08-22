const header = document.querySelector("[data-header]");
const hero = document.querySelector(".hero");
const mobileActionBar = document.querySelector(".mobile-action-bar");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const gallery = document.querySelector("[data-gallery]");
const lightbox = document.querySelector("[data-lightbox]");
const lightboxImage = document.querySelector("[data-lightbox-image]");
const closeLightbox = document.querySelector("[data-close]");
const reviewCarousel = document.querySelector("[data-review-carousel]");
const reviewTrack = document.querySelector("[data-review-track]");
const reviewDots = document.querySelector("[data-review-dots]");
const reviewPrev = document.querySelector("[data-review-prev]");
const reviewNext = document.querySelector("[data-review-next]");
const revealItems = document.querySelectorAll(".reveal");
const openStatus = document.querySelector("[data-open-status]");
const languageSelect = document.querySelector("[data-language-select]");

if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

const initialHash = document.documentElement.dataset.initialHash ?? "";

document.documentElement.classList.toggle("reveal-enabled", !(window.location.hash || initialHash));

const shopPhone = "41766820255";

const defaultLanguage = "de";
let currentLanguage = defaultLanguage;

const translations = {
  de: {
    code: "de",
    title: "Galaxy Barbershop Zürich | Haarschnitt CHF 20, ohne Termin",
    description:
      "Barbershop in Zürich-Schwamendingen: Haarschnitt CHF 20, Bart CHF 15. Walk-ins ohne Termin. 4.8 Sterne aus 119 Google-Reviews. Dübendorfstrasse 22.",
    skip: "Zum Inhalt springen",
    language: "Sprache",
    nav: ["Services", "Location", "Galerie", "Reviews", "Kontakt"],
    heroEyebrow: "Galaxy Barbershop · Zürich-Schwamendingen",
    heroTitle: "Haarschnitt CHF 20. Ohne Termin.",
    heroCopy:
      "In Zürich zahlst du für einen Cut schnell CHF 50 oder mehr. Bei Khaled: saubere Fades, scharfe Konturen und 4.8 Sterne aus 119 Google-Reviews. Zum fairen Fixpreis.",
    cta: {
      whatsapp: "Per WhatsApp schreiben",
      call: "Anrufen",
      route: "Route",
      reviews: "Bewertungen ansehen",
      maps: "Google Maps",
    },
    conversion: {
      priceLabel: "Haarschnitt · anderswo CHF 40–80",
      price: "nur CHF 20",
      walkLabel: "Walk-in",
      walk: "ohne Termin vorbeikommen",
      action: "Jetzt per WhatsApp",
      callLabel: "Anrufen",
      reviewsLabel: "119 Google Reviews",
    },
    intro: {
      kicker: "Der Shop",
      title: "Khaled schneidet. Du gehst sauber raus.",
      body: "Khaled schneidet seit Jahren klassische und moderne Herrenstyles: klare Übergänge, scharfe Konturen, ehrliche Beratung. Immer derselbe Barber, immer dieselbe Qualität. Du weisst genau, was du bekommst.",
    },
    services: {
      kicker: "Preise",
      title: "Vier Services. Fixpreise. Kein Kleingedrucktes.",
      items: [
        ["Haarschnitt & Styling", "Typgerechte Herrenhaarschnitte inklusive Fades und Taper, mit Beratung zu Länge, Form und Finish.", "ab 30 Min.", "Haarschnitt & Styling · CHF 20"],
        ["Bart & Konturen", "Beard Trim, Rasur-Linien und gepflegte Form für einen klaren Look.", "ab 20 Min.", "Bart & Konturen · CHF 15"],
        ["Haarschnitt & Bart", "Das Komplettpaket: frischer Cut und gepflegter Bart in einem Termin.", "ab 45 Min.", "Haarschnitt & Bart · CHF 35"],
        ["Kinder bis 12 Jahre", "Geduldige Haarschnitte für Kinder bis 12 Jahre, von klassisch bis trendig.", "ab 30 Min.", "Kinder bis 12 Jahre · CHF 15"],
      ],
      choose: "Service wählen",
      lead: "Zum Vergleich: ein Herrenhaarschnitt kostet in Zürich meist CHF 40 bis 80. Hier: CHF 20. Und du brauchst keinen Termin.",
    },
    proofCards: {
      kicker: "Cut Highlights",
      title: "Details, die man sofort sieht.",
      items: [
        ["Klare Konturen", "Präzise Linien geben dem Look sofort Struktur."],
        ["Weiche Übergänge", "Fades und Taper sollen natürlich wirken, auch aus der Nähe."],
        ["Bart & Finish", "Der letzte Feinschliff macht den Unterschied zwischen okay und frisch."],
      ],
      clearAlt: "Kinderhaarschnitt mit sauberem Design und klaren Konturen",
    },
    location: {
      kicker: "Location",
      title: "Dunkles Holz, Leder und warmes Licht.",
      body: "Dübendorfstrasse 22, direkt in Schwamendingen. Kein Schickimicki: ein sauberer, ruhiger Shop mit Ledersitzen und warmem Licht. Kurz warten, frisch rausgehen.",
      tags: ["Ledersitze", "warmes Licht", "saubere Barber-Stationen"],
      caption: "Dübendorfstrasse 22 · Zürich-Schwamendingen",
      alt: "Dunkler Barberraum mit Lederlounge, warmem Licht und Checkerboard-Boden im Galaxy Barbershop Zürich",
    },
    gallery: {
      kicker: "Galerie",
      title: "Frische Cuts aus dem Shop.",
      lead: "Echte Kunden, echte Ergebnisse. Tippe auf ein Bild für die Grossansicht.",
      expand: "Bild vergrößern",
    },
    reviews: {
      kicker: "Google Reviews",
      title: "4.8 Sterne. 119 Reviews. Alle öffentlich auf Google.",
      body: "Nichts davon steht nur auf unserer Seite. Jede Bewertung ist auf Google nachlesbar. Schau selbst, was Kunden über Fades, Bart und Wartezeit sagen.",
      outOf: "von 5 Sternen",
      count: "119 Google Reviews",
      read: "Reviews lesen",
      write: "Review schreiben",
      selected: "Ausgewählte Stimmen",
      googleReview: "Google Review",
      prev: "Vorherige Bewertung",
      next: "Nächste Bewertung",
      choose: "Bewertung auswählen",
      readMore: "Mehr lesen",
      showLess: "Weniger anzeigen",
    },
    contact: {
      kicker: "Kontakt",
      title: "Ohne Termin vorbeikommen. Oder kurz schreiben.",
      body: "Dübendorfstrasse 22, 8051 Zürich. Donnerstag und Freitag bis 20:00, auch nach der Arbeit machbar. Sonntag geschlossen.",
      labels: ["Telefon", "WhatsApp", "Adresse", "Öffnungszeiten"],
      whatsapp: "Direkt schreiben",
      hours: [["Mo bis Mi", "9:00 bis 19:00"], ["Do bis Fr", "9:00 bis 20:00"], ["Samstag", "9:00 bis 18:00"], ["Sonntag", "geschlossen"]],
      top: "Nach oben",
    },
    footer: {
      body: "Haarschnitt CHF 20 · Walk-ins ohne Termin · Zürich-Schwamendingen",
      chapters: "Kapitel",
      visit: "Besuch",
    },
    open: {
      sunday: "Heute geschlossen · Mo-Mi 9-19 · Do-Fr 9-20 · Sa 9-18",
      before: "Heute ab 9:00 geöffnet",
      active: "Jetzt offen bis {close}",
      after: "Für heute geschlossen · Morgen ab 9:00",
    },
    navToggleOpen: "Navigation öffnen",
    navToggleClose: "Navigation schließen",
    whatsappText: "Hallo Galaxy Barbershop, ich möchte einen Termin anfragen.",
  },
  en: {
    code: "en",
    title: "Galaxy Barbershop Zurich | Haircut CHF 20, No Appointment",
    description:
      "Barbershop in Zurich-Schwamendingen: haircut CHF 20, beard CHF 15. Walk-ins, no appointment. 4.8 stars from 119 Google reviews. Dübendorfstrasse 22.",
    skip: "Skip to content",
    language: "Language",
    nav: ["Services", "Location", "Gallery", "Reviews", "Contact"],
    heroEyebrow: "Galaxy Barbershop · Zurich-Schwamendingen",
    heroTitle: "Haircut CHF 20. No appointment.",
    heroCopy:
      "In Zurich a cut easily costs CHF 50 or more. At Khaled's: clean fades, sharp contours and 4.8 stars from 119 Google reviews. At a fair fixed price.",
    cta: {
      whatsapp: "Message us on WhatsApp",
      call: "Call",
      route: "Directions",
      reviews: "See reviews",
      maps: "Google Maps",
    },
    conversion: {
      priceLabel: "Haircut · elsewhere CHF 40–80",
      price: "only CHF 20",
      walkLabel: "Walk-in",
      walk: "drop by without an appointment",
      action: "WhatsApp now",
      callLabel: "Call",
      reviewsLabel: "119 Google Reviews",
    },
    intro: {
      kicker: "The shop",
      title: "Khaled cuts. You leave looking clean.",
      body: "Khaled has been cutting classic and modern men's styles for years: clean transitions, sharp contours, honest advice. Always the same barber, always the same quality. You know exactly what you get.",
    },
    services: {
      kicker: "Prices",
      title: "Four services. Fixed prices. No fine print.",
      items: [
        ["Haircut & Styling", "Men's cuts tailored to your type, including fades and tapers, with advice on length, shape and finish.", "from 30 min.", "Haircut & Styling · CHF 20"],
        ["Beard & Contours", "Beard trim, razor lines and a clean shape for a sharp look.", "from 20 min.", "Beard & Contours · CHF 15"],
        ["Haircut & Beard", "The full package: a fresh cut and a groomed beard in one visit.", "from 45 min.", "Haircut & Beard · CHF 35"],
        ["Kids up to 12", "Patient haircuts for kids up to 12 years, from classic to trendy.", "from 30 min.", "Kids up to 12 · CHF 15"],
      ],
      choose: "Choose service",
      lead: "For comparison: a men's haircut in Zurich usually costs CHF 40 to 80. Here: CHF 20. And you don't need an appointment.",
    },
    proofCards: {
      kicker: "Cut highlights",
      title: "Details you notice immediately.",
      items: [
        ["Sharp contours", "Precise lines give the look instant structure."],
        ["Soft transitions", "Fades and tapers should look natural, even up close."],
        ["Beard & finish", "The final polish makes the difference between okay and fresh."],
      ],
      clearAlt: "Kids' haircut with clean design and sharp contours",
    },
    location: {
      kicker: "Location",
      title: "Dark wood, leather and warm light.",
      body: "Dübendorfstrasse 22, right in Schwamendingen. No frills: a clean, calm shop with leather seating and warm light. Wait a bit, walk out fresh.",
      tags: ["Leather seating", "Warm lighting", "Clean barber stations"],
      caption: "Dübendorfstrasse 22 · Zurich-Schwamendingen",
      alt: "Dark barber room with leather lounge, warm lighting and checkerboard floor inside Galaxy Barbershop Zurich",
    },
    gallery: { kicker: "Gallery", title: "Fresh cuts from the shop.", lead: "Real customers, real results. Tap an image for the full view.", expand: "Enlarge image" },
    reviews: {
      kicker: "Google Reviews",
      title: "4.8 stars. 119 reviews. All public on Google.",
      body: "None of this lives only on our site. Every review can be read on Google. See for yourself what customers say about fades, beards and waiting time.",
      outOf: "out of 5 stars",
      count: "119 Google Reviews",
      read: "Read reviews",
      write: "Write a review",
      selected: "Selected voices",
      googleReview: "Google Review",
      prev: "Previous review",
      next: "Next review",
      choose: "Choose review",
      readMore: "Read more",
      showLess: "Show less",
    },
    contact: {
      kicker: "Contact",
      title: "Drop by without an appointment. Or just message us.",
      body: "Dübendorfstrasse 22, 8051 Zurich. Thursday and Friday until 20:00, doable after work too. Closed on Sunday.",
      labels: ["Phone", "WhatsApp", "Address", "Opening hours"],
      whatsapp: "Message directly",
      hours: [["Mon to Wed", "9:00 to 19:00"], ["Thu to Fri", "9:00 to 20:00"], ["Saturday", "9:00 to 18:00"], ["Sunday", "closed"]],
      top: "Back to top",
    },
    footer: {
      body: "Haircut CHF 20 · Walk-ins, no appointment · Zurich-Schwamendingen",
      chapters: "Chapters",
      visit: "Visit",
    },
    open: {
      sunday: "Closed today · Mon-Wed 9-19 · Thu-Fri 9-20 · Sat 9-18",
      before: "Open today from 9:00",
      active: "Open now until {close}",
      after: "Closed for today · Tomorrow from 9:00",
    },
    navToggleOpen: "Open navigation",
    navToggleClose: "Close navigation",
    whatsappText: "Hello Galaxy Barbershop, I would like to request an appointment.",
  },
  fr: {
    code: "fr",
    title: "Galaxy Barbershop Zurich | Coupe CHF 20, sans rendez-vous",
    description:
      "Barbershop à Zurich-Schwamendingen : coupe CHF 20, barbe CHF 15. Walk-ins sans rendez-vous. 4.8 étoiles sur 119 avis Google. Dübendorfstrasse 22.",
    skip: "Aller au contenu",
    language: "Langue",
    nav: ["Services", "Location", "Galerie", "Avis", "Contact"],
    heroEyebrow: "Galaxy Barbershop · Zurich-Schwamendingen",
    heroTitle: "Coupe CHF 20. Sans rendez-vous.",
    heroCopy:
      "À Zurich, une coupe coûte vite CHF 50 ou plus. Chez Khaled : fades propres, contours nets et 4.8 étoiles sur 119 avis Google. À un prix fixe équitable.",
    cta: {
      whatsapp: "Écrire sur WhatsApp",
      call: "Appeler",
      route: "Itinéraire",
      reviews: "Voir les avis",
      maps: "Google Maps",
    },
    conversion: {
      priceLabel: "Coupe · ailleurs CHF 40–80",
      price: "seulement CHF 20",
      walkLabel: "Walk-in",
      walk: "passe sans rendez-vous",
      action: "WhatsApp maintenant",
      callLabel: "Appeler",
      reviewsLabel: "119 avis Google",
    },
    intro: {
      kicker: "Le shop",
      title: "Khaled coupe. Tu ressors propre.",
      body: "Khaled coupe depuis des années des styles hommes classiques et modernes : transitions nettes, contours précis, conseil honnête. Toujours le même barber, toujours la même qualité. Tu sais exactement ce que tu obtiens.",
    },
    services: {
      kicker: "Prix",
      title: "Quatre services. Prix fixes. Pas de petites lignes.",
      items: [
        ["Coupe & Styling", "Coupes hommes adaptées à ton style, fades et tapers inclus, avec conseil sur la longueur, la forme et la finition.", "dès 30 min.", "Coupe & Styling · CHF 20"],
        ["Barbe & Contours", "Taille de barbe, lignes au rasoir et forme nette pour un look précis.", "dès 20 min.", "Barbe & Contours · CHF 15"],
        ["Coupe & Barbe", "La formule complète : coupe fraîche et barbe soignée en un seul rendez-vous.", "dès 45 min.", "Coupe & Barbe · CHF 35"],
        ["Enfants jusqu'à 12 ans", "Coupes patientes pour les enfants jusqu'à 12 ans, du classique au tendance.", "dès 30 min.", "Enfants jusqu'à 12 ans · CHF 15"],
      ],
      choose: "Choisir un service",
      lead: "Pour comparer : une coupe homme coûte à Zurich en général CHF 40 à 80. Ici : CHF 20. Et tu n'as pas besoin de rendez-vous.",
    },
    proofCards: {
      kicker: "Points forts",
      title: "Des détails visibles immédiatement.",
      items: [
        ["Contours nets", "Des lignes précises structurent instantanément le look."],
        ["Transitions douces", "Les fades et tapers doivent rester naturels, même de près."],
        ["Barbe & finition", "La touche finale fait la différence entre correct et frais."],
      ],
      clearAlt: "Coupe enfant avec design propre et contours nets",
    },
    location: {
      kicker: "Location",
      title: "Bois sombre, cuir et lumière chaude.",
      body: "Dübendorfstrasse 22, en plein Schwamendingen. Rien de tape-à-l'œil : un shop propre et calme avec sièges en cuir et lumière chaude. Une courte attente, et tu ressors frais.",
      tags: ["Sièges en cuir", "Lumière chaude", "Stations barber propres"],
      caption: "Dübendorfstrasse 22 · Zurich-Schwamendingen",
      alt: "Salle de barber sombre avec lounge en cuir, lumière chaude et sol damier chez Galaxy Barbershop Zurich",
    },
    gallery: { kicker: "Galerie", title: "Des coupes fraîches du shop.", lead: "De vrais clients, de vrais résultats. Touche une image pour l'agrandir.", expand: "Agrandir l'image" },
    reviews: {
      kicker: "Avis Google",
      title: "4.8 étoiles. 119 avis. Tous publics sur Google.",
      body: "Rien de tout ça n'existe que sur notre site. Chaque avis est lisible sur Google. Regarde toi-même ce que les clients disent des fades, de la barbe et de l'attente.",
      outOf: "sur 5 étoiles",
      count: "119 avis Google",
      read: "Lire les avis",
      write: "Écrire un avis",
      selected: "Voix sélectionnées",
      googleReview: "Avis Google",
      prev: "Avis précédent",
      next: "Avis suivant",
      choose: "Choisir un avis",
      readMore: "Lire plus",
      showLess: "Réduire",
    },
    contact: {
      kicker: "Contact",
      title: "Passe sans rendez-vous. Ou écris-nous vite.",
      body: "Dübendorfstrasse 22, 8051 Zurich. Jeudi et vendredi jusqu'à 20:00, faisable aussi après le travail. Fermé le dimanche.",
      labels: ["Téléphone", "WhatsApp", "Adresse", "Horaires"],
      whatsapp: "Écrire directement",
      hours: [["Lun à mer", "9:00 à 19:00"], ["Jeu à ven", "9:00 à 20:00"], ["Samedi", "9:00 à 18:00"], ["Dimanche", "fermé"]],
      top: "Retour en haut",
    },
    footer: {
      body: "Coupe CHF 20 · Walk-ins sans rendez-vous · Zurich-Schwamendingen",
      chapters: "Chapitres",
      visit: "Visite",
    },
    open: {
      sunday: "Fermé aujourd'hui · Lun-mer 9-19 · Jeu-ven 9-20 · Sam 9-18",
      before: "Ouvert aujourd'hui dès 9:00",
      active: "Ouvert maintenant jusqu'à {close}",
      after: "Fermé pour aujourd'hui · Demain dès 9:00",
    },
    navToggleOpen: "Ouvrir la navigation",
    navToggleClose: "Fermer la navigation",
    whatsappText: "Bonjour Galaxy Barbershop, je souhaite demander un rendez-vous.",
  },
  it: {
    code: "it",
    title: "Galaxy Barbershop Zurigo | Taglio CHF 20, senza appuntamento",
    description:
      "Barbershop a Zurigo-Schwamendingen: taglio CHF 20, barba CHF 15. Walk-in senza appuntamento. 4.8 stelle da 119 recensioni Google. Dübendorfstrasse 22.",
    skip: "Vai al contenuto",
    language: "Lingua",
    nav: ["Servizi", "Location", "Galleria", "Recensioni", "Contatto"],
    heroEyebrow: "Galaxy Barbershop · Zurigo-Schwamendingen",
    heroTitle: "Taglio CHF 20. Senza appuntamento.",
    heroCopy:
      "A Zurigo un taglio costa facilmente CHF 50 o più. Da Khaled: fade puliti, contorni precisi e 4.8 stelle da 119 recensioni Google. A un prezzo fisso onesto.",
    cta: {
      whatsapp: "Scrivici su WhatsApp",
      call: "Chiama",
      route: "Indicazioni",
      reviews: "Vedi recensioni",
      maps: "Google Maps",
    },
    conversion: {
      priceLabel: "Taglio · altrove CHF 40–80",
      price: "solo CHF 20",
      walkLabel: "Walk-in",
      walk: "passa senza appuntamento",
      action: "WhatsApp ora",
      callLabel: "Chiama",
      reviewsLabel: "119 recensioni Google",
    },
    intro: {
      kicker: "Il shop",
      title: "Khaled taglia. Tu esci in ordine.",
      body: "Khaled taglia da anni stili da uomo classici e moderni: sfumature pulite, contorni precisi, consigli onesti. Sempre lo stesso barber, sempre la stessa qualità. Sai esattamente cosa ottieni.",
    },
    services: {
      kicker: "Prezzi",
      title: "Quattro servizi. Prezzi fissi. Niente clausole nascoste.",
      items: [
        ["Taglio & Styling", "Tagli uomo su misura, fade e taper inclusi, con consulenza su lunghezza, forma e finish.", "da 30 min.", "Taglio & Styling · CHF 20"],
        ["Barba & Contorni", "Rifinitura barba, linee a rasoio e forma curata per un look netto.", "da 20 min.", "Barba & Contorni · CHF 15"],
        ["Taglio & Barba", "Il pacchetto completo: taglio fresco e barba curata in un solo appuntamento.", "da 45 min.", "Taglio & Barba · CHF 35"],
        ["Bambini fino a 12 anni", "Tagli pazienti per bambini fino a 12 anni, dal classico al trendy.", "da 30 min.", "Bambini fino a 12 anni · CHF 15"],
      ],
      choose: "Scegli servizio",
      lead: "Per confronto: un taglio da uomo a Zurigo costa di solito da CHF 40 a 80. Qui: CHF 20. E non ti serve un appuntamento.",
    },
    proofCards: {
      kicker: "Dettagli del taglio",
      title: "Dettagli che si vedono subito.",
      items: [
        ["Contorni netti", "Linee precise danno subito struttura al look."],
        ["Sfumature morbide", "Fades e taper devono sembrare naturali, anche da vicino."],
        ["Barba & finish", "Il tocco finale fa la differenza tra ok e fresco."],
      ],
      clearAlt: "Taglio bambino con design pulito e contorni netti",
    },
    location: {
      kicker: "Location",
      title: "Legno scuro, pelle e luce calda.",
      body: "Dübendorfstrasse 22, in pieno Schwamendingen. Niente fronzoli: un shop pulito e tranquillo con sedute in pelle e luce calda. Una breve attesa, ed esci fresco.",
      tags: ["Sedute in pelle", "Luce calda", "Postazioni barber pulite"],
      caption: "Dübendorfstrasse 22 · Zurigo-Schwamendingen",
      alt: "Sala barber scura con lounge in pelle, luce calda e pavimento a scacchi nel Galaxy Barbershop Zurigo",
    },
    gallery: { kicker: "Galleria", title: "Tagli freschi dal shop.", lead: "Clienti veri, risultati veri. Tocca un'immagine per ingrandirla.", expand: "Ingrandisci immagine" },
    reviews: {
      kicker: "Recensioni Google",
      title: "4.8 stelle. 119 recensioni. Tutte pubbliche su Google.",
      body: "Niente di tutto questo esiste solo sul nostro sito. Ogni recensione è leggibile su Google. Guarda tu stesso cosa dicono i clienti su fade, barba e attesa.",
      outOf: "su 5 stelle",
      count: "119 recensioni Google",
      read: "Leggi recensioni",
      write: "Scrivi una recensione",
      selected: "Voci selezionate",
      googleReview: "Recensione Google",
      prev: "Recensione precedente",
      next: "Recensione successiva",
      choose: "Scegli recensione",
      readMore: "Leggi di più",
      showLess: "Mostra meno",
    },
    contact: {
      kicker: "Contatto",
      title: "Passa senza appuntamento. O scrivici al volo.",
      body: "Dübendorfstrasse 22, 8051 Zurigo. Giovedì e venerdì fino alle 20:00, fattibile anche dopo il lavoro. Domenica chiuso.",
      labels: ["Telefono", "WhatsApp", "Indirizzo", "Orari"],
      whatsapp: "Scrivi direttamente",
      hours: [["Lun a mer", "9:00 alle 19:00"], ["Gio a ven", "9:00 alle 20:00"], ["Sabato", "9:00 alle 18:00"], ["Domenica", "chiuso"]],
      top: "Torna su",
    },
    footer: {
      body: "Taglio CHF 20 · Walk-in senza appuntamento · Zurigo-Schwamendingen",
      chapters: "Capitoli",
      visit: "Visita",
    },
    open: {
      sunday: "Chiuso oggi · Lun-mer 9-19 · Gio-ven 9-20 · Sab 9-18",
      before: "Aperto oggi dalle 9:00",
      active: "Aperto ora fino alle {close}",
      after: "Chiuso per oggi · Domani dalle 9:00",
    },
    navToggleOpen: "Apri navigazione",
    navToggleClose: "Chiudi navigazione",
    whatsappText: "Ciao Galaxy Barbershop, vorrei richiedere un appuntamento.",
  },
  es: {
    code: "es",
    title: "Galaxy Barbershop Zúrich | Corte CHF 20, sin cita",
    description:
      "Barbershop en Zúrich-Schwamendingen: corte CHF 20, barba CHF 15. Walk-ins sin cita. 4.8 estrellas de 119 reseñas de Google. Dübendorfstrasse 22.",
    skip: "Saltar al contenido",
    language: "Idioma",
    nav: ["Servicios", "Location", "Galería", "Reseñas", "Contacto"],
    heroEyebrow: "Galaxy Barbershop · Zúrich-Schwamendingen",
    heroTitle: "Corte CHF 20. Sin cita.",
    heroCopy:
      "En Zúrich un corte cuesta fácilmente CHF 50 o más. Con Khaled: fades limpios, contornos marcados y 4.8 estrellas de 119 reseñas de Google. A un precio fijo justo.",
    cta: {
      whatsapp: "Escríbenos por WhatsApp",
      call: "Llamar",
      route: "Ruta",
      reviews: "Ver reseñas",
      maps: "Google Maps",
    },
    conversion: {
      priceLabel: "Corte · en otros sitios CHF 40–80",
      price: "solo CHF 20",
      walkLabel: "Walk-in",
      walk: "pasa sin cita",
      action: "WhatsApp ahora",
      callLabel: "Llamar",
      reviewsLabel: "119 reseñas Google",
    },
    intro: {
      kicker: "El shop",
      title: "Khaled corta. Tú sales impecable.",
      body: "Khaled corta desde hace años estilos masculinos clásicos y modernos: transiciones limpias, contornos marcados, asesoramiento honesto. Siempre el mismo barbero, siempre la misma calidad. Sabes exactamente lo que recibes.",
    },
    services: {
      kicker: "Precios",
      title: "Cuatro servicios. Precios fijos. Sin letra pequeña.",
      items: [
        ["Corte & Styling", "Cortes masculinos adaptados a tu estilo, fades y tapers incluidos, con asesoría sobre largo, forma y acabado.", "desde 30 min.", "Corte & Styling · CHF 20"],
        ["Barba & Contornos", "Recorte de barba, líneas con navaja y forma cuidada para un look definido.", "desde 20 min.", "Barba & Contornos · CHF 15"],
        ["Corte & Barba", "El paquete completo: corte fresco y barba cuidada en una sola visita.", "desde 45 min.", "Corte & Barba · CHF 35"],
        ["Niños hasta 12 años", "Cortes con paciencia para niños de hasta 12 años, de clásico a moderno.", "desde 30 min.", "Niños hasta 12 años · CHF 15"],
      ],
      choose: "Elegir servicio",
      lead: "Para comparar: un corte masculino en Zúrich suele costar de CHF 40 a 80. Aquí: CHF 20. Y no necesitas cita.",
    },
    proofCards: {
      kicker: "Detalles del corte",
      title: "Detalles que se ven al instante.",
      items: [
        ["Contornos nítidos", "Las líneas precisas dan estructura inmediata al look."],
        ["Transiciones suaves", "Los fades y tapers deben verse naturales, incluso de cerca."],
        ["Barba & acabado", "El toque final marca la diferencia entre correcto y fresco."],
      ],
      clearAlt: "Corte infantil con diseño limpio y contornos nítidos",
    },
    location: {
      kicker: "Location",
      title: "Madera oscura, cuero y luz cálida.",
      body: "Dübendorfstrasse 22, en pleno Schwamendingen. Sin florituras: un shop limpio y tranquilo con asientos de cuero y luz cálida. Una espera corta, y sales fresco.",
      tags: ["Asientos de cuero", "Luz cálida", "Estaciones barber limpias"],
      caption: "Dübendorfstrasse 22 · Zúrich-Schwamendingen",
      alt: "Sala barber oscura con lounge de cuero, luz cálida y suelo ajedrezado en Galaxy Barbershop Zúrich",
    },
    gallery: { kicker: "Galería", title: "Cortes frescos del shop.", lead: "Clientes reales, resultados reales. Toca una imagen para ampliarla.", expand: "Ampliar imagen" },
    reviews: {
      kicker: "Reseñas Google",
      title: "4.8 estrellas. 119 reseñas. Todas públicas en Google.",
      body: "Nada de esto está solo en nuestra web. Cada reseña se puede leer en Google. Mira tú mismo lo que dicen los clientes sobre fades, barba y tiempo de espera.",
      outOf: "de 5 estrellas",
      count: "119 reseñas Google",
      read: "Leer reseñas",
      write: "Escribir reseña",
      selected: "Voces seleccionadas",
      googleReview: "Reseña Google",
      prev: "Reseña anterior",
      next: "Siguiente reseña",
      choose: "Elegir reseña",
      readMore: "Leer más",
      showLess: "Mostrar menos",
    },
    contact: {
      kicker: "Contacto",
      title: "Pasa sin cita. O escríbenos rápido.",
      body: "Dübendorfstrasse 22, 8051 Zúrich. Jueves y viernes hasta las 20:00, también posible después del trabajo. Domingo cerrado.",
      labels: ["Teléfono", "WhatsApp", "Dirección", "Horario"],
      whatsapp: "Escribir directamente",
      hours: [["Lun a mié", "9:00 a 19:00"], ["Jue a vie", "9:00 a 20:00"], ["Sábado", "9:00 a 18:00"], ["Domingo", "cerrado"]],
      top: "Volver arriba",
    },
    footer: {
      body: "Corte CHF 20 · Walk-ins sin cita · Zúrich-Schwamendingen",
      chapters: "Capítulos",
      visit: "Visita",
    },
    open: {
      sunday: "Cerrado hoy · Lun-mié 9-19 · Jue-vie 9-20 · Sáb 9-18",
      before: "Abierto hoy desde las 9:00",
      active: "Abierto ahora hasta las {close}",
      after: "Cerrado por hoy · Mañana desde las 9:00",
    },
    navToggleOpen: "Abrir navegación",
    navToggleClose: "Cerrar navegación",
    whatsappText: "Hola Galaxy Barbershop, me gustaría solicitar una cita.",
  },
};

const getStoredLanguage = () => {
  try {
    return localStorage.getItem("galaxy-language");
  } catch {
    return null;
  }
};

const getInitialLanguage = () => {
  const urlLanguage = new URLSearchParams(window.location.search).get("lang");

  if (urlLanguage && translations[urlLanguage]) {
    storeLanguage(urlLanguage);
    return urlLanguage;
  }

  const storedLanguage = getStoredLanguage();

  if (storedLanguage && translations[storedLanguage]) {
    return storedLanguage;
  }

  return defaultLanguage;
};

const storeLanguage = (language) => {
  try {
    localStorage.setItem("galaxy-language", language);
  } catch {
    // Language choice still works for the current page when storage is unavailable.
  }
};

const setText = (selector, text) => {
  document.querySelectorAll(selector).forEach((element) => {
    element.textContent = text;
  });
};

const setAttr = (selector, attr, value) => {
  document.querySelectorAll(selector).forEach((element) => {
    element.setAttribute(attr, value);
  });
};

const setPlaceholder = (selector, value) => {
  document.querySelectorAll(selector).forEach((element) => {
    if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
      element.placeholder = value;
    }
  });
};

const setWhatsAppLinks = (text) => {
  const href = `https://wa.me/${shopPhone}?text=${encodeURIComponent(text)}`;
  document
    .querySelectorAll(".hero-actions .button.primary, .footer-cta, .mobile-action-bar a:first-child")
    .forEach((link) => {
    if (link instanceof HTMLAnchorElement) {
      link.href = href;
    }
  });
};

const applyLanguage = (language) => {
  const t = translations[language] ?? translations[defaultLanguage];
  currentLanguage = t.code;
  document.documentElement.lang = t.code;
  document.title = t.title;
  setAttr('meta[name="description"]', "content", t.description);
  setAttr('meta[property="og:description"]', "content", t.description);

  if (languageSelect instanceof HTMLSelectElement) {
    languageSelect.value = t.code;
  }

  setText(".skip-link", t.skip);
  setText(".language-control span", t.language);
  setAttr(".language-control", "aria-label", t.language);
  setAttr("[data-nav-toggle]", "aria-label", navToggle?.getAttribute("aria-expanded") === "true" ? t.navToggleClose : t.navToggleOpen);

  ["services", "location", "gallery", "reviews", "contact"].forEach((id, index) => {
    setText(`.site-nav a[href="#${id}"]`, t.nav[index]);
  });

  setText(".hero .eyebrow", t.heroEyebrow);
  setText(".hero h1", t.heroTitle);
  setText(".hero-copy", t.heroCopy);
  setText(".hero-actions .button.primary", t.cta.whatsapp);
  setText(".hero-actions .button.secondary", t.cta.call);
  setText(".hero-actions .button.ghost", t.cta.route);
  setText(".hero-proof-cta", t.cta.reviews);
  setWhatsAppLinks(t.whatsappText);

  setText(".info-strip > a:first-child span", t.conversion.callLabel);
  setText(".info-strip > div:nth-child(2) span", t.conversion.priceLabel);
  setText(".info-strip > div:nth-child(3) strong", t.conversion.walkLabel);
  setText(".info-strip > div:nth-child(3) span", t.conversion.walk);
  setText(".info-strip > a:last-child span", t.conversion.reviewsLabel);

  setText(".services .section-kicker", t.services.kicker);
  setText(".services h2", t.services.title);
  setText(".services .section-lead", t.services.lead);
  t.services.items.forEach(([title, copy, duration], index) => {
    const card = `.service-card:nth-child(${index + 1})`;
    setText(`${card} h3`, title);
    setText(`${card} p`, copy);
    setText(`${card} .service-meta`, duration);
  });

  setText(".gallery-section .section-kicker", t.gallery.kicker);
  setText(".gallery-section h2", t.gallery.title);
  setText(".gallery-section .section-lead", t.gallery.lead);
  setAttr(".proof-card:first-child img", "alt", t.proofCards.clearAlt);
  t.proofCards.items.forEach(([title, copy], index) => {
    const card = `.proof-card:nth-child(${index + 1})`;
    setText(`${card} h3`, title);
    setText(`${card} p`, copy);
  });

  setText(".location-section .section-kicker", t.intro.kicker);
  setText(".location-section h2", t.intro.title);
  setText(".location-intro-text", t.intro.body);
  setText(".location-body-text", t.location.body);
  document.querySelectorAll(".location-details span").forEach((tag, index) => {
    tag.textContent = t.location.tags[index] ?? tag.textContent;
  });
  setText(".location-media figcaption", t.location.caption);
  setAttr(".location-media img", "alt", t.location.alt);

  setAttr(".gallery button", "aria-label", t.gallery.expand);

  setText(".reviews-copy .section-kicker", t.reviews.kicker);
  setText(".reviews h2", t.reviews.title);
  setText(".reviews-copy > p", t.reviews.body);
  setText(".rating-panel span", t.reviews.outOf);
  setText(".rating-panel > p", t.reviews.count);
  setText(".review-actions .button.primary", t.reviews.read);
  setText(".review-actions .button.secondary", t.reviews.write);
  setText(".review-carousel-top > span", t.reviews.selected);
  setText(".map-fallback a", t.cta.route);
  setAttr("[data-review-prev]", "aria-label", t.reviews.prev);
  setAttr("[data-review-next]", "aria-label", t.reviews.next);
  setAttr("[data-review-dots]", "aria-label", t.reviews.choose);
  document.querySelectorAll(".review-card").forEach((card, index) => {
    const review = reviewHighlights[index];
    const quote = card.querySelector(".review-quote");
    const source = card.querySelector(".review-source-text");

    if (review && quote) {
      quote.textContent = getReviewQuote(review, language);
    }

    if (review && source) {
      source.textContent = getReviewSourcePrefix(review, language);
    }
  });
  document.querySelectorAll(".review-read-more").forEach((button) => {
    const card = button.closest(".review-card");
    button.textContent = card?.classList.contains("is-expanded") ? t.reviews.showLess : t.reviews.readMore;
  });

  setText(".contact .section-kicker", t.contact.kicker);
  setText(".contact h2", t.contact.title);
  setText(".contact p", t.contact.body);
  document.querySelectorAll(".contact-list .contact-label").forEach((label, index) => {
    label.textContent = t.contact.labels[index] ?? label.textContent;
  });
  setText('.contact-list a[href^="https://wa.me"] strong', t.contact.whatsapp);
  document.querySelectorAll("[data-hours-list] > div").forEach((row, index) => {
    const entry = t.contact.hours[index];
    if (!entry) {
      return;
    }
    const dt = row.querySelector("dt");
    const dd = row.querySelector("dd");
    if (dt) dt.textContent = entry[0];
    if (dd) dd.textContent = entry[1];
  });
  setText(".footer-brand p", t.footer.body);
  setText(".footer-cta", t.conversion.action);
  setText(".footer-chapters h2", t.footer.chapters);
  setAttr(".footer-chapters", "aria-label", t.footer.chapters);
  setText(".footer-visit h2", t.footer.visit);
  [
    ["services", t.nav[0]],
    ["proof", t.proofCards.kicker],
    ["gallery", t.nav[2]],
    ["reviews", t.nav[3]],
    ["location", t.nav[1]],
    ["contact", t.nav[4]],
  ].forEach(([id, label]) => {
    setText(`.footer-chapters a[href="#${id}"]`, label);
  });
  setText(".footer-visit a:nth-of-type(2)", "WhatsApp");
  setText(".footer-visit a:nth-of-type(3)", t.cta.route);
  setText(".footer-bottom a", t.contact.top);

  setText(".mobile-action-bar a:nth-child(1)", "WhatsApp");
  setText(".mobile-action-bar a:nth-child(2)", t.cta.call);
  setText(".mobile-action-bar a:nth-child(3)", t.cta.route);

  setOpenStatus();
};

currentLanguage = getInitialLanguage();

// Google reviews extracted from google-review-screenshot-extract.md.
const reviewHighlights = [
  {
    author: "Andrei Borcoman",
    time: "a month ago",
    quote:
      "Amazing quality! Very welcoming and friendly staff and amazing services. For the 20 CHF, Khaled was very focused on the details and spent a good 40-minutes on my haircut",
    quotes: {
      de: "Fantastische Qualität! Sehr einladendes und freundliches Team und großartiger Service. Für 20 CHF war Khaled sehr auf die Details fokussiert und hat sich gute 40 Minuten Zeit für meinen Haarschnitt genommen",
      fr: "Qualité incroyable ! Personnel très accueillant et sympathique, services excellents. Pour 20 CHF, Khaled était très attentif aux détails et a passé environ 40 minutes sur ma coupe",
      it: "Qualità incredibile! Staff molto accogliente e gentile, servizi eccellenti. Per 20 CHF, Khaled è stato molto attento ai dettagli e ha dedicato circa 40 minuti al mio taglio",
      es: "¡Calidad increíble! Personal muy acogedor y amable, y servicios excelentes. Por 20 CHF, Khaled estuvo muy atento a los detalles y dedicó unos 40 minutos a mi corte",
    },
    rating: 5,
    source: "Google Review",
  },
  {
    author: "Aaron Guentert",
    time: "2 months ago",
    quote: "Got a very good fade and lineup I trust this barber even for Afro hair 👍",
    quotes: {
      de: "Ich habe einen sehr guten Fade und ein sauberes Lineup bekommen. Ich vertraue diesem Barber sogar bei Afro-Haaren 👍",
      fr: "J'ai eu un très bon fade et une ligne nette. Je fais confiance à ce barber même pour les cheveux afro 👍",
      it: "Ho avuto un fade molto buono e una linea pulita. Mi fido di questo barber anche per i capelli afro 👍",
      es: "Me hicieron un fade muy bueno y un lineup limpio. Confío en este barbero incluso para pelo afro 👍",
    },
    rating: 5,
    source: "Google Review",
  },
  {
    author: "Ed Zeigler",
    time: "3 years ago",
    quote: "Great haircut. Glad I found this local place. They understood English and did a better job than my regular barber at home.",
    quotes: {
      de: "Großartiger Haarschnitt. Ich bin froh, diesen lokalen Ort gefunden zu haben. Sie haben Englisch verstanden und bessere Arbeit geleistet als mein Stammbarber zu Hause.",
      fr: "Super coupe. Je suis content d'avoir trouvé cette adresse locale. Ils comprenaient l'anglais et ont fait mieux que mon barber habituel chez moi.",
      it: "Ottimo taglio. Sono contento di aver trovato questo posto locale. Capivano l'inglese e hanno fatto un lavoro migliore del mio barbiere abituale a casa.",
      es: "Gran corte de pelo. Me alegra haber encontrado este lugar local. Entendían inglés e hicieron un trabajo mejor que mi barbero habitual en casa.",
    },
    rating: 5,
    source: "Google Review",
  },
  {
    author: "Zbyslaw Witta",
    time: "2 years ago",
    quote:
      "Great place, great prices. There are many barbers at the spot, so you can come without appointment. The general skill level is very high. There is only one parking space, so better or come by tram.",
    quotes: {
      de: "Großartiger Ort, großartige Preise. Es gibt viele Barbers vor Ort, deshalb kann man ohne Termin kommen. Das allgemeine Können ist sehr hoch. Es gibt nur einen Parkplatz, also besser mit dem Tram kommen.",
      fr: "Super endroit, super prix. Il y a plusieurs barbers sur place, donc on peut venir sans rendez-vous. Le niveau général est très élevé. Il n'y a qu'une place de parking, donc mieux vaut venir en tram.",
      it: "Ottimo posto, ottimi prezzi. Ci sono molti barber sul posto, quindi si può venire senza appuntamento. Il livello generale è molto alto. C'è solo un parcheggio, quindi meglio venire in tram.",
      es: "Gran sitio, grandes precios. Hay muchos barberos en el local, así que puedes venir sin cita. El nivel general es muy alto. Solo hay una plaza de parking, así que mejor venir en tranvía.",
    },
    rating: 5,
    source: "Google Review",
  },
  {
    author: "Timothy Silas Overturf",
    time: "a year ago",
    quote: "Friendly, reasonably priced, speedy if you ask and good quality",
    quotes: {
      de: "Freundlich, fairer Preis, schnell wenn man fragt und gute Qualität",
      fr: "Sympathique, prix raisonnable, rapide si on le demande et bonne qualité",
      it: "Cordiali, prezzo ragionevole, veloci se lo chiedi e buona qualità",
      es: "Amables, precio razonable, rápidos si lo pides y buena calidad",
    },
    rating: 5,
    source: "Google Review",
  },
  {
    author: "Ibn Adonis",
    time: "2 years ago",
    quote: "Very friendly and welcoming people, on top being very professional",
    quotes: {
      de: "Sehr freundliche und herzliche Menschen, dazu sehr professionell",
      fr: "Des personnes très sympathiques et accueillantes, en plus très professionnelles",
      it: "Persone molto gentili e accoglienti, oltre che molto professionali",
      es: "Personas muy amables y acogedoras, además de muy profesionales",
    },
    rating: 5,
    source: "Google Review",
  },
  {
    author: "Marcel Pereć",
    time: "2 years ago",
    quote: "They know how to cut hair",
    quotes: {
      de: "Sie wissen, wie man Haare schneidet",
      fr: "Ils savent couper les cheveux",
      it: "Sanno come tagliare i capelli",
      es: "Saben cortar el pelo",
    },
    rating: 5,
    source: "Google Review",
  },
  {
    author: "R W",
    time: "6 months ago",
    quote: "Very nice people, I'm always very satisfied and I can only recommend them. That's my long-standing experience.",
    quotes: {
      de: "Sehr nette Leute, ich bin immer sehr zufrieden und kann sie nur empfehlen. Das ist meine langjährige Erfahrung.",
      fr: "Des personnes très gentilles, je suis toujours très satisfait et je ne peux que les recommander. C'est mon expérience depuis longtemps.",
      it: "Persone molto gentili, sono sempre molto soddisfatto e posso solo consigliarle. Questa è la mia esperienza da anni.",
      es: "Personas muy agradables, siempre estoy muy satisfecho y solo puedo recomendarlos. Esa es mi experiencia desde hace años.",
    },
    rating: 5,
    source: "Google Review",
  },
  {
    author: "El Turan",
    time: "6 months ago",
    quote: "A good hairdresser, loyal for years, and I've never had a bad haircut; it's always done exactly as requested.",
    quotes: {
      de: "Ein guter Coiffeur, seit Jahren treu, und ich hatte noch nie einen schlechten Haarschnitt; es wird immer genau so gemacht wie gewünscht.",
      fr: "Un bon coiffeur, fidèle depuis des années, et je n'ai jamais eu une mauvaise coupe ; c'est toujours fait exactement comme demandé.",
      it: "Un buon parrucchiere, fedele da anni, e non ho mai avuto un brutto taglio; viene sempre fatto esattamente come richiesto.",
      es: "Un buen peluquero, fiel desde hace años, y nunca he tenido un mal corte; siempre lo hacen exactamente como lo pido.",
    },
    rating: 5,
    source: "Google Review",
  },
  {
    author: "Zaka Mizeb",
    time: "7 months ago",
    quote: "Very professional, good price. I'll be back again and again.",
    quotes: {
      de: "Sehr professionell, guter Preis. Ich komme immer wieder zurück.",
      fr: "Très professionnel, bon prix. Je reviendrai encore et encore.",
      it: "Molto professionali, buon prezzo. Tornerò ancora e ancora.",
      es: "Muy profesionales, buen precio. Volveré una y otra vez.",
    },
    rating: 5,
    source: "Google Review",
  },
  {
    author: "Gaetano Calcagno",
    time: "2 years ago",
    quote:
      "The place is pleasant and spacious. Great prices and professionalism. You don't need German to make yourself understood; the guy is multilingual and friendly. Reliable and recommended. If my review helps you, leave a 👍",
    quotes: {
      de: "Der Ort ist angenehm und geräumig. Tolle Preise und Professionalität. Man braucht kein Deutsch, um sich verständlich zu machen; der Mann ist mehrsprachig und freundlich. Zuverlässig und empfehlenswert. Wenn meine Bewertung hilft, lass ein 👍 da",
      fr: "L'endroit est agréable et spacieux. Très bons prix et professionnalisme. Pas besoin de parler allemand pour se faire comprendre ; le gars est multilingue et sympathique. Fiable et recommandé. Si mon avis vous aide, laissez un 👍",
      it: "Il posto è piacevole e spazioso. Ottimi prezzi e professionalità. Non serve il tedesco per farsi capire; il ragazzo è multilingue e gentile. Affidabile e consigliato. Se la mia recensione ti aiuta, lascia un 👍",
      es: "El lugar es agradable y espacioso. Buenos precios y profesionalidad. No necesitas alemán para hacerte entender; el chico es multilingüe y amable. Fiable y recomendable. Si mi reseña te ayuda, deja un 👍",
    },
    rating: 5,
    source: "Google Review",
  },
  {
    author: "Justyna Kondracka",
    time: "4 years ago",
    quote:
      "Both my husband and my 3-year-old son go to this hairdresser. The hairdressers are very friendly, professional, and quick. My husband is always happy with his haircut and beard styling.",
    quotes: {
      de: "Sowohl mein Mann als auch mein 3-jähriger Sohn gehen zu diesem Coiffeur. Die Coiffeure sind sehr freundlich, professionell und schnell. Mein Mann ist immer zufrieden mit seinem Haarschnitt und Bartstyling.",
      fr: "Mon mari et mon fils de 3 ans vont tous les deux chez ce coiffeur. Les coiffeurs sont très sympathiques, professionnels et rapides. Mon mari est toujours content de sa coupe et de sa barbe.",
      it: "Sia mio marito sia mio figlio di 3 anni vanno da questo parrucchiere. I parrucchieri sono molto gentili, professionali e veloci. Mio marito è sempre contento del taglio e della barba.",
      es: "Tanto mi marido como mi hijo de 3 años van a esta peluquería. Los peluqueros son muy amables, profesionales y rápidos. Mi marido siempre queda contento con su corte y arreglo de barba.",
    },
    rating: 5,
    source: "Google Review",
  },
  {
    author: "Julius Rupp",
    time: "4 years ago",
    quote:
      "This is my third time coming here, and I'm always amazed at how professionally and cleanly my hair wishes are fulfilled. For me, Galaxy is the best Arabic hair salon in Zurich!",
    quotes: {
      de: "Ich komme zum dritten Mal hierher und bin immer wieder erstaunt, wie professionell und sauber meine Haarwünsche erfüllt werden. Für mich ist Galaxy der beste arabische Friseursalon in Zürich!",
      fr: "C'est la troisième fois que je viens ici et je suis toujours impressionné par le professionnalisme et la propreté avec lesquels mes souhaits capillaires sont réalisés. Pour moi, Galaxy est le meilleur salon arabe de Zurich !",
      it: "È la terza volta che vengo qui e sono sempre stupito da quanto siano professionali e precisi nel realizzare i miei desideri. Per me Galaxy è il miglior salone arabo di Zurigo!",
      es: "Es la tercera vez que vengo aquí y siempre me sorprende lo profesionales y limpios que son al cumplir mis deseos de corte. Para mí, Galaxy es la mejor peluquería árabe de Zúrich.",
    },
    rating: 5,
    source: "Google Review",
  },
  {
    author: "Mohamed Hentabli",
    time: "3 years ago",
    quote:
      "Unbeatable price and service! Perfect for men who want a spontaneous haircut. You can be seen within 5 minutes without an appointment. Your hair will always be cut perfectly to your liking.",
    quotes: {
      de: "Unschlagbarer Preis und Service! Perfekt für Männer, die spontan einen Haarschnitt möchten. Man kommt ohne Termin innerhalb von 5 Minuten dran. Die Haare werden immer perfekt nach Wunsch geschnitten.",
      fr: "Prix et service imbattables ! Parfait pour les hommes qui veulent une coupe spontanée. On peut passer sans rendez-vous et être pris en 5 minutes. Les cheveux sont toujours coupés parfaitement selon vos souhaits.",
      it: "Prezzo e servizio imbattibili! Perfetto per uomini che vogliono un taglio spontaneo. Si può passare senza appuntamento ed essere serviti in 5 minuti. I capelli vengono sempre tagliati perfettamente secondo i desideri.",
      es: "¡Precio y servicio imbatibles! Perfecto para hombres que quieren un corte espontáneo. Puedes pasar sin cita y te atienden en 5 minutos. Siempre te cortan el pelo perfectamente a tu gusto.",
    },
    rating: 5,
    source: "Google Review",
  },
];

const reviewTimeTranslations = {
  "a month ago": {
    de: "vor 1 Monat",
    en: "a month ago",
    fr: "il y a 1 mois",
    it: "1 mese fa",
    es: "hace 1 mes",
  },
  "2 months ago": {
    de: "vor 2 Monaten",
    en: "2 months ago",
    fr: "il y a 2 mois",
    it: "2 mesi fa",
    es: "hace 2 meses",
  },
  "6 months ago": {
    de: "vor 6 Monaten",
    en: "6 months ago",
    fr: "il y a 6 mois",
    it: "6 mesi fa",
    es: "hace 6 meses",
  },
  "7 months ago": {
    de: "vor 7 Monaten",
    en: "7 months ago",
    fr: "il y a 7 mois",
    it: "7 mesi fa",
    es: "hace 7 meses",
  },
  "a year ago": {
    de: "vor 1 Jahr",
    en: "a year ago",
    fr: "il y a 1 an",
    it: "1 anno fa",
    es: "hace 1 año",
  },
  "2 years ago": {
    de: "vor 2 Jahren",
    en: "2 years ago",
    fr: "il y a 2 ans",
    it: "2 anni fa",
    es: "hace 2 años",
  },
  "3 years ago": {
    de: "vor 3 Jahren",
    en: "3 years ago",
    fr: "il y a 3 ans",
    it: "3 anni fa",
    es: "hace 3 años",
  },
  "4 years ago": {
    de: "vor 4 Jahren",
    en: "4 years ago",
    fr: "il y a 4 ans",
    it: "4 anni fa",
    es: "hace 4 años",
  },
};

const getReviewQuote = (review, language = currentLanguage) => review.quotes?.[language] ?? review.quote;
const getReviewTime = (review, language = currentLanguage) => reviewTimeTranslations[review.time]?.[language] ?? review.time;
const getReviewSourcePrefix = (review, language = currentLanguage) => {
  const time = getReviewTime(review, language);
  const joiner = language === "de" ? " auf " : language === "fr" ? " sur " : language === "it" ? " su " : language === "es" ? " en " : " on ";
  return time ? `${time}${joiner}` : `${review.source} · `;
};

const setHeaderState = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 18);
};

const setMobileActionState = () => {
  if (!mobileActionBar || !hero) {
    return;
  }

  const heroBottom = hero.getBoundingClientRect().bottom + window.scrollY;
  document.body.classList.toggle("mobile-actions-visible", window.scrollY > heroBottom - window.innerHeight * 0.28);
};

setHeaderState();
setMobileActionState();
window.addEventListener("scroll", setHeaderState, { passive: true });
window.addEventListener("scroll", setMobileActionState, { passive: true });
window.addEventListener("resize", setMobileActionState);

const revealSection = (target) => {
  const revealRoot = target.closest(".reveal") ?? target;
  revealRoot.classList.add("is-visible");
  revealRoot.querySelectorAll(".reveal").forEach((item) => item.classList.add("is-visible"));
};

const scrollToSection = (target, options = {}) => {
  revealSection(target);

  const scrollAnchor = target.matches(".section")
    ? (target.querySelector(".section-heading, .location-copy, .reviews-copy, .contact > :first-child") ?? target)
    : target;
  const headerOffset = (header?.offsetHeight ?? 0) + 16;
  const targetTop = scrollAnchor.getBoundingClientRect().top + window.scrollY - headerOffset;
  const maxScrollTop = Math.max(document.documentElement.scrollHeight - window.innerHeight, 0);
  const nextScrollTop = Math.min(Math.max(targetTop, 0), maxScrollTop);

  window.scrollTo({
    top: nextScrollTop,
    behavior: options.behavior ?? (window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"),
  });

  if (options.updateHash && target.id) {
    window.history.pushState(null, "", `#${target.id}`);
  }
};

const getHashTarget = () => {
  const hash = window.location.hash ? window.location.hash.slice(1) : initialHash;

  if (!hash) {
    return null;
  }

  try {
    return document.getElementById(decodeURIComponent(hash));
  } catch {
    return null;
  }
};

if (revealItems.length > 0) {
  const revealInitialViewport = () => {
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

    revealItems.forEach((item) => {
      const rect = item.getBoundingClientRect();

      if (rect.top < viewportHeight && rect.bottom > 0) {
        item.classList.add("is-visible");
      }
    });
  };

  const revealDeepLinkedSection = () => {
    const target = getHashTarget();

    if (target) {
      scrollToSection(target, { behavior: "auto", updateHash: Boolean(initialHash) && !window.location.hash });
    }
  };

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.16 },
  );

  revealItems.forEach((item) => revealObserver.observe(item));
  revealInitialViewport();
  const initialHashTarget = getHashTarget();
  if (initialHashTarget) {
    revealSection(initialHashTarget);
  }
  window.addEventListener("hashchange", () => window.requestAnimationFrame(revealDeepLinkedSection));
  window.requestAnimationFrame(revealDeepLinkedSection);
  window.setTimeout(revealDeepLinkedSection, 180);
  window.addEventListener("load", () => {
    window.setTimeout(revealDeepLinkedSection, 120);
    window.setTimeout(revealDeepLinkedSection, 520);
  });
}

navToggle?.addEventListener("click", () => {
  const t = translations[currentLanguage] ?? translations[defaultLanguage];
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!isOpen));
  navToggle.setAttribute("aria-label", isOpen ? t.navToggleOpen : t.navToggleClose);
  nav?.classList.toggle("is-open", !isOpen);
  header?.classList.toggle("is-open", !isOpen);
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    const t = translations[currentLanguage] ?? translations[defaultLanguage];
    navToggle?.setAttribute("aria-expanded", "false");
    navToggle?.setAttribute("aria-label", t.navToggleOpen);
    nav.classList.remove("is-open");
    header?.classList.remove("is-open");
  }
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");

    if (!targetId || targetId === "#") {
      return;
    }

    let target;
    try {
      target = document.querySelector(targetId);
    } catch {
      target = null;
    }

    if (!target) {
      return;
    }

    event.preventDefault();
    scrollToSection(target, { updateHash: true });
  });
});

gallery?.addEventListener("click", (event) => {
  const trigger = event.target.closest("button[data-full]");

  if (!trigger || !lightbox || !lightboxImage) {
    return;
  }

  const image = trigger.querySelector("img");
  lightboxImage.src = trigger.dataset.full;
  lightboxImage.alt = image?.alt ?? "";
  document.body.classList.add("lock-scroll");
  lightbox.showModal();
});

const hideLightbox = () => {
  lightbox?.close();
  document.body.classList.remove("lock-scroll");
  if (lightboxImage) {
    lightboxImage.src = "";
  }
};

closeLightbox?.addEventListener("click", hideLightbox);

lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    hideLightbox();
  }
});

lightbox?.addEventListener("close", () => {
  document.body.classList.remove("lock-scroll");
});

if (reviewCarousel && reviewTrack && reviewDots && reviewHighlights.length > 0) {
  let currentReview = 0;
  let autoAdvanceId;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const createGoogleWordmark = () => {
    const wordmark = document.createElement("span");
    wordmark.className = "google-wordmark";
    ["G", "o", "o", "g", "l", "e"].forEach((letter) => {
      const span = document.createElement("span");
      span.textContent = letter;
      wordmark.append(span);
    });
    return wordmark;
  };

  const renderStars = (rating) => {
    const safeRating = Math.max(0, Math.min(5, Number(rating) || 0));
    return "★★★★★".slice(0, safeRating) + "☆☆☆☆☆".slice(0, 5 - safeRating);
  };

  reviewHighlights.forEach((review, index) => {
    const t = translations[currentLanguage] ?? translations[defaultLanguage];
    const card = document.createElement("article");
    card.className = "review-card google-review-card";
    card.setAttribute("aria-label", `Bewertung ${index + 1} von ${reviewHighlights.length}`);

    const headerRow = document.createElement("div");
    headerRow.className = "review-google-header";

    const avatar = document.createElement("div");
    avatar.className = "review-avatar";
    avatar.textContent = "G";

    const identity = document.createElement("div");
    identity.className = "review-identity";

    const authorLine = document.createElement("div");
    authorLine.className = "review-author-line";

    const author = document.createElement("strong");
    author.textContent = review.author || t.reviews.googleReview;
    authorLine.append(author);

    const sourceLine = document.createElement("div");
    sourceLine.className = "review-source-line";
    const sourceText = document.createElement("span");
    sourceText.className = "review-source-text";
    sourceText.textContent = getReviewSourcePrefix(review);
    sourceLine.append(sourceText, createGoogleWordmark());
    identity.append(authorLine, sourceLine);
    headerRow.append(avatar, identity);

    const starLine = document.createElement("div");
    starLine.className = "review-stars";
    starLine.textContent = renderStars(review.rating);
    starLine.setAttribute("aria-label", `${review.rating} / 5`);

    const quoteWrap = document.createElement("div");
    quoteWrap.className = "review-quote-wrap";

    const quote = document.createElement("p");
    quote.className = "review-quote";
    quote.textContent = getReviewQuote(review);

    const readMore = document.createElement("button");
    readMore.type = "button";
    readMore.className = "review-read-more";
    readMore.textContent = t.reviews.readMore;
    readMore.addEventListener("click", () => {
      const isExpanded = card.classList.toggle("is-expanded");
      readMore.textContent = isExpanded ? t.reviews.showLess : t.reviews.readMore;
    });
    quoteWrap.append(quote);
    if ([review.quote, ...Object.values(review.quotes ?? {})].some((text) => text.length > 150)) {
      quoteWrap.append(readMore);
    }
    card.append(headerRow, starLine, quoteWrap);

    reviewTrack.append(card);

    const dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("aria-label", `Bewertung ${index + 1} anzeigen`);
    dot.addEventListener("click", () => showReview(index, { wrap: false }));
    reviewDots.append(dot);
  });

  const updateDots = () => {
    reviewDots.querySelectorAll("button").forEach((dot, index) => {
      dot.classList.toggle("is-active", index === currentReview);
    });
  };

  const getReviewLayout = () => {
    const firstCard = reviewTrack.querySelector(".review-card");
    const trackStyles = window.getComputedStyle(reviewTrack);
    const gap = Number.parseFloat(trackStyles.columnGap || trackStyles.gap || "0") || 0;
    const cardWidth = firstCard?.getBoundingClientRect().width ?? reviewTrack.getBoundingClientRect().width;
    const wrapWidth = reviewTrack.parentElement?.getBoundingClientRect().width ?? cardWidth;
    const visibleCount = Math.max(1, Math.floor((wrapWidth + gap) / (cardWidth + gap)));
    const maxIndex = Math.max(0, reviewHighlights.length - visibleCount);

    return { cardWidth, gap, maxIndex };
  };

  const showReview = (index, options = {}) => {
    const { cardWidth, gap, maxIndex } = getReviewLayout();
    const shouldWrap = options.wrap ?? true;

    if (shouldWrap && index > maxIndex) {
      currentReview = 0;
    } else if (shouldWrap && index < 0) {
      currentReview = maxIndex;
    } else {
      currentReview = Math.min(Math.max(index, 0), maxIndex);
    }

    reviewTrack.style.transform = `translateX(-${currentReview * (cardWidth + gap)}px)`;
    updateDots();
  };

  const stopAutoAdvance = () => {
    window.clearInterval(autoAdvanceId);
  };

  const startAutoAdvance = () => {
    if (!prefersReducedMotion) {
      window.clearInterval(autoAdvanceId);
      autoAdvanceId = window.setInterval(() => showReview(currentReview + 1), 6200);
    }
  };

  reviewPrev?.addEventListener("click", () => {
    stopAutoAdvance();
    showReview(currentReview - 1);
    startAutoAdvance();
  });

  reviewNext?.addEventListener("click", () => {
    stopAutoAdvance();
    showReview(currentReview + 1);
    startAutoAdvance();
  });

  reviewCarousel.addEventListener("mouseenter", stopAutoAdvance);
  reviewCarousel.addEventListener("mouseleave", startAutoAdvance);
  reviewCarousel.addEventListener("focusin", stopAutoAdvance);
  reviewCarousel.addEventListener("focusout", startAutoAdvance);

  showReview(0);
  window.addEventListener("resize", () => showReview(currentReview), { passive: true });
  startAutoAdvance();
}

const getOpeningWindow = (date) => {
  const open = new Date(date);
  open.setHours(10, 0, 0, 0);

  const close = new Date(date);
  close.setHours(19, 0, 0, 0);

  return { open, close };
};

const setOpenStatus = () => {
  if (!openStatus) {
    return;
  }

  const t = translations[currentLanguage] ?? translations[defaultLanguage];
  const now = new Date();
  const day = now.getDay();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const openingMinutes = 9 * 60;
  const closingHour = day === 4 || day === 5 ? 20 : day === 6 ? 18 : 19;
  const closingMinutes = closingHour * 60;

  if (day === 0) {
    openStatus.textContent = t.open.sunday;
    return;
  }

  if (currentMinutes < openingMinutes) {
    openStatus.textContent = t.open.before;
    return;
  }

  if (currentMinutes < closingMinutes) {
    openStatus.textContent = t.open.active.replace("{close}", `${closingHour}:00`);
    return;
  }

  openStatus.textContent = t.open.after;
};

window.setInterval(setOpenStatus, 60_000);

applyLanguage(currentLanguage);
languageSelect?.addEventListener("change", (event) => {
  if (!(event.target instanceof HTMLSelectElement)) {
    return;
  }

  storeLanguage(event.target.value);
  applyLanguage(event.target.value);
});


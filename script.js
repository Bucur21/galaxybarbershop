const header = document.querySelector("[data-header]");
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
const bookingForm = document.querySelector("[data-booking-form]");
const bookingStatus = document.querySelector("[data-booking-status]");
const calendarDownload = document.querySelector("[data-calendar-download]");
const googleCalendarLink = document.querySelector("[data-google-calendar]");
const mailRequest = document.querySelector("[data-mail-request]");
const openStatus = document.querySelector("[data-open-status]");
const languageSelect = document.querySelector("[data-language-select]");

if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

const initialHash = document.documentElement.dataset.initialHash ?? "";

document.documentElement.classList.toggle("reveal-enabled", !(window.location.hash || initialHash));

const shopPhone = "41766820255";
const servicePrice = "CHF 20";
const shopEmail = "";
const barberEmails = {
  Khaled: "",
  Abdul: "",
  Said: "",
};

const defaultLanguage = "de";
let currentLanguage = defaultLanguage;

const translations = {
  de: {
    code: "de",
    title: "Galaxy Barbershop Zürich | Fades, Bart & moderne Haarschnitte",
    description:
      "Galaxy Barbershop in Zürich-Schwamendingen. Fades, Bartpflege, moderne Herrenhaarschnitte und Kinderhaarschnitte. Dübendorfstrasse 22, 8051 Zürich.",
    skip: "Zum Inhalt springen",
    language: "Sprache",
    nav: ["Services", "Location", "Team", "Galerie", "Reviews", "Termin", "Kontakt"],
    heroCopy:
      "Frische Fades, saubere Bartlinien und Walk-ins jederzeit in Zürich-Schwamendingen. Khaled, Abdul und Said sorgen dafür, dass du sauber rausgehst.",
    cta: {
      whatsapp: "Termin per WhatsApp",
      call: "Anrufen",
      booking: "Termin vorbereiten",
      route: "Route",
      reviews: "Bewertungen ansehen",
      maps: "Google Maps",
    },
    proof: [
      ["Walk-ins", "Immer während der Öffnungszeiten"],
      ["4.8 Google Rating", "119 öffentliche Reviews"],
      ["Dübendorfstrasse 22", "Direkt in Zürich-Schwamendingen"],
    ],
    conversion: {
      priceLabel: "Alle Cuts",
      price: "CHF 20",
      walkLabel: "Walk-ins",
      walk: "Immer willkommen",
      action: "Jetzt per WhatsApp",
    },
    intro: {
      kicker: "Dein lokaler Barber in Zürich",
      title: "Ein sauberer Cut macht den Unterschied, bevor du ein Wort sagst.",
      body: "Galaxy verbindet klassische Barber-Handarbeit mit modernen Styles: klare Übergänge, scharfe Konturen, ruhige Beratung und ein Ergebnis, das auch nach ein paar Tagen noch sitzt.",
    },
    services: {
      kicker: "Services",
      title: "Für Alltag, Anlass und frischen Neustart.",
      items: [
        ["Haircut & Styling", "Typgerechte Herrenhaarschnitte, Beratung zu Länge, Form und Finish.", "ab 30 Min.", "Haircut & Styling · CHF 20"],
        ["Skin Fade & Taper", "Weiche Übergänge, saubere Seiten und präzise Arbeit an den Konturen.", "ab 45 Min.", "Skin Fade & Taper · CHF 20"],
        ["Bart & Konturen", "Beard trim, Rasur-Linien und gepflegte Form für einen klaren Look.", "ab 30 Min.", "Bart & Konturen · CHF 20"],
        ["Kids & Teens", "Geduldige Cuts für Kinder und Jugendliche, von klassisch bis trendig.", "ab 30 Min.", "Kids & Teens · CHF 20"],
      ],
      choose: "Service wählen",
      lead: "Alle Services kosten CHF 20. Walk-ins sind während der Öffnungszeiten willkommen.",
    },
    team: {
      kicker: "Team",
      title: "Drei Barbers, ein Anspruch: sauber rausgehen.",
      bios: [
        ["Khaled", "Ruhige Beratung, präzise Linien und Erfahrung mit klassischen sowie modernen Herrenstyles.", ["Klassische Cuts", "Saubere Linien", "Beratung"]],
        ["Abdul", "Stark bei Fades, Übergängen und Cuts, die im Alltag unkompliziert sitzen.", ["Skin Fades", "Taper", "Moderne Styles"]],
        ["Said", "Saubere Konturen, Bartpflege und ein Blick für Details, die den Look komplett machen.", ["Bart", "Konturen", "Detailarbeit"]],
      ],
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
      body: "Der Shop fühlt sich ruhig und hochwertig an: dunkle Wände, Ledersitze, Spiegel und saubere Stationen geben dem Cut den richtigen Rahmen.",
      tags: ["Ledersitze", "warmes Licht", "saubere Barber-Stationen"],
      caption: "Dübendorfstrasse 22 · Zürich-Schwamendingen",
      alt: "Dunkler Barberraum mit Lederlounge, warmem Licht und Checkerboard-Boden im Galaxy Barbershop Zürich",
    },
    gallery: {
      kicker: "Galerie",
      title: "Echte Arbeit aus dem Shop.",
      expand: "Bild vergrößern",
    },
    reviews: {
      kicker: "Google Reviews",
      title: "Vertrauen, bevor der erste Schnitt beginnt.",
      body: "Ausgewählte öffentliche Stimmen zeigen schnell, was Kunden schätzen. Wer mehr lesen oder selbst bewerten möchte, kommt direkt zur offiziellen Google-Seite.",
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
    booking: {
      kicker: "Termin",
      title: "Reserviere deinen nächsten Cut.",
      body: "Füll kurz die wichtigsten Details aus und sende die Anfrage direkt per WhatsApp. Kalenderdateien sind danach nur ein optionaler Bonus für dich.",
      ready: "Antwort meist während der Öffnungszeiten.",
      labels: ["Name", "E-Mail", "Telefon", "Barber", "Service", "Datum", "Zeit", "Dauer", "Wünsche"],
      placeholders: ["Vorname Nachname", "name@email.com", "+41 ...", "Fade, Bart, Kinderhaarschnitt, bevorzugter Stil ..."],
      chooseBarber: "Barber wählen",
      chooseTime: "Zeit wählen",
      durations: ["30 Minuten", "45 Minuten", "60 Minuten"],
      actions: ["WhatsApp vorbereiten", "WhatsApp senden", "Kalenderdatei", "Google Calendar"],
      privacy:
        "Deine Angaben werden nur in der Kalenderdatei und in der vorbereiteten Anfrage verwendet. Es wird nichts automatisch an externe Server gesendet.",
      errors: {
        invalid: "Bitte wähle ein gültiges Datum und eine gültige Zeit.",
        sunday: "Bitte wähle einen Termin von Montag bis Samstag.",
        hours: "Bitte wähle eine Zeit, bei der der Termin vollständig zwischen 10:00 und 19:00 liegt.",
      },
      success:
        "Bereit: Sende jetzt die WhatsApp-Anfrage an den Shop. Kalenderdatei und Google Calendar sind optional.",
    },
    contact: {
      kicker: "Kontakt",
      title: "Komm vorbei oder ruf kurz an.",
      body: "Galaxy Barbershop liegt an der Dübendorfstrasse 22 in 8051 Zürich. Walk-ins sind während der Öffnungszeiten immer willkommen.",
      labels: ["Telefon", "WhatsApp", "Adresse", "Öffnungszeiten"],
      whatsapp: "Direkt schreiben",
      hours: "Mo-Sa 10:00-19:00 · So geschlossen",
      top: "Nach oben",
    },
    footer: {
      body: "Premium Fades, saubere Konturen und Walk-ins in Zürich-Schwamendingen.",
      chapters: "Kapitel",
      visit: "Besuch",
    },
    open: {
      sunday: "Heute geschlossen · Mo-Sa 10:00-19:00",
      before: "Heute ab 10:00 geöffnet",
      active: "Jetzt offen bis 19:00",
      after: "Heute geschlossen · Morgen ab 10:00",
    },
    message: {
      intro: "Hallo Galaxy Barbershop, ich möchte einen Termin per WhatsApp anfragen:",
      name: "Name",
      phone: "Telefon",
      email: "E-Mail",
      barber: "Barber",
      service: "Service",
      price: "Preis",
      dateTime: "Datum/Zeit",
      duration: "Dauer",
      notes: "Wünsche",
      requestSubject: "Termin Anfrage",
    },
    navToggleOpen: "Navigation öffnen",
    navToggleClose: "Navigation schließen",
    whatsappText: "Hallo Galaxy Barbershop, ich möchte einen Termin anfragen.",
  },
  en: {
    code: "en",
    title: "Galaxy Barbershop Zurich | Fades, Beard & Modern Cuts",
    description:
      "Galaxy Barbershop in Zurich-Schwamendingen. Fades, beard care, modern men's haircuts and kids' cuts. Dübendorfstrasse 22, 8051 Zurich.",
    skip: "Skip to content",
    language: "Language",
    nav: ["Services", "Location", "Team", "Gallery", "Reviews", "Booking", "Contact"],
    heroCopy:
      "Fresh fades, sharp beard lines and walk-ins anytime in Zurich-Schwamendingen. Khaled, Abdul and Said make sure you leave looking clean.",
    cta: {
      whatsapp: "Book via WhatsApp",
      call: "Call",
      booking: "Prepare booking",
      route: "Directions",
      reviews: "See reviews",
      maps: "Google Maps",
    },
    proof: [
      ["Walk-ins", "Always during opening hours"],
      ["4.8 Google rating", "119 public reviews"],
      ["Dübendorfstrasse 22", "Right in Zurich-Schwamendingen"],
    ],
    conversion: {
      priceLabel: "All cuts",
      price: "CHF 20",
      walkLabel: "Walk-ins",
      walk: "Always welcome",
      action: "WhatsApp now",
    },
    intro: {
      kicker: "Your local barber in Zurich",
      title: "A clean cut speaks before you say a word.",
      body: "Galaxy blends classic barber craft with modern styles: clean transitions, sharp contours, calm advice and a result that still sits right days later.",
    },
    services: {
      kicker: "Services",
      title: "For everyday life, occasions and a fresh reset.",
      items: [
        ["Haircut & Styling", "Men's cuts tailored to your type, with advice on length, shape and finish.", "from 30 min.", "Haircut & Styling · CHF 20"],
        ["Skin Fade & Taper", "Soft transitions, clean sides and precise contour work.", "from 45 min.", "Skin Fade & Taper · CHF 20"],
        ["Beard & Contours", "Beard trim, razor lines and a clean shape for a sharp look.", "from 30 min.", "Beard & Contours · CHF 20"],
        ["Kids & Teens", "Patient cuts for kids and teens, from classic to trendy.", "from 30 min.", "Kids & Teens · CHF 20"],
      ],
      choose: "Choose service",
      lead: "All services cost CHF 20. Walk-ins are welcome during opening hours.",
    },
    team: {
      kicker: "Team",
      title: "Three barbers, one standard: leave clean.",
      bios: [
        ["Khaled", "Calm consultation, precise lines and experience with classic and modern men's styles.", ["Classic cuts", "Clean lines", "Advice"]],
        ["Abdul", "Strong with fades, transitions and cuts that are easy to wear every day.", ["Skin fades", "Taper", "Modern styles"]],
        ["Said", "Clean contours, beard care and an eye for details that complete the look.", ["Beard", "Contours", "Detail work"]],
      ],
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
      body: "The shop feels calm and premium: dark walls, leather seating, mirrors and clean stations give every cut the right setting.",
      tags: ["Leather seating", "Warm lighting", "Clean barber stations"],
      caption: "Dübendorfstrasse 22 · Zurich-Schwamendingen",
      alt: "Dark barber room with leather lounge, warm lighting and checkerboard floor inside Galaxy Barbershop Zurich",
    },
    gallery: { kicker: "Gallery", title: "Real work from the shop.", expand: "Enlarge image" },
    reviews: {
      kicker: "Google Reviews",
      title: "Trust before the first cut.",
      body: "Selected public voices quickly show what customers value. Anyone who wants to read more or leave a review goes straight to the official Google page.",
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
    booking: {
      kicker: "Booking",
      title: "Reserve your next cut.",
      body: "Add the key details and send the request directly via WhatsApp. Calendar files are only an optional bonus afterwards.",
      ready: "Replies usually come during opening hours.",
      labels: ["Name", "Email", "Phone", "Barber", "Service", "Date", "Time", "Duration", "Requests"],
      placeholders: ["First name Last name", "name@email.com", "+41 ...", "Fade, beard, kids' cut, preferred style ..."],
      chooseBarber: "Choose barber",
      chooseTime: "Choose time",
      durations: ["30 minutes", "45 minutes", "60 minutes"],
      actions: ["Prepare WhatsApp", "Send WhatsApp", "Calendar file", "Google Calendar"],
      privacy: "Your details are only used in the calendar file and prepared request. Nothing is sent automatically to external servers.",
      errors: {
        invalid: "Please choose a valid date and time.",
        sunday: "Please choose an appointment from Monday to Saturday.",
        hours: "Please choose a time where the full appointment fits between 10:00 and 19:00.",
      },
      success: "Ready: send the WhatsApp request to the shop now. Calendar file and Google Calendar are optional.",
    },
    contact: {
      kicker: "Contact",
      title: "Come by or call quickly.",
      body: "Galaxy Barbershop is located at Dübendorfstrasse 22 in 8051 Zurich. Walk-ins are always welcome during opening hours.",
      labels: ["Phone", "WhatsApp", "Address", "Opening hours"],
      whatsapp: "Message directly",
      hours: "Mon-Sat 10:00-19:00 · Sun closed",
      top: "Back to top",
    },
    footer: {
      body: "Premium fades, clean contours and walk-ins in Zurich-Schwamendingen.",
      chapters: "Chapters",
      visit: "Visit",
    },
    open: {
      sunday: "Closed today · Mon-Sat 10:00-19:00",
      before: "Open today from 10:00",
      active: "Open now until 19:00",
      after: "Closed today · Tomorrow from 10:00",
    },
    message: {
      intro: "Hello Galaxy Barbershop, I would like to request an appointment via WhatsApp:",
      name: "Name",
      phone: "Phone",
      email: "Email",
      barber: "Barber",
      service: "Service",
      price: "Price",
      dateTime: "Date/time",
      duration: "Duration",
      notes: "Requests",
      requestSubject: "Appointment request",
    },
    navToggleOpen: "Open navigation",
    navToggleClose: "Close navigation",
    whatsappText: "Hello Galaxy Barbershop, I would like to request an appointment.",
  },
  fr: {
    code: "fr",
    title: "Galaxy Barbershop Zurich | Fades, barbe et coupes modernes",
    description:
      "Galaxy Barbershop à Zurich-Schwamendingen. Fades, soin de la barbe, coupes modernes pour hommes et enfants. Dübendorfstrasse 22, 8051 Zurich.",
    skip: "Aller au contenu",
    language: "Langue",
    nav: ["Services", "Location", "Équipe", "Galerie", "Avis", "Rendez-vous", "Contact"],
    heroCopy:
      "Fades frais, contours de barbe nets et walk-ins à tout moment à Zurich-Schwamendingen. Khaled, Abdul et Said te font sortir avec un look propre.",
    cta: {
      whatsapp: "Réserver par WhatsApp",
      call: "Appeler",
      booking: "Préparer le rendez-vous",
      route: "Itinéraire",
      reviews: "Voir les avis",
      maps: "Google Maps",
    },
    proof: [
      ["Walk-ins", "Toujours pendant les heures d'ouverture"],
      ["Note Google 4.8", "119 avis publics"],
      ["Dübendorfstrasse 22", "Au cœur de Zurich-Schwamendingen"],
    ],
    conversion: {
      priceLabel: "Toutes les coupes",
      price: "CHF 20",
      walkLabel: "Walk-ins",
      walk: "Toujours bienvenus",
      action: "WhatsApp maintenant",
    },
    intro: {
      kicker: "Ton barber local à Zurich",
      title: "Une coupe propre parle avant même que tu dises un mot.",
      body: "Galaxy associe le savoir-faire barber classique à des styles modernes : transitions nettes, contours précis, conseil calme et un résultat qui reste bien en place après quelques jours.",
    },
    services: {
      kicker: "Services",
      title: "Pour le quotidien, les occasions et un nouveau départ.",
      items: [
        ["Haircut & Styling", "Coupes hommes adaptées à ton style, avec conseil sur la longueur, la forme et la finition.", "dès 30 min.", "Haircut & Styling · CHF 20"],
        ["Skin Fade & Taper", "Transitions douces, côtés propres et contours précis.", "dès 45 min.", "Skin Fade & Taper · CHF 20"],
        ["Barbe & Contours", "Taille de barbe, lignes au rasoir et forme nette pour un look précis.", "dès 30 min.", "Barbe & Contours · CHF 20"],
        ["Kids & Teens", "Coupes patientes pour enfants et ados, du classique au tendance.", "dès 30 min.", "Kids & Teens · CHF 20"],
      ],
      choose: "Choisir un service",
      lead: "Tous les services coûtent CHF 20. Les walk-ins sont bienvenus pendant les heures d'ouverture.",
    },
    team: {
      kicker: "Équipe",
      title: "Trois barbers, une exigence : sortir propre.",
      bios: [
        ["Khaled", "Conseil calme, lignes précises et expérience avec les styles hommes classiques et modernes.", ["Coupes classiques", "Lignes nettes", "Conseil"]],
        ["Abdul", "Très fort en fades, transitions et coupes faciles à porter au quotidien.", ["Skin fades", "Taper", "Styles modernes"]],
        ["Said", "Contours nets, soin de la barbe et sens du détail qui complète le look.", ["Barbe", "Contours", "Détails"]],
      ],
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
      body: "Le shop offre une ambiance calme et premium : murs sombres, sièges en cuir, miroirs et stations propres donnent le bon cadre à chaque coupe.",
      tags: ["Sièges en cuir", "Lumière chaude", "Stations barber propres"],
      caption: "Dübendorfstrasse 22 · Zurich-Schwamendingen",
      alt: "Salle de barber sombre avec lounge en cuir, lumière chaude et sol damier chez Galaxy Barbershop Zurich",
    },
    gallery: { kicker: "Galerie", title: "Du vrai travail réalisé au shop.", expand: "Agrandir l'image" },
    reviews: {
      kicker: "Avis Google",
      title: "La confiance avant le premier coup de tondeuse.",
      body: "Des voix publiques sélectionnées montrent vite ce que les clients apprécient. Pour lire plus ou laisser un avis, tu arrives directement sur la page Google officielle.",
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
    booking: {
      kicker: "Rendez-vous",
      title: "Réserve ta prochaine coupe.",
      body: "Ajoute les détails importants et envoie la demande directement par WhatsApp. Les fichiers calendrier restent seulement un bonus optionnel.",
      ready: "Réponse généralement pendant les heures d'ouverture.",
      labels: ["Nom", "E-mail", "Téléphone", "Barber", "Service", "Date", "Heure", "Durée", "Souhaits"],
      placeholders: ["Prénom Nom", "nom@email.com", "+41 ...", "Fade, barbe, coupe enfant, style préféré ..."],
      chooseBarber: "Choisir un barber",
      chooseTime: "Choisir l'heure",
      durations: ["30 minutes", "45 minutes", "60 minutes"],
      actions: ["Préparer WhatsApp", "Envoyer WhatsApp", "Fichier calendrier", "Google Calendar"],
      privacy: "Tes données sont uniquement utilisées dans le fichier calendrier et la demande préparée. Rien n'est envoyé automatiquement à des serveurs externes.",
      errors: {
        invalid: "Choisis une date et une heure valides.",
        sunday: "Choisis un rendez-vous du lundi au samedi.",
        hours: "Choisis une heure où le rendez-vous complet tient entre 10:00 et 19:00.",
      },
      success: "Prêt : envoie maintenant la demande WhatsApp au shop. Le fichier calendrier et Google Calendar sont optionnels.",
    },
    contact: {
      kicker: "Contact",
      title: "Passe au shop ou appelle rapidement.",
      body: "Galaxy Barbershop se trouve à la Dübendorfstrasse 22, 8051 Zurich. Les walk-ins sont toujours bienvenus pendant les heures d'ouverture.",
      labels: ["Téléphone", "WhatsApp", "Adresse", "Horaires"],
      whatsapp: "Écrire directement",
      hours: "Lun-sam 10:00-19:00 · Dim fermé",
      top: "Retour en haut",
    },
    footer: {
      body: "Fades premium, contours nets et walk-ins à Zurich-Schwamendingen.",
      chapters: "Chapitres",
      visit: "Visite",
    },
    open: {
      sunday: "Fermé aujourd'hui · Lun-sam 10:00-19:00",
      before: "Ouvert aujourd'hui dès 10:00",
      active: "Ouvert maintenant jusqu'à 19:00",
      after: "Fermé aujourd'hui · Demain dès 10:00",
    },
    message: {
      intro: "Bonjour Galaxy Barbershop, je souhaite demander un rendez-vous par WhatsApp :",
      name: "Nom",
      phone: "Téléphone",
      email: "E-mail",
      barber: "Barber",
      service: "Service",
      price: "Prix",
      dateTime: "Date/heure",
      duration: "Durée",
      notes: "Souhaits",
      requestSubject: "Demande de rendez-vous",
    },
    navToggleOpen: "Ouvrir la navigation",
    navToggleClose: "Fermer la navigation",
    whatsappText: "Bonjour Galaxy Barbershop, je souhaite demander un rendez-vous.",
  },
  it: {
    code: "it",
    title: "Galaxy Barbershop Zurigo | Fades, barba e tagli moderni",
    description:
      "Galaxy Barbershop a Zurigo-Schwamendingen. Fades, cura della barba, tagli moderni da uomo e tagli per bambini. Dübendorfstrasse 22, 8051 Zurigo.",
    skip: "Vai al contenuto",
    language: "Lingua",
    nav: ["Servizi", "Location", "Team", "Galleria", "Recensioni", "Appuntamento", "Contatto"],
    heroCopy:
      "Fades freschi, linee barba pulite e walk-in sempre possibili a Zurigo-Schwamendingen. Khaled, Abdul e Said ti fanno uscire con un look impeccabile.",
    cta: {
      whatsapp: "Prenota via WhatsApp",
      call: "Chiama",
      booking: "Prepara appuntamento",
      route: "Indicazioni",
      reviews: "Vedi recensioni",
      maps: "Google Maps",
    },
    proof: [
      ["Walk-in", "Sempre durante gli orari di apertura"],
      ["Valutazione Google 4.8", "119 recensioni pubbliche"],
      ["Dübendorfstrasse 22", "A Zurigo-Schwamendingen"],
    ],
    conversion: {
      priceLabel: "Tutti i tagli",
      price: "CHF 20",
      walkLabel: "Walk-in",
      walk: "Sempre benvenuti",
      action: "WhatsApp ora",
    },
    intro: {
      kicker: "Il tuo barber locale a Zurigo",
      title: "Un taglio pulito parla prima ancora di te.",
      body: "Galaxy unisce il mestiere classico del barber a stili moderni: sfumature pulite, contorni precisi, consulenza tranquilla e un risultato che resta ordinato anche dopo alcuni giorni.",
    },
    services: {
      kicker: "Servizi",
      title: "Per ogni giorno, occasioni e un nuovo inizio.",
      items: [
        ["Haircut & Styling", "Tagli uomo su misura, con consulenza su lunghezza, forma e finish.", "da 30 min.", "Haircut & Styling · CHF 20"],
        ["Skin Fade & Taper", "Sfumature morbide, lati puliti e lavoro preciso sui contorni.", "da 45 min.", "Skin Fade & Taper · CHF 20"],
        ["Barba & Contorni", "Rifinitura barba, linee a rasoio e forma curata per un look netto.", "da 30 min.", "Barba & Contorni · CHF 20"],
        ["Kids & Teens", "Tagli pazienti per bambini e ragazzi, dal classico al trendy.", "da 30 min.", "Kids & Teens · CHF 20"],
      ],
      choose: "Scegli servizio",
      lead: "Tutti i servizi costano CHF 20. I walk-in sono benvenuti durante gli orari di apertura.",
    },
    team: {
      kicker: "Team",
      title: "Tre barber, uno standard: uscire puliti.",
      bios: [
        ["Khaled", "Consulenza calma, linee precise ed esperienza con stili uomo classici e moderni.", ["Tagli classici", "Linee pulite", "Consulenza"]],
        ["Abdul", "Forte su fades, transizioni e tagli facili da portare ogni giorno.", ["Skin fades", "Taper", "Stili moderni"]],
        ["Said", "Contorni puliti, cura della barba e attenzione ai dettagli che completano il look.", ["Barba", "Contorni", "Dettagli"]],
      ],
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
      body: "Il shop trasmette calma e qualità: pareti scure, sedute in pelle, specchi e postazioni pulite danno a ogni taglio la cornice giusta.",
      tags: ["Sedute in pelle", "Luce calda", "Postazioni barber pulite"],
      caption: "Dübendorfstrasse 22 · Zurigo-Schwamendingen",
      alt: "Sala barber scura con lounge in pelle, luce calda e pavimento a scacchi nel Galaxy Barbershop Zurigo",
    },
    gallery: { kicker: "Galleria", title: "Lavori veri dal shop.", expand: "Ingrandisci immagine" },
    reviews: {
      kicker: "Recensioni Google",
      title: "Fiducia prima del primo taglio.",
      body: "Voci pubbliche selezionate mostrano subito cosa apprezzano i clienti. Chi vuole leggere di più o lasciare una recensione arriva direttamente alla pagina ufficiale di Google.",
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
    booking: {
      kicker: "Appuntamento",
      title: "Prenota il tuo prossimo taglio.",
      body: "Aggiungi i dettagli principali e invia la richiesta direttamente via WhatsApp. I file calendario sono solo un bonus opzionale dopo.",
      ready: "Risposta di solito durante gli orari di apertura.",
      labels: ["Nome", "E-mail", "Telefono", "Barber", "Servizio", "Data", "Ora", "Durata", "Richieste"],
      placeholders: ["Nome Cognome", "nome@email.com", "+41 ...", "Fade, barba, taglio bambino, stile preferito ..."],
      chooseBarber: "Scegli barber",
      chooseTime: "Scegli ora",
      durations: ["30 minuti", "45 minuti", "60 minuti"],
      actions: ["Prepara WhatsApp", "Invia WhatsApp", "File calendario", "Google Calendar"],
      privacy: "I tuoi dati vengono usati solo nel file calendario e nella richiesta preparata. Nulla viene inviato automaticamente a server esterni.",
      errors: {
        invalid: "Scegli una data e un'ora valide.",
        sunday: "Scegli un appuntamento dal lunedì al sabato.",
        hours: "Scegli un orario in cui tutto l'appuntamento rientra tra le 10:00 e le 19:00.",
      },
      success: "Pronto: invia ora la richiesta WhatsApp al shop. File calendario e Google Calendar sono opzionali.",
    },
    contact: {
      kicker: "Contatto",
      title: "Passa al shop o chiama rapidamente.",
      body: "Galaxy Barbershop si trova in Dübendorfstrasse 22, 8051 Zurigo. I walk-in sono sempre benvenuti durante gli orari di apertura.",
      labels: ["Telefono", "WhatsApp", "Indirizzo", "Orari"],
      whatsapp: "Scrivi direttamente",
      hours: "Lun-sab 10:00-19:00 · Dom chiuso",
      top: "Torna su",
    },
    footer: {
      body: "Fades premium, contorni puliti e walk-in a Zurigo-Schwamendingen.",
      chapters: "Capitoli",
      visit: "Visita",
    },
    open: {
      sunday: "Chiuso oggi · Lun-sab 10:00-19:00",
      before: "Aperto oggi dalle 10:00",
      active: "Aperto ora fino alle 19:00",
      after: "Chiuso oggi · Domani dalle 10:00",
    },
    message: {
      intro: "Ciao Galaxy Barbershop, vorrei richiedere un appuntamento via WhatsApp:",
      name: "Nome",
      phone: "Telefono",
      email: "E-mail",
      barber: "Barber",
      service: "Servizio",
      price: "Prezzo",
      dateTime: "Data/ora",
      duration: "Durata",
      notes: "Richieste",
      requestSubject: "Richiesta appuntamento",
    },
    navToggleOpen: "Apri navigazione",
    navToggleClose: "Chiudi navigazione",
    whatsappText: "Ciao Galaxy Barbershop, vorrei richiedere un appuntamento.",
  },
  es: {
    code: "es",
    title: "Galaxy Barbershop Zúrich | Fades, barba y cortes modernos",
    description:
      "Galaxy Barbershop en Zúrich-Schwamendingen. Fades, cuidado de barba, cortes modernos para hombres y cortes para niños. Dübendorfstrasse 22, 8051 Zúrich.",
    skip: "Saltar al contenido",
    language: "Idioma",
    nav: ["Servicios", "Location", "Equipo", "Galería", "Reseñas", "Cita", "Contacto"],
    heroCopy:
      "Fades frescos, líneas de barba limpias y walk-ins siempre en Zúrich-Schwamendingen. Khaled, Abdul y Said se aseguran de que salgas impecable.",
    cta: {
      whatsapp: "Reservar por WhatsApp",
      call: "Llamar",
      booking: "Preparar cita",
      route: "Ruta",
      reviews: "Ver reseñas",
      maps: "Google Maps",
    },
    proof: [
      ["Walk-ins", "Siempre durante el horario"],
      ["Valoración Google 4.8", "119 reseñas públicas"],
      ["Dübendorfstrasse 22", "En Zúrich-Schwamendingen"],
    ],
    conversion: {
      priceLabel: "Todos los cortes",
      price: "CHF 20",
      walkLabel: "Walk-ins",
      walk: "Siempre bienvenidos",
      action: "WhatsApp ahora",
    },
    intro: {
      kicker: "Tu barber local en Zúrich",
      title: "Un corte limpio habla antes de que digas una palabra.",
      body: "Galaxy combina el oficio clásico de barbería con estilos modernos: transiciones limpias, contornos marcados, asesoramiento tranquilo y un resultado que sigue quedando bien después de unos días.",
    },
    services: {
      kicker: "Servicios",
      title: "Para el día a día, ocasiones y un reinicio fresco.",
      items: [
        ["Haircut & Styling", "Cortes masculinos adaptados a tu estilo, con asesoría sobre largo, forma y acabado.", "desde 30 min.", "Haircut & Styling · CHF 20"],
        ["Skin Fade & Taper", "Transiciones suaves, laterales limpios y trabajo preciso en los contornos.", "desde 45 min.", "Skin Fade & Taper · CHF 20"],
        ["Barba & Contornos", "Recorte de barba, líneas con navaja y forma cuidada para un look definido.", "desde 30 min.", "Barba & Contornos · CHF 20"],
        ["Kids & Teens", "Cortes con paciencia para niños y adolescentes, de clásico a moderno.", "desde 30 min.", "Kids & Teens · CHF 20"],
      ],
      choose: "Elegir servicio",
      lead: "Todos los servicios cuestan CHF 20. Los walk-ins son bienvenidos durante el horario.",
    },
    team: {
      kicker: "Equipo",
      title: "Tres barbers, un estándar: salir impecable.",
      bios: [
        ["Khaled", "Asesoría tranquila, líneas precisas y experiencia con estilos masculinos clásicos y modernos.", ["Cortes clásicos", "Líneas limpias", "Asesoría"]],
        ["Abdul", "Muy fuerte en fades, transiciones y cortes fáciles de llevar cada día.", ["Skin fades", "Taper", "Estilos modernos"]],
        ["Said", "Contornos limpios, cuidado de barba y ojo para los detalles que completan el look.", ["Barba", "Contornos", "Detalles"]],
      ],
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
      body: "El shop se siente tranquilo y premium: paredes oscuras, asientos de cuero, espejos y estaciones limpias dan a cada corte el ambiente correcto.",
      tags: ["Asientos de cuero", "Luz cálida", "Estaciones barber limpias"],
      caption: "Dübendorfstrasse 22 · Zúrich-Schwamendingen",
      alt: "Sala barber oscura con lounge de cuero, luz cálida y suelo ajedrezado en Galaxy Barbershop Zúrich",
    },
    gallery: { kicker: "Galería", title: "Trabajo real del shop.", expand: "Ampliar imagen" },
    reviews: {
      kicker: "Reseñas Google",
      title: "Confianza antes del primer corte.",
      body: "Voces públicas seleccionadas muestran rápido lo que valoran los clientes. Quien quiera leer más o dejar una reseña va directamente a la página oficial de Google.",
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
    booking: {
      kicker: "Cita",
      title: "Reserva tu próximo corte.",
      body: "Añade los detalles clave y envía la solicitud directamente por WhatsApp. Los archivos de calendario son solo un extra opcional después.",
      ready: "Normalmente respondemos durante el horario de apertura.",
      labels: ["Nombre", "E-mail", "Teléfono", "Barber", "Servicio", "Fecha", "Hora", "Duración", "Deseos"],
      placeholders: ["Nombre Apellido", "nombre@email.com", "+41 ...", "Fade, barba, corte infantil, estilo preferido ..."],
      chooseBarber: "Elegir barber",
      chooseTime: "Elegir hora",
      durations: ["30 minutos", "45 minutos", "60 minutos"],
      actions: ["Preparar WhatsApp", "Enviar WhatsApp", "Archivo calendario", "Google Calendar"],
      privacy: "Tus datos solo se usan en el archivo de calendario y en la solicitud preparada. Nada se envía automáticamente a servidores externos.",
      errors: {
        invalid: "Elige una fecha y hora válidas.",
        sunday: "Elige una cita de lunes a sábado.",
        hours: "Elige una hora en la que toda la cita quede entre las 10:00 y las 19:00.",
      },
      success: "Listo: envía ahora la solicitud de WhatsApp al shop. El archivo de calendario y Google Calendar son opcionales.",
    },
    contact: {
      kicker: "Contacto",
      title: "Pasa por el shop o llama rápido.",
      body: "Galaxy Barbershop está en Dübendorfstrasse 22, 8051 Zúrich. Los walk-ins siempre son bienvenidos durante el horario de apertura.",
      labels: ["Teléfono", "WhatsApp", "Dirección", "Horario"],
      whatsapp: "Escribir directamente",
      hours: "Lun-sáb 10:00-19:00 · Dom cerrado",
      top: "Volver arriba",
    },
    footer: {
      body: "Fades premium, contornos limpios y walk-ins en Zúrich-Schwamendingen.",
      chapters: "Capítulos",
      visit: "Visita",
    },
    open: {
      sunday: "Cerrado hoy · Lun-sáb 10:00-19:00",
      before: "Abierto hoy desde las 10:00",
      active: "Abierto ahora hasta las 19:00",
      after: "Cerrado hoy · Mañana desde las 10:00",
    },
    message: {
      intro: "Hola Galaxy Barbershop, me gustaría solicitar una cita por WhatsApp:",
      name: "Nombre",
      phone: "Teléfono",
      email: "E-mail",
      barber: "Barber",
      service: "Servicio",
      price: "Precio",
      dateTime: "Fecha/hora",
      duration: "Duración",
      notes: "Deseos",
      requestSubject: "Solicitud de cita",
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
    .querySelectorAll(".hero-actions .button.primary, .conversion-strip .button.primary, .footer-cta, .mobile-action-bar a:first-child")
    .forEach((link) => {
    if (link instanceof HTMLAnchorElement) {
      link.href = href;
    }
  });
};

const getServiceLabel = (serviceValue) => {
  const t = translations[currentLanguage] ?? translations[defaultLanguage];
  const serviceMap = {
    "Haircut & Styling": t.services.items[0][0],
    "Skin Fade & Taper": t.services.items[1][0],
    "Bart & Konturen": t.services.items[2][0],
    "Kids & Teens": t.services.items[3][0],
  };

  return serviceMap[serviceValue] ?? serviceValue;
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

  ["services", "location", "team", "gallery", "reviews", "booking", "contact"].forEach((id, index) => {
    setText(`.site-nav a[href="#${id}"]`, t.nav[index]);
  });

  setText(".hero-copy", t.heroCopy);
  setText(".hero-actions .button.primary", t.cta.whatsapp);
  setText(".hero-actions .button.secondary", t.cta.call);
  setText(".hero-actions .button.neon", t.cta.booking);
  setText(".hero-actions .button.ghost", t.cta.route);
  setText(".hero-proof a", t.cta.reviews);
  setText(".quickbar a:last-child", t.cta.maps);
  setWhatsAppLinks(t.whatsappText);

  t.proof.forEach(([title, copy], index) => {
    const item = `.proof-strip > div:nth-child(${index + 1})`;
    setText(`${item} strong`, title);
    setText(`${item} span`, copy);
  });

  setText(".conversion-strip div:nth-child(1) span", t.conversion.priceLabel);
  setText(".conversion-strip div:nth-child(1) strong", t.conversion.price);
  setText(".conversion-strip div:nth-child(2) span", t.conversion.walkLabel);
  setText(".conversion-strip div:nth-child(2) strong", t.conversion.walk);
  setText(".conversion-strip .button", t.conversion.action);

  setText(".intro .section-kicker", t.intro.kicker);
  setText(".intro h2", t.intro.title);
  setText(".intro p", t.intro.body);

  setText(".services .section-kicker", t.services.kicker);
  setText(".services h2", t.services.title);
  setText(".services .section-lead", t.services.lead);
  t.services.items.forEach(([title, copy, duration, option], index) => {
    const card = `.service-card:nth-child(${index + 1})`;
    setText(`${card} h3`, title);
    setText(`${card} p`, copy);
    setText(`${card} .service-meta`, duration);
    const optionElement = bookingForm?.elements?.service?.options?.[index + 1];
    if (optionElement) {
      optionElement.textContent = option;
    }
  });
  const serviceSelect = bookingForm?.elements?.service;
  if (serviceSelect instanceof HTMLSelectElement) {
    serviceSelect.options[0].textContent = t.services.choose;
  }

  setText(".team .section-kicker", t.team.kicker);
  setText(".team h2", t.team.title);
  t.team.bios.forEach(([name, bio, tags], index) => {
    const card = `.team-grid article:nth-child(${index + 1})`;
    setText(`${card} h3`, name);
    setText(`${card} p`, bio);
    document.querySelectorAll(`${card} .team-tags span`).forEach((tag, tagIndex) => {
      tag.textContent = tags[tagIndex] ?? "";
    });
  });

  setText(".cut-proof .section-kicker", t.proofCards.kicker);
  setText(".cut-proof h2", t.proofCards.title);
  setAttr(".proof-card:first-child img", "alt", t.proofCards.clearAlt);
  t.proofCards.items.forEach(([title, copy], index) => {
    const card = `.proof-card:nth-child(${index + 1})`;
    setText(`${card} h3`, title);
    setText(`${card} p`, copy);
  });

  setText(".location-section .section-kicker", t.location.kicker);
  setText(".location-section h2", t.location.title);
  setText(".location-section p", t.location.body);
  document.querySelectorAll(".location-details span").forEach((tag, index) => {
    tag.textContent = t.location.tags[index] ?? tag.textContent;
  });
  setText(".location-media figcaption", t.location.caption);
  setAttr(".location-media img", "alt", t.location.alt);

  setText(".gallery-section .section-kicker", t.gallery.kicker);
  setText(".gallery-section h2", t.gallery.title);
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

  setText(".booking-copy .section-kicker", t.booking.kicker);
  setText(".booking h2", t.booking.title);
  setText(".booking-copy > p", t.booking.body);
  if (bookingStatus && !bookingStatus.dataset.generated) {
    bookingStatus.textContent = t.booking.ready;
  }

  document.querySelectorAll(".booking-form label").forEach((label, index) => {
    const control = label.querySelector("input, select, textarea");
    if (!control) {
      return;
    }
    label.childNodes[0].textContent = `${t.booking.labels[index]} `;
  });
  setPlaceholder('input[name="name"]', t.booking.placeholders[0]);
  setPlaceholder('input[name="email"]', t.booking.placeholders[1]);
  setPlaceholder('input[name="phone"]', t.booking.placeholders[2]);
  setPlaceholder('textarea[name="notes"]', t.booking.placeholders[3]);
  const barberSelect = bookingForm?.elements?.barber;
  if (barberSelect instanceof HTMLSelectElement) {
    barberSelect.options[0].textContent = t.booking.chooseBarber;
  }
  const timeSelect = bookingForm?.elements?.time;
  if (timeSelect instanceof HTMLSelectElement && timeSelect.options[0]) {
    timeSelect.options[0].textContent = t.booking.chooseTime;
  }
  const durationSelect = bookingForm?.elements?.duration;
  if (durationSelect instanceof HTMLSelectElement) {
    Array.from(durationSelect.options).forEach((option, index) => {
      option.textContent = t.booking.durations[index] ?? option.textContent;
    });
  }
  document.querySelectorAll(".form-actions > *").forEach((action, index) => {
    action.textContent = t.booking.actions[index] ?? action.textContent;
  });
  setText(".privacy-note", t.booking.privacy);

  setText(".contact .section-kicker", t.contact.kicker);
  setText(".contact h2", t.contact.title);
  setText(".contact p", t.contact.body);
  document.querySelectorAll(".contact-list .contact-label").forEach((label, index) => {
    label.textContent = t.contact.labels[index] ?? label.textContent;
  });
  setText('.contact-list a[href^="https://wa.me"] strong', t.contact.whatsapp);
  setText(".contact-list > div strong", t.contact.hours);
  setText(".footer-brand p", t.footer.body);
  setText(".footer-cta", t.conversion.action);
  setText(".footer-chapters h2", t.footer.chapters);
  setAttr(".footer-chapters", "aria-label", t.footer.chapters);
  setText(".footer-visit h2", t.footer.visit);
  [
    ["services", t.nav[0]],
    ["location", t.nav[1]],
    ["team", t.nav[2]],
    ["proof", t.proofCards.kicker],
    ["gallery", t.nav[3]],
    ["reviews", t.nav[4]],
    ["booking", t.nav[5]],
    ["contact", t.nav[6]],
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

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

const revealSection = (target) => {
  const revealRoot = target.closest(".reveal") ?? target;
  revealRoot.classList.add("is-visible");
  revealRoot.querySelectorAll(".reveal").forEach((item) => item.classList.add("is-visible"));
};

const scrollToSection = (target, options = {}) => {
  revealSection(target);

  const scrollAnchor = target.matches(".section")
    ? (target.querySelector(".section-heading, .intro-grid, .location-copy, .reviews-copy, .booking-copy, .contact > :first-child") ?? target)
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

const pad = (value) => String(value).padStart(2, "0");

const toUtcCalendarStamp = (date) =>
  `${date.getUTCFullYear()}${pad(date.getUTCMonth() + 1)}${pad(date.getUTCDate())}T${pad(date.getUTCHours())}${pad(
    date.getUTCMinutes(),
  )}00Z`;

const toLocalCalendarStamp = (date) =>
  `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}T${pad(date.getHours())}${pad(
    date.getMinutes(),
  )}00`;

const escapeCalendarText = (value) =>
  String(value ?? "")
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");

const foldCalendarLine = (line) => {
  const chunks = [];
  let current = line;

  while (current.length > 74) {
    chunks.push(current.slice(0, 74));
    current = ` ${current.slice(74)}`;
  }

  chunks.push(current);
  return chunks.join("\r\n");
};

const buildCalendarFile = (booking) => {
  const attendeeLines = [
    `ATTENDEE;CN=${escapeCalendarText(booking.name)};RSVP=TRUE:mailto:${booking.email}`,
  ];

  if (booking.barberEmail) {
    attendeeLines.push(
      `ATTENDEE;CN=${escapeCalendarText(booking.barber)};ROLE=REQ-PARTICIPANT;RSVP=TRUE:mailto:${booking.barberEmail}`,
    );
  }

  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Galaxy Barbershop Zurich//Booking//DE",
    "CALSCALE:GREGORIAN",
    "METHOD:REQUEST",
    "BEGIN:VEVENT",
    `UID:galaxy-${Date.now()}@galaxy-barbershop.local`,
    `DTSTAMP:${toUtcCalendarStamp(new Date())}`,
    `DTSTART;TZID=Europe/Zurich:${toLocalCalendarStamp(booking.start)}`,
    `DTEND;TZID=Europe/Zurich:${toLocalCalendarStamp(booking.end)}`,
    `SUMMARY:${escapeCalendarText(`${booking.service} mit ${booking.barber}`)}`,
    `LOCATION:${escapeCalendarText("Galaxy Barbershop, Dübendorfstrasse 22, 8051 Zürich")}`,
    `DESCRIPTION:${escapeCalendarText(booking.description)}`,
    shopEmail ? `ORGANIZER;CN=Galaxy Barbershop:mailto:${shopEmail}` : "",
    ...attendeeLines,
    "END:VEVENT",
    "END:VCALENDAR",
  ].filter(Boolean);

  return lines.map(foldCalendarLine).join("\r\n");
};

const buildGoogleCalendarUrl = (booking) => {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `${booking.service} mit ${booking.barber}`,
    dates: `${toUtcCalendarStamp(booking.start)}/${toUtcCalendarStamp(booking.end)}`,
    details: booking.description,
    location: "Galaxy Barbershop, Dübendorfstrasse 22, 8051 Zürich",
  });

  if (booking.email) {
    params.set("add", booking.email);
  }

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
};

const activateLink = (link, href) => {
  if (!link) {
    return;
  }

  link.href = href;
  link.classList.remove("is-disabled");
  link.removeAttribute("aria-disabled");
  link.removeAttribute("tabindex");
};

const deactivateLink = (link) => {
  if (!link) {
    return;
  }

  link.href = "#";
  link.classList.add("is-disabled");
  link.setAttribute("aria-disabled", "true");
  link.setAttribute("tabindex", "-1");
};

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
  const openingMinutes = 10 * 60;
  const closingMinutes = 19 * 60;

  if (day === 0) {
    openStatus.textContent = t.open.sunday;
    return;
  }

  if (currentMinutes < openingMinutes) {
    openStatus.textContent = t.open.before;
    return;
  }

  if (currentMinutes < closingMinutes) {
    openStatus.textContent = t.open.active;
    return;
  }

  openStatus.textContent = t.open.after;
};

const setMinBookingDate = () => {
  const dateInput = bookingForm?.elements?.date;

  if (dateInput instanceof HTMLInputElement) {
    const today = new Date();
    dateInput.min = `${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(today.getDate())}`;
  }
};

const getBookingTimeSlots = (duration) => {
  const slots = [];
  const openingMinutes = 10 * 60;
  const closingMinutes = 19 * 60;
  const latestStartMinutes = closingMinutes - duration;

  for (let minutes = openingMinutes; minutes <= latestStartMinutes; minutes += 30) {
    slots.push(`${pad(Math.floor(minutes / 60))}:${pad(minutes % 60)}`);
  }

  return slots;
};

const populateBookingTimes = () => {
  const timeInput = bookingForm?.elements?.time;
  const durationInput = bookingForm?.elements?.duration;

  if (!(timeInput instanceof HTMLSelectElement) || !(durationInput instanceof HTMLSelectElement)) {
    return;
  }

  const t = translations[currentLanguage] ?? translations[defaultLanguage];
  const previousValue = timeInput.value;
  const duration = Number(durationInput.value) || 30;
  const slots = getBookingTimeSlots(duration);

  timeInput.replaceChildren();

  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = t.booking.chooseTime;
  placeholder.disabled = true;
  timeInput.append(placeholder);

  slots.forEach((slot) => {
    const option = document.createElement("option");
    option.value = slot;
    option.textContent = slot;
    timeInput.append(option);
  });

  timeInput.value = slots.includes(previousValue) ? previousValue : "";
};

setMinBookingDate();
populateBookingTimes();
applyLanguage(currentLanguage);
bookingForm?.elements?.duration?.addEventListener("change", populateBookingTimes);
languageSelect?.addEventListener("change", (event) => {
  if (!(event.target instanceof HTMLSelectElement)) {
    return;
  }

  bookingStatus?.removeAttribute("data-generated");
  storeLanguage(event.target.value);
  applyLanguage(event.target.value);
});

let calendarObjectUrl;

bookingForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  deactivateLink(calendarDownload);
  deactivateLink(googleCalendarLink);
  deactivateLink(mailRequest);

  const t = translations[currentLanguage] ?? translations[defaultLanguage];
  const form = event.currentTarget;
  const submitter = form.querySelector('button[type="submit"]');
  const formData = new FormData(form);
  const date = String(formData.get("date"));
  const time = String(formData.get("time"));
  const start = new Date(`${date}T${time}`);
  const duration = Number(formData.get("duration"));
  const end = new Date(start.getTime() + duration * 60 * 1000);
  const day = start.getDay();
  const barber = String(formData.get("barber"));
  const service = String(formData.get("service"));
  const serviceLabel = getServiceLabel(service);
  const name = String(formData.get("name")).trim();
  const email = String(formData.get("email")).trim();
  const phone = String(formData.get("phone")).trim();
  const notes = String(formData.get("notes") ?? "").trim();
  const barberEmail = barberEmails[barber] ?? "";

  if (Number.isNaN(start.getTime())) {
    if (bookingStatus) {
      bookingStatus.textContent = t.booking.errors.invalid;
      bookingStatus.dataset.generated = "true";
    }
    return;
  }

  if (day === 0) {
    if (bookingStatus) {
      bookingStatus.textContent = t.booking.errors.sunday;
      bookingStatus.dataset.generated = "true";
    }
    return;
  }

  const { open, close } = getOpeningWindow(start);

  if (start < open || end > close) {
    if (bookingStatus) {
      bookingStatus.textContent = t.booking.errors.hours;
      bookingStatus.dataset.generated = "true";
    }
    return;
  }

  const description = [
    `${t.message.name}: ${name}`,
    `${t.message.phone}: ${phone}`,
    `${t.message.email}: ${email}`,
    `${t.message.barber}: ${barber}`,
    `${t.message.service}: ${serviceLabel}`,
    `${t.message.price}: ${servicePrice}`,
    notes ? `${t.message.notes}: ${notes}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const booking = {
    name,
    email,
    phone,
    barber,
    barberEmail,
    service: serviceLabel,
    start,
    end,
    description,
  };

  const calendarBlob = new Blob([buildCalendarFile(booking)], { type: "text/calendar;charset=utf-8" });
  if (calendarObjectUrl) {
    URL.revokeObjectURL(calendarObjectUrl);
  }
  const calendarUrl = URL.createObjectURL(calendarBlob);
  calendarObjectUrl = calendarUrl;
  const fileName = `galaxy-barbershop-${date}-${time.replace(":", "")}.ics`;
  const plainMessage = [
    t.message.intro,
    "",
    `${t.message.name}: ${name}`,
    `${t.message.phone}: ${phone}`,
    `${t.message.email}: ${email}`,
    `${t.message.barber}: ${barber}`,
    `${t.message.service}: ${serviceLabel}`,
    `${t.message.price}: ${servicePrice}`,
    `${t.message.dateTime}: ${date} ${time}`,
    `${t.message.duration}: ${duration} ${duration === 1 ? "Minute" : t.booking.durations[0].replace("30 ", "")}`,
    notes ? `${t.message.notes}: ${notes}` : "",
  ]
    .filter((line) => line !== "")
    .join("\n");
  const message = encodeURIComponent(plainMessage);
  const mailHref = shopEmail
    ? `mailto:${shopEmail}?cc=${encodeURIComponent(email)}&subject=${encodeURIComponent(
        `${t.message.requestSubject}: ${serviceLabel} - ${barber}`,
      )}&body=${message}`
    : `https://wa.me/${shopPhone}?text=${message}`;

  if (calendarDownload) {
    calendarDownload.setAttribute("download", fileName);
    activateLink(calendarDownload, calendarUrl);
  }

  activateLink(googleCalendarLink, buildGoogleCalendarUrl(booking));
  activateLink(mailRequest, mailHref);

  if (bookingStatus) {
    bookingStatus.textContent = t.booking.success;
    bookingStatus.dataset.generated = "true";
  }

  submitter?.focus();
});

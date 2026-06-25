(function () {
  const SUPPORTED = ["de", "en"];
  const STORAGE_KEY = "tabarek.lang";
  const DEFAULT_LANG = "de";

  const translations = {
    de: {
      meta: {
        titleHome: "Tabarek Khazraj — Vertretungs-Apothekerin",
        titleServices: "Leistungen — Tabarek Khazraj",
        titleContact: "Kontakt — Tabarek Khazraj",
        titleThanks: "Danke — Anfrage erhalten",
        descHome: "Tabarek Khazraj bietet flexible Vertretungen für Apotheken in Deutschland.",
        descServices: "Leistungen von Tabarek Khazraj — Apothekenvertretung, Kundenbetreuung, Rezeptkontrolle und mehr.",
        descContact: "Kontakt zu Tabarek Khazraj — Anfrage für eine Apothekenvertretung senden."
      },
      nav: {
        home: "Home",
        services: "Leistungen",
        contact: "Kontakt",
        mainAria: "Hauptnavigation"
      },
      lang: {
        label: "Sprache",
        switchAria: "Sprache",
        de: "DE",
        en: "EN"
      },
      hero: {
        eyebrow: "Vertretungs-Apothekerin",
        title: "Tabarek Khazraj",
        lead: "Zuverlässige pharmazeutische Vertretung für Apotheken, Notdienste und kurzfristige Personalengpässe.",
        ctaPrimary: "Anfrage senden",
        ctaSecondary: "Direkt per E-Mail",
        stat1Title: "Flexibel",
        stat1Sub: "Einsatz nach Absprache",
        stat2Title: "Vor Ort",
        stat2Sub: "Apothekenvertretung in Ihrer Region",
        cardAria: "Kurzprofil"
      },
      about: {
        title: "Pharmazeutische Unterstützung, wenn sie gebraucht wird",
        intro: "Ich übernehme Vertretungen im Apothekenalltag, unterstütze Teams bei planbaren Abwesenheiten und helfe bei kurzfristigen Engpässen.",
        card1Title: "Tagesgeschäft",
        card1Body: "Handverkauf, Beratung, Rezeptprüfung und pharmazeutische Betreuung.",
        card2Title: "Notdienst",
        card2Body: "Verlässliche Vertretung für Nacht-, Wochenend- und Feiertagsdienste.",
        card3Title: "Team-Entlastung",
        card3Body: "Unterstützung bei Urlaub, Krankheit, Fortbildung oder hoher Auslastung."
      },
      reviews: {
        title: "Bewertungen",
        lead: "Was andere über mich sagen",
        b1Name: "Bewertung 1",
        b1Role: "Apotheke",
        b1Quote: "Platzhalter — diese Bewertung wird noch durch eine echte Kundenreferenz ersetzt.",
        b2Name: "Bewertung 2",
        b2Role: "Inhaber*in",
        b2Quote: "Platzhalter — diese Bewertung wird noch durch eine echte Kundenreferenz ersetzt.",
        b3Name: "Bewertung 3",
        b3Role: "Apotheke",
        b3Quote: "Platzhalter — diese Bewertung wird noch durch eine echte Kundenreferenz ersetzt."
      },
      why: {
        title: "Weshalb Sie mich buchen sollten",
        p1: "Ich habe Spaß am Umgang mit Menschen und bin beratungsstark. Zudem arbeite ich gewissenhaft, zuverlässig und habe durch meine Berufserfahrung bereits viel Verantwortung getragen. Über die berufsrechtlichen Vorschriften, insbesondere zu Betäubungsmitteln, Rezeptur und das Labor, kann ich gute Kenntnisse vorweisen, und das Erlernen von neuen Warenwirtschaftssystemen und Anwendungen fällt mir leicht.",
        p2: "Zu meinen Stärken gehören Flexibilität, meine Sprachkenntnisse und mein selbstständiges bzw. lösungsorientiertes Arbeiten. Durch meine offene Art finde ich mich schnell in neue Teams zurecht und bin davon überzeugt, dass ich Ihnen eine große Unterstützung sein werde — im Raum Berlin und Brandenburg, auf Anfrage auch bundesweit.",
        cta: "Anfrage senden"
      },
      services: {
        title: "Leistungen",
        intro: "Ich vertrete Sie bei allen personellen Umständen im Raum Berlin und Brandenburg. Auf Anfrage auch gerne bundesweit. Aktuelle Verfügbarkeiten gerne auf Anfrage.",
        badge: "Nach Vereinbarung",
        s1Title: "Chefvertretung",
        s1Body: "Vertretung der Apothekenleitung bei Urlaub, Krankheit oder aus sonstigen Gründen.",
        s2Title: "Kundenbetreuung",
        s2Body: "Aktive Mitarbeit im Handverkauf.",
        s3Title: "Rezeptkontrolle",
        s3Body: "Erfahrung mit ScanAdhoc und ALG-Online und auch klassisch ohne Hilfe einer Software.",
        s4Title: "Dienstplan",
        s4Body: "Wenn gewünscht und bei längerer Vertretung.",
        s5Title: "Notdienst",
        s5Body: "Auf Anfrage auch bundesweit.",
        s6Title: "Dokumentation",
        s6Body: "Dokumentationspflichtige Arzneimittel wie BtM, Importe usw.",
        s7Title: "Feedback",
        s7Body: "Zur Optimierung Ihrer Prozesse führe ich nach der Vertretung gerne ein Feedback-Gespräch mit Ihnen.",
        s8Title: "Freiberuflichkeit",
        s8Body: "Beratung zu allem rund ums Thema Selbständigkeit für Apotheker*innen.",
        s9Title: "Medizinalcannabis",
        s9Body: "Konsultation zu Themen wie Beratung, Prüfung, Herstellung, Abgabe und Dokumentation."
      },
      software: {
        title: "Software Skills",
        intro: "Mit diesen Warenwirtschafts- und Laborprogrammen habe ich bereits Erfahrung gesammelt."
      },
      contact: {
        title: "Kontakt",
        intro: "Senden Sie eine kurze Anfrage mit Zeitraum, Ort und gewünschtem Umfang. Ich melde mich schnellstmöglich zurück.",
        emailTitle: "E-Mail",
        emailValue: "tabarek@example.com",
        infoTitle: "Angaben für die Anfrage",
        infoBody: "Bitte nennen Sie Zeitraum, Standort, Dienstzeiten und besondere Anforderungen.",
        formName: "Name",
        formPharmacy: "Apotheke",
        formEmail: "E-Mail",
        formPhone: "Telefon",
        formType: "Art der Vertretung",
        formTypeDay: "Tagesvertretung",
        formTypeEmergency: "Notdienst",
        formTypeMulti: "Mehrtägiger Einsatz",
        formMessage: "Nachricht",
        formNote: "Dieses statische Formular leitet aktuell auf die Danke-Seite weiter.",
        formSubmit: "Anfrage absenden"
      },
      thankyou: {
        title: "Danke — Ihre Anfrage wurde gesendet",
        body: "Ich habe Ihre Nachricht erhalten und melde mich so schnell wie möglich bei Ihnen.",
        back: "Zurück zur Startseite:",
        backLink: "Startseite"
      },
      footer: {
        copy: "© 2026 Tabarek Khazraj. Vertretungs-Apothekerin."
      }
    },
    en: {
      meta: {
        titleHome: "Tabarek Khazraj — Locum Pharmacist",
        titleServices: "Services — Tabarek Khazraj",
        titleContact: "Contact — Tabarek Khazraj",
        titleThanks: "Thank you — Inquiry received",
        descHome: "Tabarek Khazraj offers flexible locum cover for pharmacies across Germany.",
        descServices: "Services by Tabarek Khazraj — pharmacy cover, customer care, prescription checks and more.",
        descContact: "Get in touch with Tabarek Khazraj to request a locum cover assignment."
      },
      nav: {
        home: "Home",
        services: "Services",
        contact: "Contact",
        mainAria: "Main navigation"
      },
      lang: {
        label: "Language",
        switchAria: "Language",
        de: "DE",
        en: "EN"
      },
      hero: {
        eyebrow: "Locum Pharmacist",
        title: "Tabarek Khazraj",
        lead: "Reliable pharmaceutical cover for pharmacies, emergency services and short-notice staffing gaps.",
        ctaPrimary: "Send inquiry",
        ctaSecondary: "Email directly",
        stat1Title: "Flexible",
        stat1Sub: "Assignments by arrangement",
        stat2Title: "On-site",
        stat2Sub: "Pharmacy cover in your region",
        cardAria: "Short profile"
      },
      about: {
        title: "Pharmaceutical support when you need it",
        intro: "I step in for day-to-day pharmacy operations, support teams during planned absences, and help with short-notice gaps.",
        card1Title: "Day-to-day",
        card1Body: "OTC sales, customer advice, prescription checks and pharmaceutical care.",
        card2Title: "Emergency service",
        card2Body: "Reliable cover for night, weekend and holiday services.",
        card3Title: "Team relief",
        card3Body: "Support during holidays, sick leave, training or high workload."
      },
      reviews: {
        title: "Reviews",
        lead: "What others say about me",
        b1Name: "Review 1",
        b1Role: "Pharmacy",
        b1Quote: "Placeholder — this review will be replaced with a real client reference.",
        b2Name: "Review 2",
        b2Role: "Owner",
        b2Quote: "Placeholder — this review will be replaced with a real client reference.",
        b3Name: "Review 3",
        b3Role: "Pharmacy",
        b3Quote: "Placeholder — this review will be replaced with a real client reference."
      },
      why: {
        title: "Why you should book me",
        p1: "I enjoy working with people and I'm a strong advisor. I work carefully and reliably, and through my professional experience I've already taken on a lot of responsibility. I have solid knowledge of professional regulations, in particular narcotics, formulation and the laboratory, and I pick up new ERP systems and applications easily.",
        p2: "My strengths include flexibility, my language skills and an independent, solution-oriented way of working. My open manner means I integrate into new teams quickly, and I'm convinced I'll be a real support to you — in the Berlin and Brandenburg region, with nationwide assignments on request.",
        cta: "Send inquiry"
      },
      services: {
        title: "Services",
        intro: "I cover for you in all staffing situations in the Berlin and Brandenburg region. Nationwide on request. Current availability on request.",
        badge: "By arrangement",
        s1Title: "Management cover",
        s1Body: "Cover for the pharmacy manager during holidays, illness or other reasons.",
        s2Title: "Customer care",
        s2Body: "Active support in OTC sales.",
        s3Title: "Prescription checks",
        s3Body: "Experience with ScanAdhoc and ALG Online, as well as the classic paper-based workflow.",
        s4Title: "Workforce planning",
        s4Body: "If desired, and for longer assignments.",
        s5Title: "Emergency service",
        s5Body: "Nationwide on request.",
        s6Title: "Documentation",
        s6Body: "Documentation-required medicines such as narcotics, imports, etc.",
        s7Title: "Feedback",
        s7Body: "After an assignment I'm happy to run a feedback session to help optimise your processes.",
        s8Title: "Self-employment",
        s8Body: "Advice on everything around self-employment for pharmacists.",
        s9Title: "Medicinal cannabis",
        s9Body: "Consultation on topics such as advice, checks, production, dispensing and documentation."
      },
      software: {
        title: "Software skills",
        intro: "I have experience with the following ERP and laboratory systems."
      },
      contact: {
        title: "Contact",
        intro: "Send a short request with timeframe, location and the scope you need. I'll get back to you as soon as possible.",
        emailTitle: "Email",
        emailValue: "tabarek@example.com",
        infoTitle: "Information for your request",
        infoBody: "Please mention timeframe, location, working hours and any special requirements.",
        formName: "Name",
        formPharmacy: "Pharmacy",
        formEmail: "Email",
        formPhone: "Phone",
        formType: "Type of cover",
        formTypeDay: "Day cover",
        formTypeEmergency: "Emergency service",
        formTypeMulti: "Multi-day assignment",
        formMessage: "Message",
        formNote: "This static form currently redirects to the thank-you page.",
        formSubmit: "Submit inquiry"
      },
      thankyou: {
        title: "Thank you — your inquiry has been sent",
        body: "I've received your message and will get back to you as soon as possible.",
        back: "Back to the home page:",
        backLink: "Home"
      },
      footer: {
        copy: "© 2026 Tabarek Khazraj. Locum Pharmacist."
      }
    }
  };

  function getPath(key, lang) {
    return key.split(".").reduce((acc, k) => (acc == null ? acc : acc[k]), translations[lang]);
  }

  function getStoredLang() {
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      if (v && SUPPORTED.includes(v)) return v;
    } catch (e) {}
    return null;
  }

  function detectBrowserLang() {
    const navs = (navigator.languages || [navigator.language || ""]).map((l) => l.toLowerCase());
    for (const l of navs) {
      if (l.startsWith("de")) return "de";
      if (l.startsWith("en")) return "en";
    }
    return DEFAULT_LANG;
  }

  function currentLang() {
    return document.documentElement.lang && SUPPORTED.includes(document.documentElement.lang)
      ? document.documentElement.lang
      : DEFAULT_LANG;
  }

  function applyLang(lang) {
    if (!SUPPORTED.includes(lang)) lang = DEFAULT_LANG;
    document.documentElement.lang = lang;

    const page = document.body && document.body.dataset.page;

    if (page && getPath(`meta.title${page}` , lang)) {
      document.title = getPath(`meta.title${page}`, lang);
      const meta = document.querySelector('meta[name="description"]');
      if (meta && getPath(`meta.desc${page}`, lang)) {
        meta.setAttribute("content", getPath(`meta.desc${page}`, lang));
      }
    }

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const v = getPath(key, lang);
      if (v != null) el.textContent = v;
    });

    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      const spec = el.getAttribute("data-i18n-attr");
      spec.split(";").forEach((pair) => {
        const [attr, key] = pair.split(":").map((s) => s && s.trim());
        if (!attr || !key) return;
        const v = getPath(key, lang);
        if (v != null) el.setAttribute(attr, v);
      });
    });

    document.querySelectorAll(".lang-switch [data-lang]").forEach((btn) => {
      const active = btn.getAttribute("data-lang") === lang;
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
  }

  function init() {
    const stored = getStoredLang();
    const lang = stored || detectBrowserLang();
    applyLang(lang);

    document.querySelectorAll(".lang-switch [data-lang]").forEach((btn) => {
      btn.addEventListener("click", () => {
        applyLang(btn.getAttribute("data-lang"));
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

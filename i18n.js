(function () {
  const SUPPORTED = ["de", "en"];
  const STORAGE_KEY = "tabarek.lang";
  const DEFAULT_LANG = "de";

  const translations = {
    de: {
      meta: {
        titleHome: "Tabarek Khazraj — Vertretungs-Apothekerin",
        titleServices: "Leistungen — Tabarek Khazraj",
        titleAbout: "Über mich — Tabarek Khazraj",
        titleContact: "Kontakt — Tabarek Khazraj",
        titleThanks: "Danke — Anfrage erhalten",
        descHome: "Tabarek Khazraj bietet flexible Vertretungen für Apotheken in Deutschland.",
        descServices: "Leistungen von Tabarek Khazraj — Apothekenvertretung, Kundenbetreuung, Rezeptkontrolle und mehr.",
        descAbout: "Über Tabarek Khazraj — Hintergrund, Sprachkenntnisse und Arbeitsweise.",
        descContact: "Kontakt zu Tabarek Khazraj — Anfrage für eine Apothekenvertretung senden."
      },
      nav: {
        home: "Home",
        about: "Über mich",
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
        ctaPrimary: "Kontaktiere mich",
        ctaSecondary: "Direkt per E-Mail",
        stat1Title: "Flexibel",
        stat1Sub: "Einsatz nach Absprache",
        stat2Title: "Vor Ort",
        stat2Sub: "Apothekenvertretung in Ihrer Region",
        cardAria: "Kurzprofil",
        portraitAlt: "Porträt von Tabarek Khazraj"
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
      aboutpage: {
        title: "Über mich",
        steckbriefTitle: "Steckbrief",
        steckbriefP1: "Mit etwa zehn Jahren Berufserfahrung in Krankenhäusern und Apotheken bringe ich einen breiten klinischen und pharmazeutischen Hintergrund mit. Mein Studium absolvierte ich im Irak, wo angehende Apothekerinnen und Apotheker vor der Spezialisierung durch verschiedene Krankenhausstationen rotieren — von Gynäkologie über Pädiatrie bis zur Inneren Medizin. Nach meinem Umzug nach Deutschland habe ich das Anerkennungsverfahren durchlaufen und arbeite seit 2022 in Apotheken. Seit etwa eineinhalb Jahren bin ich vollständig freiberuflich tätig.",
        steckbriefP2: "Meine Schwerpunkte liegen in der Medizinalcannabis-Abgabe und -Messung, in der Medikationsanalyse — ich verfüge über die Qualifikation als Vitalberaterin — sowie in der Impfberatung (Zertifikat in Vorbereitung).",
        steckbriefP3: "Mein berufliches Selbstverständnis: ein Gleichgewicht zu finden zwischen dem Respekt vor dem Team und der Zufriedenheit der Kundinnen und Kunden — schwierige Kundschaft nicht abzuweisen, aber auch keine Grenzüberschreitungen hinzunehmen. Mein langfristiges Ziel ist eine eigene Apotheke; deshalb investiere ich gezielt in Führungs- und Beratungskompetenz.",
        languagesTitle: "Sprachkenntnisse",
        languagesIntro: "Sprachen, in denen ich Kund*innen, Ärzt*innen und Teams sicher beraten kann.",
        langDe: "Deutsch",
        langEn: "Englisch",
        langAr: "Arabisch",
        whyTitle: "Weshalb Ihre Apotheke bei mir in sicheren Händen ist",
        whyP1: "Zuverlässigkeit und Verantwortung: ich habe früh als diensthabende Apothekerin gearbeitet und dabei gelernt, auch unter Belastung den Überblick zu behalten.",
        whyP2: "Stärke in der Beratung: ich gehe respektvoll und auf Augenhöhe auf Kund*innen ein — auch wenn es einmal schwierig wird, ohne mich dabei zu vereinnahmen zu lassen.",
        whyP3: "Schnelle Auffassungsgabe: ich arbeite mich zügig in neue Warenwirtschaftssysteme und Teams ein und bin vom ersten Tag an eine verlässliche Unterstützung.",
        whyCta: "Anfrage senden",
        workstationAlt: "Tabarek Khazraj an der HV-Tisch-Kasse"
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
        card1Title: "Kundenorientierung",
        card1Body: "Ich höre zu, berate verständlich und sorge dafür, dass jede Kundin und jeder Kunde die passende Lösung bekommt.",
        card2Title: "Empathie",
        card2Body: "Ich nehme Sorgen ernst, ohne mich von schwierigen Situationen vereinnahmen zu lassen — mit Ruhe und Verständnis.",
        card3Title: "Kommunikation",
        card3Body: "Klar, respektvoll und auf Augenhöhe — im Team, gegenüber Ärztinnen und Ärzten und im Kundengespräch.",
        card4Title: "Flexibilität",
        card4Body: "Ich passe mich an neue Teams, Warenwirtschaftssysteme und Arbeitszeiten an — von Notdienst bis Urlaubsvertretung.",
        card5Title: "Teamarbeit",
        card5Body: "Ich füge mich schnell in bestehende Abläufe ein, unterstütze das Team und entlaste die Apothekenleitung spürbar.",
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
      },
      counters: {
        label: "Kennzahlen",
        experienceValue: "10+",
        experienceLabel: "Jahre Berufserfahrung",
        pharmaciesValue: "20+",
        pharmaciesLabel: "Apotheken vertreten",
        emergencyValue: "100+",
        emergencyLabel: "Notdienste",
        languagesValue: "7",
        languagesLabel: "Sprachen"
      }
    },
    en: {
      meta: {
        titleHome: "Tabarek Khazraj — Locum Pharmacist",
        titleServices: "Services — Tabarek Khazraj",
        titleAbout: "About — Tabarek Khazraj",
        titleContact: "Contact — Tabarek Khazraj",
        titleThanks: "Thank you — Inquiry received",
        descHome: "Tabarek Khazraj offers flexible locum cover for pharmacies across Germany.",
        descServices: "Services by Tabarek Khazraj — pharmacy cover, customer care, prescription checks and more.",
        descAbout: "About Tabarek Khazraj — background, languages and working style.",
        descContact: "Get in touch with Tabarek Khazraj to request a locum cover assignment."
      },
      nav: {
        home: "Home",
        about: "About",
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
        ctaPrimary: "Contact me",
        ctaSecondary: "Email directly",
        stat1Title: "Flexible",
        stat1Sub: "Assignments by arrangement",
        stat2Title: "On-site",
        stat2Sub: "Pharmacy cover in your region",
        cardAria: "Short profile",
        portraitAlt: "Portrait of Tabarek Khazraj"
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
      aboutpage: {
        title: "About me",
        steckbriefTitle: "Profile",
        steckbriefP1: "With around ten years of professional experience across hospitals and pharmacies, I bring a broad clinical and pharmaceutical background. I trained in Iraq, where pharmacy graduates rotate through hospital wards — gynaecology, paediatrics, internal medicine — before specialising. After moving to Germany I completed the recognition process and have been working in pharmacies since 2022. For the past year and a half I have been working fully freelance.",
        steckbriefP2: "My specialisations include medical cannabis — dispensing and measurement — medication analysis (I hold a Vitalberatung qualification) and vaccination advice (certificate pending).",
        steckbriefP3: "My professional belief: finding a balance between respecting the team and ensuring customer satisfaction — neither turning away difficult customers nor absorbing mistreatment. My long-term goal is to own a pharmacy, which drives me to keep developing my leadership and advisory skills.",
        languagesTitle: "Languages",
        languagesIntro: "Languages I can use confidently with customers, prescribers and teams.",
        langDe: "German",
        langEn: "English",
        langAr: "Arabic",
        whyTitle: "Why your pharmacy is in safe hands with me",
        whyP1: "Reliable and responsible: I worked as the responsible pharmacist early in my career and learned to keep oversight even under pressure.",
        whyP2: "Strong in patient advice: I engage with customers on equal footing — even when a conversation gets difficult, without letting it get to me.",
        whyP3: "Fast learner: I get up to speed with new ERP systems and new teams quickly and am a reliable support from day one.",
        whyCta: "Send inquiry",
        workstationAlt: "Tabarek Khazraj at the till"
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
        card1Title: "Customer care",
        card1Body: "I listen carefully, advise clearly and make sure every customer gets the right solution.",
        card2Title: "Empathy",
        card2Body: "I take concerns seriously without being overwhelmed by difficult situations — with calm and understanding.",
        card3Title: "Communication",
        card3Body: "Clear, respectful and on equal footing — with the team, with prescribers and with customers.",
        card4Title: "Flexibility",
        card4Body: "I adapt to new teams, ERP systems and working hours — from emergency services to holiday cover.",
        card5Title: "Teamwork",
        card5Body: "I integrate quickly into existing workflows, support the team and noticeably relieve the pharmacy management.",
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
      },
      counters: {
        label: "Key figures",
        experienceValue: "10+",
        experienceLabel: "Years of experience",
        pharmaciesValue: "20+",
        pharmaciesLabel: "Pharmacies covered",
        emergencyValue: "100+",
        emergencyLabel: "Emergency services",
        languagesValue: "7",
        languagesLabel: "Languages"
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

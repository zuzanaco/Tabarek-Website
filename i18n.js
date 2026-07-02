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
        steckbriefP1: "Nach meinem Pharmazie-Studium habe ich rund zehn Jahre Berufserfahrung in Krankenhaus- und Offizin-Apotheken gesammelt. Seit 2022 arbeite ich in Apotheken in Deutschland, und in den letzten eineinhalb Jahren bin ich vollständig als freiberufliche Vertretungsapothekerin tätig.",
        steckbriefP2: "Meine Schwerpunkte umfassen Rezeptabgabe, Patientenberatung, Arzneimittelsicherheit, Lager- und Workflow-Unterstützung, Medikationsanalyse sowie professionelle Kundenbetreuung. Ich bringe außerdem Erfahrung darin mit, Apothekenteams im anspruchsvollen Tagesgeschäft zu unterstützen, mich schnell an neue Umgebungen anzupassen und einen ruhigen, zuverlässigen Service für Team und Kundschaft gleichermaßen zu gewährleisten. Darüber hinaus verfüge ich über Fachkenntnisse in Impfservices sowie in der Abgabe und Messung von Medizinalcannabis.",
        steckbriefP3: "Ich verfüge über eine Qualifikation in [Zertifikat / Qualifikation Platzhalter], eine weitere Zertifizierung in [Zertifikat Platzhalter] befindet sich aktuell in Vorbereitung.",
        steckbriefP4: "In meiner Arbeit lege ich gleichermaßen Wert auf professionelle Teamarbeit und exzellente Kundenbetreuung. Ich bin überzeugt, dass eine gut geführte Apotheke darauf beruht, das Team zu respektieren und gleichzeitig sicherzustellen, dass sich die Kundschaft gehört, beraten und unterstützt fühlt.",
        steckbriefP5: "Mein langfristiges Ziel ist es, eine eigene Apotheke zu besitzen und zu führen. Das motiviert mich, meine Beratungs-, Führungs- und Organisationskompetenz kontinuierlich weiterzuentwickeln.",
        languagesTitle: "Sprachkenntnisse",
        languagesIntro: "Sprachen, in denen ich Kund*innen, Ärzt*innen und Teams sicher beraten kann.",
        langDe: "Deutsch",
        langEn: "Englisch",
        langAr: "Arabisch",
        whyTitle: "Weshalb Ihre Apotheke bei mir in sicheren Händen ist",
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
        card6Title: "Fachliche Sicherheit",
        card6Body: "Fundierte Ausbildung, breite Berufserfahrung und professionelles Auftreten sorgen für verlässliche Entscheidungen im Apothekenalltag.",
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
        bookTitle: "Buche mich",
        emailTitle: "Kontaktiere mich per E-Mail",
        emailBody: "Für andere Anfragen erreichst du mich unter:",
        copyLabel: "E-Mail kopieren",
        copied: "Kopiert!",
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
        copy: "© 2026 Tabarek Khazraj. Vertretungs-Apothekerin.",
        impressum: "Impressum",
        privacy: "Datenschutz"
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
        steckbriefP1: "After completing my pharmacy studies, I gained around 10 years of professional experience across hospital and community pharmacy settings. Since 2022, I have been working in pharmacies in Germany, and for the past 1.5 years I have been fully active as a freelance locum pharmacist.",
        steckbriefP2: "My areas of expertise include prescription dispensing, patient counselling, medication safety, stock and workflow support, medication analysis, and professional customer care. I also have experience supporting pharmacy teams in busy day-to-day operations, adapting quickly to new environments, and maintaining a calm, reliable service for both staff and customers. In addition, I have specialist knowledge in vaccination services and medical cannabis dispensing and measurement.",
        steckbriefP3: "I hold a qualification in [Certificate / Qualification Placeholder], with further certification in [Certificate Placeholder] currently in progress.",
        steckbriefP4: "In my work, I value both professional teamwork and excellent customer care. I believe a well-run pharmacy depends on respecting the staff while also making sure customers feel listened to, advised, and supported.",
        steckbriefP5: "My long-term goal is to own and lead a pharmacy of my own. This motivates me to continuously develop my advisory, leadership, and organisational skills.",
        languagesTitle: "Languages",
        languagesIntro: "Languages I can use confidently with customers, prescribers and teams.",
        langDe: "German",
        langEn: "English",
        langAr: "Arabic",
        whyTitle: "Why your pharmacy is in safe hands with me",
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
        card6Title: "Professional confidence",
        card6Body: "Solid education, broad professional experience and a professional manner support reliable decisions in everyday pharmacy work.",
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
        bookTitle: "Book me",
        emailTitle: "Contact me by email",
        emailBody: "For any other inquiries, reach me at:",
        copyLabel: "Copy email",
        copied: "Copied!",
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
        copy: "© 2026 Tabarek Khazraj. Locum Pharmacist.",
        impressum: "Legal notice",
        privacy: "Privacy policy"
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

    const copyBtn = document.getElementById("copy-email");
    if (copyBtn) {
      copyBtn.addEventListener("click", () => {
        const emailLink = document.querySelector(".email-address");
        const email = emailLink ? emailLink.textContent.trim() : "";
        const feedback = document.getElementById("copy-feedback");
        const copy = (text) => {
          if (navigator.clipboard && window.isSecureContext) {
            return navigator.clipboard.writeText(text);
          }
          return new Promise((resolve, reject) => {
            try {
              const ta = document.createElement("textarea");
              ta.value = text;
              ta.style.position = "fixed";
              ta.style.opacity = "0";
              document.body.appendChild(ta);
              ta.select();
              const ok = document.execCommand("copy");
              document.body.removeChild(ta);
              ok ? resolve() : reject();
            } catch (e) { reject(e); }
          });
        };
        copy(email).then(() => {
          if (feedback) {
            feedback.classList.add("copy-feedback--show");
            setTimeout(() => feedback.classList.remove("copy-feedback--show"), 1800);
          }
        });
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

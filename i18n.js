(function () {
  const SUPPORTED = ["de", "en"];
  const STORAGE_KEY = "tabarek.lang";
  const DEFAULT_LANG = "de";
  const SOFTWARE_SKILLS = [
    { name: "IXOS", cv: true },
    { name: "Infopharm" },
    { name: "Cida" },
    { name: "ADG", cv: true },
    { name: "Dr. Lennartz Laborprogramm", lines: ["Dr. Lennartz", "Labor", "programm"] },
    { name: "ScanAdhoc" },
    { name: "Prokas", cv: true },
    { name: "BtM Sys" },
    { name: "PHARMATECHNIK", lines: ["PHARMA", "TECHNIK"] },
    { name: "Lauer-Fischer", cv: true, lines: ["Lauer-", "Fischer"] },
    { name: "AwintaONE" },
    { name: "Aposoft" },
    { name: "ApothekeOnline", lines: ["Apotheke", "Online"] },
    { name: "Pharma4U" }
  ];

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
        eyebrow: "Vertretungsapothekerin",
        title: "Tabarek Khazraj",
        lead: "Zuverlässige Unterstützung für Apotheken bei Urlaub, Krankheit und personellen Engpässen.",
        location: "Berlin, Brandenburg und nach Vereinbarung deutschlandweit.",
        ctaPrimary: "Jetzt anfragen",
        ctaSecondary: "Direkt per E-Mail",
        portraitAlt: "Porträt von Tabarek Khazraj"
      },
      about: {
        title: "Pharmazeutische Unterstützung, wenn sie gebraucht wird",
        intro: "Ich übernehme Vertretungen im Apothekenalltag, unterstütze Teams bei planbaren Abwesenheiten und helfe bei kurzfristigen Engpässen.",
        card1Title: "Teamentlastung",
        card1Body: "Unterstützung bei Urlaub, Krankheit, Fortbildung oder hoher Auslastung.",
        card2Title: "Tagesgeschäft",
        card2Body: "Handverkauf, Beratung, Rezeptbelieferung und pharmazeutische Betreuung.",
        card3Title: "Chefvertretung",
        card3Body: "Zuverlässige und verantwortungsvolle Übernahme der Apothekenleitung bei Urlaub oder kurzfristiger Abwesenheit."
      },
      aboutpage: {
        title: "Über mich",
        profileP1: "Schon als ich mein Pharmaziestudium an der Universität Babylon im Irak begann, war mir klar, dass ich einen Beruf gewählt hatte, mit dem ich Menschen jeden Tag ganz unmittelbar helfen kann. Mein Studium wurde vollständig auf Englisch durchgeführt und vermittelte mir ein breites Spektrum pharmazeutischer Fachgebiete. Deshalb fällt mir die Kommunikation auf Englisch sowohl im Alltag als auch in der pharmazeutischen Fachsprache leicht.",
        profileP2: "In meinem letzten Studienjahr habe ich begonnen, als Pharmareferentin zu arbeiten. Da der Kontakt mit Menschen und Kommunikation schon immer zu meinen Stärken gehörten, hat mir diese Tätigkeit viel Freude bereitet. Mit der Zeit habe ich jedoch gemerkt, dass ich mein pharmazeutisches Wissen weiter vertiefen möchte. Deshalb habe ich mich für die klinische Pharmazie entschieden und mehrere Jahre in einem Rotationsprogramm als klinische Apothekerin gearbeitet. Dabei konnte ich Erfahrungen in der Inneren Medizin, Endokrinologie, Onkologie und auf der COVID-19-Station sammeln.",
        profileP3: "Die enge Zusammenarbeit mit Ärztinnen und Ärzten, Pflegekräften sowie meinen pharmazeutischen Kolleginnen und Kollegen hat meine professionellen Kommunikationsfähigkeiten und mein wissenschaftliches Denken weiterentwickelt. Dabei habe ich gelernt, interdisziplinär zusammenzuarbeiten und pharmazeutische Entscheidungen immer mit Blick auf die bestmögliche Patientenversorgung zu treffen.",
        profileP4: "Schon immer hatte ich den Wunsch, neue Länder, Kulturen und Menschen kennenzulernen. Deshalb habe ich mich entschieden, nach Deutschland zu ziehen. Berlin wurde schnell zu meiner neuen Heimat – eine Stadt, deren Vielfalt, Offenheit und Internationalität mich bis heute begeistern. Ich bin 2021 nach Deutschland gekommen, habe zunächst intensive Deutschkurse besucht, die Fachsprachprüfung erfolgreich abgelegt und anschließend als Apothekerin unter Aufsicht gearbeitet. Nach meiner Approbation im April 2023 habe ich meinen beruflichen Weg in deutschen öffentlichen Apotheken fortgesetzt und arbeite seitdem als selbstständige Vertretungsapothekerin.",
        profileP5: "Heute schätze ich besonders die Möglichkeit, immer wieder neue Teams, Arbeitsweisen und Apotheken kennenzulernen. Mein Ziel war es schon immer, meine eigene Apotheke zu führen. Jede Vertretung gibt mir die Möglichkeit, unterschiedliche Teams, Führungsstile und Arbeitsweisen kennenzulernen. Diese Erfahrungen helfen mir, mich fachlich und persönlich weiterzuentwickeln – und gleichzeitig jede Apotheke mit vollem Engagement zu unterstützen.",
        languagesTitle: "Sprachkenntnisse",
        languagesIntro: "Sprachen, in denen ich Kund*innen, Ärzt*innen und Teams sicher beraten kann.",
        langDe: "Deutsch",
        langEn: "Englisch",
        langAr: "Arabisch",
        whyCta: "Anfrage senden",
        workstationAlt: "Tabarek Khazraj zeigt auf etwas"
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
        b3Quote: "Platzhalter — diese Bewertung wird noch durch eine echte Kundenreferenz ersetzt.",
        previousAria: "Vorherige Bewertungen",
        nextAria: "Nächste Bewertungen"
      },
      why: {
        title: "Warum Sie mich buchen sollten",
        card1Title: "Kundenorientierung",
        card1Body: "Ich arbeite gerne mit Menschen, höre aufmerksam zu und berate verständlich, damit jede Kundin und jeder Kunde die passende Lösung erhält.",
        card2Title: "Empathie",
        card2Body: "Ich nehme Sorgen ernst, ohne mich von schwierigen Situationen vereinnahmen zu lassen. Mit Ruhe und Verständnis begleite ich Menschen auch in anspruchsvollen Situationen.",
        card3Title: "Kommunikation",
        card3Body: "Klar, respektvoll und auf Augenhöhe – im Team, gegenüber Ärztinnen und Ärzten sowie im Kundengespräch.",
        card4Title: "Flexibilität",
        card4Body: "Ich passe mich schnell an neue Teams, Warenwirtschaftssysteme und Arbeitsabläufe an und arbeite mich zügig in neue Strukturen ein.",
        card5Title: "Teamarbeit",
        card5Body: "Ich füge mich schnell in bestehende Abläufe ein, unterstütze das Team und entlaste die Apothekenleitung spürbar.",
        card6Title: "Fachliche Sicherheit",
        card6Body: "Fundierte Ausbildung, breite Berufserfahrung und professionelles Auftreten sorgen für verlässliche Entscheidungen im Apothekenalltag.",
        cta: "Anfrage senden"
      },
      services: {
        title: "Leistungen",
        intro: "Ich unterstütze Apotheken bei personellen Engpässen im Raum Berlin und Brandenburg. Auf Anfrage bin ich auch bundesweit im Einsatz. Meine aktuelle Verfügbarkeit teile ich Ihnen gerne auf Anfrage mit.",
        badge: "Nach Vereinbarung",
        experienceTitle: "Erfahrung auf einen Blick",
        experience1: "Über 35 Apotheken erfolgreich unterstützt",
        experience2: "Kurz- und langfristige Vertretungseinsätze",
        experience3: "5 Monate Erfahrung in einer Versandapotheke",
        experience4: "Wochen- bis monatelange Einsätze in spezialisierten Fachapotheken:",
        experience5: "Heimversorgung: Heimverblisterung, Medikationsanalysen sowie Betreuung von Arztpraxen und Pflegediensten",
        experience6: "Cannabisversorgung: Prüfung, Dokumentation und Abgabe von Cannabisarzneimitteln",
        experience7: "Center-Apotheken: Aktive Mitarbeit im Handverkauf. Sicherer Umgang mit hohem Kundenaufkommen.",
        s1Title: "Vertretung der Apothekenleitung",
        s1Body: "Zuverlässige Vertretung der Apothekenleitung bei Urlaub, Krankheit oder anderen Ausfällen.",
        s2Title: "Kundenberatung & Betreuung",
        s2Body: "Aktive Mitarbeit im Handverkauf und verständliche Beratung im Kundengespräch.",
        s3Title: "Rezeptkontrolle",
        s3Body: "Erfahrung mit ScanAdhoc sowie mit der klassischen Prüfung ohne Softwareunterstützung.",
        s4Title: "Dienstplanung",
        s4Body: "Bei langfristigen Vertretungseinsätzen unterstütze ich gerne bei der Dienstplanung.",
        s5Title: "Notdienste",
        s5Body: "Übernahme von Notdiensten im Rahmen eines laufenden Vertretungseinsatzes.",
        s6Title: "Dokumentation",
        s6Body: "Dokumentation von BtM-Rezepten, Importen, Tierarzneimitteln und weiteren Sonderformen.",
        s9Title: "Medizinalcannabis",
        s9Body: "Prüfung, Dokumentation und Abgabe von Cannabisarzneimitteln."
      },
      software: {
        title: "Softwarekenntnisse",
        intro: "Mit diesen Warenwirtschafts- und Laborprogrammen habe ich bereits Erfahrung gesammelt."
      },
      contact: {
        title: "Kontakt",
        intro: "Senden Sie mir eine kurze Anfrage mit Zeitraum, Ort und gewünschtem Umfang. Ich melde mich so schnell wie möglich zurück.",
        bookTitle: "Vertretung anfragen",
        emailTitle: "Kontaktdaten",
        emailBody: "E-Mail (bevorzugt)",
        phoneLabel: "Telefon",
        copyLabel: "Copy",
        copyEmailAria: "E-Mail kopieren",
        copyPhoneAria: "Telefonnummer kopieren",
        emailCopied: "E-Mail in die Zwischenablage kopiert",
        phoneCopied: "Telefonnummer in die Zwischenablage kopiert",
        formName: "Ansprechpartner",
        formPharmacy: "Apotheke",
        formEmail: "E-Mail",
        formPhone: "Telefonnummer",
        formDateStart: "Startdatum",
        formDateEnd: "Enddatum",
        formMessage: "Nachricht",
        formSubmit: "Anfrage senden",
        formError: "Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie mich per E-Mail.",
        successTitle: "Vielen Dank",
        successMessage: "Vielen Dank für Ihre Nachricht. Ich melde mich in Kürze bei Ihnen.",
        successCloseAria: "Schließen"
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
        pharmaciesValue: "30+",
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
        lead: "Reliable support for pharmacies during holidays, illness and staffing shortages.",
        location: "Berlin, Brandenburg and, by arrangement, throughout Germany.",
        ctaPrimary: "Send inquiry",
        ctaSecondary: "Email directly",
        portraitAlt: "Portrait of Tabarek Khazraj"
      },
      about: {
        title: "Pharmaceutical support when you need it",
        intro: "I take on cover in everyday pharmacy operations, support teams during planned absences and help with short-notice staffing gaps.",
        card1Title: "Team relief",
        card1Body: "Support during holidays, illness, training or high workload.",
        card2Title: "Day-to-day work",
        card2Body: "OTC sales, advice, prescription fulfilment and pharmaceutical care.",
        card3Title: "Manager cover",
        card3Body: "Reliable and responsible cover for pharmacy management during holidays or short-notice absence."
      },
      aboutpage: {
        title: "About me",
        profileP1: "When I began studying pharmacy at the University of Babylon in Iraq, I knew I had chosen a profession that would let me help people directly every day. My degree was taught entirely in English and gave me a broad foundation across pharmaceutical disciplines, so I am comfortable communicating in English both in everyday settings and in pharmaceutical terminology.",
        profileP2: "During my final year of study, I started working as a pharmaceutical representative. Because contact with people and communication have always been strengths of mine, I enjoyed this work very much. Over time, however, I realized that I wanted to deepen my pharmaceutical knowledge further. I therefore chose clinical pharmacy and worked for several years in a rotation program as a clinical pharmacist, gaining experience in internal medicine, endocrinology, oncology and on the COVID-19 ward.",
        profileP3: "Close collaboration with doctors, nurses and my pharmaceutical colleagues further developed my professional communication skills and scientific thinking. I learned to work across disciplines and to make pharmaceutical decisions with the best possible patient care in mind.",
        profileP4: "I have always wanted to discover new countries, cultures and people, so I decided to move to Germany. Berlin quickly became my new home, a city whose diversity, openness and international character still inspire me. I came to Germany in 2021, first completed intensive German courses, passed the specialist language exam and then worked as a pharmacist under supervision. After receiving my license in April 2023, I continued my professional path in German community pharmacies and have worked since then as an independent locum pharmacist.",
        profileP5: "Today, I especially value the opportunity to get to know new teams, ways of working and pharmacies again and again. My goal has always been to run my own pharmacy. Every assignment gives me the chance to learn from different teams, leadership styles and workflows. These experiences help me grow professionally and personally while supporting each pharmacy with full commitment.",
        languagesTitle: "Languages",
        languagesIntro: "Languages I can use confidently with customers, prescribers and teams.",
        langDe: "German",
        langEn: "English",
        langAr: "Arabic",
        whyCta: "Send inquiry",
        workstationAlt: "Tabarek Khazraj pointing"
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
        b3Quote: "Placeholder — this review will be replaced with a real client reference.",
        previousAria: "Previous reviews",
        nextAria: "Next reviews"
      },
      why: {
        title: "Why you should book me",
        card1Title: "Customer care",
        card1Body: "I enjoy working with people, listen attentively and explain advice clearly so every customer receives the right solution.",
        card2Title: "Empathy",
        card2Body: "I take concerns seriously without letting difficult situations overwhelm me. With calm and understanding, I support people even in demanding moments.",
        card3Title: "Communication",
        card3Body: "Clear, respectful and on equal footing with the team, with prescribers and in customer conversations.",
        card4Title: "Flexibility",
        card4Body: "I adapt quickly to new teams, pharmacy software and workflows, and get up to speed in new structures fast.",
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
        experienceTitle: "Experience at a glance",
        experience1: "Successfully supported more than 35 pharmacies",
        experience2: "Short- and long-term locum assignments",
        experience3: "5 months of experience in a mail-order pharmacy",
        experience4: "Assignments lasting weeks to months in specialized pharmacies:",
        experience5: "Care-home supply: unit-dose blister packaging, medication reviews and support for doctors' offices and care services",
        experience6: "Cannabis supply: checking, documentation and dispensing of medicinal cannabis products",
        experience7: "Shopping center pharmacies: active OTC work and confident handling of high customer volume.",
        s1Title: "Management cover",
        s1Body: "Cover for the pharmacy manager during holidays, illness or other reasons.",
        s2Title: "Customer advice & care",
        s2Body: "Active support in OTC sales and clear advice in customer conversations.",
        s3Title: "Prescription checks",
        s3Body: "Experience with ScanAdhoc as well as classic checks without software support.",
        s4Title: "Workforce planning",
        s4Body: "For long-term cover assignments, I am happy to support workforce planning.",
        s5Title: "Emergency services",
        s5Body: "Emergency service cover as part of an ongoing locum assignment.",
        s6Title: "Documentation",
        s6Body: "Documentation of narcotic prescriptions, imports, veterinary medicines and other special forms.",
        s9Title: "Medicinal cannabis",
        s9Body: "Checking, documentation and dispensing of medicinal cannabis products."
      },
      software: {
        title: "Software skills",
        intro: "I have experience with the following ERP and laboratory systems."
      },
      contact: {
        title: "Contact",
        intro: "Send a short request with timeframe, location and the scope you need. I'll get back to you as soon as possible.",
        bookTitle: "Book me",
        emailTitle: "Contact details",
        emailBody: "Email (preferred)",
        phoneLabel: "Phone",
        copyLabel: "Copy",
        copyEmailAria: "Copy email",
        copyPhoneAria: "Copy phone number",
        emailCopied: "Email copied to clipboard",
        phoneCopied: "Phone copied to clipboard",
        formName: "Contact person",
        formPharmacy: "Pharmacy",
        formEmail: "Email",
        formPhone: "Phone number",
        formDateStart: "Start date",
        formDateEnd: "End date",
        formMessage: "Message",
        formSubmit: "Submit inquiry",
        formError: "Your message could not be sent. Please try again or contact me by email.",
        successTitle: "Thank you",
        successMessage: "Thank you for your message. I'll be in touch with you shortly.",
        successCloseAria: "Close"
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
        pharmaciesValue: "30+",
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

  function renderSoftwareSkills() {
    document.querySelectorAll("[data-software-list]").forEach((list) => {
      list.textContent = "";
      const lines = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      lines.classList.add("software-lines");
      lines.setAttribute("aria-hidden", "true");
      list.appendChild(lines);
      SOFTWARE_SKILLS.forEach((skill) => {
        const item = document.createElement("li");
        item.className = skill.cv ? "software-card software-card--cv" : "software-card";
        item.setAttribute("aria-label", skill.name);
        if (skill.lines) {
          skill.lines.forEach((line) => {
            const span = document.createElement("span");
            span.textContent = line;
            item.appendChild(span);
          });
        } else {
          item.textContent = skill.name;
        }
        list.appendChild(item);
      });
    });
    scheduleSoftwareConnectorUpdate();
  }

  function scheduleSoftwareConnectorUpdate() {
    requestAnimationFrame(updateSoftwareConnectors);
  }

  function updateSoftwareConnectors() {
    document.querySelectorAll("[data-software-list]").forEach((list) => {
      const svg = list.querySelector(".software-lines");
      const cards = Array.from(list.querySelectorAll(".software-card"));
      if (!svg || cards.length === 0) return;

      const listRect = list.getBoundingClientRect();
      const styles = getComputedStyle(list);
      const centerYValue = styles.getPropertyValue("--software-center-y").trim();
      const centerX = listRect.width / 2;
      const centerY = centerYValue.endsWith("%")
        ? listRect.height * (parseFloat(centerYValue) / 100)
        : parseFloat(centerYValue) || listRect.height / 2;
      const centerRadius = parseFloat(getComputedStyle(list, "::after").width) / 2 || 38;

      svg.setAttribute("viewBox", `0 0 ${listRect.width} ${listRect.height}`);
      svg.setAttribute("width", listRect.width);
      svg.setAttribute("height", listRect.height);
      svg.replaceChildren();

      [
        [0.29, 0.17],
        [0.4, 0.28],
        [0.49, 0.4]
      ].forEach(([radiusX, radiusY]) => {
        const orbit = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
        orbit.setAttribute("cx", centerX);
        orbit.setAttribute("cy", centerY);
        orbit.setAttribute("rx", listRect.width * radiusX);
        orbit.setAttribute("ry", listRect.height * radiusY);
        svg.appendChild(orbit);
      });

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardX = rect.left - listRect.left + rect.width / 2;
        const cardY = rect.top - listRect.top + rect.height / 2;
        const dx = cardX - centerX;
        const dy = cardY - centerY;
        const distance = Math.hypot(dx, dy);
        if (distance <= 1) return;

        const ux = dx / distance;
        const uy = dy / distance;
        const cardRadius = Math.min(rect.width, rect.height) / 2;
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", centerX + ux * centerRadius);
        line.setAttribute("y1", centerY + uy * centerRadius);
        line.setAttribute("x2", cardX - ux * cardRadius);
        line.setAttribute("y2", cardY - uy * cardRadius);
        svg.appendChild(line);
      });
    });
  }

  function initSectionAnimations() {
    if (document.body.dataset.page === "Contact") return;

    const sections = Array.from(document.querySelectorAll(".hero, body > .counters, main > section"));
    if (sections.length === 0) return;

    sections.forEach((section, index) => {
      section.classList.add("section-reveal");
      section.style.setProperty("--reveal-delay", `${Math.min(index * 90, 540)}ms`);
    });

    const reveal = (section) => {
      section.classList.add("section-reveal--visible");
    };

    if (!("IntersectionObserver" in window)) {
      sections.forEach(reveal);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
  }

  function initItemAnimations() {
    const groupDefinitions = [
      [".counters", ":scope > .counter"],
      [".grid", ":scope > article"],
      [".testimonials-grid", ":scope > .testimonial-card"],
      [".why-grid", ":scope > .why-card"],
      [".language-list", ":scope > li"],
      [".experience-list", ":scope > li"],
      [".service-grid", ":scope > .service-card"],
      [".software-grid", ":scope > .software-card"],
      [".contact-cards", ":scope > .contact-card, :scope > .contact-side"],
      [".contact-card--email", ":scope > .contact-detail"]
    ];

    const groups = groupDefinitions.flatMap(([groupSelector, itemSelector]) =>
      Array.from(document.querySelectorAll(groupSelector)).map((group) => ({
        group,
        items: Array.from(group.querySelectorAll(itemSelector))
      }))
    ).filter(({ items }) => items.length > 0);

    if (groups.length === 0) return;

    groups.forEach(({ group, items }) => {
      group.classList.add("stagger-group");
      items.forEach((item, index) => {
        item.classList.add("stagger-item");
        item.style.setProperty("--item-reveal-delay", `${Math.min(index * 55, 385)}ms`);
      });
    });

    const reveal = (group) => group.classList.add("stagger-group--visible");

    if (!("IntersectionObserver" in window)) {
      groups.forEach(({ group }) => reveal(group));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    groups.forEach(({ group }) => observer.observe(group));
  }

  function initReviewCarousels() {
    document.querySelectorAll("[data-review-carousel]").forEach((carousel) => {
      const track = carousel.querySelector("[data-review-track]");
      const previous = carousel.querySelector("[data-review-previous]");
      const next = carousel.querySelector("[data-review-next]");
      if (!track || !previous || !next) return;

      const updateControls = () => {
        const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
        const hasOverflow = maxScroll > 2;
        previous.hidden = !hasOverflow;
        next.hidden = !hasOverflow;
        previous.disabled = !hasOverflow || track.scrollLeft <= 2;
        next.disabled = !hasOverflow || track.scrollLeft >= maxScroll - 2;
      };

      const scroll = (direction) => {
        const firstCard = track.querySelector(".testimonial-card");
        if (!firstCard) return;
        const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
        const distance = firstCard.getBoundingClientRect().width + gap;
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        track.scrollBy({
          left: direction * distance,
          behavior: reduceMotion ? "auto" : "smooth"
        });
      };

      previous.addEventListener("click", () => scroll(-1));
      next.addEventListener("click", () => scroll(1));
      track.addEventListener("scroll", updateControls, { passive: true });

      if ("ResizeObserver" in window) {
        const observer = new ResizeObserver(updateControls);
        observer.observe(track);
      }

      requestAnimationFrame(updateControls);
    });
  }

  function initContactForm() {
    const form = document.querySelector("[data-contact-form]");
    const dialog = document.querySelector("[data-form-success]");
    if (!form || !dialog) return;

    const submitButton = form.querySelector('[type="submit"]');
    const status = form.querySelector("[data-form-status]");
    const closeButton = dialog.querySelector("[data-form-success-close]");

    const closeDialog = () => {
      if (typeof dialog.close === "function") dialog.close();
      else dialog.removeAttribute("open");
    };

    if (closeButton) closeButton.addEventListener("click", closeDialog);

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (status) status.textContent = "";
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.setAttribute("aria-busy", "true");
      }

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: new FormData(form),
          headers: { Accept: "application/json" }
        });

        if (!response.ok) throw new Error(`Form submission failed: ${response.status}`);

        form.reset();
        if (typeof dialog.showModal === "function") dialog.showModal();
        else dialog.setAttribute("open", "");
      } catch (error) {
        if (status) {
          status.textContent = getPath("contact.formError", currentLang()) || "Your message could not be sent.";
        }
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.removeAttribute("aria-busy");
        }
      }
    });
  }

  function init() {
    const stored = getStoredLang();
    const lang = stored || detectBrowserLang();
    renderSoftwareSkills();
    applyLang(lang);
    initSectionAnimations();
    initItemAnimations();
    initReviewCarousels();
    initContactForm();

    document.querySelectorAll(".lang-switch [data-lang]").forEach((btn) => {
      btn.addEventListener("click", () => {
        applyLang(btn.getAttribute("data-lang"));
      });
    });

    window.addEventListener("resize", scheduleSoftwareConnectorUpdate);
    window.addEventListener("load", scheduleSoftwareConnectorUpdate, { once: true });
    if ("ResizeObserver" in window) {
      const observer = new ResizeObserver(scheduleSoftwareConnectorUpdate);
      document.querySelectorAll("[data-software-list]").forEach((list) => observer.observe(list));
    }

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

    document.querySelectorAll("[data-copy-target]").forEach((copyBtn) => {
      copyBtn.addEventListener("click", () => {
        const text = copyBtn.getAttribute("data-copy-target") || "";
        const feedbackKey = copyBtn.getAttribute("data-copy-feedback");
        const feedback = document.getElementById("copy-feedback");
        copy(text).then(() => {
          if (feedback) {
            const message = feedbackKey ? getPath(feedbackKey, currentLang()) : "";
            feedback.textContent = message || "Copied";
            feedback.classList.add("copy-feedback--show");
            setTimeout(() => feedback.classList.remove("copy-feedback--show"), 1800);
          }
        });
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

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
    { name: "PROKAS", cv: true },
    { name: "BtM Sys" },
    { name: "Pharmatechnik", lines: ["Pharma", "technik"] },
    { name: "Lauer-Fischer", cv: true, lines: ["Lauer-", "Fischer"] },
    { name: "Aposoft" },
    { name: "apotheke online", lines: ["apotheke", "online"] },
    { name: "pharma4you" }
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
        eyebrow: "Vertretungs-Apothekerin",
        title: "Tabarek Khazraj",
        lead: "Zuverlässige pharmazeutische Vertretung für Apotheken, Notdienste und kurzfristige Personalengpässe.",
        ctaPrimary: "Anfrage senden",
        ctaSecondary: "Direkt per E-Mail",
        portraitAlt: "Porträt von Tabarek Khazraj"
      },
      about: {
        title: "Pharmazeutische Unterstützung, wenn sie gebraucht wird",
        intro: "Seit April 2023 vertrete ich öffentliche Apotheken in Berlin und bundesweit - mit schneller Einarbeitung in Teams, Abläufe und Warenwirtschaftssysteme.",
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
        steckbriefP1: "Ich bin approbierte Apothekerin und seit April 2023 als selbstständige Vertretungsapothekerin in Berlin und bundesweit tätig. In dieser Zeit habe ich mehr als 30 öffentliche Apotheken vertreten und mich schnell in unterschiedliche Teams, Arbeitsabläufe und EDV-Systeme eingearbeitet.",
        steckbriefP2: "Meine Berufserfahrung verbindet den deutschen Apothekenalltag mit klinischer Pharmazie: Vor meiner Approbation in Berlin 2023 habe ich in öffentlichen Apotheken in Deutschland gearbeitet und von 2018 bis 2021 klinische Einsätze in Onkologie, Innerer Medizin, Endokrinologie und COVID-19-Stationen absolviert.",
        steckbriefP3: "Die Approbation als Apothekerin habe ich 2023 in Berlin erhalten. Ich bin Mitglied der Apothekerkammer Berlin und habe Pharmazie in einem fünfjährigen Universitätsstudium an der Universität Babylon studiert.",
        steckbriefP4: "Im Apothekenalltag arbeite ich selbstständig, flexibel und verantwortungsbewusst. Ich unterstütze Teams ruhig und strukturiert, kommuniziere klar mit Kundschaft, Ärztinnen, Ärzten und medizinischem Fachpersonal und entlaste die Apotheke dort, wo gerade Unterstützung gebraucht wird.",
        steckbriefP5: "Durch die Verbindung aus klinischer und öffentlicher Apothekenerfahrung bringe ich einen breiten pharmazeutischen Hintergrund in Vertretungseinsätze ein.",
        languagesTitle: "Sprachkenntnisse",
        languagesIntro: "Sprachen, in denen ich Kund*innen, Ärzt*innen und Teams sicher beraten kann.",
        langDe: "Deutsch",
        langEn: "Englisch",
        langAr: "Arabisch",
        whyTitle: "Warum Ihre Apotheke bei mir in sicheren Händen ist",
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
        b3Quote: "Platzhalter — diese Bewertung wird noch durch eine echte Kundenreferenz ersetzt."
      },
      why: {
        title: "Warum Sie mich buchen sollten",
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
        intro: "Ich unterstütze Apotheken bei personellen Engpässen im Raum Berlin und Brandenburg. Auf Anfrage bin ich auch bundesweit im Einsatz. Meine aktuelle Verfügbarkeit teile ich Ihnen gerne auf Anfrage mit.",
        badge: "Nach Vereinbarung",
        s1Title: "Vertretung der Apothekenleitung",
        s1Body: "Zuverlässige Vertretung der Apothekenleitung bei Urlaub, Krankheit oder anderen Ausfällen.",
        s2Title: "Kundenbetreuung",
        s2Body: "Aktive Mitarbeit im Handverkauf.",
        s3Title: "Rezeptkontrolle",
        s3Body: "Erfahrung mit ScanAdhoc und ALG Online sowie mit der klassischen Prüfung ohne Softwareunterstützung.",
        s4Title: "Dienstplanung",
        s4Body: "Unterstützung bei der Dienstplanung, wenn gewünscht und insbesondere bei längeren Vertretungen.",
        s5Title: "Notdienst",
        s5Body: "Nach Absprache auch bundesweit.",
        s6Title: "Dokumentation",
        s6Body: "Dokumentation von dokumentationspflichtigen Arzneimitteln wie BtM, Importen und weiteren Sonderfällen.",
        s7Title: "Feedback",
        s7Body: "Zur Optimierung Ihrer Prozesse führe ich nach der Vertretung gerne ein Feedback-Gespräch mit Ihnen.",
        s8Title: "Freiberuflichkeit",
        s8Body: "Erfahrung und Austausch rund um die freiberufliche Tätigkeit als Apothekerin.",
        s9Title: "Medizinalcannabis",
        s9Body: "Beratung und Unterstützung bei Prüfung, Herstellung, Abgabe und Dokumentation."
      },
      software: {
        title: "Softwarekenntnisse",
        intro: "Mit diesen Warenwirtschafts- und Laborprogrammen habe ich bereits Erfahrung gesammelt."
      },
      contact: {
        title: "Kontakt",
        intro: "Senden Sie mir eine kurze Anfrage mit Zeitraum, Ort und gewünschtem Umfang. Ich melde mich so schnell wie möglich zurück.",
        bookTitle: "Vertretung anfragen",
        emailTitle: "Kontakt per E-Mail",
        emailBody: "Für weitere Anfragen erreichen Sie mich unter:",
        copyLabel: "E-Mail kopieren",
        copied: "Kopiert!",
        formName: "Name",
        formPharmacy: "Apotheke",
        formEmail: "E-Mail",
        formPhone: "Telefon",
        formDateStart: "Startdatum",
        formDateEnd: "Enddatum",
        formType: "Art der Vertretung",
        formTypeDay: "Tagesvertretung",
        formTypeEmergency: "Notdienst",
        formTypeMulti: "Mehrtägiger Einsatz",
        formMessage: "Nachricht",
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
        lead: "Reliable pharmaceutical cover for pharmacies, emergency services and short-notice staffing gaps.",
        ctaPrimary: "Contact me",
        ctaSecondary: "Email directly",
        portraitAlt: "Portrait of Tabarek Khazraj"
      },
      about: {
        title: "Pharmaceutical support when you need it",
        intro: "Since April 2023, I have covered public pharmacies in Berlin and across Germany, adapting quickly to new teams, workflows and pharmacy software.",
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
        steckbriefP1: "I am a licensed pharmacist and have worked as an independent locum pharmacist in Berlin and across Germany since April 2023. In that role, I have covered more than 30 public pharmacies and adapted quickly to different teams, workflows and software systems.",
        steckbriefP2: "My experience combines German community pharmacy practice with clinical pharmacy: before receiving my Berlin pharmacist license in 2023, I worked in public pharmacies in Germany and completed clinical rotations from 2018 to 2021 in oncology, internal medicine, endocrinology and COVID-19 wards.",
        steckbriefP3: "I received my pharmacist license in Berlin in 2023. I am a member of the Berlin Chamber of Pharmacists and completed a five-year university pharmacy degree at the University of Babylon.",
        steckbriefP4: "In day-to-day pharmacy work, I am independent, flexible and responsible. I support teams calmly and systematically, communicate clearly with customers, prescribers and medical staff, and relieve the pharmacy wherever support is needed.",
        steckbriefP5: "By combining clinical and community pharmacy experience, I bring a broad pharmaceutical background to locum assignments.",
        languagesTitle: "Languages",
        languagesIntro: "Languages I can use confidently with customers, prescribers and teams.",
        langDe: "German",
        langEn: "English",
        langAr: "Arabic",
        whyTitle: "Why your pharmacy is in safe hands with me",
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
        formDateStart: "Start date",
        formDateEnd: "End date",
        formType: "Type of cover",
        formTypeDay: "Day cover",
        formTypeEmergency: "Emergency service",
        formTypeMulti: "Multi-day assignment",
        formMessage: "Message",
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

  function init() {
    const stored = getStoredLang();
    const lang = stored || detectBrowserLang();
    renderSoftwareSkills();
    applyLang(lang);

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

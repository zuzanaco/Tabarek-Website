# Vertretungs-Apothekerin — Tabarek Khazraj

Diese statische Website präsentiert die Leistungen von Tabarek Khazraj (Vertretungs-Apothekerin). Die aktive Site nutzt V1:

- **V1** (Standard): `index.html`, `about.html`, `leistungen.html`, `kontakt.html`, `thankyou.html`
- **V2** (Sophia-Layout, ungenutzt/geparkt): `index.v2.html`, `about.v2.html`, `leistungen.v2.html`, `kontakt.v2.html`, `thankyou.v2.html`

V2 bleibt bewusst im Code erhalten, ist aber nicht mehr von der aktiven V1-Site verlinkt oder verwendet. Die Sprachauswahl (DE/EN) wird in `localStorage` gespeichert.

## Bilder

Profilbilder liegen unter `images/`. Aktuell wird erwartet:

- `images/profile.png` — wird im Hero (Home) angezeigt
- `images/profile-workstation.png` — wird auf der About-Seite unter dem Steckbrief als breites Bild angezeigt

Solange die Datei fehlt, wird im Bild-Slot nur die Hintergrundfarbe (in V1 cremefarben, in V2 hellviolett) angezeigt. Drop-in der Datei genügt, das HTML referenziert sie bereits.

## V2-Archiv

V2 ist aktuell ungenutzt und nur als geparkte Alternative im Repository behalten. Die V1-Seiten enthalten keinen V1/V2-Schalter mehr.

- `style.css` — V1-Design (cremefarben / grün)
- `style-alt.css` — V2-Design (Sophia-Layout, lavendel, ungenutzt)
- `*.v2.html` — V2-Seiten (ungenutzt, nur bei direktem Aufruf erreichbar)

## Lokales Arbeiten

```bash
git clone https://github.com/zuzanaco/Tabarek-Website.git
cd Tabarek-Website
# Statisch serven, z. B. mit Python:
python3 -m http.server 8000
# Dann http://localhost:8000 im Browser öffnen
```

## Deployment auf GitHub Pages

Die Site wird automatisch über GitHub Actions deployt. Jeder Push auf `main` triggert den Workflow `.github/workflows/pages.yml`, der die Site auf GitHub Pages veröffentlicht.

Erstmalige Einrichtung (einmalig nötig):

1. **Repository auf GitHub erstellen** (falls noch nicht geschehen) und Code pushen:
   ```bash
   git remote add origin https://github.com/zuzanaco/Tabarek-Website.git
   git push -u origin main
   ```

2. **GitHub Pages in den Repo-Settings aktivieren** (einmalig):
   - Gehe zu https://github.com/zuzanaco/Tabarek-Website/settings/pages
   - Unter **Source** wähle **GitHub Actions** (statt "Deploy from a branch")
   - Speichern

3. **Ersten Deploy abwarten**: Der erste Lauf des `Deploy to GitHub Pages`-Workflows startet automatisch durch den Push auf `main`. Status prüfen unter https://github.com/zuzanaco/Tabarek-Website/actions

Die Site ist dann erreichbar unter:

**https://zuzanaco.github.io/Tabarek-Website/**

Hinweis: Die Startseite `index.html` (V1) wird direkt unter `/` ausgeliefert. V2-Seiten bleiben im Code, sind aber nicht Teil der aktiven Navigation.

# Vertretungs-Apothekerin — Tabarek Khazraj

Diese statische Website präsentiert die Leistungen von Tabarek Khazraj (Vertretungs-Apothekerin). Sie besteht aus mehreren Seiten: `index.html` (Home), `about.html` (Über mich), `leistungen.html`, `kontakt.html` sowie `thankyou.html`.

## Bilder

Profilbilder liegen unter `images/`. Aktuell wird erwartet:

- `images/profile.jpg` — wird im Hero (Home) und auf der About-Seite angezeigt

Solange die Datei fehlt, wird im Bild-Slot nur die Hintergrundfarbe (in V1 cremefarben, in V2 hellviolett) angezeigt. Drop-in der Datei genügt, das HTML referenziert sie bereits.

## Design-Umschaltung (V1 / V2)

Im Header jeder Seite gibt es einen `V1 | V2`-Schalter. Damit lässt sich zwischen zwei Stylesheets umschalten:

- `style.css` — aktuelles Design (Vorschlag 1)
- `style-alt.css` — alternativer Entwurf (Vorschlag 2)

Die Auswahl wird in `localStorage` unter `tabarek.design` gespeichert, sodass sie Seitenwechsel und Reloads überdauert. Eine kleine "V2 PREVIEW"-Markierung unten links erscheint nur, wenn V2 aktiv ist.

Lokales Arbeiten

```bash
# Repository initialisieren (falls noch nicht geschehen)
git init
git branch -M main
git add .
git commit -m "Initial commit: personal site"
```

Zu GitHub pushen

1. Erstelle ein neues Repository auf GitHub (z. B. `vertretungsapotheker-site`).
2. Verbinde dein lokales Repo und pushe:

```bash
# Ersetze <github-user>/<repo>.git durch deine URL
git remote add origin https://github.com/<github-user>/<repo>.git
git push -u origin main
```

Auf Render deployen (statisch)

1. Erstelle ein neues "Static Site" auf https://render.com
2. Verbinde dein GitHub-Repository mit Render.
3. Setze `Publish directory` auf `/` und baue keine zusätzlichen Befehle (keine Build-Command nötig für reine HTML/CSS-Seite).

Alternativ: Wenn du das `gh` CLI nutzt, kannst du das Repo auch per `gh repo create` erstellen und direkt pushen.

Fragen? Schick mir gern deinen GitHub-Repo-Link und ich kann das Pushen für dich anleiten oder automatisieren.

# Vertretungsapotheker — Tabarek Khazraj

Diese statische Website präsentiert die Leistungen von Tabarek Khazraj (Vertretungsapotheker). Sie besteht aus mehreren Seiten: `index.html` (Home), `leistungen.html`, `kontakt.html` sowie `thankyou.html`.

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

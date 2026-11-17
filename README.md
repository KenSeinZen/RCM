# RCM Aesthetics, Website

Statische Landing Page für RCM Aesthetics (Nails, Skin, Beauty) in Burscheid. Kein Build-Schritt, keine externen Schriften oder Tracker.

## Dateien

- `index.html`, `style.css`, `app.js`: die Seite
- `assets/`: Logo, Fotos (`editorial/`), Bewegungs- und Moment-Skripte (`motion/`, `moments/`)
- `impressum.html`, `datenschutz.html`: noch Platzhalter, vor dem Livegang ausfüllen
- `robots.txt`: sperrt Suchmaschinen, solange die Seite ein Entwurf ist

## Lokal ansehen

```bash
python3 -m http.server 8765
```

Dann `http://127.0.0.1:8765/index.html` öffnen.

## Vorschau mit GitHub Pages

Repository auf privat stellen (Pages auf privaten Repos braucht einen bezahlten Plan, sonst Netlify oder Cloudflare Pages nutzen), dann unter Settings, Pages, Branch `main`, Ordner `/ (root)`.

## Vor dem Livegang

- Impressum und Datenschutz ausfüllen
- `robots.txt` auf `Allow` ändern oder löschen
- Domain eintragen: Canonical-Link, `og:image` als absolute URL, Sitemap
- Von den Inhaberinnen bestätigen lassen: Öffnungszeiten (Fr/So), Zitate, Foto-Einwilligungen, Preise

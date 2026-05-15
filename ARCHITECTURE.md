# Architektura

## Stránky

- `index.html`,
- `about-us.html`,
- `gallery.html`,
- `blog.html`,
- `offer.html`,
- `contact.html`

Každá je samostatný HTML soubor.

## Sdílená hlavička

Navigace a breadcrumbs jsou implementovány jako Web Component (`<site-header>`) definovaná v [components/header-component.js](components/header-component.js). Každá stránka ji načítá přes `<script type="module" src="/components/header-component.js">`. Komponenta vkládá HTML, řeší mobilní collapse bez Bootstrap JS a dynamicky aktualizuje breadcrumbs podle `window.location.hash`.

## Breadcrumb navigace

Stránky používají hash-based routing (např. `/gallery.html#gallery`). Komponenta `<site-header>` čte hash z URL a zobrazí pouze odpovídající položku breadcrumbu. Pro přidání nové stránky do breadcrumbs přidej záznam `<li class="breadcrumb-item crumbs" id="<hash>">` do [components/header-component.js](components/header-component.js).

## Témata

Varianty Bootstrap CSS jsou v adresáři `themes/`. Aktivní téma je `lux-bootstrap.min.css`. `bootstrap.min.css` a `quartz-theme.bootstrap.min.css` jsou alternativy.

## Obrázky

Všechny obrázky jsou ve formátu `.webp`, uložené v `assets/images/`.

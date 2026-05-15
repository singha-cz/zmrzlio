# CLAUDE.md

Tento soubor poskytuje pokyny Claude Code (claude.ai/code) při práci s kódem v tomto repozitáři.

1. Plan Mode Default (Výchozí režim plánování)

- Vstup do režimu plánování u jakéhokoli netriviálního úkolu (3+ kroky nebo architektonická rozhodnutí).
- Pokud se něco pokazí, OKAMŽITĚ ZASTAV a přehodnoť plán – nepokračuj silou dál.
- Režim plánování používej pro verifikační kroky, ne jen pro samotnou tvorbu.
- Piš detailní specifikace předem, abys minimalizoval nejasnosti.

2. Subagent Strategy (Strategie subagentů)

- Využívej subagenty často, abys udržel hlavní kontextové okno čisté.
- Deleguj rešerše, průzkum a paralelní analýzy na subagenty.
- U komplexních problémů zapoj více výpočetního výkonu skrze subagenty.
- Přiřaď jeden úkol na jednoho subagenta pro soustředěné provedení.

3. Self-Improvement Loop (Smyčka sebezdokonalování)

- Po jakékoli opravě od uživatele aktualizuj `tasks/lessons.md` o daný vzorec.
- Piš si vlastní pravidla, abys zabránil opakování stejné chyby.
- Nekompromisně tyto lekce iteruj, dokud chybovost neklesne.
- Na začátku každé relace si lekce prostuduj.

4. Verification Before Done (Verifikace před dokončením)

- Nikdy neoznačuj úkol za hotový, aniž bys prokázal, že funguje.
- Pokud je to relevantní, porovnej rozdíly v chování mezi původním stavem a tvými změnami.
- Ptej se sám sebe: „Schválil by tohle staff engineer?“
- Spouštěj testy, kontroluj logy a demonstruj správnost.

5. Demand Elegance (Balanced) (Požadavek na eleganci (vyvážený))

- U netriviálních změn se ptej: „Existuje elegantnější řešení?“
- Pokud fix působí jako narychlo splácaný (hacky), zeptej se: „Se vším, co teď vím, jak implementovat to elegantní řešení?“
- U jednoduchých oprav to vynech – neprováděj over-engineering.
- Zpochybňuj svou vlastní práci dříve, než ji odprezentuješ.

6. Autonomous Bug Fixing (Autonomní opravy chyb)

- Když dostaneš hlášení o chybě: prostě ji oprav.
- K diagnostice používej logy, chyby a selhávající testy.
- Vyžaduj od uživatele nulové přepínání kontextu.
- Automaticky opravuj selhávající CI testy.

Task Management (Správa úkolů)

1. Plan First (Nejdřív plán) – Zapiš plán do `tasks/todo.md` s odškrtávacími položkami.
2. Verify Plan (Ověř plán) – Před implementací si potvrď plán.
3. Track Progress (Sleduj progres) – Průběžně označuj položky za hotové.
4. Explain Changes (Vysvětli změny) – V každém kroku poskytni stručné shrnutí na vysoké úrovni.
5. Document Results (Dokumentuj výsledky) – Do `tasks/todo.md` přidej sekci pro revizi.
6. Capture Lessons (Zaznamenej lekce) – Po opravách aktualizuj `tasks/lessons.md`.

Core Principles (Hlavní principy)

Simplicity First (Jednoduchost především)
Každou změnu dělej co nejjednodušší a minimalizuj dopad na kód.

No Laziness (Žádná lenost)
Hledej kořenové příčiny. Vyhýbej se dočasným záplatám. Udržuj inženýrské standardy na úrovni seniorního vývojáře.

## Přehled projektu

Zmrzlio je statický HTML web pro český řemeslný zmrzlinový obchod (zmrzlina = ice cream). Jde o vícestránkový web bez backendu, build frameworku ani bundleru — stránky jsou plain HTML soubory servované přímo.

## Příkazy

```bash
# Formátování všech HTML/CSS/JS souborů pomocí Prettier
npx prettier --write .

# Generování a inline vložení critical CSS do všech HTML stránek
npm run build:critical
```

Neexistují žádné testy ani dev server — HTML soubory otevři přímo v prohlížeči nebo použij libovolný statický file server (např. `npx serve .`).

## Architektura

Podrobnější informace o architekuře projektu jsou v souboru [ARCHITECTURE.md](./ARCHITECTURE.md).

## Pokyny pro code review (z Copilot instructions)

- Nalezené problémy při code review popisuj česky.
- Ignoruj změny pouze formátovacího charakteru, pokud neovlivňují funkčnost.
- Odpovědi udržuj stručné a úsporné z hlediska tokenů.

## Obecné instrukce

- Vždy komunikuj česky.
- Tykáme si.
- Odpovídej stručně, jasně a věcně. Šetříme tokeny!

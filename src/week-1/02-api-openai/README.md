# API OpenAI - Instrukcja uruchamiania

## Wymagania wstępne

Przed uruchomieniem zainstaluj zależności:

```bash
npm install
```

## Konfiguracja API Key

Utwórz plik `.env` w głównym katalogu projektu i dodaj swój klucz OpenAI:

```
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxx
```

**Ważne:** Nie commituj pliku `.env` - powinien być w `.gitignore`

## Jak uruchomić pliki TypeScript

### Opcja 1: Modyfikacja skryptu `dev` w package.json

Otwórz `package.json` i zmień linię `dev`:

```json
"scripts": {
  "dev": "tsx watch src/week-1/02-api-openai/NAZWA_PLIKU.ts"
}
```

Przykład:

```json
// Uruchomienie getProgrammerJoke.ts
"dev": "tsx watch src/week-1/02-api-openai/getProgrammerJoke.ts"
```

Następnie uruchom:

```bash
npm run dev
```

### Opcja 2: Bezpośrednie uruchomienie (bez modyfikacji package.json)

```bash
npx tsx src/week-1/02-api-openai/getProgrammerJoke.ts
```

### Opcja 3: Watch mode dla konkretnego pliku

```bash
npx tsx watch src/week-1/02-api-openai/getProgrammerJoke.ts
```

## Troubleshooting

Jeśli otrzymasz błąd autoryzacji - sprawdź czy:

- Plik `.env` istnieje w głównym katalogu projektu
- Klucz `OPENAI_API_KEY` jest prawidłowy
- `dotenv.config()` jest uruchomiony na początku pliku

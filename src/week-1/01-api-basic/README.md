# API Basic - Instrukcja uruchamiania

## Jak uruchomić pliki TypeScript

### Opcja 1: Modyfikacja skryptu `dev` w package.json

Otwórz `package.json` i zmień linię `dev`:

```json
"scripts": {
  "dev": "tsx watch src/week-1/01-api-basic/NAZWA_PLIKU.ts"
}
```

Przykłady:

```json
// Uruchomienie getPosts.ts
"dev": "tsx watch src/week-1/01-api-basic/getPosts.ts"

// Uruchomienie addPost.ts
"dev": "tsx watch src/week-1/01-api-basic/addPost.ts"
```

Uruchom w głównym folderze projektu:

```bash
npm run dev
```

### Opcja 2: Bezpośrednie uruchomienie (bez modyfikacji package.json)

```bash
npx tsx src/week-1/01-api-basic/getPosts.ts
npx tsx src/week-1/01-api-basic/addPost.ts
```

### Opcja 3: Watch mode dla konkretnego pliku

```bash
npx tsx watch src/week-1/01-api-basic/getPosts.ts
```

## Pliki w tym folderze

- **getPosts.ts** - GET request do JSONPlaceholder (pobiera listę postów)
- **addPost.ts** - POST request do JSONPlaceholder (dodaje nowy post)
- **getFlights.js** - GET request do AviationStack API (wymaga klucza API)

## Zmienne środowiskowe

Jeśli używasz pliku wymagającego klucza API (np. getFlights.js), upewnij się, że masz plik `.env` z odpowiednimi kluczami.

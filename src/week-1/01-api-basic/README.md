# API Basic - Instrukcja uruchamiania

## Jak uruchomić pliki TypeScript

### Opcja 1: Gotowe skrypty w package.json

Uruchom w głównym folderze projektu:

```bash
npm run api:get-posts
npm run api:add-post
npm run api:get-flights
```

### Opcja 2: Bezpośrednie uruchomienie

```bash
npx tsx src/week-1/01-api-basic/getPosts.ts
npx tsx src/week-1/01-api-basic/addPost.ts
npx tsx src/week-1/01-api-basic/getFlights.ts
```

### Opcja 3: Watch mode dla konkretnego pliku

```bash
npx tsx watch src/week-1/01-api-basic/getPosts.ts
npx tsx watch src/week-1/01-api-basic/addPost.ts
npx tsx watch src/week-1/01-api-basic/getFlights.ts
```

## Pliki w tym folderze

- **getPosts.ts** - GET request do JSONPlaceholder (pobiera listę postów)
- **addPost.ts** - POST request do JSONPlaceholder (dodaje nowy post)
- **getFlights.ts** - GET request do AviationStack API (wymaga klucza API)

## Zmienne środowiskowe

Jeśli używasz pliku wymagającego klucza API (np. getFlights.ts), upewnij się, że masz plik `.env` z odpowiednimi kluczami.

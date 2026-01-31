# API OpenAI - Instrukcja uruchamiania

## Jak działa kod

Program wysyła jednorazowe zapytanie do modelu OpenAI i wypisuje odpowiedź w konsoli. Dzięki temu poznasz, jak wysyłać proste requesty do API OpenAI i odbierać odpowiedzi. 💡

**Zapytanie:**

```
"Opowiedz losowy żart o programiście. Nie pytaj czy chcę kolejny"
```

**Zwracane:** Tekst odpowiedzi z żartem wyświetlony w konsoli

## Jak uruchomić plik TypeScript

### Opcja 1: Gotowy skrypt w package.json

Uruchom w głównym folderze projektu:

```bash
npm run joke
```

### Opcja 2: Bezpośrednie uruchomienie

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

# API OpenAI - Instrukcja uruchamiania

## Jak działa kod

Program wysyła jednorazowe zapytanie do modelu OpenAI i wypisuje odpowiedź w konsoli. Dzięki temu poznasz, jak wysyłać proste requesty do API OpenAI i odbierać odpowiedzi. 💡

**Zapytanie:**

```
"Opowiedz losowy żart o programiście. Nie pytaj czy chcę kolejny"
```

**Model:** `gpt-5-nano`

**Zwracane:** Tekst odpowiedzi z żartem wyświetlony w konsoli

## Jak uruchomić plik TypeScript

### Opcja 1: Modyfikacja skryptu `dev` w package.json

Otwórz `package.json` i zmień linię `dev`:

```json
"scripts": {
	"dev": "tsx watch src/week-1/02-api-openai/getProgrammerJoke.ts"
}
```

Uruchom w głównym folderze projektu:

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

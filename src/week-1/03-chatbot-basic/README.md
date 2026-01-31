# Chatbot Basic - Instrukcja uruchamiania

## Jak działa kod

Program uruchamia prostą pętlę rozmowy w konsoli, wysyła każdą wiadomość do modelu OpenAI i wypisuje odpowiedź. Dzięki temu możesz prowadzić podstawowy czat z AI w terminalu.

⚠️ **Ważne:** Czat nie zapisuje historii rozmowy – każde pytanie jest wysyłane niezależnie, bez kontekstu poprzednich wiadomości.

## Jak uruchomić plik TypeScript

### Opcja 1: Istniejący skrypt `start` w package.json

Plik jest już skonfigurowany, wystarczy uruchomić:

```bash
npm run start
```

### Opcja 2: Bezpośrednie uruchomienie (bez package.json)

```bash
npx tsx src/week-1/03-chatbot-basic/chatbot.ts
```

### Opcja 3: Watch mode dla konkretnego pliku

```bash
npx tsx watch src/week-1/03-chatbot-basic/chatbot.ts
```

## Jak zakończyć

Wpisz `koniec`, aby zakończyć działanie programu.

## Troubleshooting

Jeśli otrzymasz błąd autoryzacji - sprawdź czy:

- Plik `.env` istnieje w głównym katalogu projektu
- Klucz `OPENAI_API_KEY` jest prawidłowy
- `dotenv.config()` jest uruchomiony na początku pliku

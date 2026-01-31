# Chatbot z historią - Instrukcja uruchamiania

## Jak działa kod

Program uruchamia pętlę rozmowy w konsoli, wysyła każdą wiadomość do modelu OpenAI i wypisuje odpowiedź. Dzięki temu możesz prowadzić czat z AI w terminalu.

✅ **Czat zapisuje historię rozmowy** – każda kolejna wiadomość jest wysyłana z odniesieniem do poprzedniej odpowiedzi, dzięki czemu model utrzymuje kontekst całej konwersacji.

## Jak uruchomić plik TypeScript

### Opcja 1: Gotowy skrypt w package.json

Uruchom w głównym folderze projektu:

```bash
npm run chat
```

### Opcja 2: Bezpośrednie uruchomienie

```bash
npx tsx src/week-1/03-chatbot/chatbot.ts
```

## Jak zakończyć

Wpisz `koniec`, aby zakończyć działanie programu.

## Troubleshooting

Jeśli otrzymasz błąd autoryzacji - sprawdź czy:

- Plik `.env` istnieje w głównym katalogu projektu
- Klucz `OPENAI_API_KEY` jest prawidłowy
- `dotenv.config()` jest uruchomiony na początku pliku

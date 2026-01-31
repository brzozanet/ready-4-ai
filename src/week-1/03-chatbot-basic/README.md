# Chatbot Basic - Instrukcja uruchamiania

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

## Jak działa kod

Program uruchamia prostą pętlę rozmowy w konsoli, wysyła każdą wiadomość do modelu OpenAI i wypisuje odpowiedź. Dzięki temu możesz prowadzić podstawowy czat z AI w terminalu.

⚠️ **Ważne:** Czat nie zapisuje historii rozmowy – każde pytanie jest wysyłane niezależnie, bez kontekstu poprzednich wiadomości.

## Jak uruchomić plik TypeScript

Uruchom:

```bash
npm run start
```

## Jak zakończyć

Wpisz `koniec`, aby zakończyć działanie programu.

## Troubleshooting

Jeśli otrzymasz błąd autoryzacji - sprawdź czy:

- Plik `.env` istnieje w głównym katalogu projektu
- Klucz `OPENAI_API_KEY` jest prawidłowy
- `dotenv.config()` jest uruchomiony na początku pliku

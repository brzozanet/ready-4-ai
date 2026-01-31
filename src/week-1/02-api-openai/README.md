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

## Jak uruchomić plik TypeScript

Uruchom:

```bash
npm run dev
```

## Troubleshooting

Jeśli otrzymasz błąd autoryzacji - sprawdź czy:

- Plik `.env` istnieje w głównym katalogu projektu
- Klucz `OPENAI_API_KEY` jest prawidłowy
- `dotenv.config()` jest uruchomiony na początku pliku

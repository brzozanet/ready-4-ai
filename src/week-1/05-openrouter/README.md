# Mikroaplikacja: Czat CLI z OpenRouter

## Opis działania

Ta mikroaplikacja uruchamia prosty czat w terminalu z wykorzystaniem SDK OpenRouter.

Program:

- pyta użytkownika o kolejne wiadomości (`Ty: ...`),
- trzyma historię rozmowy w tablicy `messages`,
- wysyła całą historię do modelu `openai/gpt-5.3-chat`,
- odbiera odpowiedź w trybie stream (`stream: true`),
- składa odpowiedź asystenta i dodaje ją do historii,
- kończy działanie po wpisaniu `koniec`.

Dzięki temu model dostaje kontekst poprzednich tur rozmowy i odpowiada bardziej spójnie.

## Wymagania

W pliku `.env` w głównym katalogu projektu ustaw:

```env
OPENROUTER_API_KEY=twoj_klucz_api
```

## Jak uruchomić

### Opcja 1: skrypt z `package.json`

```bash
npm run openchat
```

### Opcja 2: bezpośrednio przez `tsx`

```bash
npx tsx src/week-1/05-openrouter/openchat.ts
```

## Jak zakończyć rozmowę

Wpisz:

```text
koniec
```

## Jak działa pamięć kontekstu

Po każdej turze aplikacja dopisuje do `messages`:

- wiadomość użytkownika (`role: "user"`),
- odpowiedź asystenta (`role: "assistant"`).

Następny request wysyła całą tę tablicę, więc czat "pamięta" wcześniejszą rozmowę.

## Troubleshooting

Jeśli pojawią się błędy, sprawdź:

- czy `OPENROUTER_API_KEY` jest ustawiony,
- czy uruchamiasz w terminalu (nie w Debug Console),
- czy payload do `openrouter.chat.send(...)` ma klucz `chatGenerationParams`,
- czy model `openai/gpt-5.3-chat` jest dostępny na Twoim koncie.

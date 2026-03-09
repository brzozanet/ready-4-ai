# Ready 4 AI 🚀

Ćwiczenia i projekt praktyczny z kursu **Ready 4 AI** – nauka podstaw pracy z API OpenAI i tworzenia aplikacji ze sztuczną inteligencją.

## 📋 Co zawiera to repozytorium

- **week-1/** – Podstawy pracy z API:
  - `01-api-basic/` – Proste requesty GET/POST do publicznych API
  - `02-api-openai/` – Pierwsza interakcja z OpenAI API
  - `03-chatbot/` – Interaktywny chatbot zapamiętujący historię rozmowy
  - `04-replicate/` – Generowanie obrazów AI z użyciem Replicate (Imagen)
  - `05-openrouter/` – Czat CLI z użyciem SDK OpenRouter
- **week-2/, week-3/, week-4/** – Materiały do dalszych ćwiczeń

- **week-2/** – AI jako asystent i mentor:
  - `01-code-review/` – Code review projektu Promptly Photo AI
  - `02-agents/` – Plik `AGENTS.md` definiuje zasady pracy agenta AI
- **week-3/, week-4/** – Materiały do dalszych ćwiczeń

## 🔧 Wymagania wstępne

### 1. Sklonuj repozytorium

```bash
git clone https://github.com/brzozanet/ready-4-ai.git
cd ready-4-ai
```

### 2. Zainstaluj zależności

```bash
npm install
```

### 3. Skonfiguruj zmienne środowiskowe

Utwórz plik `.env` w głównym katalogu projektu:

```bash
# Dla ćwiczeń z OpenAI
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxx

# Dla ćwiczeń z innymi API (jeśli potrzebne)
AVIATIONSTACK_API_KEY=xxxxxxxxxxxxx

# Dla ćwiczeń z Replicate (imagen)
REPLICATE_API_TOKEN=r8_xxxxxxxxxxxxx

# Dla ćwiczeń z OpenRouter (openchat)
OPENROUTER_API_KEY=sk-or-xxxxxxxxxxxxx
```

**⚠️ Ważne:**

Plik `.env` utwórz wg wzorca `.env.example`, który jest w repozytorium. Nigdy nie commituj `.env` do repozytorium! Plik `.env` jest już w `.gitignore`.

## 📚 Jak uruchomić ćwiczenia

Szczegółowe instrukcje znajdują się w `README.md` każdego folderu:

| Skrypt npm                | Folder / plik                                   |
| ------------------------- | ----------------------------------------------- |
| `npm run api:get-posts`   | `src/week-1/01-api-basic/getPosts.ts`           |
| `npm run api:add-post`    | `src/week-1/01-api-basic/addPost.ts`            |
| `npm run api:get-flights` | `src/week-1/01-api-basic/getFlights.ts`         |
| `npm run joke`            | `src/week-1/02-api-openai/getProgrammerJoke.ts` |
| `npm run chat`            | `src/week-1/03-chatbot/chatbot.ts`              |
| `npm run imagen`          | `src/week-1/04-replicate/imagen.ts`             |
| `npm run openchat`        | `src/week-1/05-openrouter/openchat.ts`          |

- [API Basic](src/week-1/01-api-basic/README.md)
- [API OpenAI](src/week-1/02-api-openai/README.md)
- [Chatbot](src/week-1/03-chatbot/README.md)
- [Replicate Imagen](src/week-1/04-replicate/README.md)
- [OpenRouter Chat](src/week-1/05-openrouter/README.md)

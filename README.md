# ready-4-ai 🚀

Ćwiczenia i projekt praktyczny z kursu **Ready 4 AI** – nauka podstaw pracy z API OpenAI i tworzenia aplikacji z sztuczną inteligencją.

## 📋 Co zawiera to repozytorium

- **week-1/** – Podstawy pracy z API:
  - `01-api-basic/` – Proste requesty GET/POST do publicznych API
  - `02-api-openai/` – Pierwsza interakcja z OpenAI API
  - `03-chatbot-basic/` – Interaktywny chatbot bez historii rozmowy
- **week-2/, week-3/, week-4/** – Materiały do dalszych ćwiczeń

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
```

**⚠️ Ważne:** Plik `.env` utwórz wg wzorca `.env.example` który jest w repozytorium. Nigdy nie commituj `.env` do repozytorium! Plik `.env` jest już w`.gitignore`

## 📚 Jak uruchomić ćwiczenia

Szczegółowe instrukcje znajdują się w `README.md` każdego folderu:

- [API Basic](src/week-1/01-api-basic/README.md)
- [API OpenAI](src/week-1/02-api-openai/README.md)
- [Chatbot Basic](src/week-1/03-chatbot-basic/README.md)

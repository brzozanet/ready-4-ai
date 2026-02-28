# Mikroaplikacja: Generowanie obrazów AI (Replicate)

## Opis działania

Ta mikroaplikacja pozwala generować obrazy na podstawie tekstowego opisu (promptu) z wykorzystaniem API Replicate. Użytkownik podaje opis, a zwraca aplikacja wygenerowany obraz, który jest zapysywany jako plik `output.jpg` w głównym folderze mikroaplikacji.

✅ **Obraz generowany jest przez AI** – aplikacja korzysta z wybranego modelu (np. Stable Diffusion) dostępnego na Replicate, by stworzyć grafikę na podstawie Twojego promptu.

## Jak uruchomić plik TypeScript

### Opcja 1: Gotowy skrypt w package.json

Uruchom w głównym folderze projektu:

```bash
npm run imagen
```

### Opcja 2: Bezpośrednie uruchomienie

```bash
npx tsx src/week-1/04-replicate/imagen.ts
```

## Jak zakończyć

Program kończy się automatycznie po wygenerowaniu obrazu lub w przypadku błędu.

## Troubleshooting

Jeśli otrzymasz błąd autoryzacji lub połączenia z API Replicate, sprawdź czy:

- Plik `.env` istnieje w głównym katalogu projektu
- Klucz `REPLICATE_API_TOKEN` jest prawidłowy
- `dotenv.config()` jest uruchomiony na początku pliku

# Mikroaplikacja: Generowanie obrazu AI (Replicate Imagen)

## Opis działania

Ta mikroaplikacja generuje obraz na podstawie opisu podanego w terminalu, korzystając z modelu `google/imagen-4` przez SDK Replicate.

Przeplyw programu:

- pyta uzytkownika o prompt (`Napisz, jaki mam stworzyc obraz?`),
- buduje obiekt `input` (m.in. `prompt`, `image_size`, `aspect_ratio`, `output_format`),
- wywoluje `replicate.run("google/imagen-4", { input })`,
- odbiera wynik jako `ReadableStream`,
- czyta stream po chunkach i laczy je do bufora,
- zapisuje plik lokalnie jako `output.png`,
- wypisuje komunikat o poprawnym zapisie.

## Wymagania

W pliku `.env` (w glownym katalogu projektu) ustaw:

```env
REPLICATE_API_TOKEN=twoj_klucz_api
```

## Jak uruchomic

### Opcja 1: skrypt z `package.json`

```bash
npm run imagen
```

### Opcja 2: bezposrednio przez `tsx`

```bash
npx tsx src/week-1/04-replicate/imagen.ts
```

## Jak zakonczyc

Program konczy sie automatycznie po zapisaniu pliku albo po bledzie.

## Plik wyjsciowy

Aktualny kod zapisuje obraz jako:

```text
output.png
```

Uwaga: w `input` ustawione jest `output_format: "jpg"`, ale zapis jest wykonywany do pliku `output.png`.

## Troubleshooting

Jesli pojawia sie blad, sprawdz:

- czy `REPLICATE_API_TOKEN` jest ustawiony,
- czy `dotenv.config()` jest wywolywany przed uzyciem klienta,
- czy masz polaczenie z internetem,
- czy model `google/imagen-4` jest dostepny dla Twojego konta.

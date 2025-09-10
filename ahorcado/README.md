# Ahorcado (Angular)

Aplicación del juego del Ahorcado desarrollada con Angular (standalone components) y señales reactivas.

## Cómo ejecutar

```bash
npm start
```

Abre `http://localhost:4200`.

## Qué hace la app (paso a paso, breve)

1. Selecciona aleatoriamente una palabra de una lista en `app.ts`.
2. Escucha letras del teclado (físico y botones) desde `teclado-ahorcado` y las envía a `App`.
3. `App` actualiza la letra pulsada y resta oportunidades si la letra no está en la palabra.
4. `palabra-ahorcado` muestra la palabra con guiones y revela letras acertadas.
5. `imagen-ahorcado` cambia la imagen `assets/imagenes/ahorcado{0..6}.png` según los fallos.
6. Si se completa la palabra, se muestra mensaje de victoria y se desactiva el teclado.
7. Si se agotan las oportunidades, se muestra mensaje de derrota y se desactiva el teclado.
8. Con el botón Reiniciar se elige nueva palabra, se restauran oportunidades y se reinicia la partida.

## Componentes

- `app-imagen-ahorcado`
  - Input: `fallos: number`
  - Lógica: calcula y muestra `assets/imagenes/ahorcado{n}.png` (clamp 0..6).

- `app-palabra-ahorcado`
  - Inputs: `palabraSecreta: string`, `letraPulsada: string`
  - Output: `palabraCompletada: void`
  - Lógica: mantiene `letrasIntentadas()` (signal), calcula `palabraMostrada()` y `completada()`.

- `app-teclado-ahorcado`
  - Input: `juegoTerminado: boolean`
  - Output: `letraPulsada: string`
  - Lógica: emite letras por clic y por `keydown`; deshabilita cuando el juego termina.

## Estado principal (`App`)

- Señales: `palabraSecreta()`, `oportunidades()`, `letraTeclado()`, `fallos()` y `juegoTerminado()`.
- Métodos: `enviarLetra(letra)`, `comprobarOportunidades(letra)`, `onPalabraCompletada()`, `reiniciar()`.

## Assets

Asegúrate de tener en `src/assets/imagenes` los archivos:
`ahorcado0.png` … `ahorcado6.png`.

`angular.json` está configurado para copiar `src/assets` al build (`/assets`).

## Lista de palabras

Definidas en `app.ts` en `palabrasAhorcado`. Puedes editarlas libremente.

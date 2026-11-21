# Evidencia — Serie III (carné {{CARNE}})

Repositorio: {{URL}}

## 1. Repositorio y commits
Proyecto subido con git en varios commits pequeños y descriptivos:

```
{{LOG}}
```

## 2. Workflow de GitHub Actions
- Archivo: [`.github/workflows/cypress.yml`](../.github/workflows/cypress.yml)
- Se ejecuta en cada `push` (y en cada Pull Request a `main`): instala dependencias, levanta la página y corre Cypress.
- Corrida inicial en `main`: {{RUN_MAIN}} — **{{RUN_MAIN_OK}}**
- Corrida final en `main` (después del merge): {{RUN_MAIN_FINAL}} — **{{RUN_MAIN_FINAL_OK}}**

## 3. Video y capturas generados por Cypress
`cypress.config.js` tiene `video: true` (graba toda la corrida) y `screenshotOnRunFailure: true` (Cypress captura por sí mismo las pruebas que fallan). El workflow los sube siempre como artifact **`cypress-evidencia`** (Actions → la corrida → *Artifacts*).

| Evidencia | Origen | Archivo |
|---|---|---|
| Video de la corrida en verde | {{RUN_MAIN}} | [video-corrida-verde.mp4](evidencia/video-corrida-verde.mp4) |
| Video de la corrida en rojo | {{RUN_ROJO}} | [video-corrida-roja.mp4](evidencia/video-corrida-roja.mp4) |
| Captura automática de la prueba que falló | {{RUN_ROJO}} | [captura-prueba-fallida.png](evidencia/captura-prueba-fallida.png) |

Nombre original de la captura: `{{CAPTURA}}`

![Captura automática de Cypress](evidencia/captura-prueba-fallida.png)

## 4. Protección de la rama `main`
Configuración aplicada (Settings → Branches):

```json
{{PROT}}
```

- **Status check obligatorio:** el check `cypress` debe pasar antes de cualquier merge.
- **Push directo bloqueado:** `main` solo acepta cambios por Pull Request (también para el administrador).

Intento de push directo a `main` (bloqueado = **{{PUSH_BLOQUEADO}}**):

```
{{PUSH_OUT}}
```

## 5. Demostración con Pull Request
PR: {{PR}}

1. Se cambió el mensaje de error del correo → la prueba falló → CI en **rojo** ({{PR_ROJO}}).
2. Intento de merge con el CI en rojo (bloqueado = **{{MERGE_BLOQUEADO}}**):
```
{{MERGE_OUT}}
```
3. Se corrigió el mensaje → CI en **verde** ({{PR_VERDE}}) → merge permitido.
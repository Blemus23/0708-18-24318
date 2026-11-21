# Registro con Cypress — 0908-18-24318

**Estudiante:** Brando Arnoldo Lemus Felipe · **Carné:** 0908-18-24318

[![Pruebas Cypress](https://github.com/Blemus23/0908-18-24318/actions/workflows/cypress.yml/badge.svg)](https://github.com/Blemus23/0908-18-24318/actions/workflows/cypress.yml)

Página de registro hecha desde cero con **HTML, CSS y JavaScript puro** (sin frameworks), probada con **Cypress** y con integración continua en **GitHub Actions**.

## Funcionalidad
- Campos: nombre, correo electrónico y contraseña.
- Validación en JavaScript (`public/app.js`):
  - nombre obligatorio;
  - el correo debe contener `@`;
  - la contraseña debe tener al menos 6 caracteres.
- Dato inválido → mensaje de error junto al campo, **sin recargar** la página (`preventDefault`).
- Datos válidos → mensaje **"Registro exitoso"** y formulario vacío, sin recargar.

## Pruebas (`cypress/e2e/registro.cy.js`)
| # | Prueba | Verifica |
|---|---|---|
| 1 | Datos inválidos | Los 3 mensajes de error |
| 2 | Datos válidos | "Registro exitoso" y campos vacíos |

## Ejecutar localmente
```bash
npm install          # instala Cypress y http-server
npm start            # http://localhost:3001
npx cypress open     # Test Runner (interfaz gráfica)
npx cypress run      # modo consola
```

## Integración continua
- Workflow: [`.github/workflows/cypress.yml`](.github/workflows/cypress.yml)
- Corre en cada `push` (cualquier rama) y en cada `pull_request` a `main`, levanta la página y ejecuta Cypress.
- Cypress graba el **video de toda la corrida** y toma **capturas automáticas de las pruebas que fallan**; el workflow las sube siempre como artifact **`cypress-evidencia`**.
- La rama `main` está **protegida**: exige que el check `cypress` pase antes de cualquier merge y bloquea el push directo.

## Evidencia
Ver [`docs/EVIDENCIA.md`](docs/EVIDENCIA.md).

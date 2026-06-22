# Fiori App

Aplicacion SAP Fiori freestyle basada en SAPUI5 y UI5 Tooling.

## Requisitos

- Node.js 20 o superior
- Acceso a SAP BTP Neo con permisos para desplegar aplicaciones
- SAP Web IDE Full-Stack o el mecanismo de deploy que use tu landscape Neo

## Comandos

- `npm install`
- `npm start`
- `npm run build`

## Deploy en BTP Neo

Este proyecto no necesita MTA para un despliegue básico en Neo porque es una app UI5 freestyle estática.

Pasos recomendados:

1. Ejecutar `npm run build` para generar `dist/`.
2. Verificar que exista [neo-app.json](neo-app.json) en la raíz del proyecto.
3. Subir el contenido de `dist/` al entorno Neo usando SAP Web IDE Full-Stack o la herramienta de despliegue de tu cuenta.
4. Si la app consume backend, configurar destinations en Neo antes del deploy.
5. Abrir la URL resultante en el portal de Neo y validar navegación y recursos estáticos.

Configuración incluida en [neo-app.json](neo-app.json):

- `/resources` apunta al runtime de SAPUI5.
- `/test-resources` apunta a los recursos de prueba de SAPUI5.
- `/webapp/resources` cubre escenarios de preview o mapeos locales comunes.
- `cacheControl` evita que el navegador sirva archivos viejos después del deploy.

## Cuándo usar MTA

Usa MTA solo si vas a trabajar en Cloud Foundry o necesitas empaquetar varios módulos y servicios en un mismo despliegue. Para este caso en Neo, no es obligatorio.
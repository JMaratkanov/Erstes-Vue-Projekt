# first-vue-project
Was passiert hier:

Ich habe ein neues Vue-Projekt erstellt (Vue 3 mit vite)
#####################
npm init vue@latest

Typescript  -No 
JSX         -Yes 
Router      -Yes
Pinia       -No
Vitest      -No
Cypress     -No
ESlint      -Yes
Prettier    -Yes 

cd Ordner
npm install
npm run lint
npm run dev
#####################

Dann habe ich alles rausgeschmissen was vite an HelloWorld Komponenten hatte und mit einem blanken Projekt angefangen

Schritt 1:
Die main.js erstellt eine neue App/Vue-Instanz basierend auf der App.vue und mounted diese auf der index.html über die id eines leeren div
Die index.html importiert dabei das main.js Skript und jetzt haben wir in der App.vue eine direkte Verbindung/Zugriff zwischen der Template und Javascript 


## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

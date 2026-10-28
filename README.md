# React Business Website — No Vite

React + Create React App, Tailwind CSS v3, Firebase Firestore.

## Install
```bash
npm install
```

## Run
Copy `.env.example` to `.env` and fill in Firebase Web App values, then:
```bash
npm start
```
Create React App opens http://localhost:3000.

## Firebase
1. Create a project at https://console.firebase.google.com/
2. Register a Web App and copy its config into `.env`, using the `REACT_APP_` variable names.
3. Create a Cloud Firestore database.
4. Review and publish `firestore.rules.example` in Firestore Rules.
5. Restart `npm start` after editing `.env`.

## Production build
```bash
npm run build
```
Build output is in `build/`.

Firebase client config values are visible to users in the browser. Never add service-account private keys to `.env` or frontend code. Public contact forms can attract spam; consider Firebase App Check and additional abuse controls.

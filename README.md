Purpose of this repo is to 
- test auth0 login and api protection
- checking auth0-react compatibility with nextjs
- demonstrate an issue I found with upgrading the auth0-react package

## Getting Started

First, create and configure an app and api in auth0 dashboard.
- App -> [Quick Start React SPA Login](https://auth0.com/docs/quickstart/spa/react/01-login)
- API -> [Add authorization to an Express.js API application](https://auth0.com/docs/quickstart/backend/nodejs/interactive)

Second, set environment variables according to your Auth0 app and api in the `.env.development` file.

See `.env.env` for what variables to set.

Third, open two terminals, one for `backend` and one for `frontend-next`:

```bash
# backend
npm install
npm start

# frontend-next
npm i
npm run dev
```

Use the GUI on [localhost:3000](http://localhost:3000) to log in and test against public and private endpoint.


## Current status

Found that authentication works when using `"@auth0/auth0-react": "^1.10.1",` and gets an error when using `"@auth0/auth0-react": "^2.0.1",`.

Check [auth0-react change log](https://github.com/auth0/auth0-react/blob/master/CHANGELOG.md) for package update details.

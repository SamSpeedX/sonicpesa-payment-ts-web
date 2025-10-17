# simple-payment

A minimal HTTP payment API demonstrating integration with the SonicPesa payment provider. Designed as a small, production-capable starter: create payments, proxy provider calls (auth/signature), receive and verify webhooks, and persist state (in-memory or configurable DB).

## Quick overview
- Language/runtime: Node (recommended >=16)
- Purpose: Reference starter for creating payments
- Location: /SamSpeedX/simple-payment (root README)

## Features
- Create / query / (optionally) cancel payments
- Proxy requests to SonicPesa with API key/signature handling
- Webhook receiver with HMAC signature verification
- Configurable persistence: in-memory (dev) or database (prod)
- Health and metrics endpoints

## Requirements
- Node 16+ and npm (or yarn)
- Git
- Docker (optional)
- SonicPesa sandbox/test credentials for integration testing

## Install
1. Clone and open the project
  git clone <repository-url>
  cd sonicpesa/simple-payment

2. Install
  npm install
  # or
  yarn

## Configuration (env)
Create a .env for local development or set the following in your environment:

- VITE_API_KEY

Example .env:
```env
VITE_API_KEY=pk_test_xxx
```

## Run
Development:
npm run dev

Build + production:
npm run build
npm start

## Deployment notes
- Use managed DB in production; avoid in-memory stores
- Serve behind HTTPS, validate webhooks, rotate secrets/API keys periodically
- Monitor health/metrics and implement retries/backoff for provider calls

## Contributing & License
- Fork, branch, test, open PR. Follow lint/tests in repository.

---

- Developed by Sam Software.
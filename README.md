# simple-payment

A minimal HTTP payment API demonstrating integration with the SonicPesa payment provider. Designed as a small, production-capable starter: create payments, proxy provider calls (auth/signature), receive and verify webhooks, and persist state (in-memory or configurable DB).

## Requirements
- Node 16+ and npm (or yarn)
- Git

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
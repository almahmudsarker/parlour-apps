# Testing Strategy

## E2E (Cypress)
- Critical paths: login, add to cart, checkout, payment success/fail
- Visual sanity: core pages render
- Runs in CI on PR and push to dev/main

## How to run locally
- `npm run dev` (app at http://localhost:5173)
- `npx cypress open` or `npx cypress run`

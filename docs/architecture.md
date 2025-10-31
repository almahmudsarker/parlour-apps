# Architecture

- Frontend: Vite (React), Tailwind, Headless UI
- State/Data: TanStack Query (if used) or local state
- Backend: Express (separate service) or serverless endpoints (if any)
- Auth: Firebase Auth + JWT (API)
- Payments: Stripe, bKash, Nagad, PayPal SDKs
- Hosting: Firebase Hosting
- Testing: Cypress (E2E)

## Data Flow
User → React UI → API (Express) → MongoDB  
Payments → Provider SDK → Webhooks (if applicable) → Order status update

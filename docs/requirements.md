# Software Requirements (High Level)

## Functional
- Browse services & products
- Booking & checkout
- Payments: Stripe/bKash/Nagad/PayPal
- Auth (register, login, JWT)
- Admin: manage services, products, orders

## Non-Functional
- Performance: initial load < 2.5s on 3G
- Security: JWT, HTTPS, secret management
- Availability: 99.5% monthly
- Testability: E2E with Cypress, CI on PR

## Acceptance Criteria (Examples)
- Users can complete checkout with Stripe test card
- Booking confirmation email sent
- Admin panel gated behind auth

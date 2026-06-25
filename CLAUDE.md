# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # dev server at http://localhost:4200
npm run build      # production build
npm test           # run tests with Vitest
```

## Architecture

This is an Angular 21 standalone-component app (no NgModules). All components use the `imports: []` array directly.

**Routing** (`src/app/app.routes.ts`): All routes are lazy-loaded via `loadComponent`. The root route renders `Layout` as a shell with `<router-outlet>`, and all feature routes are children of it. The `login` route sits outside the shell. `authGuard` exists but is currently commented out on the `employee/:id` route.

**Shell / Layout** (`src/app/Navbar/layout.ts`): Acts as the app shell — contains the sidebar nav, the `<router-outlet>` for child routes, and a `ShipmentForm` that emits `ShipmentData` upward to update dashboard counters.

**Feature areas:**
- `Employee/` — list and detail views; data fetched from `EmployeeService` which hits `jsonplaceholder.typicode.com/users`
- `Shipments/` — `StatcardValues` is the default dashboard route showing stat cards + shipment form; `shipment-list` has hardcoded mock data; `ShipmentForm` emits `formsubmitted` events; `StatCard` is a dumb display component accepting `title` and `value` inputs
- `Customer/` — two parallel implementations for learning: `Tables-practice/customer-list` (uses `@Input`, normal arrays, and signals side by side) and `customer-cards & Lists/customer-cards` (card-based layout); both fetch from `EmployeeService` despite being called "customer" components

**Services** (`src/app/Service/`):
- `EmployeeService` — singleton, uses `HttpClient`, exposes a `signal<Employee[]>` and HTTP methods; reused by Customer components
- `Auth` — simple `signal(false)` flag; no persistence or real auth
- `authGuard` — functional guard, redirects to `/login` with `returnUrl` query param

**Models** (`src/app/models/`): `Employee` (matches JSONPlaceholder `/users` shape with nested `Address` and `Company`), `ShipmentData` (customer + union status string).

**Testing**: Uses Vitest (not Karma/Jasmine). Test files are co-located as `*.spec.ts`.

**Styling**: Bootstrap 5 is available globally; each component also has its own scoped `.css` file.

## Key conventions

- Component class names omit the `Component` suffix (e.g., `EmployeeList`, not `EmployeeListComponent`) — Angular 21 convention
- Services use `inject()` rather than constructor injection
- Signals are preferred for reactive state; `ChangeDetectorRef` is used only where needed alongside normal arrays (seen in Customer components as a learning comparison)
- The `Customer/` folder contains intentional side-by-side pattern comparisons (normal array vs signal, `@Input` vs fetch) — preserve these when editing

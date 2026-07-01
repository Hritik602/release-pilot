---
name: ReleasePilot Development & Architecture
description: Core guidelines, technology stack, and architectural principles for building the ReleasePilot web application.
---

# ReleasePilot Architecture & Development Skill

This skill defines the core principles, architecture, and workflow for building ReleasePilot. Always refer to these guidelines before making architectural changes or creating new features.

## 1. Technology Stack
- **Frontend & Backend**: Next.js (App Router) + TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: Clerk
- **Future Additions**: Redis + BullMQ (Jobs), Stripe (Payments), OpenAI API (AI features)

## 2. Architecture Pattern (Module-Based Clean Architecture)
Follow a strict layered architecture to separate concerns. Do not mix database logic into UI components or directly into API routes.

**Flow:**
`UI Components` → `Server Actions / API Routes` → `Service Layer` → `Repository / Prisma Queries` → `Database` / `External APIs`

**Module Structure Example (`src/modules/releases/`):**
- `release.service.ts`: Business logic
- `release.repository.ts`: Database queries
- `release.types.ts`: TypeScript interfaces/types
- `release.validators.ts`: Zod or similar validation schemas

## 3. Directory Structure
```text
E:\ReleasePilot
  docs/
  src/
    app/            # Next.js App Router (pages & layouts)
      (marketing)/
      (auth)/
      (dashboard)/
      api/
    components/     # Reusable UI components
      ui/           # Generic components (buttons, inputs)
      dashboard/    # Feature-specific components
      releases/
      integrations/
      checklist/
    modules/        # Business logic & Database logic
      workspaces/
      projects/
      releases/
      checklist/
      integrations/
      github/
      slack/
      scoring/
      ai/
      billing/
      audit/
    server/         # Core server setup
      db/
      services/
      security/
      jobs/
    lib/            # Utilities
      validators/
      errors/
      utils/
  prisma/           # Database schema
  public/           # Static assets
```

## 4. Development Workflow
1. **Plan & Freeze Scope**: Ensure scope and manual components (e.g., auth provider, DB hosting) are decided before coding.
2. **Project Setup**: Initialize Next.js, TypeScript, Tailwind, folder architecture, and basic layout.
3. **UI First (From Design)**: Build UI from Stitch/Figma designs. Set up design tokens (colors, spacing, fonts). Build the app shell and one screen (e.g., dashboard) at a time.
4. **Backend Implementation**: Implement Clerk Auth, workspaces, projects, release logic, and database schemas *only after* UI structure is clear.
5. **Integrations**: Implement GitHub, Slack, AI, Stripe sequentially.

## 5. UI/UX & Design Guidelines
- **Design Link**: https://stitch.withgoogle.com/projects/2680667183247905427
- Prioritize creating a **dashboard prototype** first as the primary starting point.
- Extract and use design tokens consistently (colors, spacing, typography, cards, buttons).

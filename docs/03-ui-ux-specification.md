# UI/UX Specification for ReleasePilot

## 1. All Screens Overview
Based on the Stitch/Figma design files, the application contains the following primary screens:
- Main Dashboard (Engineering Ops)
- Release Detail Page
- QA Checklist Page
- Integrations Settings
- AI Insights Page
- Audit Logs Page
- Team Management Page
- Settings Page
- Sign In / Sign Up
- Workspace & Project Setup
- Landing Page

## 2. Layout Structure & Sidebar Navigation
- **App Shell**: 
  - Fixed Sidebar (Left) with a width of `240px`.
  - Sticky Top Navigation Bar (Height: `48px`).
  - Main Content Area taking the remaining space with a max-width container (`1440px`).
- **Sidebar Items**:
  - Dashboard (Active state: `border-l-4 border-primary bg-surface-container-highest`)
  - Releases
  - Checklist
  - Integrations
  - AI Insights
  - Audit Logs
  - Team
- **Sidebar Footer**: "New Release" CTA button, Support, Help Center.
- **Top Bar**: Search input, Platform filters (iOS, Android, Flutter), Notification bell, User Profile.

## 3. Dashboard Cards (Priority 1)
- **Readiness Score Card**: Displays a large metric (e.g., 85/100) and a status badge (e.g., "Safe to Ship").
- **Current Release Summary**: Displays the current active deployments (e.g., v2.4.0) and an AI-generated release summary.
- **Bento Status Grid**:
  - **CI/CD Pipeline**: Passing/Failing status, jobs count.
  - **QA Checklist**: In Progress/Done status, completed items.
  - **Active Blockers**: Count of blocking issues.
  - **Open Pull Requests**: Count of PRs in review.
  - **Crash Risk**: Optimal/High risk indicator.
- **Stability Trend Chart**: Visual representation of build stability over 24h/7d/30d.
- **Recent Activity Feed**: Timeline of user and system actions (e.g., QA checklist completed, PR merged, Deploy initiated).

## 4. Release Detail Page & Checklist UI
- **Release Details**: Deep dive into specific release metrics, blocker resolution, and commit history.
- **Checklist**: Interactive checklist for manual verification, syncing with automated status.

## 5. Integration Connection Flow
- Settings area where users connect GitHub, Slack, and other tools, visualizing connection status (Active/Inactive).

## 6. Empty / Loading / Error States
- **Empty States**: Clear illustration/icons with a primary CTA to create the first item (e.g., "No active releases -> Create New Release").
- **Loading States**: Skeleton loaders mimicking the structure of the dashboard cards and lists to prevent layout shift.
- **Error States**: Toast notifications (using the error color: `#ba1a1a`) or dedicated fallback UI for failed data fetches.

## 7. Figma/Stitch Mapping (Design Tokens)
The design tokens mapped from `main_dashboard/code.html` must be configured in `tailwind.config.ts`.
- **Colors**:
  - Background: `#F8FAFC`
  - Primary: `#000000`
  - Error: `#ba1a1a`
  - Surface: `#FFFFFF` (Cards)
- **Typography**:
  - Fonts: `Inter` for general UI text, `Geist` for labels.
- **Spacing/Radii**: Base spacing `4px`, default border radius `0.125rem` (buttons `xl`, rounded pills `full`).

## 8. Development Phasing
**What to build first:**
1. **Design System & Tokens**: Configure `tailwind.config.ts`, `globals.css` with the exact variables.
2. **Main Dashboard (UI Only)**: Implement the App Shell (sidebar + topnav) and the Dashboard Bento grid layout with static data.

**What NOT to build yet:**
- Backend API connections for the dashboard.
- Authentication (Sign In/Sign Up flow).
- AI Insights, Billing, Settings, and Audit Logs pages.

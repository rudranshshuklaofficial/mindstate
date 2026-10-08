[![Platform](https://img.shields.io/badge/platform-iOS%20%7C%20Android-0A84FF)](#)
[![Stack](https://img.shields.io/badge/stack-React%20Native%20%2B%20Expo-111827)](#)
[![Backend](https://img.shields.io/badge/backend-Supabase-3ECF8E)](#)
[![License: MIT](https://img.shields.io/badge/license-MIT-2563EB)](LICENSE)
[![Status](https://img.shields.io/badge/status-V1%20Planning-F59E0B)](#)

# MindState — Student Wellbeing & Community Platform

A mobile-first platform designed to help students understand themselves, build healthier habits, access trusted wellbeing content, and connect through a safe community.

Built as **MindState V1** with a focused architecture:
- **Mobile App** (primary product): React Native + Expo
- **Public Website**: Next.js
- **Shared Backend**: Supabase (PostgreSQL, Auth, Storage, RLS)

---

## Why MindState

Students face stress, pressure, and emotional overload every day.  
MindState is designed to provide a calm, practical space to:

- Track daily wellbeing signals (mood, sleep, journaling, mindful activity)
- Learn from educational, evidence-informed resources
- Engage in moderated, supportive community interaction
- Build consistency through small daily actions

MindState is **not** a diagnostic tool, therapist replacement, or emergency service.

---

## V1 Product Scope

### 1) Public Website
A fast, trustworthy website that communicates:
- What MindState is
- Safety boundaries and privacy principles
- Public resources and educational content
- App download and contact pathways

### 2) Mobile App (Main Product)
Core navigation:
- **Home**
- **Track**
- **Explore**
- **Community**
- **Profile**

---

## Core V1 Features

### Onboarding
- Welcome and product context
- Interest and goal selection
- Privacy + consent flow
- Account and profile setup

### Home
- Daily mood check-in
- Sleep snapshot
- Journal shortcut
- Mindful-hours highlights
- Personalized recommendations

### Track
- Mood tracking
- Sleep tracking (manual input)
- Private journaling
- Mindful sessions
- Stress-management activities

### Explore
- Articles, guides, and courses
- Category browsing + search
- Saved educational content

### Community
- Posts, comments, reactions
- Topic following
- Reporting and blocking
- Moderation-ready structure from V1

### Profile
- Username, bio, interests, avatar
- Saved content and public activity
- Strictly separated from private wellbeing data

---

## Product Principles

MindState V1 follows six guiding principles:

- **Simple** — clear, low-friction UX
- **Human** — supportive, non-clinical tone
- **Private** — collect only what is needed
- **Community-Driven** — expression with strong safety controls
- **Evidence-Informed** — reviewed content standards
- **Buildable** — realistic scope and maintainable engineering decisions

---

## Technical Architecture

```text
MINDSTATE
├── Public Website (Next.js + TypeScript + Tailwind)
└── Mobile App (React Native + Expo + TypeScript)
    ├── iOS
    └── Android

Shared Backend (Supabase)
├── PostgreSQL
├── Authentication
├── Storage
└── Row Level Security (RLS)
```

---

## Technology Stack

| Area | Technology |
|------|------------|
| Mobile | React Native |
| Mobile Framework | Expo |
| Website | Next.js |
| Language | TypeScript |
| Styling (Web) | Tailwind CSS |
| Backend | Supabase |
| Database | PostgreSQL |
| Authentication | Supabase Auth |
| File Storage | Supabase Storage |
| Data Security | PostgreSQL RLS |
| Notifications | Expo Notifications |
| Design | Figma |
| Project Management | Notion |
| Version Control | GitHub |

---

## Proposed Repository Structure

```text
mindstate/
├── apps/
│   ├── mobile/
│   └── web/
├── packages/
│   ├── ui/
│   ├── types/
│   ├── config/
│   └── utils/
├── supabase/
│   ├── migrations/
│   ├── functions/
│   └── tests/
└── docs/
```

---

## Privacy & Security Foundations

Security is a first-class requirement in V1:

- Row Level Security policies for private user data
- Clear access separation for public vs private content
- Backend-enforced permissions (not only hidden UI controls)
- Safe handling of journal/wellbeing information
- No service-role/secret exposure in client apps

Private wellbeing information (mood, sleep, journals, goals) must remain user-private by default.

---

## Roles & Permissions

- **Admin** — full platform management  
- **Editor** — educational content operations  
- **Moderator** — report review and community enforcement  
- **Regular User** — app usage and participation  

---

## Out of Scope (V1)

To keep V1 safe and executable, these are intentionally excluded:

- AI therapist / AI diagnosis
- Clinical assessments or medical recommendations
- Live therapy workflows
- Therapist marketplace and appointment management
- Advanced health-device integrations
- Facial or voice emotion detection
- Complex private messaging systems

---

## Engineering Workflow

Recommended flow:

**Task → Branch → Development → Test → PR → Review → Merge**

Quality expectations:
- Scoped pull requests
- Human review for significant changes
- Continuous testing (functional, security, UI, device coverage)
- AI-assisted coding allowed; human accountability required

---

## Definition of Success (V1)

A student can successfully:

**Create account → set interests/goals → track wellbeing → journal → complete a mindful activity → learn from resources → engage safely in community → come back the next day.**

---

## License

This project is licensed under the **MIT License**.  
See [LICENSE](LICENSE) for details.

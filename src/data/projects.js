export const SAMPLE_ONBOARDING = `# Repo Onboarding Guide (Layman’s Overview)

**One-liner:** A demo of what an onboarding page could look like.

## Big Picture (Analogy)
Think of it like a restaurant: the **UI** is the dining room, the **API** is the wait staff, the **business logic** is the kitchen, and the **database** is the pantry.

## Entry Points
- server: \`server.js\`
- client: \`src/main.tsx\`
- job: \`jobs/worker.ts\`

## Folder Tour
\`\`\`
repo/
├─ app/      # UI layer
├─ api/      # HTTP handlers
├─ core/     # business logic
├─ data/     # DB models & migrations
├─ jobs/     # background workers
└─ test/     # tests
\`\`\`

## Happy Path
1. User clicks → UI component
2. API route → controller
3. Service applies rules
4. Repo persists to DB
5. Response → UI update
`;

export const PROJECTS = [
  { id: '1', name: 'PetClinic (Spring)', tags: ['java','spring','monolith'], stars: 6200,
    summary: 'Classic Spring Boot demo — great for showing layered architecture (controller/service/repository).',
    onboarding: SAMPLE_ONBOARDING, repoUrl: 'https://github.com/spring-projects/spring-petclinic' },
  { id: '2', name: 'uBlock Origin', tags: ['javascript','browser-extension'], stars: 47000,
    summary: 'Popular content blocker — good for explaining manifest, background scripts, and content scripts.',
    onboarding: SAMPLE_ONBOARDING, repoUrl: 'https://github.com/gorhill/uBlock' },
  { id: '3', name: 'Habitica', tags: ['node','mongodb','vue'], stars: 11000,
    summary: 'Gamified task manager — nice to illustrate API + web client + background jobs.',
    onboarding: SAMPLE_ONBOARDING, repoUrl: 'https://github.com/HabitRPG/habitica' },
];

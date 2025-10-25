# Repo Onboarding Guide (Layman’s Overview)

> Purpose: Give a junior‑friendly mental model of the repo. Keep it short and analogy‑driven.

## 0) TL;DR — What this project is and how it runs
- One sentence: <_e.g., “A web app that helps teams track tasks.”_>
- Main tech: <_React + Node + Postgres_>
- Quickstart: <_3 commands_>
- Start reading code at: <_entry points_>

## 1) The Big Picture (Analogy + Context)
- Analogy: <_restaurant analogy or your own_>
- Context diagram: users + externals

## 2) How the app starts (Entry Points)
- main/CLI:
- web server:
- workers/cron:

## 3) Folder & File Tour
```
repo/
├─ app/   # UI
├─ api/   # controllers
├─ core/  # business logic
├─ data/  # models/migrations
└─ test/  # tests
```

## 4) Data & Control Flow (Happy path in 5 hops)
1. user action → component
2. api route → controller
3. service → rule
4. repo → DB
5. response → UI

## 5) Architecture Style
- Layered/Hex/Clean/…
- Dependency rules

## 6) Tests
- where, how to run

## 7) Observability & Debugging
- logs, errors, common failure modes

## 8) Where to contribute first
- good first issues
- low‑risk refactors

## 9) Glossary
- project words in plain English

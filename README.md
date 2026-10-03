# Twitch

Full-stack Twitch project: Next.js frontend and Spring Boot backend.

## Structure
- `frontend/`: Next.js, React, TypeScript.
- `backend/`: Spring Boot, MySQL, Twitch API integration.

## Local setup
1. In `frontend`, run `npm ci`, then `npm run dev`.
2. In `backend`, run `docker compose up -d` to start the development database.
3. Set `TWITCH_CLIENT_ID` and `TWITCH_CLIENT_SECRET` in the backend process environment, then run `./gradlew bootRun` (`.\gradlew.bat bootRun` on Windows).
4. The database defaults are for local development. Configure `DATABASE_URL`, `DATABASE_PORT`, `DATABASE_USERNAME`, and `DATABASE_PASSWORD` for other environments.

Real credentials, dependency folders, build outputs, and archive files are excluded from Git. See `backend/.env.example` for variable names; an `.env` file is not automatically loaded by Spring Boot.

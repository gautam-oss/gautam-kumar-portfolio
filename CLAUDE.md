# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # start dev server (localhost:3000)
npm run build    # production build
npm run lint     # ESLint
```

No test suite exists in this project.

## Architecture

Single-page portfolio built with **Next.js 16** App Router, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

**Entry points:**
- `app/layout.tsx` — root layout with `<html>/<body>` and page-level metadata
- `app/page.tsx` — composes all section components in order

**Section components** (`components/`) render in this order: `Navbar → Hero → Experience → Projects → Skills → Certifications → Contact → Footer`. Each is a named default export and marked `"use client"` because they contain hover/scroll interactivity.

**Styling conventions:**
- All theme tokens live as CSS custom properties in `app/globals.css` (e.g. `--bg`, `--accent` `#e8ff47`, `--accent-2` `#47ffb8`, `--text`, `--text-muted`, `--border`). Use these variables for any new UI — never hardcode colors.
- Layout and spacing are done with **inline styles** referencing the CSS variables, not Tailwind utility classes. Tailwind is imported but used sparingly.
- The `.mono` class (defined in `globals.css`) applies JetBrains Mono; use it for code-like labels, badges, and metadata text.
- The `.grid-bg` class adds the subtle dot-grid background used on the hero section.

**Fonts:** Syne (headings/body) and JetBrains Mono loaded from Google Fonts in `globals.css`.

**Deployment:** Vercel — `npm run build` produces `.next/`.

# @ras-sh/template-nextjs-convex

▲⚡ Full-stack template with Next.js 15 and Convex. Includes SSR, real-time sync, and optimistic updates.

## Features

- **[Next.js 15](https://nextjs.org)** + **[Convex](https://convex.dev)** - Full-stack with real-time database
- **Turbopack** - Next-generation bundler for fast development
- **Optimistic Updates** - Instant UI feedback
- **TypeScript** - End-to-end type safety
- **Tailwind CSS v4** + **@ras-sh/ui** - Modern styling and components
- **Cloudflare Workers** - Edge deployment ready

Includes a working todo list demo showing Convex integration, custom hooks, and optimistic update patterns.

## Quick Start

```bash
pnpm install
npx convex dev --once  # Set up Convex, generate .env.local
pnpm dev               # Start dev servers
```

## Building Your App

1. Update `convex/schema.ts` with your data model
2. Add queries/mutations in `convex/` directory
3. Create custom hooks in `app/lib/hooks/` with optimistic updates
4. Build pages in `app/` with Server Components
5. Update `package.json`, `wrangler.jsonc`, and branding assets

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start both Next.js and Convex dev servers |
| `pnpm dev:web` | Start only Next.js dev server (port 3000) |
| `pnpm dev:convex` | Start only Convex dev server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |
| `pnpm deploy` | Deploy to Cloudflare Workers |
| `pnpm cf-typegen` | Generate Cloudflare Workers types |
| `pnpm check-types` | Run TypeScript type checking |
| `pnpm check` | Run linter checks |
| `pnpm fix` | Auto-fix linting issues |

## Project Structure

```
app/
├── page.tsx            # Server component with preloaded queries
├── layout.tsx          # Root layout with ConvexClientProvider
└── globals.css         # Global styles

components/
├── content.tsx         # Client components and UI
└── providers.tsx       # Convex client provider

hooks/
└── use-todos.ts        # Custom hooks with optimistic updates

convex/
├── schema.ts           # Database schema
├── todos.ts            # Queries and mutations
└── _generated/         # Auto-generated types
```

## Deployment

**Convex:** `npx convex deploy` then set `NEXT_PUBLIC_CONVEX_URL` in your frontend deployment

**Frontend:** `pnpm deploy` to Cloudflare Workers

## License

MIT License - see the [LICENSE](LICENSE) file for details.

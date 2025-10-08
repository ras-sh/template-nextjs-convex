# @ras-sh/template-nextjs

▲ Full-stack template with Next.js 15. Includes App Router, SSR, and modern tooling.

## Features

- **[Next.js 15](https://nextjs.org)** - React framework with App Router
- **Turbopack** - Next-generation bundler
- **TypeScript** - End-to-end type safety
- **Tailwind CSS v4** + **@ras-sh/ui** - Modern styling and components
- **Cloudflare Workers** - Edge deployment ready

## Quick Start

```bash
pnpm install
pnpm dev
```

## Building Your App

1. Build pages in `app/` with Server Components and SSR
2. Add components in `app/components/`
3. Update `package.json`, `wrangler.jsonc`, and branding assets

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server (port 3000) |
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
├── page.tsx        # Home page with Server Components
├── layout.tsx      # Root layout and metadata
└── globals.css     # Global styles
```

## Deployment

`pnpm deploy` to Cloudflare Workers

## License

MIT License - see the [LICENSE](LICENSE) file for details.

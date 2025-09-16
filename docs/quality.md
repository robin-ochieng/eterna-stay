# Performance & Quality Checklist

Targets (mobile unless noted):

- LCP: ≤ 2.5s
- CLS: ≤ 0.1
- TBT: ≤ 200ms (lab)
- INP: ≤ 200ms (field)

## Lighthouse Checklist

- Pages load fast on 4x CPU/Slow 4G
- Preload/priority hints for above-the-fold images and fonts
- Optimize images (dimensions, next-gen, lazy, responsive)
- Avoid large CLS from late-loading UI; reserve space
- Reduce JS: code split, tree-shake, avoid heavy libs on home
- Limit third-parties; defer non-critical
- Use `next/image` for hero/critical images
- Cache headers and `stale-while-revalidate` where appropriate
- Verify dark/light color contrast and focus styles

## Workflow Tips

- `pnpm analyze` to inspect bundles
- Windows/PowerShell alt: set env var first:
	- PowerShell: `$env:ANALYZE='true'; pnpm build`
	- CMD: `set ANALYZE=true && pnpm build`
- `pnpm build` should be warning-free
- `pnpm lint` for a11y/import order hygiene
- Track Core Web Vitals in production (e.g., Vercel Analytics)

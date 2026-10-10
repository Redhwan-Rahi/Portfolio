# Redhwan Rahi — Portfolio

A fast, responsive portfolio focused on product outcomes, selected work, and full-stack engineering experience. Built with React, TypeScript, Vite, and Sass; deployed as a static site at [redhwan.com](https://redhwan.com).

## Local development

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run typecheck
npm run build
npm audit
```

The production build is emitted to `dist/`. Images used above the fold and in the main case study are optimized WebP assets with explicit dimensions. The interface supports persisted light/dark themes, reduced motion, keyboard navigation, semantic landmarks, and responsive layouts from mobile through wide desktop.

## Deployment

The repository retains its custom-domain GitHub Pages setup. To build and publish the current branch:

```bash
npm run deploy
```

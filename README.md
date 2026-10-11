# Avoido website

Local landing page for the Avoido native app. Next.js 16.4.0, React 19.3.0, TypeScript 5.9.3, App Router, npm, and CSS Modules. No native app changes or device installation.

From this directory:

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:3000. For the production preview and checks:

```sh
npm run build
npm run typecheck
npm test
npm run start
```

`npm test` checks actual prerendered HTML and assets after a build. It also saves a script-free HTML snapshot in `evidence/no-scripts.html` for fallback review. Browser evidence and remaining checks are in [verification.md](verification.md) and [tasks.md](tasks.md).

The native radio showcase switches diagrams and captions with CSS, including without hydration. The native mobile disclosure works without JavaScript; JavaScript adds close-on-selection and Escape with focus return. Section reveals use the Web Animations API and keep the page visible if enhancement fails. Diagrams and generated device imagery are illustrative. Assets are local, and the page needs no external data API.

## Later Vercel setup

Publication is deferred. This folder is intended to be its own Git repository, separate from the native app. The native app's root `.gitignore` excludes `website/`. No Git repository or Vercel project has been created yet.

1. Import the separate website repository into Vercel.
2. Use the repository root as **Root Directory**, **Framework Preset** `Next.js`, and a supported Node.js version at least 20.9.
3. Use `npm ci` for installation, `npm run build` for the build, and the default Next.js output setting.
4. Preview the deployment, then record its actual `vercel.app` address.
5. Set `metadataBase` and the canonical URL in `app/layout.tsx` to the verified production URL. Rebuild and check the social image and live metadata before publication.

The local build warns that no `metadataBase` exists and uses localhost for social image URLs. That is expected before hosting. No canonical or invented production address is configured.

The original visual reference is [design-reference.png](design-reference.png). The hero was generated with the built-in image tool and saved as [public/avoido-device.png](public/avoido-device.png); its prompt is [public/avoido-device.prompt.txt](public/avoido-device.prompt.txt). Map close-ups are local SVG illustrations. The favicon copies the selected native app icon.

Hosting setup follows [Vercel build configuration](https://vercel.com/docs/builds/configure-a-build) and [Next.js installation requirements](https://nextjs.org/docs/app/getting-started/installation).

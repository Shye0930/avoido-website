# Local website verification

2026-10-11. Local implementation complete. Publication remains deferred. These checks concern the website and do not establish native app physical validation.

## Executed checks

| Check | Result and evidence |
|---|---|
| Dependency installation | npm installed 28 packages and reported zero vulnerabilities. Resolved Next.js 16.4.0, React / React DOM 19.3.0, TypeScript 5.9.3, and React type packages 19.3.0. See package-lock.json. |
| Production build | `npm run build` passes after the final map/CSS revision. `/`, `/icon.png`, and `/opengraph-image` are prerendered static routes. |
| TypeScript | `npm run typecheck` passes after the final source revision. |
| Initial HTML and assets | `npm test` passes. Checks actual production HTML for headline, capability/status copy, landmarks, default Top down radio, native disclosure, existing local assets, and no canonical URL. |
| HTTP | Local production page returns HTTP 200 with `x-nextjs-prerender: 1`. Favicon and social image are built static routes. |
| Responsive layout | In-app browser at 320, 375, 768, and 1440 CSS pixels. Assertions confirm no horizontal overflow, one h1, and rendered link/menu/radio-label targets at least 44 × 44 CSS pixels. Screenshots reviewed against the selected first mockup. See [browser-results.json](evidence/browser-results.json) and [320](evidence/iab-320.png), [375](evidence/iab-375.png), [768](evidence/iab-768.png), [1440](evidence/iab-1440.png). |
| Map selector | Pointer selection shows Front. ArrowLeft selects Top down. Assertions confirm corresponding visible caption and unchanged figure height of 393.5 CSS pixels at the desktop test width. Inactive image/caption is absent from the browser accessibility tree. See [Front view](evidence/iab-front.png). |
| Mobile menu | Native disclosure exposes collapsed/expanded state. Escape closes and returns focus to Section menu. Choosing each of Experience, How it works, and Development closes the hydrated menu and updates the corresponding fragment. Section headings remain below the sticky header. |
| Fallback without hydration | A snapshot of actual built HTML with all scripts removed was served on temporary port 8001. Browser confirms zero scripts, readable content, default Top down, native mobile menu and Development anchor, and functioning Front diagram/caption selection through CSS. See [script-free Front screenshot](evidence/iab-no-scripts-front.png). This tests absence of enhancement; the browser's global JavaScript-disable preference was not changed. |
| Contrast | WCAG relative-luminance calculation on chosen solid colors: #56565C text is 7.29:1 on white / 6.79:1 on off-white; #65656B captions 5.79:1 / 5.40:1; #0066CC action text or white button text 5.57:1 on white; #85858C selector border 3.42:1 against off-white. Patterned diagrams have text explanations independent of color. |
| Semantics and content | Browser accessibility tree contains one h1, labeled section landmarks, headings, useful image descriptions, a labeled native radio group with checked values, and a native menu with disclosure state. Copy matches current native compatibility and supported-device haptics, preserves unknown-space meaning, and makes no release, recognition, prediction, calibrated-distance or safe-route claim. |
| Motion source review | CSS gates smooth scrolling, press transitions and map crossfades behind no-preference. Reveal enhancement skips reduced motion, leaves content visible by default, and reveals once. Reduced-transparency CSS makes navigation solid; increased-contrast CSS strengthens borders. These are source checks, not runtime preference acceptance. |
| Narrow desktop proxy | 720 CSS pixel layout has no horizontal overflow. See [720 screenshot](evidence/iab-720.png). This is a reflow check, not a native 200% browser zoom test. |

## Remaining acceptance

- Actual 200% browser zoom and a manual assistive-technology reading/focus review.
- Runtime reduced-motion, reduced-transparency, and increased-contrast preference checks. The browser control offered viewport changes but no preference-emulation capability.
- Separate Safari, Chrome, Firefox, and Edge compatibility checks. The installed Chrome application directory lacks its executable; the attempted external Playwright launch failed before testing. Only the Codex in-app browser is claimed.
- Production sharing checks after a real deployment URL is known. Next.js emits its expected local `metadataBase` warning; social URLs currently resolve to localhost and no canonical is set.

The initial automation attempt was replaced with the supported in-app browser workflow. Two assertion-helper failures during final UI checks concerned unsupported DOM `checkVisibility()` and cross-realm array comparison; the corrected checks pass. No site runtime failure was observed in those checks. Browser viewport overrides and the temporary fallback server are cleared after verification. The production preview remains available for user review.

## Assets and scope

Built-in image generation produced [the device illustration](public/avoido-device.png) from the selected mockup as a visual reference, with the latest single current-view icon layout. [The saved prompt](public/avoido-device.prompt.txt) records that brief. Map diagrams are editable local SVGs with patterned obstacle, ground/visibility and unknown regions. The app icon is copied without changing the native source. Device scenes and map placement are illustrative.

No native app source, build configuration, tests, or historical phase reports were changed. No app was installed on a device, and no website was published. No signup, analytics, camera permission, external data API, or custom backend was introduced.

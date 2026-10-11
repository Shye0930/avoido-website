# Avoido website design

Updated: 2026-10-11. Status: local implementation complete; initial browser checks recorded in [verification.md](verification.md).

Use the [selected first mockup](design-reference.png) as the visual reference. The later, more spacious revision is superseded. [Requirements](requirements.md) define acceptance; [tasks](tasks.md) track work.

## Page structure and copy

| Area | Content and behavior |
|---|---|
| Navigation | Existing A icon and Avoido wordmark. Desktop links: Experience, How it works, Development. Mobile: brand, Explore, and a hamburger button opening those section links. Brand links to the top of the page. |
| Hero | Badge: In development. Headline: A clearer picture of what's nearby. Description: LiDAR-powered obstacle awareness. Visual maps, spoken cues, and haptic feedback. Primary link: Explore Avoido. Secondary link: How it works. |
| Experience | Large landscape device illustration showing the current app UI concept. Caption: Illustrative app view. Three feature columns on desktop and stacked rows on mobile, using the copy below. |
| How it works | Heading: From depth to awareness. Introduction: Avoido uses LiDAR depth to show nearby measured surfaces and provide close-range cues. Desktop combines copy, map close-up, and numbered steps in three columns, as in the reference. Mobile stacks them in reading order. The map close-up includes the interactive Top down / Front selector and current view description. |
| Development | Heading: An evolving prototype. Copy: Avoido is in active development. Physical validation is ongoing. Include LiDAR-capable iPhone or iPad, iOS / iPadOS 26 or later, and Core sensing works offline on the device. Use a compact full-width section rather than a large promotional block. |
| Footer | Avoido brand and Back to top link. Do not invent a creator name, external link, or copyright owner. |

Feature copy:

- See nearby surfaces: Colored depth points show measured surfaces.
- Hear close-range cues: Spoken cues for nearby obstacles.
- Feel proximity feedback: Proximity cues on supported devices.

Process copy:

1. Scan: LiDAR measures surfaces in the device's view.
2. Map: Visual maps distinguish measured surfaces from uncertain space.
3. Respond: Close-range speech and supported haptics provide proximity cues.

## Visual system

The selected appearance is approved. The following numeric values are proposed implementation defaults; adjust them together during screenshot review to match the reference.

| Element | Proposed default |
|---|---|
| Backgrounds | White #FFFFFF for hero and experience; soft off-white #F7F7F5 for the explanatory section. |
| Typography colors | Primary #1D1D1F; secondary #56565C. Verify contrast on actual rendered backgrounds. |
| Accent | Blue #0071E3 for primary links, buttons, and small feature icons. |
| Font | Platform system sans serif: -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif. No downloaded font. |
| Content width | Maximum 1200 CSS pixels; horizontal padding 24px on mobile and 48px on desktop. |
| Display type | Fluid 40–88px, line-height 1.05, letter-spacing -0.035em; centered, with the reference's two-line desktop composition. |
| Body type | 18px, line-height 1.5. Supporting feature text 15–16px; captions 14px. Use rem-based sizes in implementation. |
| Section spacing | About 64px on desktop and 40px on mobile, with tighter spacing between device, caption, and features. Avoid full-viewport empty sections. |
| Navigation | Approximately 64px tall; sticky, lightly translucent white over scrolling content. Use solid white when transparency is reduced. |
| Controls | Blue pill-shaped primary link, plain blue secondary link, neutral segmented map selector, visible focus outline, minimum 44px targets. |
| Device treatment | Front-facing landscape device with a black frame and restrained shadow. Size it prominently, without clipping the frame or image at narrow widths. |

Use blue only where it establishes action or feature hierarchy. Keep app sensor colors inside app illustrations. Do not add glass cards, decorative gradients, a dark theme, or a dashboard grid. The desktop/mobile board framing and labels are review annotations, not website content.

## Illustrations and map states

The [native app requirements](../docs/requirements.md) and [latest UI record](../docs/phase-9-ui-mockup.md) govern the depicted app controls. Show the small top-left minimap, one current-view icon above the right-side voice/haptic/settings column, and a wide bottom Pause button. The latest native UI supersedes the older below-map text selector pictured in the website reference. Pictured controls are not operational website buttons.

Prepare separate clean illustrations for the hero, Top down map close-up, and Front map close-up. The selected board is a design reference, not a production hero asset. Label the views as illustrative rather than device evidence.

The website selector uses native radio state and CSS `:has()` only, with no hydration required. It does not change the native app, request camera access, persist preferences, or call a server.

| State | Illustration and description |
|---|---|
| Top down, initial | A top-down map of supported surfaces. Description: A top-down view of measured surfaces and uncertain space. |
| Front | Camera-aligned filled LiDAR regions in the app's small minimap. Description: A front view of supported surfaces and uncertain space. |

Use a labeled native radio group styled as a segmented control. Keyboard arrow keys move between choices. CSS follows the checked radio to update the visible image and description while preserving the control's focus. Reserve a shared image area so switching does not change section height. Hide the inactive view from assistive technology.

Add a short text legend: red represents supported obstacles, green represents sampled visibility or confirmed ground, and yellow represents unknown regions. Green does not establish a safe route. Camera distance-point colors have a different meaning from map-region colors. Do not present generated dot placement as calibrated distance data.

## Navigation and motion

Use native section anchors: #experience, #how-it-works, and #development. Allow for sticky-header height with scroll margins. Without JavaScript, keep the section links available through a simple navigation fallback.

The mobile menu is a disclosure, not a full-screen modal. Its trigger exposes expanded state and the menu relationship. Close it after selecting a link or pressing Escape. Escape returns focus to the trigger. Desktop displays links directly and hides the mobile trigger.

Press feedback begins immediately. Proposed timing is 100ms for a slight press scale, 180ms for image crossfades, and 250ms for a single subtle section reveal with at most 12px of travel. Animate opacity and transforms rather than layout. Keep transitions interruptible and avoid gesture-driven interactions, which would require additional spring behavior.

Reduced motion removes movement and animated crossfades while retaining immediate color and focus feedback. Reduced transparency uses solid navigation. Increased contrast strengthens borders and focus outlines. Content is visible before reveal enhancement initializes and remains visible if that enhancement fails.

## Technical structure and data flow

Use a standalone npm project in this directory with Next.js 16.4.x, compatible React, TypeScript, App Router, and CSS Modules. Prefer the smallest implementation that meets the requirements; no UI kit or animation dependency is needed for this scope.

The root route / contains prerendered text and image references. Small client components enhance the native mobile disclosure and add optional reveals. The map selector uses native radios and CSS to synchronize its diagrams and captions without JavaScript. No backend, external data fetch, browser sensing, or public API is introduced. No native app source is imported into the web build.

Website content and illustrative assets live in the website project. Reuse a copy of the native app icon without changing its source. Provide image dimensions and responsive sizes, prioritize the hero asset, and defer lower-page assets. Include an Avoido-specific title, description, favicon, and social preview. Leave production URL metadata unset until a real address is available.

Later Vercel setup uses this folder as Root Directory and the Next.js framework preset. Documentation must describe npm installation and the production build. Publication remains a separate pending task.

Framework and hosting references: [Next.js 16.4 release](https://nextjs.org/blog/next-16-4), [Vercel monorepo projects](https://vercel.com/docs/monorepos).

## Implemented visual adjustments

The numeric defaults remain implementation choices. The primary blue is #0066CC for readable white button text. All supporting text uses #56565C or #65656B. The hero follows the selected compact composition; explanatory content reserves space for the selector, captions, patterned maps, and required color legend. Tablet processing steps use a full-width row below the introduction and map. The generated hero depicts the latest native icon-view layout. Map close-ups use separate SVG diagrams so the website can expose both states consistently and distinguish regions by patterns as well as color.

See [verification.md](verification.md) for actual checks and remaining limitations.

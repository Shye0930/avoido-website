import Image from "next/image";
import Navigation from "./navigation";
import MapShowcase from "./map-showcase";
import Reveals from "./reveals";
import styles from "./page.module.css";

const features = [
  { icon: "eye", title: "See nearby surfaces", copy: "Colored depth points show measured surfaces." },
  { icon: "voice", title: "Hear close-range cues", copy: "Spoken cues for nearby obstacles." },
  { icon: "haptic", title: "Feel proximity feedback", copy: "Proximity cues on supported devices." },
];

function FeatureIcon({ kind }: { kind: string }) {
  return <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {kind === "eye" ? <><path d="M2 16s5-9 14-9 14 9 14 9-5 9-14 9S2 16 2 16Z" /><circle cx="16" cy="16" r="4" /></> : kind === "voice" ? <><path d="M3 12h6l7-6v20l-7-6H3Z M21 10a9 9 0 0 1 0 12 M25 6a15 15 0 0 1 0 20" /></> : <><rect x="10" y="3" width="12" height="26" rx="3" /><path d="M5 9a17 17 0 0 0 0 14 M27 9a17 17 0 0 1 0 14 M15 25h2" /></>}
  </svg>;
}

export default function Home() {
  return <div id="top">
    <a href="#main" className={styles.skipLink}>Skip to content</a>
    <Navigation />
    <main id="main">
      <section className={styles.hero} aria-labelledby="hero-title">
        <span className={styles.badge}>In development</span>
        <h1 id="hero-title">A clearer picture<br className={styles.desktopBreak} /> of what&apos;s nearby.</h1>
        <p>LiDAR-powered obstacle awareness.<br />Visual maps, spoken cues, and haptic feedback.</p>
        <div className={styles.heroActions}><a className={styles.primary} href="#experience">Explore Avoido</a><a className={styles.secondary} href="#how-it-works">How it works <span aria-hidden="true">→</span></a></div>
      </section>
      <section id="experience" className={styles.experience} aria-label="Experience Avoido">
        <figure className={styles.device}>
          <Image src="/avoido-device.png" alt="Illustrative Avoido app on a landscape tablet: a chair and table with colored depth points, a small top-left minimap, four right-side icon controls, and a wide Pause button." width={1586} height={992} sizes="(max-width: 767px) 100vw, 860px" priority />
          <figcaption>Illustrative app view</figcaption>
        </figure>
        <div className={styles.features} data-reveal>{features.map(feature => <div className={styles.feature} key={feature.title}>
          <FeatureIcon kind={feature.icon} /><div><h2>{feature.title}</h2><p>{feature.copy}</p></div>
        </div>)}</div>
      </section>
      <section id="how-it-works" className={styles.how} aria-labelledby="how-title">
        <div className={styles.howGrid} data-reveal>
          <div className={styles.howIntro}><h2 id="how-title">From depth<br />to awareness.</h2><p>Avoido uses LiDAR depth to show nearby measured surfaces and provide close-range cues.</p><a href="#development" className={styles.textLink}>Meet the prototype <span aria-hidden="true">→</span></a></div>
          <MapShowcase />
          <ol className={styles.steps}>
            <li><h3>Scan</h3><p>LiDAR measures surfaces in the device&apos;s view.</p></li>
            <li><h3>Map</h3><p>Visual maps distinguish measured surfaces from uncertain space.</p></li>
            <li><h3>Respond</h3><p>Close-range speech and supported haptics provide proximity cues.</p></li>
          </ol>
        </div>
        <div className={styles.legend}><p><span className={styles.redKey} />Red: supported obstacles <span className={styles.greenKey} />Green: sampled visibility or confirmed ground <span className={styles.yellowKey} />Yellow: unknown regions</p><p>Green does not establish a safe route. Camera distance-point colors have a different meaning from map-region colors.</p></div>
      </section>
      <section id="development" className={styles.development} aria-labelledby="development-title" data-reveal>
        <div><span className={styles.eyebrow}>WORK IN PROGRESS</span><h2 id="development-title">An evolving prototype.</h2><p>Avoido is in active development.<br />Physical validation is ongoing.</p></div>
        <ul><li>LiDAR-capable iPhone or iPad</li><li>iOS / iPadOS 26 or later</li><li>Core sensing works offline on the device</li><li>Haptic feedback requires device support</li></ul>
      </section>
    </main>
    <footer className={styles.footer}><a className={styles.brand} href="#top"><Image src="/icon.png" alt="" width={24} height={24} />Avoido</a><a href="#top">Back to top <span aria-hidden="true">↑</span></a></footer>
    <Reveals />
  </div>;
}

import styles from "./page.module.css";

export default function MapShowcase() {
  return <figure className={styles.showcase}>
    <div className={styles.mapImages}>
      {/* These diagrams illustrate map semantics, not calibrated sensor returns. */}
      <img className={styles.mapTop} src="/map-top.svg" width={400} height={300} alt="Illustrative top-down map: patterned red chair and table footprints, dotted green sampled visibility, and hatched yellow unknown space." />
      <img className={styles.mapFront} src="/map-front.svg" width={400} height={300} alt="Illustrative front map: filled red chair and table regions, dotted green confirmed ground, and hatched yellow unknown regions." />
    </div>
    <fieldset className={styles.segmented}>
      <legend className={styles.srOnly}>Illustrative map view</legend>
      <label><input type="radio" name="map-view" value="top" defaultChecked /><span>Top down</span></label>
      <label><input type="radio" name="map-view" value="front" /><span>Front</span></label>
    </fieldset>
    <figcaption className={styles.mapCaption}>
      <span>Illustrative map view</span>
      <p className={styles.topCaption}>A top-down view of measured surfaces and uncertain space.</p>
      <p className={styles.frontCaption}>A front view of supported surfaces and uncertain space.</p>
    </figcaption>
  </figure>;
}

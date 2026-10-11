import { ImageResponse } from "next/og";

export const alt = "Avoido. A clearer picture of what's nearby. In development.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function SocialImage() {
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%", height: "100%", background: "#f7f7f5", color: "#1d1d1f", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 15, marginBottom: 32 }}><span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 54, height: 54, borderRadius: 12, background: "#111", color: "#fff", fontSize: 40 }}>A</span><span style={{ fontSize: 32, fontWeight: 600 }}>Avoido</span></div>
      <div style={{ fontSize: 76, letterSpacing: -4, textAlign: "center", lineHeight: 1.05, fontWeight: 700, maxWidth: 920 }}>A clearer picture of what&apos;s nearby.</div>
      <div style={{ fontSize: 26, color: "#56565c", marginTop: 28 }}>LiDAR-powered obstacle awareness.</div>
      <div style={{ background: "#e1efff", color: "#0059b3", padding: "10px 24px", borderRadius: 32, fontSize: 20, marginTop: 28 }}>In development</div>
    </div>, size,
  );
}

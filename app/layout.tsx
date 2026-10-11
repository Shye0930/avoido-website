import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Avoido | A clearer picture of what's nearby",
  description: "Explore Avoido, a native LiDAR obstacle-awareness app with visual maps, spoken cues, and proximity feedback on supported devices. In active development.",
  openGraph: {
    title: "Avoido | A clearer picture of what's nearby",
    description: "LiDAR-powered obstacle awareness. An evolving prototype.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Avoido. A clearer picture of what's nearby. In development." }],
    type: "website",
  },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

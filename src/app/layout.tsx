import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "SafetyNet - AI Safety Research Community", description: "AI safety research community hub with collaboration tools, grants, and career resources" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}

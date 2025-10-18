import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./components/Providers";

export const metadata: Metadata = {
  title: "Verifiable Credentials on Base",
  description: "Securely own, manage, and selectively share your professional credentials on-chain via Farcaster.",
  openGraph: {
    title: "Verifiable Credentials on Base",
    description: "Securely own, manage, and selectively share your professional credentials on-chain via Farcaster.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "WanderWork",
  description: "Travel the world for next to no cost by lending your skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}

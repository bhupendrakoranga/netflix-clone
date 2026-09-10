import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Netflix India Clone",
  description: "A Next.js and Tailwind CSS landing page clone inspired by Netflix India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en-IN" className="h-full antialiased">
      <body className="bg-background text-foreground min-h-full">{children}</body>
    </html>
  );
}

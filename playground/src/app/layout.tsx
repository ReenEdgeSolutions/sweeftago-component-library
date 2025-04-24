import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Providers } from "@/app/providers";

export const metadata: Metadata = {
  title: "Component Library Playground",
  description: "Component Library Playground",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

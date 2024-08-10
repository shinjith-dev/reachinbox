import type { Metadata } from "next";
import "./globals.css";
import { openSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "ReachInbox",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          openSans.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}

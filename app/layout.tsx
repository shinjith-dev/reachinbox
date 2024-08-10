import type { Metadata } from "next";
import "./globals.css";
import { openSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { AuthStoreProvider } from "@/providers/auth-provider";
import { ThemeStoreProvider } from "@/providers/theme-provider";

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
          "min-h-screen bg-background font-sans text-foreground antialiased transition-all",
          openSans.variable,
        )}
      >
        <ThemeStoreProvider>
          <AuthStoreProvider>{children}</AuthStoreProvider>
        </ThemeStoreProvider>
      </body>
    </html>
  );
}

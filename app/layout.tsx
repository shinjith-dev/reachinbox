import type { Metadata } from "next";
import "./globals.css";
import { openSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { AuthStoreProvider } from "@/providers/auth-provider";
import { ThemeStoreProvider } from "@/providers/theme-provider";
import QueryProvider from "@/providers/query-provider";

export const metadata: Metadata = {
  title: "ReachInbox",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "min-h-screen bg-background font-sans text-foreground antialiased transition-all",
          openSans.variable,
        )}
      >
        <QueryProvider>
          <ThemeStoreProvider>
            <AuthStoreProvider>{children}</AuthStoreProvider>
          </ThemeStoreProvider>
        </QueryProvider>
      </body>
    </html>
  );
}

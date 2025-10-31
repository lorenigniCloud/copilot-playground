import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Copilot Playground",
  description: "Playground per sperimentare GitHub Copilot",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}

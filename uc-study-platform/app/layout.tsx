import { AuthProvider } from "../context/AuthContext";
import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "MyApp",
  description: "Next.js 15 dashboard template",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-screen">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
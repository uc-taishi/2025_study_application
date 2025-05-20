import "./globals.css";
import { ReactNode } from "react";
import { AuthProvider } from "../context/AuthContext";

export const metadata = {
  title: "MyApp",
  description: "Next.js 15 dashboard template",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-gray-50">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
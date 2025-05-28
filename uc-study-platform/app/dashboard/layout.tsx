// app/dashboard/layout.tsx  ※"use client" を付けない
import { ReactNode } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { cookies } from "next/headers";
import { AuthProvider, User } from "../../context/AuthContext";

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  // ----- Cookie 取得（Server API） -----
  const cookieStore = await cookies();
  const raw = cookieStore.get("user")?.value ?? "";        // "A001$foo@bar$山田$admin"
  const [employee_no = "", email = "", name = "", role = ""] = raw.split("$");
  const initialUser: User = raw
    ? { employee_no, email, name, role_name: role }
    : null;

  // ----- AuthProvider を Client で動かす -----
  return (
    <AuthProvider initialUser={initialUser}>
      <div className="flex h-screen flex-col">
        <Header className="flex-none" />

        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>
    </AuthProvider>
  );
}

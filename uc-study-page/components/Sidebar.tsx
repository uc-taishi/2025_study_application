"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "../context/AuthContext";

const nav = [
  { label: "ホーム", href: "/dashboard/home", role: "all" },
  { label: "管理者", href: "/dashboard/admin", role: "admin" },
];

export default function Sidebar() {
  const { user } = useAuth();

  const pathname = usePathname();
  return (
    <aside className="w-60 border-r p-4 shadow-sm bg-gray-200">
      <div className="bg-gray-100 rounded p-2 mb-3">
        <div>{user?.name}</div>
        <div>{user?.email}</div>
      </div>
      <nav className="flex flex-col gap-1">
        {nav.map(
          (item) =>
            (user?.role === item.role || item.role === "all") && (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded px-3 py-2 text-sm transition hover:bg-blue-50 ${
                  pathname === item.href ? "bg-blue-100 font-medium" : ""
                }`}
              >
                {item.label}
              </Link>
            )
        )}
      </nav>
    </aside>
  );
}

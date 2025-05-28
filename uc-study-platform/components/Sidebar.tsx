"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import getRoleLevel from "../utils/role";

const nav = [
  { label: "マイページ", href: "/dashboard/home", role: "all" },
  { label: "コース", href: "/dashboard/course-collection", role: "all" },
  { label: "問題", href: "/dashboard/exercise", role: "all" },
  { label: "ユーザー（管理者）", href: "/dashboard/user-collection", role: "admin" },
];

export default function Sidebar() {

  const pathname = usePathname();
  const { user } = useAuth(); 

  return (
    <aside className="w-60 border-r flex flex-col">
      <nav className="flex flex-col">
        {nav.map(
          (item) =>
            (getRoleLevel(user?.role_name!) === item.role || item.role === "all") && (
              <Link
                key={item.href}
                href={item.href}
                className={`block w-full border-y border-r border-white px-4 py-3 text-sm text-left transition ${pathname === item.href
                  ? "bg-white text-background font-medium"
                  : "hover:bg-white/10"
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

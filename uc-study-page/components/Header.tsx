"use client";
import { usePathname } from "next/navigation";
import { useAuth } from "../context/AuthContext";

const titles: Record<string, string> = {
  "/dashboard": "ダッシュボード",
  "/dashboard/home": "ホーム",
  "/dashboard/home/python-beginner": "Python入門",
  "/dashboard/admin": "管理者用画面",
};

export default function Header() {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const title = titles[pathname] ?? "ページ";

  return (
    <header className="flex h-14 items-center justify-between border-b bg-white px-6 shadow-sm">
      <h1 className="text-lg font-semibold">{title}</h1>
      <button
        onClick={logout}
        className="rounded bg-gray-200 px-3 py-1 text-sm hover:bg-gray-300"
      >
        ログアウト
      </button>
    </header>
  );
}
"use client";
import { usePathname } from "next/navigation";
import { useAuth } from "../context/AuthContext";

const titles: Record<string, string> = {
  "/dashboard": "ダッシュボード",
  "/dashboard/home": "マイページ",
  "/dashboard/course-collection": "コース",
  "/dashboard/exercise": "問題",
  "/dashboard/user-collection": "ユーザー管理",
};

export default function Header(props: { className?: string }) {
  const pathname = usePathname();
  const { logout } = useAuth(); 
  const title = titles[pathname] ?? "ページ";

  return (
    <header className="flex h-14 items-center justify-between border-b px-6 shadow-sm">
      <h1 className="text-lg font-semibold">{title}</h1>
      <button
        onClick={logout}
        className="rounded px-3 py-1 text-sm hover:bg-gray-300"
      >
        ログアウト
      </button>
    </header>
  );
}
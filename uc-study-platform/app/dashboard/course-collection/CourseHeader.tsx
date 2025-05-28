"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CourseHeader() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleCreate = () => {
    alert("コース作成ダイアログへ");      // ← ここで完結
    // or router.push("/dashboard/course-create");
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">コース検索</h1>

        <button
          type="button"
          onClick={handleCreate}
          className="flex items-center gap-1 rounded-full bg-gray-400/70
                     px-6 py-2 text-sm text-white hover:bg-gray-400/90"
        >
          コース作成
        </button>
      </div>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="キーワードを入力"
        className="mt-6 w-full rounded-full bg-gray-100/80 py-3 pl-4 pr-6
                   text-sm text-black placeholder:text-gray-400
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </>
  );
}

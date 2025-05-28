"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TestInsert() {
  const [value, setValue] = useState("");
  const router = useRouter();

  const addRow = async () => {
    await fetch("/api/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ test: value }),
    });
    setValue("");
    router.refresh();          // ← 一覧をサーバー再フェッチ
  };

  return (
    <div className="flex gap-3 mt-6">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="rounded p-2 text-black"
        placeholder="test を入力"
      />
      <button onClick={addRow} className="rounded bg-blue-600 px-4 py-2">
        追加
      </button>
    </div>
  );
}

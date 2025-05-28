"use client";
import { useState } from "react";
import type { Unit } from "../data";

export default function UnitViewer({ units }: { units: readonly Unit[] }) {
  const [idx, setIdx] = useState(0);
  const u = units[idx];

  const next = () => setIdx((i) => (i + 1 < units.length ? i + 1 : i));

  return (
    <div className="flex flex-1 min-h-0">
      {/* ─── 左：単元リスト ─── */}
      <div className="w-64 shrink-0 border-r border-white/20 overflow-y-auto">
        {units.map((unit, i) => (
          <button
            key={unit.id}
            onClick={() => setIdx(i)}
            className={`block w-full border-b border-white/20 px-4 py-3 text-left
              ${i === idx ? "bg-white/10 font-medium" : "hover:bg-white/5"}`}
          >
            <div className="text-sm">単元{i + 1}</div>
            <div className="text-xs text-gray-300">{unit.title}</div>
          </button>
        ))}
      </div>

      {/* ─── 右：単元詳細 ─── */}
      <section className="flex-1 min-w-0 overflow-y-auto px-8 py-8">
        <h2 className="mb-6 text-xl font-semibold">
          単元{idx + 1}：{u.title}
        </h2>

        <p className="whitespace-pre-line">{u.summary}</p>

        <h3 className="mt-8 font-semibold">修了条件</h3>
        <p className="whitespace-pre-line">{u.requirement}</p>

        <h3 className="mt-8 font-semibold">リンク</h3>
        <a
          href={u.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline"
        >
          {u.link}
        </a>

        <label className="mt-10 flex items-center gap-3">
          <input type="checkbox" className="h-5 w-5 accent-blue-600" />
          <span>実施完了</span>
        </label>

        {idx + 1 < units.length && (
          <button
            onClick={next}
            className="mt-10 ml-auto block rounded-lg bg-blue-600 px-8 py-3 text-white hover:bg-blue-700"
          >
            次の単元へ
          </button>
        )}
      </section>
    </div>
  );
}

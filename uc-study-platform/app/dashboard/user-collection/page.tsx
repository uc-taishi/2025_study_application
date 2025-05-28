import { headers } from "next/headers";
import TestInsert from "./insert";

/** id は bigint ⇒ number で扱い */
type Row = { employee_no: string; email: string; name: string; role_name: string };

export const dynamic = "force-dynamic";

export default async function UserCollectionPage() {

  // ───── 絶対 URL を組み立て ─────
  const hdrs  = await headers();
  const proto = process.env.NODE_ENV === "production" ? "https" : "http";
  const host  = hdrs.get("host") ?? "localhost:3000";
  const base  = process.env.NEXT_PUBLIC_BASE_URL || `${proto}://${host}`;

  // ───── API を呼ぶ ─────
  const res   = await fetch(`${base}/api/users`, { cache: "no-store" });
  if (!res.ok) {
    const { error } = await res.json();
    return <p className="p-8 text-red-500">API error: {error}</p>;
  }
  const { data } = (await res.json()) as { data: Row[] };

  // ───── 画面描画 ─────
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-semibold">test テーブル一覧</h1>
      <TestInsert />

      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-white/20">
            <th className="px-4 py-2 text-left">社員番号</th>
            <th className="px-4 py-2 text-left">メールアドレス</th>
            <th className="px-4 py-2 text-left">名前</th>
            <th className="px-4 py-2 text-left">ロール</th>
          </tr>
        </thead>
        <tbody>
          {data.map((r) => (
            <tr key={r.employee_no} className="border-b border-white/10 hover:bg-white/5">
              <td className="px-4 py-2">{r.employee_no}</td>
              <td className="px-4 py-2">{r.email ?? "-"}</td>
              <td className="px-4 py-2">{r.name ?? "-"}</td>
              <td className="px-4 py-2">{r.role_name ?? "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

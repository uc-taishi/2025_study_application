// app/dashboard/course-collection/page.tsx
import { headers } from "next/headers";
import CardGrid from "@/components/CardGrid";
import CourseHeader from "./CourseHeader";   // ← Client Component
import { ContentItem } from "@/components/ContentCard";

export default async function CoursePage() {
  /* ----- データ取得（Server でOK） ----- */
  const hdrs = await headers();
  const proto = process.env.NODE_ENV === "production" ? "https" : "http";
  const host = hdrs.get("host") ?? "localhost:3000";
  const base = process.env.NEXT_PUBLIC_BASE_URL || `${proto}://${host}`;

  const res   = await fetch(`${base}/api/courses`, { cache: "no-store" });
  const { data } = (await res.json()) as { data: any[] };

  /* 型合わせ */
  const items: ContentItem[] = data.map((d) => ({
    courseCode: "/dashboard/course-collection/" + d.course_code,
    title: d.course_name,
    description: d.description,
  }));

  console.log("aaa");
  console.log(items);

  /* ----- 描画 ----- */
  return (
    <div className="space-y-6 p-6">
      <CourseHeader />      {/* ← もう props で関数を渡さない */}
      <CardGrid items={items} />
    </div>
  );
}

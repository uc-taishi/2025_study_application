import { notFound } from "next/navigation";
import { courses } from "../data";
import UnitViewer from "./UnitViewer";
import { headers } from "next/headers";

export async function generateStaticParams() {
  return courses.map(c => ({ course: c.href }));
}

export default async function CourseDetail({
  params,
}: {
  params: Promise<{ course: string }>;
}) {

    const hdrs = await headers();
    const proto = process.env.NODE_ENV === "production" ? "https" : "http";
    const host = hdrs.get("host") ?? "localhost:3000";
    const base = process.env.NEXT_PUBLIC_BASE_URL || `${proto}://${host}`;
  
    const res   = await fetch(`${base}/api/units`, { cache: "no-store" });
    const { data } = (await res.json()) as { data: any[] };
  
  const { course: slug } = await params;
  console.log("slug:", slug);
  const course = courses.find(c => c.href === slug);
  if (!course) notFound();

  return (
    <div className="flex-1 m-0 p-0 flex min-h-[100%]">
      <UnitViewer units={course.units} />
    </div>
  );
}

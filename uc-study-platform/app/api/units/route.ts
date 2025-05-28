import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// ───────────────────────────────
// Supabase サーバークライアント
// ───────────────────────────────
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,          // 例: https://xxxx.supabase.co
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!           // 読み取り専用なら anon key でも可
);

// ───────────────────────────────
// POST /api/units
// ───────────────────────────────
export async function GET(req: NextRequest) {
  try {

    const { courseCode } = (await req.json()) as {
      courseCode?: string;
      };

    // units テーブルを取得
    const { data, error } = await supabase
      .from("units")
      .select("course_code, course_name, description")
      .eq("course_code", courseCode)

    // DB エラー
    if (error) {
      console.error(error);
      return NextResponse.json(
        { error: "サーバーエラーが発生しました" },
        { status: 500 }
      );
    }

    // レスポンスを整形
    const units = data.map((course) => ({
      course_code: course.course_code,
      course_name: course.course_name,
      description: course.description || "説明なし",
    }));

    return NextResponse.json({ data: units });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "予期しないエラーが発生しました" },
      { status: 500 }
    );
  }
}
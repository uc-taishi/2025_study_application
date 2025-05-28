import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
// import { useAuth } from "../../../context/AuthContext";
import { cookies } from 'next/headers';

// ───────────────────────────────
// Supabase サーバークライアント
// ───────────────────────────────
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,          // 例: https://xxxx.supabase.co
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!           // 読み取り専用なら anon key でも可
);

// ───────────────────────────────
// POST /api/users
// ───────────────────────────────
export async function GET(req: NextRequest) {
  try {
    // users テーブルを取得
    const { data, error } = await supabase
      .from("users")
      .select("employee_no, email, name, roles (role_name)")
      .order("employee_no", { ascending: true });

    // DB エラー
    if (error) {
      console.error(error);
      return NextResponse.json(
        { error: "サーバーエラーが発生しました" },
        { status: 500 }
      );
    }

    // レスポンスを整形
    const users = data.map((user) => ({
      employee_no: user.employee_no,
      email: user.email,
      name: user.name,
      role_name: (user.roles as any).role_name || "未設定",
    }));

    return NextResponse.json({ data: users });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "予期しないエラーが発生しました" },
      { status: 500 }
    );
  }
}
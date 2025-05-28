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
// POST /api/login
// ───────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const { email, password } = (await req.json()) as {
      email?: string;
      password?: string;
    };

    // バリデーション（超簡易）
    if (!email || !password) {
      return NextResponse.json(
        { error: "メールアドレスとパスワードを入力してください" },
        { status: 400 }
      );
    }

    // users テーブルを照合（※平文パスワード例）
    const { data, error } = await supabase
      .from("users")
      .select("employee_no, email, name, roles (role_name)")
      .eq("email", email)
      .eq("password", password)
      .maybeSingle();

    // DB エラー
    if (error && error.code !== "PGRST116") {     // PGRST116 = row not found
      console.error(error);
      return NextResponse.json(
        { error: "サーバーエラーが発生しました" },
        { status: 500 }
      );
    }

    // 一致するユーザーがいない
    if (!data) {
      return NextResponse.json(
        { error: "メールアドレスまたはパスワードが違います" },
        { status: 401 }
      );
    }

    //@ts-ignore
    const role = (data.roles as any).role_name
    const cookie = data.employee_no + "$" + data.email + "$" + data.name + "$" + role;
    const cookieStore = await cookies();
    cookieStore.set('user', cookie, {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
    });

    // 成功: 何も返さなくても OK。フロント側では res.ok だけ見ている
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "想定外のエラーが発生しました" },
      { status: 500 }
    );
  }
}

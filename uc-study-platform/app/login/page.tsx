"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
    const [error, setError] = useState("");
    const [pending, setPending] = useState(false);

    /* フォーム送信 */
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        setPending(true);

        const fd = new FormData(e.currentTarget);
        const email = fd.get("email")?.toString() ?? "";
        const password = fd.get("password")?.toString() ?? "";

        const res = await fetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        const json = await res.json();     // ← ここを console.log
        console.log(json);

        setPending(false);

        if (!res.ok) {
            const { error } = await res.json();
            setError(error ?? "ログイン失敗");
            return;
        }

        /* 成功 → ダッシュボードへ */
        router.replace("/dashboard");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex h-screen items-center justify-center">
                <div className="w-[340px] rounded-lg border-2 p-8">
                    <h1 className="text-white">ログイン</h1>

                    {/* メール */}
                    <div className="mt-4">
                        <label htmlFor="email" className="block text-sm font-medium">
                            メールアドレス
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="mt-1 block w-full rounded-md border p-2 text-black
                         focus:ring focus:ring-blue-500"
                        />
                    </div>

                    {/* パスワード */}
                    <div className="mt-4">
                        <label htmlFor="password" className="block text-sm font-medium">
                            パスワード
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            className="mt-1 block w-full rounded-md border p-2 text-black
                         focus:ring focus:ring-blue-500"
                        />
                    </div>

                    {/* 送信ボタン & エラー */}
                    <div className="mt-4 space-y-2">
                        <button
                            disabled={pending}
                            className="w-full rounded-md bg-blue-500 p-2
                         hover:bg-blue-600 disabled:opacity-50"
                        >
                            {pending ? "処理中…" : "ログイン"}
                        </button>
                        {error && <p className="text-red-500">{error}</p>}
                    </div>
                </div>
            </div>
        </form>
    );
}

"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../../context/AuthContext";

export default function LoginPage() {


    const { user, login } = useAuth();
    const router = useRouter();
    const [error, setError] = useState("");

    if (user) {
        router.replace("/dashboard");
        return null;
    }
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const email = formData.get("email");
        const password = formData.get("password");
        const ok = await login(email?.toString() ?? "", password?.toString() ?? "");
        if (!ok) {
            setError("EmailまたはPasswordが間違っています");
        } else {
            router.replace("/dashboard");
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="flex h-screen items-center justify-center bg-green-100">
                    <div className="border-2 border-gray-300 bg-white p-8 rounded-lg shadow-md">
                        <h1>ログイン</h1>
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                メールアドレス
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                パスワード
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div className="mt-4">
                            <button className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                                ログイン
                            </button>
                            {error && (
                                <div className="mt-2 text-red-500">{error}</div>
                            )}
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}
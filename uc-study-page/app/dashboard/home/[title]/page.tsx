"use client";
import Button from "../../../../components/Button";
import Link from "next/link";
import { useAuth } from "../../../../context/AuthContext";

type Props = {
  params: {
    title: string;
  };
};

export default function HomePage({ params }: Props) {

  const { user } = useAuth();

  return (
    <>
    {user?.role === "admin" && (
      <Button params={{ title: "コース編集"}}/>
    )}
    <div className="flex items-center justify-center min-h-screen">
      <div className="grid grid-cols-4 gap-20">
        <Link href={`/dashboard/home/${params.title}/curriculum`}>
          <div className="rounded-lg bg-blue-500 text-white flex items-center justify-center p-8 shadow-lg">
            カリキュラム
          </div>
        </Link>
        <Link href={`/dashboard/home/${params.title}/exercises`}>
          <div className="rounded-lg bg-blue-500 text-white flex items-center justify-center p-8 shadow-lg">
            練習問題
          </div>
        </Link>
      </div>
    </div>
    </>
  );
}

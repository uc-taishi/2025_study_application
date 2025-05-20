"use client"
import { usePathname } from "next/navigation";
import Link from "next/link";

const Breadcrumbs = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean); // '/' で区切って配列化

  // パスのセグメントごとにリンクを作成
  const breadcrumbLinks = pathSegments.map((segment, index) => {

    const href = "/" + pathSegments.slice(0, index + 1).join("/");

    return (
      <span key={href}>
        <Link href={href} className="text-blue-600 hover:underline">
          {segment.charAt(0).toUpperCase() + segment.slice(1)} {/* キャピタライズ */}
        </Link>
        {index < pathSegments.length - 1 && " / "}
      </span>
    );
  });

  return (
    <nav className="text-sm text-gray-600">
      {breadcrumbLinks}
    </nav>
  );
};

export default Breadcrumbs;

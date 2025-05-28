import Link from "next/link";


/** 汎用的に使えるカード */
export type ContentItem = {
    courseCode: string;
    title: string;
    description: string;
};

export default function ContentCard({
    item,
    className = "",
}: {
    item: ContentItem;
    /** ページごとに上書きしたい Tailwind を渡せるように */
    className?: string;
}) {
    const base =
        "flex min-h-[7rem] w-full items-center justify-center " +
        "rounded-lg bg-blue-600 p-4 text-white shadow " +
        "transition hover:bg-blue-700 focus:ring-4 focus:ring-blue-800";

    return (
        <>
            {item.courseCode &&
                <Link href={item.courseCode} className={`${base} ${className}`}>
                    {item.title}
                </Link>
            }
        </>
    );
}

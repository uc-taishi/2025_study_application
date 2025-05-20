import Link from "next/link";

type Props = {
  params: {
    title: string;
    path: string;
  };
};

export default function Contents({ params }: Props) {
  return (
        <Link href={params.path}>
          <div className="rounded-lg bg-blue-500 text-white flex items-center justify-center p-8 shadow-lg">
            {params.title}
          </div>
        </Link>
  );
}
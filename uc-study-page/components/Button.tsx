type Props = {
  params: {
    title: string;
  };
};

export default function Button({ params }: Props) {
  return (
    <button className="rounded-lg bg-red-400 text-white flex items-center justify-center p-4 shadow-lg">
      {params.title}
    </button>
  );
}
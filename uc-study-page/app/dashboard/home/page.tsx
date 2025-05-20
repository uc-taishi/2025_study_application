import Contents from "../../../components/Contents";

export default function HomePage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="grid grid-cols-4 gap-20">
        <Contents params={{ title: "Python入門", path: "/dashboard/home/python-beginner" }} />
        <Contents params={{ title: "Python基礎", path: "/dashboard/home/python-beginner" }} />
      </div>
    </div>
  );
}

import Table from "../../../../../components/Table";
import { Column } from "../../../../../components/Table";

export default function HomePage() {
  const columns: Column[] = [
    { id: "title", label: "Day", minWidth: 100, align: "left" },
    { id: "section", label: "単元", minWidth: 120, align: "center" },
    { id: "status", label: "完了", minWidth: 60, align: "center" },
    { id: "link", label: "リンク", minWidth: 100, align: "center" },
  ];

  const rows: any= [
    { title: "Day0", section: "基礎", status: "途中", link: "/dashboard/home/python-beginner/exercises" },
    { title: "Day1", section: "基礎", status: "完了", link: "/dashboard/home/python-beginner/exercises" },
  ];

  return (
    <div className="flex">
      <Table columns={columns} rows={rows} isModal={true} />
    </div>
  );
}

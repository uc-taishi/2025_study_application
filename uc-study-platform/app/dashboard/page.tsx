import { redirect } from "next/navigation";
export default function DashboardRoot() {
  redirect("/dashboard/home");
}
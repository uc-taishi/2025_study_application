import MainContent from "../../../components/MainContent";
import { ContentItem } from "../../../components/ContentCard";

export default function HomePage() {
  const myCourses: ContentItem[] = [
    { courseCode: "/dashboard/course-collection/python", title: "Python入門", description: "Pythonの基本を学ぶコースです。" },
  ];

  return (
    <MainContent
      sections={[
        { heading: "マイコース", items: myCourses },
        // 将来「マイパス」を足しても再利用できる
      ]}
    />
  );
}

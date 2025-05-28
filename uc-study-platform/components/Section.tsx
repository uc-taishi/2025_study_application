import CardGrid from "./CardGrid";
import { ContentItem } from "./ContentCard";

export default function Section({
  heading,
  items,
}: {
  heading: string;
  items: ContentItem[];
}) {
  return (
    <section className="border-b border-white/20 last:border-none">
      <h2 className="px-8 py-6 text-2xl font-semibold">{heading}</h2>
      <div className="px-8 pb-10">
        <CardGrid items={items} />
      </div>
    </section>
  );
}

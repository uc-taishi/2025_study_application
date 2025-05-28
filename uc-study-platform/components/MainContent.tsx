import Section from "./Section";
import { ContentItem } from "./ContentCard";

type SectionDef = {
  heading: string;
  items: ContentItem[];
};

export default function MainContent({ sections }: { sections: SectionDef[] }) {
  return (
    <div className="space-y-px rounded border border-white/20">
      {sections.map((s) => (
        <Section key={s.heading} heading={s.heading} items={s.items} />
      ))}
    </div>
  );
}

import ContentCard, { ContentItem } from "./ContentCard";

/**
 * どのページでも再利用できる “カードの並び”
 * - 列幅は固定。カードが 1 つでも横に伸びない
 * - `columnWidth` でカード幅を変えられる
 */
export default function CardGrid({
  items,
  columnWidth = "11rem",
}: {
  items: ContentItem[];
  columnWidth?: `${number}${"rem" | "px"}`; // 例 "12rem" "200px"
}) {
  return (
    <div
      className="grid gap-x-20 gap-y-14"
      style={{
        gridTemplateColumns: `repeat(auto-fill,minmax(${columnWidth},${columnWidth}))`,
      }}
    >
      {items.map((it, index) => (
        <ContentCard key={index} item={it} />
      ))}
    </div>
  );
}

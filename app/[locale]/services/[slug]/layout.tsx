const serviceSlugs = [
  "electrical-installations",
  "lighting-systems",
  "network-setup",
  "shop-drawing",
  "design-board",
  "solar-system-panel",
] as const;

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export default function ServiceSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

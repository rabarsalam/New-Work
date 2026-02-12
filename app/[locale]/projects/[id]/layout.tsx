import { projects } from "@/app/Data/product";

export function generateStaticParams() {
  return projects.map((p) => ({ id: String(p.id) }));
}

export const dynamicParams = false;

export default function ProjectIdLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import { Suspense } from "react";
import ProjectsClient from "./ProjectsClient";

export default function ProjectsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <ProjectsClient />
    </Suspense>
  );
}

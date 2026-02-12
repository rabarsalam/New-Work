"use client";

import { useState, useEffect, useTransition } from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FiGrid, FiHome, FiBriefcase, FiPackage } from "react-icons/fi";

import FallbackImage from "@/app/components/FallbackImage";
import PageLoader from "@/app/components/PageLoader";
import { projects } from "@/app/Data/product";

type FilterType = "all" | "residential" | "commercial" | "industrial";

export default function ProjectsClient() {
  const t = useTranslations("ProjectsPage");
  const locale = useLocale() as "en" | "ar" | "ku";
  const searchParams = useSearchParams();

  const initialCategory = (searchParams.get("category") || "all") as FilterType;

  const [activeFilter, setActiveFilter] = useState<FilterType>(initialCategory);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(28);

  const [isPending, startTransition] = useTransition();

  /* ---------------- RESPONSIVE ITEMS COUNT ---------------- */
  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 640)
        setItemsPerPage(12); // mobile
      else if (window.innerWidth < 1024)
        setItemsPerPage(20); // tablet
      else setItemsPerPage(28); // desktop
    };

    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  /* ---------------- FILTERS ---------------- */
  const filters = [
    { id: "all" as FilterType, label: t("filterAll"), icon: FiGrid },
    {
      id: "residential" as FilterType,
      label: t("filterResidential"),
      icon: FiHome,
    },
    {
      id: "commercial" as FilterType,
      label: t("filterCommercial"),
      icon: FiBriefcase,
    },
    {
      id: "industrial" as FilterType,
      label: t("filterIndustrial"),
      icon: FiPackage,
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  /* ---------------- PAGINATION ---------------- */
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProjects = filteredProjects.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  /* ---------------- ACTIONS ---------------- */
  const changePage = (page: number) => {
    startTransition(() => {
      setCurrentPage(page);
      window.scrollTo({ top: 280, behavior: "smooth" });
    });
  };

  const changeFilter = (filter: FilterType) => {
    startTransition(() => {
      setActiveFilter(filter);
      setCurrentPage(1);
      window.scrollTo({ top: 280, behavior: "smooth" });
    });
  };

  return (
    <main className="min-h-screen pt-20 bg-gradient-to-b from-gray-50 to-white relative">
      {/* Loader */}
      {isPending && <PageLoader />}

      {/* Hero */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">{t("title")}</h1>
          <p className="text-xl text-gray-300 mb-2">{t("subtitle")}</p>
          <p className="text-gray-400">{t("description")}</p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-4">
          {filters.map((filter) => {
            const Icon = filter.icon;
            return (
              <button
                key={filter.id}
                onClick={() => changeFilter(filter.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-yellow-500 text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105"
                }`}
              >
                <Icon className="w-5 h-5" />
                {filter.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div
            className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 transition-opacity duration-300 ${
              isPending ? "opacity-40" : "opacity-100"
            }`}
          >
            {paginatedProjects.map((project) => (
              <Link
                key={project.id}
                href={`/${locale}/projects/${project.id}`}
                className="group relative aspect-square overflow-hidden rounded-xl bg-gray-100 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <FallbackImage
                  src={project.image}
                  alt={project.title[locale]}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <h3 className="text-lg font-bold mb-1">
                      {project.title[locale]}
                    </h3>
                    <p className="text-sm text-gray-300 capitalize mb-3">
                      {t(`categories.${project.category}`)}
                    </p>

                    {/* 👇 SMALL VIEW BUTTON (BACK) */}
                    <span className="inline-block px-4 py-2 bg-yellow-500 text-white rounded-lg text-sm font-medium hover:bg-yellow-600 transition">
                      {t("viewProject")}
                    </span>
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur rounded-full text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition">
                  {t(`categories.${project.category}`)}
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center flex-wrap gap-3 mt-14">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => changePage(i + 1)}
                  className={`min-w-[44px] h-11 rounded-full font-semibold transition-all duration-300 ${
                    currentPage === i + 1
                      ? "bg-yellow-500 text-white shadow-lg scale-110"
                      : "bg-white border border-gray-300 text-gray-800 hover:bg-gray-900 hover:text-white"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

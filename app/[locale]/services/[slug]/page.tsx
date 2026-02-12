"use client";

import { useMemo, useState, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { allProjects } from "@/app/Data/config.allProjects";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiSettings,
  FiClock,
  FiCheckCircle,
  FiMaximize2,
  FiDownload,
  FiSearch,
} from "react-icons/fi";

type StatusColor = "gray" | "emerald" | "yellow" | "blue";

export default function AllProjectsPage() {
  const t = useTranslations("AllProjectsPage");
  const locale = useLocale() as "en" | "ar" | "ku";
  const params = useParams();
  const category = params?.slug as string | undefined;

  const [statusFilter, setStatusFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [imageLoaded, setImageLoaded] = useState<boolean[]>([]);
  const [downloading, setDownloading] = useState(false);

  /* ================= SERVICE IMAGE MAP ================= */
  const serviceImages: Record<string, string[]> = {
    "electrical-installations": [
      "/images/services/electrical-1.jpg",
      "/images/services/electrical-2.jpg",
      "/images/services/electrical-3.jpg",
    ],
    "lighting-systems": [
      "/images/services/lighting-1.jpg",
      "/images/services/lighting-2.jpg",
    ],
    "network-setup": [
      "/images/services/network-1.jpg",
      "/images/services/network-2.jpg",
    ],
    "solar-system-panel": [
      "/images/services/Solar-1.jpeg",
      "/images/services/Solar-2.jpeg",
      "/images/services/Solar-3.jpeg",
      "/images/services/Solar-4.jpeg",
      "/images/services/Solar-5.jpeg",
      "/images/services/Solar-6.jpeg",
      "/images/services/Solar-7.jpeg",
      "/images/services/Solar-8.jpeg",
      "/images/services/Solar-9.jpeg",
      "/images/services/Solar-10.jpeg",
      "/images/services/Solar-11.jpeg",
      "/images/services/Solar-12.jpeg",
      "/images/services/Solar-13.jpeg",
      "/images/services/Solar-14.jpeg",
    ],
  };

  const currentImages = category ? serviceImages[category] || [] : [];

  // Initialize loaded state
  useEffect(() => {
    setImageLoaded(new Array(currentImages.length).fill(false));
  }, [currentImages.length]);

  /* ================= DOWNLOAD FUNCTION ================= */
  const downloadImage = async (imageSrc: string, index: number) => {
    setDownloading(true);
    try {
      const response = await fetch(imageSrc);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `project-image-${index + 1}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
      alert("Failed to download image. Please try again.");
    } finally {
      setDownloading(false);
    }
  };

  /* ================= LIGHTBOX FUNCTIONS ================= */
  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const showPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      (lightboxIndex - 1 + currentImages.length) % currentImages.length,
    );
  };
  const showNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % currentImages.length);
  };

  /* ================= KEYBOARD & TOUCH SUPPORT ================= */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) showNext();
      if (touchEndX - touchStartX > 50) showPrev();
    };

    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKey);
      window.addEventListener("touchstart", handleTouchStart);
      window.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [lightboxIndex, showNext, showPrev]);

  /* ================= STATS ================= */
  const stats = useMemo(() => {
    const categoryProjects = allProjects.filter(
      (p) => !category || p.category === category,
    );

    return {
      total: categoryProjects.length,
      completed: categoryProjects.filter((p) => p.status === "completed")
        .length,
      ongoing: categoryProjects.filter((p) => p.status === "ongoing").length,
      inProgress: categoryProjects.filter((p) => p.status === "inProgress")
        .length,
    };
  }, [category]);

  /* ================= FILTERED PROJECTS ================= */
  const filteredProjects = useMemo(() => {
    return allProjects.filter((p) => {
      const categoryMatch = !category || p.category === category;
      const statusMatch = statusFilter === "all" || p.status === statusFilter;
      const text = search.toLowerCase();
      const searchMatch =
        p.title[locale].toLowerCase().includes(text) ||
        p.client[locale].toLowerCase().includes(text) ||
        p.location[locale].toLowerCase().includes(text);
      return categoryMatch && statusMatch && searchMatch;
    });
  }, [statusFilter, search, locale, category]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* ================= HERO ================= */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 md:py-24 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                {t("title")}
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-gray-200 leading-relaxed px-4">
              {t("subtitle")}
            </p>
            <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto text-gray-300 leading-relaxed px-4">
              {t("description")}
            </p>
            <div className="mt-8 pt-4">
              <Link
                href={`/${locale}/projects`}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-900 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-yellow-500/50"
              >
                {t("hero.cta")}
                <FiChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        {/* ================= CATEGORY TITLE ================= */}
        {category && (
          <div className="mb-8 sm:mb-12 bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 p-6 sm:p-8 md:p-10">
            <div className="text-center space-y-3">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                {t(`projects.${category}.title`)}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full" />
              <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {t(`projects.${category}.description`)}
              </p>
            </div>
          </div>
        )}

        {/* ================= STATS ================= */}
        <div className="mb-8 sm:mb-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          <StatCard
            icon="📁"
            value={stats.total}
            label={t("stats.totalProjects")}
          />
          <StatCard
            icon="✓"
            value={stats.completed}
            label={t("status.completed")}
            color="emerald"
          />
          <StatCard
            icon="⏳"
            value={stats.ongoing}
            label={t("status.ongoing")}
            color="yellow"
          />
          <StatCard
            icon="⚙️"
            value={stats.inProgress}
            label={t("status.inProgress")}
            color="blue"
          />
        </div>

        {/* ================= ENHANCED FILTER BAR ================= */}
        <div className="sticky top-0 sm:top-4 z-20 bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 p-3 sm:p-4 mb-6 sm:mb-8">
          <div className="flex flex-col gap-3 sm:gap-4">
            {/* Results Count */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                <span className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-yellow-500 text-white rounded-full font-bold text-xs sm:text-sm">
                  {filteredProjects.length}
                </span>
                <span className="font-medium">{t("totalProjects")}</span>
              </div>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder={t("searchPlaceholder")}
                  className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none text-gray-800 transition-all"
                />
              </div>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none text-gray-800 transition-all bg-white min-w-[140px]"
              >
                <option value="all">{t("filters.all")}</option>
                <option value="completed">{t("status.completed")}</option>
                <option value="ongoing">{t("status.ongoing")}</option>
                <option value="inProgress">{t("status.inProgress")}</option>
              </select>
            </div>
          </div>
        </div>

        {/* ================= RESPONSIVE TABLE ================= */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl border border-gray-100 overflow-hidden mb-8 sm:mb-12">
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                <tr>
                  {["#", "project", "client", "location", "year", "status"].map(
                    (key) => (
                      <th
                        key={key}
                        className="px-6 py-4 text-center font-semibold text-gray-700 text-xs uppercase tracking-wider"
                      >
                        {key === "#" ? "#" : t(`table.${key}`)}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredProjects.map((p, i) => (
                  <tr
                    key={p.id}
                    className="text-center hover:bg-yellow-50/50 transition-colors"
                  >
                    <td className="px-6 py-4 text-gray-500 font-medium">
                      {i + 1}
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      {p.title[locale]}
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      {p.client[locale]}
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      {p.location[locale]}
                    </td>
                    <td className="px-6 py-4 text-gray-700 font-medium">
                      {p.year}
                    </td>
                    <td className="px-6 py-4 flex justify-center">
                      <StatusBadge status={p.status} t={t} />
                    </td>
                  </tr>
                ))}
                {filteredProjects.length === 0 && (
                  <tr>
                    <td colSpan={6} className="py-16 text-center">
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                          <FiSearch className="w-8 h-8 text-gray-400" />
                        </div>
                        <p className="text-gray-500 font-medium">
                          {t("noProjects")}
                        </p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden divide-y divide-gray-100">
            {filteredProjects.map((p, i) => (
              <div
                key={p.id}
                className="p-4 hover:bg-yellow-50/50 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="flex items-center justify-center w-6 h-6 bg-gray-900 text-white rounded-full text-xs font-bold">
                        {i + 1}
                      </span>
                      <h3 className="font-semibold text-gray-900 text-sm">
                        {p.title[locale]}
                      </h3>
                    </div>
                    <div className="space-y-1.5 text-xs text-gray-600">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-500">
                          Client:
                        </span>
                        <span>{p.client[locale]}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-500">
                          Location:
                        </span>
                        <span>{p.location[locale]}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-500">Year:</span>
                        <span className="font-semibold">{p.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <StatusBadge status={p.status} t={t} />
                </div>
              </div>
            ))}
            {filteredProjects.length === 0 && (
              <div className="py-16 text-center">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                    <FiSearch className="w-8 h-8 text-gray-400" />
                  </div>
                  <p className="text-gray-500 font-medium text-sm">
                    {t("noProjects")}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ================= UNIFORM GALLERY ================= */}
        {currentImages.length > 0 && (
          <section>
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t("galleryTitle")}
              </h3>
              <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
                Explore our collection of completed projects
              </p>
            </div>

            {/* Uniform Grid - All images same size */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {currentImages.map((img, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-gray-100 cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
                  style={{ aspectRatio: "4/3" }}
                  onClick={() => openLightbox(index)}
                >
                  {/* Loading Skeleton */}
                  {!imageLoaded[index] && (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
                  )}

                  {/* Image with consistent sizing */}
                  <Image
                    src={img}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={`
                      object-cover transition-all duration-700
                      ${imageLoaded[index] ? "opacity-100 scale-100" : "opacity-0 scale-95"}
                      group-hover:scale-110
                    `}
                    onLoad={() => {
                      const newLoaded = [...imageLoaded];
                      newLoaded[index] = true;
                      setImageLoaded(newLoaded);
                    }}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Hover Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="bg-white/95 backdrop-blur-sm text-gray-900 px-5 py-3 rounded-xl shadow-2xl transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <FiMaximize2 className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-yellow-600" />
                      <p className="text-xs sm:text-sm font-semibold">
                        View Full Size
                      </p>
                    </div>
                  </div>

                  {/* Image Counter Badge */}
                  <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-xs font-semibold border border-white/20">
                    {index + 1} / {currentImages.length}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* ================= ENHANCED LIGHTBOX ================= */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/98 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <div
            className="relative w-full h-full flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Bar */}
            <div className="flex items-center justify-between p-3 sm:p-4 md:p-6 bg-gradient-to-b from-black/80 to-transparent">
              <div className="flex items-center gap-3 sm:gap-4 bg-white/10 backdrop-blur-md rounded-full px-3 sm:px-4 md:px-6 py-2 sm:py-3 border border-white/20">
                <div className="flex items-center gap-2 text-white">
                  <span className="text-yellow-400 text-lg sm:text-xl md:text-2xl font-bold">
                    {lightboxIndex + 1}
                  </span>
                  <span className="text-gray-400 text-sm sm:text-base">/</span>
                  <span className="text-gray-300 text-sm sm:text-base md:text-lg">
                    {currentImages.length}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* Download Button */}
                <button
                  onClick={() =>
                    downloadImage(currentImages[lightboxIndex], lightboxIndex)
                  }
                  disabled={downloading}
                  className="h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-yellow-500/80 transition-all duration-300 hover:scale-110 border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
                  title="Download Image"
                >
                  {downloading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <FiDownload size={20} className="sm:w-6 sm:h-6" />
                  )}
                </button>

                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-red-500/80 transition-all duration-300 hover:scale-110 border border-white/20"
                  title="Close (Esc)"
                >
                  <FiX size={20} className="sm:w-6 sm:h-6" />
                </button>
              </div>
            </div>

            {/* Main Image Container */}
            <div className="flex-1 flex items-center justify-center px-3 sm:px-4 md:px-8 pb-24 sm:pb-28">
              <div className="relative w-full h-full max-h-[70vh] sm:max-h-[75vh]">
                <Image
                  src={currentImages[lightboxIndex]}
                  alt={`Project Image ${lightboxIndex + 1}`}
                  fill
                  className="object-contain rounded-lg sm:rounded-2xl"
                  priority
                  quality={100}
                />
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={showPrev}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 h-12 w-12 sm:h-14 sm:w-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20 active:scale-95"
                title="Previous (←)"
              >
                <FiChevronLeft size={24} className="sm:w-8 sm:h-8" />
              </button>

              <button
                onClick={showNext}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 h-12 w-12 sm:h-14 sm:w-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20 active:scale-95"
                title="Next (→)"
              >
                <FiChevronRight size={24} className="sm:w-8 sm:h-8" />
              </button>
            </div>

            {/* Thumbnail Strip */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3 sm:p-4 md:p-6">
              <div className="max-w-5xl mx-auto">
                <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
                  {currentImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setLightboxIndex(idx)}
                      className={`
                        relative flex-shrink-0 rounded-lg sm:rounded-xl overflow-hidden
                        transition-all duration-300
                        ${
                          idx === lightboxIndex
                            ? "ring-3 sm:ring-4 ring-yellow-500 scale-105 sm:scale-110"
                            : "ring-2 ring-white/20 hover:ring-white/40 opacity-60 hover:opacity-100"
                        }
                      `}
                      style={{ width: "60px", height: "60px" }}
                    >
                      <Image
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        fill
                        className="object-cover"
                        sizes="60px"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Gesture Hint */}
            <div className="sm:hidden absolute bottom-24 left-1/2 -translate-x-1/2 text-white/70 text-xs bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
              Swipe or tap arrows to navigate
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

/* ================= STAT CARD ================= */
function StatCard({
  icon,
  value,
  label,
  color = "gray",
}: {
  icon: string;
  value: number;
  label: string;
  color?: StatusColor;
}) {
  const colors: Record<StatusColor, string> = {
    gray: "from-gray-800 to-gray-900",
    emerald: "from-emerald-500 to-emerald-600",
    yellow: "from-yellow-400 to-yellow-500",
    blue: "from-blue-500 to-blue-600",
  };

  return (
    <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div
        className={`h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-br ${colors[color]} text-white flex items-center justify-center mb-3 sm:mb-4 text-base sm:text-xl font-bold shadow-lg`}
      >
        {icon}
      </div>
      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
        {value}
      </h3>
      <p className="text-xs sm:text-sm text-gray-600 font-medium">{label}</p>
    </div>
  );
}

/* ================= STATUS BADGE ================= */
function StatusBadge({
  status,
  t,
}: {
  status: string;
  t: ReturnType<typeof useTranslations>;
}) {
  const statusMap: Record<
    string,
    { label: string; gradient: string; text: string; icon: React.ReactNode }
  > = {
    completed: {
      label: t("status.completed"),
      gradient: "bg-gradient-to-r from-emerald-500 to-emerald-600",
      text: "text-white",
      icon: <FiCheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
    },
    ongoing: {
      label: t("status.ongoing"),
      gradient: "bg-gradient-to-r from-yellow-500 to-yellow-600",
      text: "text-white",
      icon: <FiClock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
    },
    inProgress: {
      label: t("status.inProgress"),
      gradient: "bg-gradient-to-r from-blue-500 to-blue-600",
      text: "text-white",
      icon: <FiSettings className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
    },
    default: {
      label: t("status.unknown"),
      gradient: "bg-gradient-to-r from-gray-500 to-gray-600",
      text: "text-white",
      icon: <FiSettings className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
    },
  };

  const current = statusMap[status] || statusMap.default;

  return (
    <div
      className={`
        inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full font-semibold text-xs
        shadow-md ${current.gradient} ${current.text}
        transition-all duration-300 hover:scale-105 hover:shadow-lg
      `}
    >
      {current.icon}
      <span className="whitespace-nowrap">{current.label}</span>
    </div>
  );
}

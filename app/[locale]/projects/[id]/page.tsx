"use client";

import { useTranslations } from "next-intl";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import { FiArrowLeft, FiCalendar, FiMapPin, FiTag } from "react-icons/fi";
import { getProjectById } from "@/app/Data/product";
import FallbackImage from "@/app/components/FallbackImage";

type Locale = "en" | "ar" | "ku";
type Localized = string | Record<Locale, string>;

export default function ProjectDetailPage() {
  const t = useTranslations("ProjectsPage");
  const params = useParams();
  const locale = params.locale as Locale;
  const projectId = Number(params.id);
  const project = getProjectById(projectId);

  if (!project) notFound();

  const images = project.images?.length ? project.images : [project.image];

  const getText = (v?: Localized): string => {
    if (!v) return "";
    if (typeof v === "string") return v;
    return v[locale] ?? v.en ?? "";
  };

  return (
    <main className="min-h-screen pt-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          href={`/${locale}/projects`}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-8"
        >
          <FiArrowLeft className="w-5 h-5" />
          <span>{t("backToProjects")}</span>
        </Link>
      </div>

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] mb-12">
        <div className="absolute inset-0">
          <FallbackImage
            src={project.image}
            alt={getText(project.title)}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12">
            <div className="inline-block px-4 py-2 bg-yellow-500/20 backdrop-blur-sm rounded-full border border-yellow-500/30 mb-4">
              <span className="text-sm font-medium text-yellow-300 capitalize">
                {t(`categories.${project.category}`)}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {getText(project.title)}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t("projectOverview")}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {getText(project.description)}
            </p>

            {/* Gallery */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {images.map((src, i) => (
                <div
                  key={i}
                  className="relative aspect-square rounded-xl overflow-hidden bg-gray-100"
                >
                  <FallbackImage
                    src={src}
                    alt={`${getText(project.title)} - Image ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t("projectDetails")}
              </h3>

              <div className="space-y-6">
                {/* Category */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiTag className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Category</p>
                    <p className="text-lg font-semibold text-gray-900 capitalize">
                      {t(`categories.${project.category}`)}
                    </p>
                  </div>
                </div>

                {/* Year */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiCalendar className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{t("year")}</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {project.year}
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiMapPin className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">
                      {t("location")}
                    </p>
                    <p className="text-lg font-semibold text-gray-900">
                      {getText(project.location)}
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-6 border-t border-gray-200">
                  <Link
                    href={`/${locale}/contact`}
                    className="block w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-bold py-4 rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all shadow-lg hover:shadow-xl text-center"
                  >
                    {t("getSimilarProject")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

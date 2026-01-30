"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import {
  FiTarget,
  FiEye,
  FiAward,
  FiShield,
  FiUsers,
  FiZap,
} from "react-icons/fi";

export default function AboutPage() {
  const t = useTranslations("AboutPage");
  const locale = useLocale();

  const values = [
    {
      icon: FiAward,
      title: t("value1Title"),
      description: t("value1Description"),
      color: "from-yellow-400 to-yellow-600",
      bgLight: "bg-yellow-50",
    },
    {
      icon: FiShield,
      title: t("value2Title"),
      description: t("value2Description"),
      color: "from-green-400 to-green-600",
      bgLight: "bg-green-50",
    },
    {
      icon: FiUsers,
      title: t("value3Title"),
      description: t("value3Description"),
      color: "from-blue-400 to-blue-600",
      bgLight: "bg-blue-50",
    },
  ];

  const stats = [
    { value: "10+", labelKey: "statsYears", icon: FiZap },
    { value: "500+", labelKey: "statsProjects", icon: FiTarget },
    { value: "100%", labelKey: "statsSatisfaction", icon: FiAward },
    { value: "24/7", labelKey: "statsSupport", icon: FiEye },
  ];

  return (
    <main className="min-h-screen pt-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/project-1.jpeg')] bg-cover bg-center opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-800/90 to-gray-900/95" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {t("title")}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100 hover:shadow-2xl hover:border-yellow-200/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-500/25">
                  <FiTarget className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {t("missionTitle")}
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                {t("missionDescription")}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100 hover:shadow-2xl hover:border-blue-200/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                  <FiEye className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {t("visionTitle")}
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                {t("visionDescription")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {t("valuesTitle")}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className={`group rounded-2xl p-8 border border-gray-100 ${value.bgLight} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                >
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-yellow-400">
                    {stat.value}
                  </div>
                  <div className="text-gray-300 text-sm md:text-base">
                    {t(stat.labelKey)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {t("ctaTitle")}
          </h2>
          <p className="text-gray-600 mb-8">
            {t("ctaSubtitle")}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-bold rounded-xl hover:from-yellow-600 hover:to-yellow-700 transition-all shadow-lg hover:shadow-xl"
          >
            {t("ctaButton")}
          </Link>
        </div>
      </section>
    </main>
  );
}

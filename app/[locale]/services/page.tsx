"use client";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import {
  FiZap,
  FiStar,
  FiWifi,
  FiEdit3,
  FiLayers,
  FiSun,
} from "react-icons/fi";

const serviceIcons = [
  FiZap, // Electrical
  FiStar, // Lighting
  FiWifi, // Network
  FiEdit3, // Shop Drawing (changed)
  FiLayers, // Design Board (changed)
  FiSun, // Solar System (changed)
];

export default function ServicesPage() {
  const t = useTranslations("ServicesPage");
  const locale = useLocale();

  const services = [
    {
      icon: 0,
      title: t("service1"),
      description: t("service1Desc"),
      color: "from-yellow-400 to-yellow-600",
      slug: "electrical-installations",
    },
    {
      icon: 1,
      title: t("service2"),
      description: t("service2Desc"),
      color: "from-blue-400 to-blue-600",
      slug: "lighting-systems",
    },
    {
      icon: 2,
      title: t("service3"),
      description: t("service3Desc"),
      color: "from-green-400 to-green-600",
      slug: "network-setup",
    },
    {
      icon: 3,
      title: t("service4"),
      description: t("service4Desc"),
      color: "from-purple-400 to-purple-600",
      slug: "shop-drawing",
    },
    {
      icon: 4,
      title: t("service5"),
      description: t("service5Desc"),
      color: "from-red-400 to-red-600",
      slug: "design-board",
    },
    {
      icon: 5,
      title: t("service6"),
      description: t("service6Desc"),
      color: "from-indigo-400 to-indigo-600",
      slug: "solar-system-panel",
    },
  ];

  return (
    <main className="min-h-screen pt-20 bg-gradient-to-b from-gray-50 to-white">
      {/* HERO */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-20 md:py-28">
        <div className="absolute inset-0 bg-[url('/images/project-1.jpeg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {t("title")}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4">
            {t("subtitle")}
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = serviceIcons[service.icon];

              return (
                <Link
                  key={index}
                  href={`/${locale}/services/${service.slug}`}
                  className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-md transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
                >
                  {/* Top Gradient Bar */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color}`}
                  />

                  <div className="p-8">
                    {/* Icon */}
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
                    >
                      <IconComponent className="w-8 h-8" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-yellow-600">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* CTA */}
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors">
                      {t("ctaButton")}
                    </span>
                  </div>

                  {/* Soft Hover Glow */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent to-gray-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("ctaTitle")}
          </h2>
          <p className="text-xl text-gray-800 mb-8">{t("ctaSubtitle")}</p>
          <Link
            href={`/${locale}/contact`}
            className="inline-block bg-gray-900 text-white font-semibold px-8 py-4 rounded-xl hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
          >
            {t("ctaButton")}
          </Link>
        </div>
      </section>
    </main>
  );
}

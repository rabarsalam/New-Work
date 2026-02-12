"use client";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  const locale = useLocale();
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">
            Electrical Loads
          </h3>
          <p className="text-sm leading-relaxed">{t("description")}</p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">{t("links")}</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href={`/${locale}`} className="hover:text-white">
                {t("home")}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/about`} className="hover:text-white">
                {t("about")}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/services`} className="hover:text-white">
                {t("services")}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/projects`} className="hover:text-white">
                {t("projects")}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/contact`} className="hover:text-white">
                {t("contact")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            {t("servicesTitle")}
          </h4>
          <ul className="space-y-2 text-sm">
            <li>{t("service1")}</li>
            <li>{t("service2")}</li>
            <li>{t("service3")}</li>
            <li>{t("service4")}</li>
            <li>{t("service5")}</li>
            <li>{t("service6")}</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">{t("contactTitle")}</h4>
          <div className="flex flex-col gap-2">
            <p className="text-sm">📞 {t("PhoneNumber")}</p>
            <p className="text-sm">📧 info@electricalloads.com</p>
            <p className="text-sm">📧 Gm@electricalloads.com</p>
            <p className="text-sm">📍 {t("Address")}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-6 text-sm text-gray-400">
        © {new Date().getFullYear()} Electrical Loads. {t("rights")}
      </div>
    </footer>
  );
}

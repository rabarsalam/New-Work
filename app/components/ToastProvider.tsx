"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useTranslations } from "next-intl";

type ToastType = "success" | "error" | "info";

type Toast = {
  id: number;
  type: ToastType;
  message: string;
};

type ToastContextValue = {
  showToast: (type: ToastType, message: string) => void;
};

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return ctx;
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const t = useTranslations("Toast");
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((type: ToastType, message: string) => {
    setToasts((current) => {
      const id = Date.now();
      const next = [...current, { id, type, message }];
      setTimeout(() => {
        setToasts((latest) => latest.filter((toast) => toast.id !== id));
      }, 4000);
      return next;
    });
  }, []);

  const value = useMemo(() => ({ showToast }), [showToast]);

  const typeLabel = (type: ToastType) => {
    switch (type) {
      case "success":
        return t("success");
      case "error":
        return t("error");
      case "info":
        return t("info");
    }
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
      {/* Toast container */}
      <div className="fixed top-4 right-4 z-[60] space-y-3 max-w-xs sm:max-w-sm">
        {toasts.map((toast) => {
          const base =
            "rounded-lg px-4 py-3 shadow-lg flex items-start gap-3 text-sm border backdrop-blur bg-white/95";
          const tone =
            toast.type === "success"
              ? "border-emerald-200 text-emerald-900"
              : toast.type === "error"
                ? "border-red-200 text-red-900"
                : "border-slate-200 text-slate-900";
          const dot =
            toast.type === "success"
              ? "bg-emerald-500"
              : toast.type === "error"
                ? "bg-red-500"
                : "bg-slate-500";

          return (
            <div key={toast.id} className={`${base} ${tone}`}>
              <span className={`mt-1 h-2 w-2 rounded-full flex-shrink-0 ${dot}`} />
              <div className="min-w-0">
                <p className="font-semibold text-xs uppercase tracking-wide opacity-90">
                  {typeLabel(toast.type)}
                </p>
                <p className="mt-0.5">{toast.message}</p>
              </div>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
}


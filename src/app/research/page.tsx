"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { researchAreas, researchArticles } from "@/data/research";

const ACCENT = "#007AFF";

type Tab = "research" | "articles";

export default function ResearchPage() {
  const [activeTab, setActiveTab] = useState<Tab>("research");

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(0,122,255,0.18),_transparent_30%),linear-gradient(135deg,_#f8fbff_0%,_#eef4ff_40%,_#ffffff_100%)] py-20 dark:bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_28%),linear-gradient(135deg,_#020617_0%,_#0f172a_45%,_#111827_100%)]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="rounded-[2rem] border border-white/60 bg-white/90 p-8 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-slate-900/85"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: ACCENT }}>
                Research
              </p>
              <h1 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
                Research Areas & Articles
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">
                A dedicated space for long-term research themes and written work. Use the toggle to
                switch between core research areas and articles.
              </p>
            </div>

            <Link
              href="/"
              className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:border-primary hover:text-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            >
              ← Home
            </Link>
          </div>

          {/* Tabs */}
          <div className="mt-8 inline-flex rounded-full border border-slate-200 bg-slate-50 p-1 text-xs font-semibold shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <button
              type="button"
              onClick={() => setActiveTab("research")}
              className={`rounded-full px-4 py-1.5 transition-colors ${
                activeTab === "research"
                  ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900"
                  : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              }`}
            >
              Research Areas
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("articles")}
              className={`rounded-full px-4 py-1.5 transition-colors ${
                activeTab === "articles"
                  ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900"
                  : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              }`}
            >
              Articles
            </button>
          </div>

          {/* Content */}
          {activeTab === "research" ? (
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {researchAreas.map((area, index) => (
                <motion.div
                  key={area.slug}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 * index }}
                  className="group flex h-full flex-col justify-between rounded-[1.5rem] border border-slate-200/80 bg-slate-50/90 p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-md dark:border-slate-700 dark:bg-slate-900/80"
                >
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                      Research Area
                    </p>
                    <h2 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">
                      {area.title}
                    </h2>
                    <p className="mt-3 line-clamp-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {area.summary}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-xs font-semibold text-slate-600 dark:text-slate-300">
                    <span>View research page</span>
                    <Link
                      href={`/research/${area.slug}`}
                      className="rounded-full bg-slate-900 px-3 py-1 text-[11px] font-semibold text-white shadow-sm transition-colors hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
                    >
                      Open
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="mt-8">
              {researchArticles.length === 0 ? (
                <div className="rounded-[1.5rem] border border-dashed border-slate-300/80 bg-slate-50/60 p-8 text-center text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300">
                  <p className="font-semibold">No articles yet</p>
                  <p className="mt-2 text-xs leading-6">
                    Research articles, implementation write-ups, and lab-style notes will appear here once they are
                    published.
                  </p>
                </div>
              ) : (
                <div className="grid gap-6 md:grid-cols-2">
                  {researchArticles.map(article => (
                    <Link
                      key={article.slug}
                      href={`/research/${article.slug}`}
                      className="group flex flex-col justify-between rounded-[1.5rem] border border-slate-200/80 bg-slate-50/90 p-6 text-left shadow-sm transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-md dark:border-slate-700 dark:bg-slate-900/80"
                    >
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                          Article
                        </p>
                        <h2 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">
                          {article.title}
                        </h2>
                        <p className="mt-3 line-clamp-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                          {article.summary}
                        </p>
                      </div>
                      <span className="mt-4 text-xs font-semibold text-slate-600 group-hover:text-primary dark:text-slate-300">
                        Read article →
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </main>
  );
}
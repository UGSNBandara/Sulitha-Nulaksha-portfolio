import { notFound } from "next/navigation";
import Link from "next/link";
import { researchAreas, getResearchAreaBySlug, getArticleBySlug } from "@/data/research";

interface Props {
  params: { slug: string };
}

const ACCENT = "#007AFF";

export default function ResearchDetailPage({ params }: Props) {
  const { slug } = params;

  const area = getResearchAreaBySlug(slug);
  const article = area ? undefined : getArticleBySlug(slug);

  if (!area && !article) {
    return notFound();
  }

  if (article) {
    // Simple article layout for future use
    return (
      <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(0,122,255,0.18),_transparent_30%),linear-gradient(135deg,_#f8fbff_0%,_#eef4ff_40%,_#ffffff_100%)] py-16 dark:bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_28%),linear-gradient(135deg,_#020617_0%,_#0f172a_45%,_#111827_100%)]">
        <div className="mx-auto w-full max-w-3xl px-4">
          <header className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: ACCENT }}>
                Article
              </p>
              <h1 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">{article.title}</h1>
            </div>
            <Link
              href="/research"
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm transition-colors hover:border-primary hover:text-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            >
              ← Back to Research
            </Link>
          </header>

          <article className="rounded-2xl border border-white/60 bg-white/95 p-6 text-sm leading-7 shadow-xl dark:border-white/10 dark:bg-slate-900/90 dark:text-slate-200">
            {article.content.map((para, idx) => (
              <p key={idx} className={idx === 0 ? "" : "mt-4"}>
                {para}
              </p>
            ))}
          </article>
        </div>
      </main>
    );
  }

  // Area layout
  const areaIndex = researchAreas.findIndex(a => a.slug === slug);

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(0,122,255,0.18),_transparent_30%),linear-gradient(135deg,_#f8fbff_0%,_#eef4ff_40%,_#ffffff_100%)] py-16 dark:bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_28%),linear-gradient(135deg,_#020617_0%,_#0f172a_45%,_#111827_100%)]">
      <div className="mx-auto w-full max-w-4xl px-4">
        <header className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              Research Area {areaIndex >= 0 ? `#${areaIndex + 1}` : ""}
            </p>
            <h1 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
              {area!.title}
            </h1>
          </div>
          <Link
            href="/research"
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm transition-colors hover:border-primary hover:text-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
          >
            ← Back to Research
          </Link>
        </header>

        <div className="space-y-8 rounded-2xl border border-white/60 bg-white/95 p-6 text-sm leading-7 shadow-xl dark:border-white/10 dark:bg-slate-900/90 dark:text-slate-200">
          {/* 1. Overview */}
          <section>
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">Overview</h2>
            <div className="mt-2 space-y-2">
              {area!.overview.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </section>

          {/* 2. My Research Focus */}
          <section>
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">My Research Focus</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              {area!.myFocus.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>

          {/* 3. Current Work */}
          <section>
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">Current Work</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              {area!.currentWork.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>

          {/* 4. Related Projects */}
          <section>
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">Related Projects</h2>
            {area!.relatedProjects.length === 0 ? (
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">No linked projects yet.</p>
            ) : (
              <ul className="mt-2 space-y-3">
                {area!.relatedProjects.map(project => (
                  <li key={project.link}>
                    <Link
                      href={project.link}
                      className="font-semibold text-primary hover:underline dark:text-blue-400"
                    >
                      {project.title}
                    </Link>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{project.description}</p>
                  </li>
                ))}
              </ul>
            )}
          </section>

          {/* 5. Current Progress */}
          <section>
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">Current Progress</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              {area!.currentProgress.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>

          {/* 6. Research Questions */}
          <section>
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">Research Questions</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              {area!.researchQuestions.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>

          {/* 7. Future Direction */}
          <section>
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">Future Direction</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              {area!.futureDirection.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}

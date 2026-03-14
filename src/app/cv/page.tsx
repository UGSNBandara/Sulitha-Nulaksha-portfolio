import Link from 'next/link';

const CV_URL = '/cv/Sulitha_Nulaksha_CV.pdf';

export default function CVPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 dark:bg-slate-950">
      <div className="mx-auto flex max-w-5xl flex-col gap-6">
        <header className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Curriculum Vitae</h1>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              View or download my latest CV as a PDF.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-primary hover:text-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            >
              Open in new tab
            </Link>
            <a
              href={CV_URL}
              download
              className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary/90"
            >
              Download PDF
            </a>
          </div>
        </header>

        <section className="flex-1 rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <object
            data={CV_URL}
            type="application/pdf"
            className="h-[75vh] w-full rounded-2xl"
          >
            <p className="p-4 text-sm text-slate-600 dark:text-slate-300">
              Your browser could not display the PDF. You can{' '}
              <a href={CV_URL} className="text-primary underline" download>
                download it directly here
              </a>
              .
            </p>
          </object>
        </section>
      </div>
    </main>
  );
}

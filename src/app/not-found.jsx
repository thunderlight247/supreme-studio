import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-sagemist-50 px-4 text-forest-950">
      <div className="max-w-md text-center rounded-2xl border border-forest-line bg-white p-8 shadow-sm">
        <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-sunbeam-100 text-forest-950">
          <Sparkles className="size-6 text-sunbeam-700" />
        </div>
        <h1 className="mt-4 font-display text-3xl font-bold text-forest-950">Page Not Found</h1>
        <p className="mt-2 text-sm text-forest-800">
          The sanctuary page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-sunbeam-400 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-forest-950 shadow-xs hover:bg-sunbeam-300"
          >
            <ArrowLeft className="size-4" />
            <span>Return to Sanctuary Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

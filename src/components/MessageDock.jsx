"use client";
import { useState } from "react";
import { MessageCircle, Phone, MapPin, CalendarHeart, X, Sparkles } from "lucide-react";
import { CONTACT, whatsappLink } from "@/data/contact";

export default function MessageDock() {
  const [open, setOpen] = useState(false);

  return (
    <aside aria-label="Sanctuary quick actions" className="fixed bottom-4 right-4 z-40 sm:right-6">
      {/* Expanded Quick Contact Card */}
      {open && (
        <div className="mb-3 w-72 overflow-hidden rounded-2xl border border-forest-line bg-white/95 p-4 text-forest-950 shadow-xl backdrop-blur-md">
          <div className="flex items-center justify-between border-b border-forest-line pb-3">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4 text-sunbeam-600" />
              <span className="font-display text-sm font-bold text-forest-950">Prayer &amp; Pastoral Care</span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-lg p-1 text-sagemist-700 hover:bg-sagemist-100 hover:text-forest-950"
              aria-label="Close quick actions"
            >
              <X className="size-4" />
            </button>
          </div>

          <div className="mt-3 space-y-2">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-forest-line bg-sagemist-25 p-2.5 transition-colors hover:border-sunbeam-400 hover:bg-sunbeam-50/50"
            >
              <div className="grid size-8 place-items-center rounded-lg bg-emerald-100 text-emerald-700">
                <MessageCircle className="size-4" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold text-forest-950">WhatsApp Prayer Line</p>
                <p className="truncate text-[11px] text-sagemist-800">{CONTACT.phoneDisplay}</p>
              </div>
            </a>

            <a
              href={CONTACT.phoneHref}
              className="flex items-center gap-3 rounded-xl border border-forest-line bg-sagemist-25 p-2.5 transition-colors hover:border-sunbeam-400 hover:bg-sunbeam-50/50"
            >
              <div className="grid size-8 place-items-center rounded-lg bg-sunbeam-100 text-sunbeam-700">
                <Phone className="size-4" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold text-forest-950">Direct Phone Call</p>
                <p className="truncate text-[11px] text-sagemist-800">Speak to an usher or minister</p>
              </div>
            </a>

            <a
              href="#counseling"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-xl border border-forest-line bg-sagemist-25 p-2.5 transition-colors hover:border-sunbeam-400 hover:bg-sunbeam-50/50"
            >
              <div className="grid size-8 place-items-center rounded-lg bg-amber-100 text-amber-700">
                <CalendarHeart className="size-4" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold text-forest-950">Book Counseling</p>
                <p className="truncate text-[11px] text-sagemist-800">1-on-1 private breakthrough</p>
              </div>
            </a>

            <a
              href={CONTACT.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-forest-line bg-sagemist-25 p-2.5 transition-colors hover:border-sunbeam-400 hover:bg-sunbeam-50/50"
            >
              <div className="grid size-8 place-items-center rounded-lg bg-sky-100 text-sky-700">
                <MapPin className="size-4" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold text-forest-950">Ashaiman Klagon Road</p>
                <p className="truncate text-[11px] text-sagemist-800">Directions on Google Maps</p>
              </div>
            </a>
          </div>
        </div>
      )}

      {/* Floating Action Button Pill */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label="Toggle prayer and contact help menu"
        className="flex items-center gap-2.5 rounded-full border border-forest-line bg-white/95 px-4 py-2.5 text-forest-950 shadow-md backdrop-blur-md transition-all duration-200 hover:border-sunbeam-400 hover:bg-sunbeam-50 hover:scale-105 active:scale-95"
      >
        <div className="relative flex size-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sunbeam-500 opacity-75" />
          <span className="relative inline-flex size-2.5 rounded-full bg-sunbeam-500" />
        </div>
        <span className="font-display text-xs font-bold tracking-wide text-forest-950">Need Prayer?</span>
        <MessageCircle className="size-4 text-emerald-600" />
      </button>
    </aside>
  );
}

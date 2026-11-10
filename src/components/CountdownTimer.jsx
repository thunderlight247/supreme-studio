"use client";
import { useEffect, useState } from "react";
import { useApp } from "@/context/AppContext";
import { getNextSession } from "@/data/mockSchedules";
import { Radio, Sparkles, Clock, Calendar } from "lucide-react";
import { TOGGLE_EVENT } from "@/components/AudioPlayer";

const pad = (n) => String(n).padStart(2, "0");

export default function CountdownTimer({ kind = "deliverance" }) {
  const { schedules } = useApp();
  const [now, setNow] = useState(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const next = now == null ? null : getNextSession(now, schedules, kind);
  const diff = next ? Math.max(0, next.startsAt - now) : 0;
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  const units = [
    ["Days", d],
    ["Hours", h],
    ["Mins", m],
    ["Secs", s],
  ];

  return (
    <div className="relative overflow-hidden rounded-3xl border border-forest-line bg-white/95 p-7 sm:p-10 shadow-md backdrop-blur-md flex flex-col justify-between">
      {/* Subtle Sunbeam glow at the corner */}
      <div className="pointer-events-none absolute -top-16 -right-16 size-48 rounded-full bg-sunbeam-200/50 blur-3xl" />

      <div>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="flex size-2.5 rounded-full bg-sunbeam-500 animate-pulse" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-forest-900">
              {next?.live ? "In Session Now" : "Next Altar Gathering"}
            </span>
          </div>
          <span className="rounded-full bg-sagemist-100 px-3.5 py-1 text-xs font-bold text-forest-800">
            GMT Timezone
          </span>
        </div>

        {next ? (
          <div className="mt-6 sm:mt-8">
            <h3 className="font-display text-2xl font-bold tracking-tight text-forest-950 sm:text-3xl lg:text-4xl">
              {next.session.title}
            </h3>
            <p className="mt-3 flex flex-wrap items-center gap-2.5 text-sm sm:text-base font-semibold text-sagemist-800">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="size-4 text-sunbeam-600" />
                <span>{schedules.find((x) => x.id === next.session.id)?.day.replace(/^./, (c) => c.toUpperCase())}</span>
              </span>
              <span>·</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="size-4 text-sunbeam-600" />
                <span className="text-forest-950 font-bold">{next.session.start} – {next.session.end} GMT</span>
              </span>
            </p>
          </div>
        ) : (
          <div className="py-8 text-center text-forest-700">
            <p>{now == null ? "Synchronizing gathering calendar…" : "No upcoming service scheduled."}</p>
          </div>
        )}
      </div>

      {next && (
        <div className="mt-8 sm:mt-10">
          {next.live ? (
            <div className="space-y-4">
              <div role="status" className="flex items-center justify-center gap-3 rounded-2xl bg-sunbeam-400 p-4 text-center font-bold text-forest-950 shadow-sm text-sm sm:text-base">
                <Radio className="size-5 animate-pulse" />
                <span>Service In Session — Broadcast Live Worldwide</span>
              </div>
              <button
                type="button"
                onClick={() => window.dispatchEvent(new Event(TOGGLE_EVENT))}
                className="w-full rounded-2xl border border-forest-line bg-sagemist-100 py-3.5 text-sm font-bold text-forest-950 hover:bg-sunbeam-100 transition-colors"
              >
                Listen via Live Soundbar
              </button>
            </div>
          ) : (
            <div>
              <div
                role="timer"
                aria-label={`${d} days ${h} hours ${m} minutes ${s} seconds until ${next.session.title}`}
                className="grid grid-cols-4 gap-3 sm:gap-4 text-center"
              >
                {units.map(([label, val]) => (
                  <div
                    key={label}
                    className="relative overflow-hidden rounded-2xl border border-sunbeam-200/80 bg-gradient-to-b from-sunbeam-50/80 to-white p-3.5 sm:p-5 shadow-xs"
                  >
                    <p
                      aria-hidden="true"
                      className="font-display text-2xl font-extrabold tabular-nums text-forest-950 sm:text-4xl"
                    >
                      {pad(val)}
                    </p>
                    <p
                      aria-hidden="true"
                      className="mt-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-sagemist-700"
                    >
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between gap-3 pt-5 border-t border-forest-line text-xs sm:text-sm">
                <span className="flex items-center gap-2 text-forest-800 font-medium">
                  <Sparkles className="size-4 text-sunbeam-600 shrink-0" />
                  <span>Ashaiman Klagon Road Sanctuary</span>
                </span>
                <a
                  href="#schedule"
                  className="font-bold text-forest-900 underline underline-offset-4 hover:text-sunbeam-600"
                >
                  View full schedule →
                </a>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

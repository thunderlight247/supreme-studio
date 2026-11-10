"use client";
import { useMemo, useState } from "react";
import { useApp } from "@/context/AppContext";
import { SERVICE_DAYS } from "@/data/mockSchedules";
import { Clock, Calendar, Sparkles, HeartHandshake, Flame, ArrowRight } from "lucide-react";

export default function OrbitalSchedule() {
  const { schedules } = useApp();
  const [selectedDay, setSelectedDay] = useState(SERVICE_DAYS[0].key);

  const byDay = useMemo(
    () =>
      SERVICE_DAYS.map((d) => ({
        ...d,
        slots: schedules.filter((s) => s.day === d.key),
      })),
    [schedules]
  );

  const currentDay = byDay.find((d) => d.key === selectedDay) || byDay[0];

  const getSessionIcon = (kind) => {
    switch (kind) {
      case "prayer":
        return <Sparkles className="size-5 text-sunbeam-600" />;
      case "counseling":
        return <HeartHandshake className="size-5 text-sagemist-700" />;
      case "deliverance":
      default:
        return <Flame className="size-5 text-sunbeam-600" />;
    }
  };

  const getSessionBadge = (kind) => {
    switch (kind) {
      case "prayer":
        return "border-sunbeam-200 bg-sunbeam-100 text-forest-950";
      case "counseling":
        return "border-sagemist-300 bg-sagemist-100 text-forest-950";
      case "deliverance":
      default:
        return "border-sunbeam-300 bg-sunbeam-100/90 text-forest-950";
    }
  };

  return (
    <div className="space-y-10 sm:space-y-12">
      {/* Day Selector Pills with generous tap area */}
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        {byDay.map((d) => {
          const isSelected = d.key === selectedDay;
          return (
            <button
              key={d.key}
              type="button"
              aria-pressed={isSelected}
              onClick={() => setSelectedDay(d.key)}
              className={`group relative flex items-center gap-3 rounded-2xl border px-6 sm:px-8 py-4 text-base font-bold transition-all duration-200 ${
                isSelected
                  ? "border-sunbeam-400 bg-white text-forest-950 shadow-md ring-2 ring-sunbeam-400 scale-[1.02]"
                  : "border-forest-line bg-white/70 text-forest-800 hover:bg-white hover:border-forest-line-strong"
              }`}
            >
              <Calendar className={`size-5 ${isSelected ? "text-sunbeam-600" : "text-sagemist-700"}`} />
              <span className="font-display text-lg">{d.label}</span>
              <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${
                isSelected ? "bg-sunbeam-400 text-forest-950" : "bg-sagemist-100 text-forest-800"
              }`}>
                {d.slots.length} Sessions
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Schedule Display Card with spacious padding */}
      <div className="rounded-3xl border border-forest-line bg-white/95 p-8 sm:p-12 backdrop-blur-md shadow-sm">
        <div className="flex flex-col justify-between gap-6 border-b border-forest-line pb-8 sm:flex-row sm:items-center">
          <div>
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-sunbeam-700">
              <span className="size-2.5 rounded-full bg-sunbeam-500" />
              <span>Full Day Sanctuary Order of Service</span>
            </div>
            <h3 className="mt-2 font-display text-3xl font-bold text-forest-950 sm:text-4xl lg:text-5xl">
              {currentDay.label} Gatherings
            </h3>
          </div>
          <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-forest-800 bg-sagemist-50 px-4 py-2.5 rounded-xl border border-forest-line/70">
            <Clock className="size-4 text-sunbeam-600 shrink-0" />
            <span>Ghana Standard Time (GMT/UTC) · In-Person &amp; Online Altar</span>
          </div>
        </div>

        {/* Sessions List with generous card padding and gaps */}
        <div className="mt-8 sm:mt-10 grid gap-6 lg:grid-cols-3">
          {currentDay.slots.map((s, idx) => (
            <div
              key={s.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-forest-line bg-sagemist-25 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-sunbeam-400 hover:bg-white hover:shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-bold capitalize ${getSessionBadge(s.kind)}`}>
                    {getSessionIcon(s.kind)}
                    {s.kind}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-sagemist-700">
                    Slot 0{idx + 1}
                  </span>
                </div>

                <div className="mt-6">
                  <div className="font-display text-2xl font-bold text-forest-950">
                    {s.title}
                  </div>
                  <div className="mt-3 inline-flex items-center gap-2 rounded-lg bg-sunbeam-100/90 px-3 py-1.5 text-xs sm:text-sm font-bold text-forest-950">
                    <Clock className="size-4 text-sunbeam-700" />
                    <span>{s.start} – {s.end} GMT</span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-forest-800/85">
                    {s.kind === "prayer" && "Morning corporate altar seeking God's prophetic countenance and early breakthrough."}
                    {s.kind === "counseling" && "Private 1-on-1 pastoral and prophetic consultation sessions by appointment."}
                    {s.kind === "deliverance" && "High-intensity prophetic deliverance, yoke-breaking prayer, worship, and healing."}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-forest-line flex items-center justify-between text-sm">
                <span className="text-xs text-forest-700 font-medium">Ashaiman Klagon Altar</span>
                {s.kind === "counseling" ? (
                  <a
                    href="#counseling"
                    className="inline-flex items-center gap-1.5 font-bold text-forest-950 hover:text-sunbeam-700 transition-colors"
                  >
                    <span>Reserve slot</span>
                    <ArrowRight className="size-4" />
                  </a>
                ) : (
                  <span className="font-bold text-forest-800">Open to All</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Schedule Footer Note */}
        <div className="mt-10 sm:mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl border border-forest-line bg-sagemist-50 p-6 sm:p-8 text-center sm:flex-row sm:text-left">
          <div className="text-sm sm:text-base text-forest-800 max-w-xl">
            <span className="font-bold text-forest-950">Need personalized prophetic direction?</span> Join morning prayer altar or book a private counseling appointment with the ministers.
          </div>
          <a
            href="#counseling"
            className="inline-flex shrink-0 items-center gap-2.5 rounded-xl bg-sunbeam-400 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-forest-950 shadow-xs transition-all hover:bg-sunbeam-300 hover:scale-105 active:scale-95"
          >
            Schedule Consultation
          </a>
        </div>
      </div>
    </div>
  );
}

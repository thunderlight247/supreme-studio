"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Loader2, Trash2, ArrowRight, ArrowLeft, MessageCircle, HeartHandshake, ShieldCheck } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { CONTACT, bookingMessage, whatsappLink } from "@/data/contact";
import { PRAYER_CATEGORIES, SERVICE_DAYS, TIME_SLOTS } from "@/data/mockSchedules";

const STEPS = ["Contact Info", "Prayer Focus", "Day & Time"];
const input = "w-full rounded-2xl border border-forest-line bg-white px-5 py-4 text-base text-forest-950 placeholder:text-sagemist-600 focus:border-sunbeam-500 focus:ring-2 focus:ring-sunbeam-200 transition-all shadow-xs";
const initial = { name: "", phone: "", category: "", day: "", slot: "" };
const STATUS_LABEL = { pending: "Pending confirmation", confirmed: "Confirmed", cancelled: "Cancelled" };

export default function BookingForm() {
  const { addAppointment, cancelAppointment, appointments } = useApp();
  const reduce = useReducedMotion();
  const headingRef = useRef(null);
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [saved, setSaved] = useState(null);

  useEffect(() => { headingRef.current?.focus(); }, [step]);

  const set = (k, v) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const validate = () => {
    const e = {};
    if (step === 0) {
      if (form.name.trim().length < 2) e.name = "Please enter your full name.";
      if (form.phone.replace(/\D/g, "").length < 9) e.phone = "Enter a valid phone number (at least 9 digits).";
    }
    if (step === 1 && !form.category) e.category = "Please choose a prayer or counseling focus.";
    if (step === 2) {
      if (!form.day) e.day = "Please choose a preferred day.";
      if (!form.slot) e.slot = "Please select morning or evening.";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const go = (delta) => {
    setDir(delta);
    setStep((s) => s + delta);
  };

  const onNext = (ev) => {
    ev.preventDefault();
    if (validate()) go(1);
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    if (submitting || !validate()) return;
    setSubmitting(true);
    const data = { ...form, name: form.name.trim() };
    window.open(whatsappLink(bookingMessage(data)), "_blank", "noopener,noreferrer");
    try {
      const appt = await addAppointment(data);
      setSaved(appt);
      go(1);
    } finally {
      setSubmitting(false);
    }
  };

  const reset = () => {
    setForm(initial);
    setSaved(null);
    setDir(-1);
    setStep(0);
  };

  const variants = {
    enter: (d) => ({ opacity: 0, x: reduce ? 0 : d * 25 }),
    center: { opacity: 1, x: 0 },
    exit: (d) => ({ opacity: 0, x: reduce ? 0 : d * -25 }),
  };

  const radio = (checked) =>
    `cursor-pointer rounded-2xl border p-4 sm:p-5 text-sm sm:text-base font-semibold transition-all duration-200 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-sunbeam-500 ${
      checked
        ? "border-sunbeam-500 bg-sunbeam-50 text-forest-950 shadow-xs ring-2 ring-sunbeam-400"
        : "border-forest-line bg-white text-forest-850 hover:border-forest-line-strong hover:bg-sagemist-50"
    }`;

  return (
    <div className="mx-auto w-full max-w-2xl">
      <div className="relative overflow-hidden rounded-3xl border border-forest-line bg-white/95 p-8 sm:p-12 shadow-sm backdrop-blur-md">
        {/* Step indicator */}
        {step < 3 && (
          <div className="mb-8 sm:mb-10">
            <div className="flex items-center justify-between text-xs sm:text-sm font-bold uppercase tracking-wider text-sagemist-700">
              <span>Step 0{step + 1} of 03</span>
              <span className="text-forest-950 font-extrabold">{STEPS[step]}</span>
            </div>
            <ol className="mt-3 flex gap-2.5" aria-label="Booking progress">
              {STEPS.map((label, i) => (
                <li key={label} aria-current={i === step ? "step" : undefined} className="flex-1">
                  <div
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i <= step ? "bg-sunbeam-500" : "bg-sagemist-200"
                    }`}
                  />
                </li>
              ))}
            </ol>
          </div>
        )}

        <AnimatePresence mode="wait" custom={dir} initial={false}>
          <motion.div
            key={step}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {step === 0 && (
              <form onSubmit={onNext} noValidate className="space-y-6 sm:space-y-7">
                <div>
                  <h3 ref={headingRef} tabIndex={-1} className="font-display text-2xl sm:text-3xl font-bold text-forest-950 outline-none">
                    Your Contact Information
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-sagemist-800">
                    We keep your consultation strictly confidential and prayerful.
                  </p>
                </div>

                <div>
                  <label htmlFor="bk-name" className="mb-2 block text-xs sm:text-sm font-bold uppercase tracking-wider text-forest-900">
                    Full name
                  </label>
                  <input
                    id="bk-name"
                    className={input}
                    autoComplete="name"
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={(e) => set("name", e.target.value)}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "bk-name-err" : undefined}
                  />
                  {errors.name && (
                    <p id="bk-name-err" role="alert" className="mt-2 text-xs sm:text-sm font-bold text-red-600">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="bk-phone" className="mb-2 block text-xs sm:text-sm font-bold uppercase tracking-wider text-forest-900">
                    Phone / WhatsApp number
                  </label>
                  <input
                    id="bk-phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="e.g. +233 24 000 0000"
                    className={input}
                    value={form.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "bk-phone-err" : undefined}
                  />
                  {errors.phone && (
                    <p id="bk-phone-err" role="alert" className="mt-2 text-xs sm:text-sm font-bold text-red-600">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2.5 rounded-2xl bg-sunbeam-400 py-4 text-sm sm:text-base font-bold uppercase tracking-wider text-forest-950 shadow-sm transition-all hover:bg-sunbeam-300 hover:shadow-md hover:scale-[1.01] active:scale-95"
                  >
                    <span>Continue to Prayer Focus</span>
                    <ArrowRight className="size-5" />
                  </button>
                </div>
              </form>
            )}

            {step === 1 && (
              <form onSubmit={onNext} noValidate className="space-y-6 sm:space-y-7">
                <div>
                  <h3 ref={headingRef} tabIndex={-1} className="font-display text-2xl sm:text-3xl font-bold text-forest-950 outline-none">
                    Select Your Prayer Focus
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-sagemist-800">
                    What area of breakthrough or spiritual counsel are you seeking?
                  </p>
                </div>

                <fieldset>
                  <legend className="sr-only">Prayer request category</legend>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {PRAYER_CATEGORIES.map((c) => (
                      <label key={c} className={radio(form.category === c)}>
                        <input
                          type="radio"
                          name="category"
                          value={c}
                          checked={form.category === c}
                          onChange={() => set("category", c)}
                          className="sr-only"
                        />
                        <div className="flex items-center gap-2.5">
                          <span className={`size-2.5 rounded-full ${form.category === c ? "bg-sunbeam-600" : "bg-sagemist-300"}`} />
                          <span>{c}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                  {errors.category && (
                    <p role="alert" className="mt-3 text-xs sm:text-sm font-bold text-red-600">
                      {errors.category}
                    </p>
                  )}
                </fieldset>

                <div className="flex gap-4 pt-3">
                  <button
                    type="button"
                    onClick={() => go(-1)}
                    className="flex items-center gap-2 rounded-2xl border border-forest-line bg-white px-6 py-4 text-sm sm:text-base font-bold text-forest-900 transition-colors hover:bg-sagemist-50"
                  >
                    <ArrowLeft className="size-4" />
                    <span>Back</span>
                  </button>
                  <button
                    type="submit"
                    className="flex flex-1 items-center justify-center gap-2.5 rounded-2xl bg-sunbeam-400 py-4 text-sm sm:text-base font-bold uppercase tracking-wider text-forest-950 shadow-sm transition-all hover:bg-sunbeam-300 hover:shadow-md hover:scale-[1.01] active:scale-95"
                  >
                    <span>Continue to Day &amp; Time</span>
                    <ArrowRight className="size-5" />
                  </button>
                </div>
              </form>
            )}

            {step === 2 && (
              <form onSubmit={onSubmit} noValidate className="space-y-6 sm:space-y-7">
                <div>
                  <h3 ref={headingRef} tabIndex={-1} className="font-display text-2xl sm:text-3xl font-bold text-forest-950 outline-none">
                    Select Day &amp; Time Window
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-sagemist-800">
                    Consultation sessions are held Tuesday, Thursday, and Saturday.
                  </p>
                </div>

                <fieldset>
                  <legend className="mb-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-forest-900">
                    Preferred Gathering Day
                  </legend>
                  <div className="grid grid-cols-3 gap-3">
                    {SERVICE_DAYS.map((d) => (
                      <label key={d.key} className={`${radio(form.day === d.key)} text-center`}>
                        <input
                          type="radio"
                          name="day"
                          value={d.key}
                          checked={form.day === d.key}
                          onChange={() => set("day", d.key)}
                          className="sr-only"
                        />
                        <span className="block font-bold">{d.label}</span>
                      </label>
                    ))}
                  </div>
                  {errors.day && (
                    <p role="alert" className="mt-2 text-xs sm:text-sm font-bold text-red-600">
                      {errors.day}
                    </p>
                  )}
                </fieldset>

                <fieldset>
                  <legend className="mb-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-forest-900">
                    Preferred Time Window
                  </legend>
                  <div className="grid grid-cols-2 gap-3">
                    {TIME_SLOTS.map((t) => (
                      <label key={t.key} className={`${radio(form.slot === t.key)} text-center`}>
                        <input
                          type="radio"
                          name="slot"
                          value={t.key}
                          checked={form.slot === t.key}
                          onChange={() => set("slot", t.key)}
                          className="sr-only"
                        />
                        <span className="block font-bold">{t.label}</span>
                        <span className="block text-xs text-sagemist-700">{t.range} GMT</span>
                      </label>
                    ))}
                  </div>
                  {errors.slot && (
                    <p role="alert" className="mt-2 text-xs sm:text-sm font-bold text-red-600">
                      {errors.slot}
                    </p>
                  )}
                </fieldset>

                <div className="rounded-2xl border border-forest-line bg-sagemist-50 p-4 sm:p-5 text-xs sm:text-sm text-forest-850">
                  <div className="flex items-center gap-2 font-bold text-forest-950">
                    <ShieldCheck className="size-4 text-emerald-600" />
                    <span>Direct WhatsApp Connection</span>
                  </div>
                  <p className="mt-1.5 text-sagemist-800">
                    Submitting will open our WhatsApp line with your appointment pre-filled so the ministerial team can confirm with you directly.
                  </p>
                </div>

                <div className="flex gap-4 pt-3">
                  <button
                    type="button"
                    onClick={() => go(-1)}
                    disabled={submitting}
                    className="flex items-center gap-2 rounded-2xl border border-forest-line bg-white px-6 py-4 text-sm sm:text-base font-bold text-forest-900 transition-colors hover:bg-sagemist-50 disabled:opacity-50"
                  >
                    <ArrowLeft className="size-4" />
                    <span>Back</span>
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex flex-1 items-center justify-center gap-2.5 rounded-2xl bg-sunbeam-400 py-4 text-sm sm:text-base font-bold uppercase tracking-wider text-forest-950 shadow-sm transition-all hover:bg-sunbeam-300 hover:shadow-md disabled:opacity-70 active:scale-95"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="size-5 motion-safe:animate-spin" />
                        <span>Connecting…</span>
                      </>
                    ) : (
                      <>
                        <MessageCircle className="size-5 text-emerald-700" />
                        <span>Confirm via WhatsApp</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

            {step === 3 && saved && (
              <div className="space-y-6 text-center py-4">
                <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-sunbeam-100 text-sunbeam-700 shadow-xs">
                  <CheckCircle2 className="size-11" />
                </div>
                <div>
                  <h3 ref={headingRef} tabIndex={-1} className="font-display text-2xl sm:text-3xl font-bold text-forest-950 outline-none">
                    Consultation Request Recorded
                  </h3>
                  <p className="mt-3 text-base sm:text-lg leading-relaxed text-forest-800">
                    Thank you, <strong className="text-forest-950">{saved.name}</strong>. Your appointment request for{" "}
                    <strong className="text-forest-950">{saved.category}</strong> on{" "}
                    <strong className="text-forest-950">{saved.day.replace(/^./, (c) => c.toUpperCase())} ({saved.slot})</strong> has been saved.
                  </p>
                  <p className="mt-3 text-xs sm:text-sm text-sagemist-800 max-w-lg mx-auto">
                    We opened WhatsApp so you can message the prayer council directly on {CONTACT.phoneDisplay}. If it didn&apos;t open automatically, please tap below.
                  </p>
                </div>

                <div className="flex flex-col gap-3 pt-4 max-w-md mx-auto">
                  <a
                    href={whatsappLink(bookingMessage(saved))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2.5 rounded-2xl bg-sunbeam-400 py-4 text-sm sm:text-base font-bold uppercase tracking-wider text-forest-950 shadow-sm transition-all hover:bg-sunbeam-300"
                  >
                    <MessageCircle className="size-5 text-emerald-700" />
                    <span>Open WhatsApp Chat</span>
                  </a>
                  <button
                    type="button"
                    onClick={reset}
                    className="rounded-2xl border border-forest-line bg-white py-3.5 text-xs sm:text-sm font-bold text-forest-800 hover:text-forest-950 hover:bg-sagemist-50"
                  >
                    Book Another Session
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Local Saved Appointments list with spacious padding */}
      {appointments.length > 0 && (
        <div className="mt-10 rounded-3xl border border-forest-line bg-white/90 p-6 sm:p-8 shadow-xs">
          <h4 className="flex items-center gap-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-forest-900">
            <HeartHandshake className="size-4 text-sunbeam-600" />
            <span>Your Saved Requests on This Device ({appointments.length})</span>
          </h4>
          <ul className="mt-4 space-y-3">
            {appointments.slice(0, 4).map((a) => (
              <li
                key={a.id}
                className="flex items-center justify-between gap-4 rounded-2xl border border-forest-line bg-sagemist-50 px-5 py-4 text-sm sm:text-base"
              >
                <div className="min-w-0">
                  <p className="truncate font-bold text-forest-950">{a.category}</p>
                  <p className="truncate text-xs sm:text-sm text-sagemist-700">
                    {a.day.replace(/^./, (c) => c.toUpperCase())} · <span className="capitalize">{a.slot}</span>
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    title={STATUS_LABEL[a.status]}
                    className="rounded-full border border-sunbeam-300 bg-sunbeam-100 px-3 py-1 text-xs font-bold text-forest-950 capitalize"
                  >
                    {a.status}
                  </span>
                  <button
                    type="button"
                    onClick={() => cancelAppointment(a.id)}
                    aria-label={`Remove ${a.category} request`}
                    className="text-sagemist-600 hover:text-red-600 transition-colors p-1"
                  >
                    <Trash2 className="size-5" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

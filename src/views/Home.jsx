"use client";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  MessageCircle,
  Phone,
  Radio,
  CalendarHeart,
  Sparkles,
  Flame,
  HeartHandshake,
  ShieldCheck,
  Clock,
  ArrowRight,
  Headphones,
  CheckCircle2,
  ExternalLink,
  Navigation,
} from "lucide-react";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import BackgroundPaths from "@/components/BackgroundPaths";
import CountdownTimer from "@/components/CountdownTimer";
import OrbitalSchedule from "@/components/OrbitalSchedule";
import BookingForm from "@/components/BookingForm";
import { TOGGLE_EVENT } from "@/components/AudioPlayer";
import { CONTACT, whatsappLink } from "@/data/contact";

const GALLERY = [
  {
    src: "/images/congregation-prayer.jpg",
    w: 720,
    h: 495,
    alt: "Congregation with hands raised in fervent prayer during a deliverance service",
    title: "Corporate Deliverance & Warfare Prayer",
    tag: "Prayer Altar",
  },
  {
    src: "/images/choir-worship.jpg",
    w: 720,
    h: 482,
    alt: "Choir in red robes leading prophetic worship with microphones",
    title: "Anointed Prophetic Worship",
    tag: "Worship & Sound",
  },
  {
    src: "/images/studio-media.jpg",
    w: 720,
    h: 721,
    alt: "Supreme Studios media team member filming with a broadcast camera and headphones",
    title: "Global Broadcast & Media Sanctuary",
    tag: "24/7 Media Ministry",
  },
];

const PILLARS = [
  {
    icon: Flame,
    title: "Prophetic Deliverance",
    desc: "Targeted prayers to break ancestral yokes, spiritual stagnation, and demonic bondages. Witness God's liberating power.",
    tag: "Tuesday & Thursday Nights",
  },
  {
    icon: HeartHandshake,
    title: "Pastoral Counseling",
    desc: "Confidential 1-on-1 consultations with seasoned ministers for marriage, family restoration, and spiritual direction.",
    tag: "By Appointment",
  },
  {
    icon: Headphones,
    title: "24/7 Sound & Word Altar",
    desc: "Uninterrupted gospel broadcast, prophetic prayers, and spirit-filled worship streamed worldwide from Ashaiman.",
    tag: "Always Live Online",
  },
  {
    icon: MapPin,
    title: "Sanctuary Fellowship",
    desc: "A warm and welcoming spiritual home on Ashaiman Klagon Road, connecting individuals and families across Tema and beyond.",
    tag: "Klagon Road, Ghana",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden selection:bg-sunbeam-200 selection:text-forest-950">
      <Nav />

      <main id="top" className="relative">
        {/* ========================================================= */}
        {/* HERO SECTION: Spacious Luminous Sanctuary Atmosphere       */}
        {/* ========================================================= */}
        <section
          id="sanctuary"
          className="relative isolate overflow-hidden pt-12 pb-24 sm:pt-20 sm:pb-32 lg:pt-28 lg:pb-36"
        >
          <BackgroundPaths />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Top Breadcrumb Pill */}
            <div className="flex justify-center">
              <div className="inline-flex flex-wrap items-center justify-center gap-2.5 rounded-full border border-forest-line bg-white/90 px-5 py-2 text-center text-xs sm:text-sm font-bold text-forest-900 shadow-xs backdrop-blur-md">
                <span className="flex size-2.5 rounded-full bg-sunbeam-500 animate-pulse shrink-0" />
                <span>Ashaiman Klagon Road · Tema / Ashaiman, Ghana</span>
                <span className="hidden sm:inline text-sagemist-400">|</span>
                <span className="text-forest-700">24/7 Live Ministry</span>
              </div>
            </div>

            {/* Main Hero Header (Un-compact, majestic & bold) */}
            <div className="mx-auto mt-8 sm:mt-10 max-w-5xl text-center">
              <h1 className="font-display text-4xl font-extrabold tracking-tight text-forest-950 sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.12]">
                Where Chains Break &amp;{" "}
                <span className="relative inline-block text-forest-900">
                  <span className="relative z-10 bg-gradient-to-r from-forest-900 via-forest-800 to-forest-950 bg-clip-text text-transparent">
                    Prophetic Light
                  </span>
                  <span
                    className="absolute -bottom-1.5 left-0 right-0 h-4 bg-sunbeam-300/60 -rotate-1 rounded-sm -z-10"
                    aria-hidden="true"
                  />
                </span>{" "}
                Restores.
              </h1>

              <p className="mx-auto mt-6 sm:mt-8 max-w-3xl text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed text-forest-850">
                Supreme Studios is a sanctuary of deliverance, prophetic intercession, and confidential pastoral counseling. Join us in person at Ashaiman or connect to our 24/7 live altar from anywhere in the world.
              </p>

              {/* Action Buttons Row (Spacious & touch-friendly) */}
              <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-5">
                <a
                  href="#counseling"
                  className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-sunbeam-400 px-8 py-4 text-sm sm:text-base font-bold uppercase tracking-wider text-forest-950 shadow-sm transition-all hover:bg-sunbeam-300 hover:shadow-md hover:scale-[1.02] active:scale-95"
                >
                  <CalendarHeart className="size-5" />
                  <span>Book Counseling Session</span>
                </a>

                <button
                  type="button"
                  onClick={() => window.dispatchEvent(new Event(TOGGLE_EVENT))}
                  className="inline-flex items-center justify-center gap-2.5 rounded-2xl border border-forest-line bg-white px-8 py-4 text-sm sm:text-base font-bold uppercase tracking-wider text-forest-950 shadow-xs transition-all hover:bg-sagemist-100 hover:border-forest-line-strong hover:scale-[1.02] active:scale-95"
                >
                  <Radio className="size-5 text-sunbeam-600 animate-pulse" />
                  <span>Tune In 24/7 Live Stream</span>
                </button>

                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-2xl border border-forest-line bg-white/90 px-6 py-4 text-sm sm:text-base font-bold text-forest-900 shadow-xs backdrop-blur-md transition-all hover:bg-white hover:text-forest-950"
                >
                  <MessageCircle className="size-5 text-emerald-600" />
                  <span>Prayer Line ({CONTACT.phoneDisplay})</span>
                </a>
              </div>
            </div>

            {/* Hero Live Broadcast & Countdown Dual Center (Spacious gap & padding) */}
            <div className="mt-14 sm:mt-20 lg:mt-24 grid gap-8 lg:grid-cols-[1.1fr_1fr] items-stretch">
              {/* Left: Sanctuary Live Broadcast Deck */}
              <div className="flex flex-col justify-between rounded-3xl border border-forest-line bg-white/95 p-8 sm:p-10 lg:p-12 text-forest-950 shadow-md backdrop-blur-md">
                <div>
                  <div className="flex items-center justify-between gap-3 border-b border-forest-line pb-5">
                    <div className="flex items-center gap-3">
                      <span className="relative flex size-3">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sunbeam-500 opacity-75" />
                        <span className="relative inline-flex size-3 rounded-full bg-sunbeam-500" />
                      </span>
                      <span className="font-display text-base font-bold uppercase tracking-wider text-forest-950">
                        Sanctuary Sound &amp; Word Altar
                      </span>
                    </div>
                    <span className="rounded-full bg-sunbeam-100 px-3.5 py-1 text-xs font-bold text-forest-950">
                      Ghana Stream 24/7
                    </span>
                  </div>

                  <div className="mt-8">
                    <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sagemist-700">
                      Now Broadcasting Live Worldwide
                    </span>
                    <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-forest-950">
                      Continuous Prophetic Decrees, Deliverance &amp; Anointed Worship
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-forest-800">
                      No matter where you are, God&apos;s altar is open. Turn your room, car, or office into a sanctuary of prayer and peace.
                    </p>
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-forest-line flex flex-wrap items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => window.dispatchEvent(new Event(TOGGLE_EVENT))}
                    className="flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-2xl bg-sunbeam-400 px-6 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-forest-950 shadow-xs transition-all hover:bg-sunbeam-300 active:scale-95"
                  >
                    <Radio className="size-4" />
                    <span>Start Listening Now</span>
                  </button>

                  <a
                    href={whatsappLink("Shalom Pastor, I am listening to the live stream and request prayer for...")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-forest-900 hover:text-sunbeam-700"
                  >
                    <span>Send Live Prayer Request</span>
                    <ArrowRight className="size-4" />
                  </a>
                </div>
              </div>

              {/* Right: Next Gathering Countdown Component */}
              <CountdownTimer />
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* PILLARS SECTION: 4 Core Pillars of Supreme Studios        */}
        {/* ========================================================= */}
        <section className="relative border-y border-forest-line bg-white/80 py-20 sm:py-28 lg:py-32 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center max-w-3xl mx-auto">
              <span className="inline-block rounded-full bg-sagemist-100 px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-forest-800">
                Foundations of Grace
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold text-forest-950 sm:text-5xl">
                Four Pillars of the Ministry
              </h2>
              <p className="mt-3 text-base sm:text-lg font-medium text-forest-800">
                Everything we do is centered around Christ&apos;s freedom, compassionate counseling, and continuous prayer.
              </p>
            </Reveal>

            <div className="mt-14 sm:mt-16 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {PILLARS.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <Reveal key={p.title} delay={idx * 0.08}>
                    <div className="group relative flex flex-col justify-between rounded-3xl border border-forest-line bg-sagemist-25 p-7 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:border-sunbeam-400 hover:bg-white hover:shadow-xl">
                      <div>
                        <div className="flex size-14 items-center justify-center rounded-2xl bg-sunbeam-100 text-forest-950 shadow-xs group-hover:scale-110 transition-transform">
                          <Icon className="size-7 text-forest-900" />
                        </div>
                        <span className="mt-5 inline-block text-xs font-bold uppercase tracking-wider text-sagemist-700">
                          {p.tag}
                        </span>
                        <h3 className="mt-2 font-display text-2xl font-bold text-forest-950">
                          {p.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-forest-800/85">
                          {p.desc}
                        </p>
                      </div>

                      <div className="mt-8 pt-5 border-t border-forest-line">
                        <a
                          href={p.title.includes("Counseling") ? "#counseling" : p.title.includes("Sanctuary") ? "/location" : "#schedule"}
                          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-forest-950 hover:text-sunbeam-700"
                        >
                          <span>Explore more</span>
                          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1.5" />
                        </a>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SCHEDULE SECTION: Interactive Weekly Gatherings Calendar   */}
        {/* ========================================================= */}
        <section id="schedule" className="relative scroll-mt-20 py-20 sm:py-28 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
              <span className="inline-block rounded-full bg-sunbeam-100 px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-forest-900">
                Altar Schedule &amp; Order
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold text-forest-950 sm:text-5xl lg:text-6xl">
                Weekly Service Gatherings
              </h2>
              <p className="mt-4 text-base sm:text-lg text-forest-800">
                Join us on Tuesday, Thursday, and Saturday for prophetic prayer, counseling sessions, and deliverance nights.
              </p>
            </Reveal>

            <OrbitalSchedule />
          </div>
        </section>

        {/* ========================================================= */}
        {/* ABOUT & VISION SECTION: A Haven of Deliverance & Healing   */}
        {/* ========================================================= */}
        <section className="relative border-t border-forest-line bg-white/70 py-20 sm:py-28 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <Reveal>
                <div className="relative mx-auto max-w-lg lg:max-w-none">
                  <div className="absolute -inset-4 rounded-3xl bg-sunbeam-200/40 blur-2xl -z-10" />

                  <div className="relative overflow-hidden rounded-3xl border border-forest-line shadow-xl">
                    <Image
                      src="/images/minister-welcome.jpg"
                      alt="Minister preaching warmly with a microphone, welcoming individuals to the sanctuary"
                      width={720}
                      height={426}
                      className="w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-950/75 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <p className="font-display text-xl font-bold">Pastoral Warmth &amp; Prophetic Mandate</p>
                      <p className="text-sm text-sage-200">Ashaiman Klagon Road Sanctuary, Ghana</p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <span className="inline-block rounded-full bg-sagemist-100 px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-forest-800">
                      Our Ministry Heart
                    </span>
                    <h2 className="mt-3 font-display text-3xl font-bold text-forest-950 sm:text-5xl">
                      A House of Prayer, Healing, and Genuine Freedom
                    </h2>
                  </div>

                  <p className="text-base sm:text-lg leading-relaxed text-forest-800">
                    Supreme Studios is founded on the living word of God and the active power of the Holy Spirit. Serving families, youth, and seekers throughout Ashaiman, Tema, Greater Accra, and the diaspora, we believe that no situation is beyond the restorative touch of God.
                  </p>

                  <div className="space-y-4 pt-2">
                    {[
                      "Prophetic insight into deep-rooted spiritual and personal challenges",
                      "Safe, non-judgmental counseling environment for every family",
                      "Deliverance ministry that focuses on lasting biblical freedom",
                      "Open doors for visitors from all walks of life",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3.5">
                        <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-sunbeam-400 text-forest-950">
                          <CheckCircle2 className="size-4" />
                        </div>
                        <span className="text-sm sm:text-base font-bold text-forest-900">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row gap-4">
                    <a
                      href="#counseling"
                      className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-sunbeam-400 px-7 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-forest-950 shadow-xs hover:bg-sunbeam-300 transition-colors"
                    >
                      <span>Meet With A Minister</span>
                      <ArrowRight className="size-4" />
                    </a>
                    <a
                      href={CONTACT.phoneHref}
                      className="inline-flex items-center justify-center gap-2.5 rounded-2xl border border-forest-line bg-white px-7 py-4 text-xs sm:text-sm font-bold text-forest-900 hover:bg-sagemist-50 shadow-xs"
                    >
                      <Phone className="size-4 text-forest-700" />
                      <span>{CONTACT.phoneDisplay}</span>
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* COUNSELING STUDIO: 2-Column Guidance & Booking Console    */}
        {/* ========================================================= */}
        <section id="counseling" className="relative scroll-mt-20 border-t border-forest-line py-20 sm:py-28 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
              <span className="inline-block rounded-full bg-sunbeam-100 px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-forest-900">
                Pastoral Care &amp; Breakthrough
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold text-forest-950 sm:text-5xl lg:text-6xl">
                Book a Confidential Consultation
              </h2>
              <p className="mt-4 text-base sm:text-lg text-forest-800">
                Take the first step toward clarity and peace. Choose your preferred day and our prayer council will confirm with you via WhatsApp.
              </p>
            </Reveal>

            <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] items-start">
              {/* Guidance & Assurance Left Column */}
              <div className="space-y-8">
                <div className="rounded-3xl border border-forest-line bg-white/95 p-8 sm:p-10 shadow-xs">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-forest-950">
                    What to Expect in Your Session
                  </h3>
                  <div className="mt-6 space-y-6">
                    <div className="flex gap-4">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-sunbeam-100 text-forest-950">
                        <ShieldCheck className="size-6 text-emerald-700" />
                      </div>
                      <div>
                        <h4 className="font-bold text-forest-950 text-base">100% Confidentiality</h4>
                        <p className="mt-1 text-sm text-forest-800 leading-relaxed">
                          Your personal matters, family situations, and prayer needs remain strictly private between you and the pastoral team.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-sunbeam-100 text-forest-950">
                        <Sparkles className="size-6 text-sunbeam-700" />
                      </div>
                      <div>
                        <h4 className="font-bold text-forest-950 text-base">Scriptural &amp; Prophetic Guidance</h4>
                        <p className="mt-1 text-sm text-forest-800 leading-relaxed">
                          We do not rely on mere human wisdom. We pray with you and seek God&apos;s prophetic direction for your life.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-sunbeam-100 text-forest-950">
                        <MessageCircle className="size-6 text-emerald-700" />
                      </div>
                      <div>
                        <h4 className="font-bold text-forest-950 text-base">Direct WhatsApp Confirmation</h4>
                        <p className="mt-1 text-sm text-forest-800 leading-relaxed">
                          Once you submit, our WhatsApp channel connects immediately with your request details so we can assign an appointment slot.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direct Emergency Contact Box */}
                <div className="rounded-3xl border border-sunbeam-300 bg-sunbeam-50/70 p-8 shadow-xs">
                  <div className="flex items-center gap-3.5">
                    <div className="grid size-12 place-items-center rounded-2xl bg-sunbeam-400 text-forest-950">
                      <Phone className="size-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-forest-950 text-base">Urgent Pastoral Need?</h4>
                      <p className="text-xs sm:text-sm text-forest-800">Call our direct sanctuary helpline right now:</p>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <span className="font-display text-xl sm:text-2xl font-bold text-forest-950">
                      {CONTACT.phoneDisplay}
                    </span>
                    <a
                      href={CONTACT.phoneHref}
                      className="inline-flex items-center justify-center rounded-2xl bg-forest-900 px-6 py-3 text-xs sm:text-sm font-bold text-white hover:bg-forest-850"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </div>

              {/* Booking Form Console Right Column */}
              <div>
                <BookingForm />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* GALLERY SECTION: Life at Supreme Studios Altar            */}
        {/* ========================================================= */}
        <section id="gallery" className="relative scroll-mt-20 border-t border-forest-line bg-white/70 py-20 sm:py-28 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
              <span className="inline-block rounded-full bg-sagemist-100 px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-forest-800">
                Altar Atmosphere
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold text-forest-950 sm:text-5xl lg:text-6xl">
                Life at Supreme Studios
              </h2>
              <p className="mt-4 text-base sm:text-lg text-forest-800">
                Snapshots of fervent prayer, powerful choir worship, and the dedicated media team broadcasting God&apos;s word.
              </p>
            </Reveal>

            <div className="grid gap-8 md:grid-cols-3">
              {GALLERY.map((g, idx) => (
                <Reveal key={g.src} delay={idx * 0.1}>
                  <figure className="group relative overflow-hidden rounded-3xl border border-forest-line bg-white shadow-xs transition-all duration-300 hover:-translate-y-2 hover:border-sunbeam-400 hover:shadow-xl">
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={g.src}
                        alt={g.alt}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"
                      />
                    </div>
                    <figcaption className="p-6 sm:p-7">
                      <span className="inline-block rounded-full bg-sunbeam-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-forest-950">
                        {g.tag}
                      </span>
                      <h4 className="mt-3 font-display text-xl font-bold text-forest-950 group-hover:text-sunbeam-700 transition-colors">
                        {g.title}
                      </h4>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* VISIT & EMBEDDED GOOGLE MAP SECTION (Spacious & visible)  */}
        {/* ========================================================= */}
        <section id="visit" className="relative scroll-mt-20 border-t border-forest-line py-20 sm:py-28 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
              <span className="inline-block rounded-full bg-sunbeam-100 px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-forest-900">
                Find Your Way
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold text-forest-950 sm:text-5xl lg:text-6xl">
                Visit the Sanctuary
              </h2>
              <p className="mt-4 text-base sm:text-lg text-forest-800">
                We are located on Ashaiman Klagon Road, Tema/Ashaiman, Ghana. Use the interactive map below or explore our dedicated directions page.
              </p>
            </Reveal>

            {/* Live Interactive Google Map Frame with generous height */}
            <div className="mb-12 overflow-hidden rounded-3xl border-2 border-forest-line bg-white shadow-lg">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-forest-line bg-sagemist-100/70 p-5 sm:px-8">
                <div className="flex items-center gap-2.5">
                  <span className="flex size-3 rounded-full bg-sunbeam-500 animate-pulse" />
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-forest-950">
                    Supreme Studios Sanctuary Location
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <Link
                    href="/location"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-forest-900 underline hover:text-sunbeam-700"
                  >
                    <span>View Full Location Page</span>
                    <ArrowRight className="size-4" />
                  </Link>
                  <a
                    href={CONTACT.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-sunbeam-700 hover:text-forest-950"
                  >
                    <span>Open in Maps App</span>
                    <ExternalLink className="size-3.5" />
                  </a>
                </div>
              </div>

              {/* The Google Map iframe */}
              <div className="relative aspect-[4/3] w-full sm:aspect-[21/9] sm:min-h-[480px]">
                <iframe
                  title="Supreme Studios Ghana Google Map"
                  src="https://maps.google.com/maps?q=Ashaiman+Klagon+Road,+Tema,+Ghana&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Quick Contact & Directions Cards */}
            <div className="grid gap-8 md:grid-cols-3">
              {/* WhatsApp Card */}
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col justify-between rounded-3xl border border-forest-line bg-white p-8 shadow-xs transition-all hover:border-sunbeam-400 hover:shadow-lg hover:scale-[1.02]"
              >
                <div>
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800 group-hover:scale-110 transition-transform">
                    <MessageCircle className="size-7" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold text-forest-950">
                    WhatsApp Sanctuary Line
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-forest-800">
                    Reach our ministerial intercessors directly for prayer requests, directions, or inquiries.
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-forest-line pt-5 text-sm font-bold text-emerald-700">
                  <span>{CONTACT.phoneDisplay}</span>
                  <ExternalLink className="size-4" />
                </div>
              </a>

              {/* Phone Calling Card */}
              <a
                href={CONTACT.phoneHref}
                className="group relative flex flex-col justify-between rounded-3xl border border-forest-line bg-white p-8 shadow-xs transition-all hover:border-sunbeam-400 hover:shadow-lg hover:scale-[1.02]"
              >
                <div>
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-sunbeam-100 text-forest-950 group-hover:scale-110 transition-transform">
                    <Phone className="size-7 text-sunbeam-700" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold text-forest-950">
                    Telephone Inquiry
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-forest-800">
                    Speak directly with our church administration during operating hours for guidance.
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-forest-line pt-5 text-sm font-bold text-forest-900">
                  <span>{CONTACT.phoneDisplay}</span>
                  <ArrowRight className="size-4" />
                </div>
              </a>

              {/* Dedicated Location Page Card */}
              <Link
                href="/location"
                className="group relative flex flex-col justify-between rounded-3xl border border-forest-line bg-white p-8 shadow-xs transition-all hover:border-sunbeam-400 hover:shadow-lg hover:scale-[1.02]"
              >
                <div>
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-sagemist-100 text-forest-950 group-hover:scale-110 transition-transform">
                    <Navigation className="size-7 text-forest-800" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold text-forest-950">
                    Getting Here Guide
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-forest-800">
                    Trotro routes from Ashaiman Underbridge, driving directions, landmarks, and parking tips.
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-forest-line pt-5 text-sm font-bold text-forest-900 group-hover:text-sunbeam-700">
                  <span>View Full Directions Page</span>
                  <ArrowRight className="size-4" />
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* ========================================================= */}
      {/* FOOTER: Sage Mist & Forest Architectural Base             */}
      {/* ========================================================= */}
      <footer className="border-t border-forest-line bg-white text-forest-950">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
            {/* Left brand column with clean sharp logo */}
            <div className="space-y-5">
              <div className="flex items-center gap-3.5">
                <div className="rounded-xl bg-white p-1.5 ring-1 ring-forest-line/80 shadow-xs">
                  <Image
                    src="/images/supreme-studio-logo-clean.png"
                    alt="Supreme Studio"
                    width={140}
                    height={45}
                    className="h-9 sm:h-10 w-auto object-contain"
                    unoptimized
                  />
                </div>
                <div>
                  <span className="block font-display text-xl font-bold text-forest-950">
                    Supreme Studios
                  </span>
                  <span className="block text-xs font-bold uppercase tracking-wider text-sagemist-700">
                    Prophetic Prayer &amp; Deliverance
                  </span>
                </div>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-forest-800">
                A prophetic sanctuary located on Ashaiman Klagon Road, Tema/Ashaiman, Ghana. Committed to Christ-centered deliverance, prayer warfare, compassionate counseling, and global gospel broadcast.
              </p>
              <div className="flex items-center gap-2.5 pt-2">
                <span className="flex size-2.5 rounded-full bg-sunbeam-500 animate-pulse" />
                <span className="text-xs sm:text-sm text-forest-900 font-bold">Live stream broadcasting 24 hours a day</span>
              </div>
            </div>

            {/* Quick Links Column */}
            <div>
              <h4 className="font-display text-base font-bold uppercase tracking-wider text-forest-950">
                Sanctuary Links
              </h4>
              <ul className="mt-4 space-y-3 text-sm font-semibold text-forest-800">
                <li><Link href="/#sanctuary" className="hover:text-sunbeam-700 transition-colors">Sanctuary Home</Link></li>
                <li><Link href="/#schedule" className="hover:text-sunbeam-700 transition-colors">Weekly Service Gatherings</Link></li>
                <li><Link href="/#counseling" className="hover:text-sunbeam-700 transition-colors">Book 1-on-1 Consultation</Link></li>
                <li><Link href="/#gallery" className="hover:text-sunbeam-700 transition-colors">Altar Life &amp; Media Gallery</Link></li>
                <li><Link href="/location" className="hover:text-sunbeam-700 transition-colors">Location &amp; Google Map</Link></li>
              </ul>
            </div>

            {/* Contact Information Column */}
            <div>
              <h4 className="font-display text-base font-bold uppercase tracking-wider text-forest-950">
                Sanctuary Address
              </h4>
              <div className="mt-4 space-y-3 text-sm font-medium text-forest-800">
                <p>{CONTACT.address}</p>
                <p>Phone: <a href={CONTACT.phoneHref} className="text-forest-950 font-bold underline">{CONTACT.phoneDisplay}</a></p>
                <p>WhatsApp: <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-bold underline">Chat with Pastor</a></p>
                <p><Link href="/location" className="text-forest-950 font-bold underline">View Google Map Directions</Link></p>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-forest-line pt-10 text-xs sm:text-sm text-sagemist-700 sm:flex-row">
            <p>© {new Date().getFullYear()} Supreme Studios Ministry. All rights reserved.</p>
            <p className="flex items-center gap-2 font-medium">
              <span>Ashaiman Klagon Road, Ghana</span>
              <span>·</span>
              <span className="text-forest-950 font-bold">Glory to God in the Highest</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

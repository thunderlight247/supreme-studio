"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Radio, MessageCircle, CalendarHeart, MapPin } from "lucide-react";
import { TOGGLE_EVENT } from "@/components/AudioPlayer";
import { CONTACT, whatsappLink } from "@/data/contact";

const LINKS = [
  { id: "sanctuary", label: "Sanctuary", href: "/#sanctuary" },
  { id: "schedule", label: "Gatherings", href: "/#schedule" },
  { id: "counseling", label: "Counseling", href: "/#counseling" },
  { id: "gallery", label: "Altar Life", href: "/#gallery" },
  { id: "location", label: "Location & Map", href: "/location" },
];

export default function Nav() {
  const [active, setActive] = useState("sanctuary");
  const [hover, setHover] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const els = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    if (els.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -55% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const lit = hover ?? active;

  return (
    <header className="sticky top-0 z-50 border-b border-forest-line bg-white/95 backdrop-blur-md shadow-xs">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6">
        {/* Brand Logo & On-Air Badge */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            aria-label="Supreme Studios home"
            className="flex items-center gap-3 rounded-xl p-0.5 transition-opacity hover:opacity-95"
          >
            {/* High-definition clean cropped logo */}
            <div className="flex items-center rounded-lg bg-white p-1 ring-1 ring-forest-line/80 shadow-xs">
              <Image
                src="/images/supreme-studio-logo-clean.png"
                alt="Supreme Studios Ghana Ministry"
                width={140}
                height={45}
                className="h-8 sm:h-9 w-auto object-contain"
                priority
                unoptimized
              />
            </div>
            <div className="hidden sm:block">
              <span className="block font-display text-sm font-bold tracking-tight text-forest-950">
                Supreme Studios
              </span>
              <span className="block text-[10px] font-bold uppercase tracking-wider text-sagemist-700">
                Prophetic Ministry · Ghana
              </span>
            </div>
          </Link>

          {/* On-Air Live Indicator */}
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event(TOGGLE_EVENT))}
            className="hidden items-center gap-1.5 rounded-full border border-forest-line bg-sagemist-100/80 px-3 py-1 text-[11px] font-bold text-forest-900 transition-colors hover:border-sunbeam-500 hover:bg-sunbeam-100/70 md:inline-flex"
            title="Listen to 24/7 Live Stream"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sunbeam-500 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-sunbeam-500" />
            </span>
            <span className="tracking-wide">24/7 Live Altar</span>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center rounded-full border border-forest-line bg-sagemist-50/80 p-1 shadow-xs">
            {LINKS.map((l) => (
              <li key={l.id} className="relative">
                <Link
                  href={l.href}
                  onMouseEnter={() => setHover(l.id)}
                  onMouseLeave={() => setHover(null)}
                  onFocus={() => setHover(l.id)}
                  onBlur={() => setHover(null)}
                  className={`relative block rounded-full px-4 py-1.5 text-sm font-semibold transition-all duration-200 ${
                    lit === l.id ? "text-forest-950 font-bold" : "text-sagemist-800 hover:text-forest-950"
                  }`}
                >
                  {lit === l.id && (
                    <motion.span
                      layoutId="nav-glow-pill"
                      className="absolute inset-0 rounded-full bg-white border border-sunbeam-400/80 shadow-xs"
                      transition={{ type: "spring", stiffness: 420, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{l.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action CTAs */}
        <div className="flex items-center gap-2.5">
          {/* Quick WhatsApp Prayer Line */}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-xl border border-forest-line bg-white px-3.5 py-2 text-xs font-bold text-forest-900 shadow-xs transition-all hover:bg-sagemist-50 hover:border-forest-line-strong"
          >
            <MessageCircle className="size-3.5 text-emerald-600" />
            <span>Prayer Line</span>
          </a>

          {/* Location Quick Link */}
          <Link
            href="/location"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-xl border border-forest-line bg-sagemist-100/60 px-3 py-2 text-xs font-bold text-forest-900 hover:bg-sagemist-100"
            title="Google Map & Directions"
          >
            <MapPin className="size-3.5 text-sunbeam-600" />
            <span>Map</span>
          </Link>

          {/* Book Consultation Button */}
          <Link
            href="/#counseling"
            className="inline-flex items-center gap-1.5 rounded-xl bg-sunbeam-400 px-4 py-2 text-xs font-bold uppercase tracking-wider text-forest-950 shadow-sm transition-all duration-200 hover:bg-sunbeam-300 hover:shadow-md active:scale-95"
          >
            <CalendarHeart className="size-3.5" />
            <span>Book Session</span>
          </Link>

          {/* Mobile Menu Toggle (44px min touch target) */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
            className="grid size-11 place-items-center rounded-xl border border-forest-line bg-white text-forest-900 shadow-xs lg:hidden active:scale-95"
          >
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-forest-line bg-white/98 px-4 pt-3 pb-6 shadow-lg lg:hidden"
          >
            <nav aria-label="Mobile">
              <ul className="space-y-1">
                {LINKS.map((l) => (
                  <li key={l.id}>
                    <Link
                      href={l.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block rounded-xl px-4 py-3 text-base font-bold transition-colors ${
                        active === l.id
                          ? "bg-sunbeam-100 text-forest-950 border-l-4 border-sunbeam-500"
                          : "text-forest-900 hover:bg-sagemist-100"
                      }`}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-forest-line flex flex-col gap-2.5">
                <Link
                  href="/location"
                  onClick={() => setMobileOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-sunbeam-100 py-3 text-sm font-bold text-forest-950"
                >
                  <MapPin className="size-4 text-sunbeam-700" />
                  View Interactive Google Map
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    window.dispatchEvent(new Event(TOGGLE_EVENT));
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-sagemist-100 py-3 text-sm font-bold text-forest-900"
                >
                  <Radio className="size-4 text-sunbeam-600" />
                  Listen to 24/7 Stream
                </button>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-forest-line bg-white py-3 text-sm font-bold text-forest-900 shadow-xs"
                >
                  <MessageCircle className="size-4 text-emerald-600" />
                  WhatsApp ({CONTACT.phoneDisplay})
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

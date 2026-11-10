import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Navigation,
  Phone,
  MessageCircle,
  Clock,
  Calendar,
  ArrowLeft,
  ExternalLink,
  Car,
  Bus,
  ShieldCheck,
} from "lucide-react";
import Nav from "@/components/Nav";
import { CONTACT, whatsappLink } from "@/data/contact";

export const metadata = {
  title: "Sanctuary Location & Directions | Supreme Studios Ghana",
  description:
    "Find your way to Supreme Studios on Ashaiman Klagon Road, Tema/Ashaiman, Ghana. Interactive Google Map, trotro/taxi directions, and service times.",
};

export default function LocationPage() {
  return (
    <div className="min-h-screen bg-sagemist-50 text-forest-950 selection:bg-sunbeam-200 selection:text-forest-950">
      <Nav />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-14">
        {/* Breadcrumb & Back Link */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-forest-800 transition-colors hover:text-sunbeam-700"
          >
            <ArrowLeft className="size-4" />
            <span>Back to Sanctuary Home</span>
          </Link>
        </div>

        {/* Page Title & Vision Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-forest-line bg-white px-3.5 py-1 text-xs font-bold text-forest-900 shadow-xs">
            <MapPin className="size-3.5 text-sunbeam-600" />
            <span>Ashaiman Klagon Road · Tema / Ashaiman, Ghana</span>
          </div>
          <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-forest-950 sm:text-5xl">
            Sanctuary Location &amp; Directions
          </h1>
          <p className="mt-3 text-base text-forest-800 sm:text-lg">
            Welcome to Supreme Studios. Whether you are coming for Tuesday deliverance, Thursday miracle service, Saturday impartation, or a private counseling session, we look forward to receiving you.
          </p>
        </div>

        {/* Quick Action Buttons for Mobile & Desktop */}
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={CONTACT.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-sunbeam-400 px-5 py-3 text-xs font-bold uppercase tracking-wider text-forest-950 shadow-sm transition-all hover:bg-sunbeam-300"
          >
            <Navigation className="size-4" />
            <span>Open in Google Maps App</span>
            <ExternalLink className="size-3.5" />
          </a>

          <a
            href={whatsappLink("Hello Pastor, I am on my way to Supreme Studios and need live directions.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-forest-line bg-white px-5 py-3 text-xs font-bold text-forest-900 shadow-xs hover:bg-sagemist-100"
          >
            <MessageCircle className="size-4 text-emerald-600" />
            <span>WhatsApp Live Direction Assistance</span>
          </a>

          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center gap-2 rounded-xl border border-forest-line bg-white px-5 py-3 text-xs font-bold text-forest-900 shadow-xs hover:bg-sagemist-100"
          >
            <Phone className="size-4 text-forest-700" />
            <span>Call Desk ({CONTACT.phoneDisplay})</span>
          </a>
        </div>

        {/* Interactive Google Map Section */}
        <div className="mt-8 overflow-hidden rounded-2xl border-2 border-forest-line bg-white shadow-md">
          <div className="flex flex-col justify-between gap-3 border-b border-forest-line bg-sagemist-100/70 p-4 sm:flex-row sm:items-center sm:px-6">
            <div className="flex items-center gap-2">
              <span className="flex size-2.5 rounded-full bg-sunbeam-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-forest-950">
                Interactive Google Map Navigation
              </span>
            </div>
            <span className="text-xs font-medium text-forest-800">
              Plus Code: <strong className="text-forest-950">MX63+Q29, Ashaiman, Ghana</strong>
            </span>
          </div>

          <div className="relative aspect-[4/3] w-full sm:aspect-[21/9] sm:min-h-[420px]">
            <iframe
              title="Supreme Studios Sanctuary Google Map Location"
              src="https://maps.google.com/maps?q=Ashaiman+Klagon+Road,+Tema,+Ghana&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Detailed Directions & Arrival Details */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: By Public Transport (Trotro) */}
          <div className="rounded-2xl border border-forest-line bg-white p-6 shadow-xs">
            <div className="flex size-11 items-center justify-center rounded-xl bg-sunbeam-100 text-forest-950">
              <Bus className="size-5 text-forest-900" />
            </div>
            <h2 className="mt-4 font-display text-xl font-bold text-forest-950">
              By Trotro (Public Transit)
            </h2>
            <div className="mt-3 space-y-2 text-xs leading-relaxed text-forest-800">
              <p>
                <strong>From Ashaiman Underbridge / Market:</strong> Board any vehicle or shared taxi heading towards Klagon along Klagon Road. Ask the driver or mate to drop you at the Supreme Studios junction.
              </p>
              <p>
                <strong>From Tema Community 1 / 4:</strong> Take a trotro or taxi to Ashaiman Underbridge, then connect to the Klagon Road line.
              </p>
            </div>
          </div>

          {/* Card 2: Ride Hailing & Private Driving */}
          <div className="rounded-2xl border border-forest-line bg-white p-6 shadow-xs">
            <div className="flex size-11 items-center justify-center rounded-xl bg-sunbeam-100 text-forest-950">
              <Car className="size-5 text-forest-900" />
            </div>
            <h2 className="mt-4 font-display text-xl font-bold text-forest-950">
              Ride-Hailing &amp; Driving
            </h2>
            <div className="mt-3 space-y-2 text-xs leading-relaxed text-forest-800">
              <p>
                <strong>Uber / Bolt / Yango:</strong> In your app, enter &quot;Ashaiman Klagon Road&quot; or paste the Plus Code <code>MX63+Q29</code> as your destination.
              </p>
              <p>
                <strong>Parking:</strong> Secure parking space is available on-site for both private vehicles and motorcycles during all service gatherings.
              </p>
            </div>
          </div>

          {/* Card 3: Gathering Hours & Warm Welcome */}
          <div className="rounded-2xl border border-forest-line bg-white p-6 shadow-xs sm:col-span-2 lg:col-span-1">
            <div className="flex size-11 items-center justify-center rounded-xl bg-sunbeam-100 text-forest-950">
              <Clock className="size-5 text-forest-900" />
            </div>
            <h2 className="mt-4 font-display text-xl font-bold text-forest-950">
              Gathering Hours (GMT)
            </h2>
            <div className="mt-3 space-y-2 text-xs leading-relaxed text-forest-800">
              <div className="flex items-center justify-between border-b border-forest-line pb-1.5">
                <span className="font-bold text-forest-950">Tuesday (Deliverance)</span>
                <span>07:00 &amp; 18:00</span>
              </div>
              <div className="flex items-center justify-between border-b border-forest-line pb-1.5">
                <span className="font-bold text-forest-950">Thursday (Miracle Word)</span>
                <span>07:00 &amp; 18:00</span>
              </div>
              <div className="flex items-center justify-between pb-1.5">
                <span className="font-bold text-forest-950">Saturday (Breakthrough)</span>
                <span>07:00 &amp; 18:00</span>
              </div>
              <p className="pt-1 text-[11px] text-sagemist-700">
                Counseling sessions run between 10:00 – 13:00 GMT on service days.
              </p>
            </div>
          </div>
        </div>

        {/* Pastoral Welcome Banner */}
        <div className="mt-10 rounded-2xl border border-sunbeam-300 bg-gradient-to-r from-sunbeam-100/90 via-sunbeam-50 to-white p-6 sm:p-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-5 text-emerald-700" />
                <h3 className="font-display text-xl font-bold text-forest-950">
                  First Time Visiting Supreme Studios?
                </h3>
              </div>
              <p className="text-xs text-forest-800">
                Our protocol and ushering team are ready to welcome you with love, guide you to your seat, and connect you with pastoral care.
              </p>
            </div>
            <Link
              href="/#counseling"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-forest-900 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-forest-850"
            >
              <Calendar className="size-4" />
              <span>Book Appointment First</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

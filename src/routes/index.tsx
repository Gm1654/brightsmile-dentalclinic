import { createFileRoute } from "@tanstack/react-router";
import { ClientOnly } from "@tanstack/react-router";
import {
  Clock,
  MapPin,
  Phone,
  Mail,
  Sparkles,
  Stethoscope,
  Baby,
  Smile,
  Syringe,
  Braces,
  ShieldPlus,
} from "lucide-react";
import { lazy, Suspense } from "react";

import heroImage from "@/assets/clinic-hero.jpg";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";

const VoiceAgent = lazy(() =>
  import("@/components/VoiceAgent").then((m) => ({ default: m.VoiceAgent })),
);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BrightSmile Dental Clinic | Lahore Dentist & Voice Booking" },
      {
        name: "description",
        content:
          "BrightSmile Dental Clinic in Garden Town, Lahore: checkups, whitening, braces, implants and emergency care. Talk to Aria, our AI receptionist, to book instantly.",
      },
      { property: "og:title", content: "BrightSmile Dental Clinic | Lahore" },
      {
        property: "og:description",
        content:
          "General and cosmetic dentistry in Lahore. Book by voice with Aria, our AI receptionist.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: Stethoscope,
    title: "Checkup & Cleaning",
    detail: "Exam, scaling and polishing. Every 6 months. 30–45 min.",
    price: "From PKR 1,500",
  },
  {
    icon: ShieldPlus,
    title: "Tooth Filling",
    detail: "Tooth-coloured composite fillings for cavities. 30–60 min.",
    price: "From PKR 3,000",
  },
  {
    icon: Syringe,
    title: "Root Canal (RCT)",
    detail: "For infected or damaged teeth. Usually 2 visits.",
    price: "From PKR 12,000",
  },
  {
    icon: Smile,
    title: "Teeth Whitening",
    detail: "In-clinic cosmetic whitening. 45–60 min.",
    price: "From PKR 15,000",
  },
  {
    icon: Braces,
    title: "Braces & Aligners",
    detail: "Orthodontic assessment and treatment options. 30 min.",
    price: "From PKR 1,000",
  },
  {
    icon: Baby,
    title: "Pediatric Dentistry",
    detail: "Gentle dental care for children of all ages.",
    price: "Consultation based",
  },
];

const dentists = [
  {
    name: "Dr. Sara Ahmed",
    specialty: "General & Cosmetic Dentistry",
    days: "Mon, Tue, Thu, Sat",
  },
  {
    name: "Dr. Bilal Khan",
    specialty: "Orthodontics (Braces / Aligners)",
    days: "Wed, Fri, Sat",
  },
  {
    name: "Dr. Ayesha Malik",
    specialty: "Pediatric Dentistry",
    days: "Mon, Wed, Fri",
  },
];

const faqs = [
  {
    q: "Do you accept walk-ins?",
    a: "Walk-ins are accepted based on availability, but appointments are strongly recommended to avoid waiting.",
  },
  {
    q: "Do you treat children?",
    a: "Yes. Dr. Ayesha Malik specialises in pediatric dentistry and sees patients of all ages.",
  },
  {
    q: "Is parking available?",
    a: "Yes, free parking is available directly outside the clinic.",
  },
  {
    q: "Do you accept insurance?",
    a: "We accept select insurance panels. Bring your insurance card and our front desk will verify coverage on arrival.",
  },
  {
    q: "What should I bring to my first visit?",
    a: "A valid ID and any previous dental records or X-rays, if available.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Toaster />

      <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-2 font-semibold">
            <Sparkles className="h-5 w-5 text-primary" aria-hidden="true" />
            BrightSmile
          </a>
          <nav className="hidden gap-6 text-sm text-muted-foreground md:flex">
            <a href="#services" className="hover:text-foreground">
              Services
            </a>
            <a href="#dentists" className="hover:text-foreground">
              Dentists
            </a>
            <a href="#hours" className="hover:text-foreground">
              Hours
            </a>
            <a href="#faq" className="hover:text-foreground">
              FAQ
            </a>
          </nav>
          <Button asChild size="sm">
            <a href="#aria">Talk to Aria</a>
          </Button>
        </div>
      </header>

      <main id="top">
        <section className="bg-gradient-soft">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs font-medium text-primary">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                AI receptionist available 24/7
              </span>
              <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                Gentle, modern dentistry in the heart of Lahore
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                BrightSmile Dental Clinic offers general and cosmetic dentistry for all
                ages — from routine cleanings to whitening, braces and implants.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <a href="#aria">Book by voice</a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="tel:+923001234567">Call +92 300 1234567</a>
                </Button>
              </div>
            </div>
            <img
              src={heroImage}
              alt="Dentist standing beside a treatment chair in the bright BrightSmile clinic"
              width={1600}
              height={1104}
              className="rounded-3xl shadow-soft"
            />
          </div>
        </section>

        <section id="aria" className="mx-auto max-w-3xl px-5 py-16 md:py-20">
          <Suspense
            fallback={
              <div className="rounded-3xl border bg-card p-8 text-center text-sm text-muted-foreground shadow-card">
                Loading Aria…
              </div>
            }
          >
            <ClientOnly fallback={null}>
              <VoiceAgent />
            </ClientOnly>
          </Suspense>
        </section>

        <section id="services" className="mx-auto max-w-6xl px-5 pb-16 md:pb-20">
          <h2 className="text-3xl font-bold tracking-tight">Services & pricing</h2>
          <p className="mt-2 text-muted-foreground">
            Starting estimates only — final cost depends on the dentist's assessment.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border bg-card p-6 shadow-card"
              >
                <service.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{service.detail}</p>
                <p className="mt-4 text-sm font-medium text-primary">{service.price}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 rounded-2xl bg-secondary p-4 text-sm text-secondary-foreground">
            Emergency dental care: same-day appointments for severe pain, swelling or
            trauma, subject to availability.
          </p>
        </section>

        <section id="dentists" className="bg-gradient-soft">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
            <h2 className="text-3xl font-bold tracking-tight">Our dentists</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {dentists.map((dentist) => (
                <article
                  key={dentist.name}
                  className="rounded-2xl border bg-card p-6 shadow-card"
                >
                  <h3 className="text-lg font-semibold">{dentist.name}</h3>
                  <p className="mt-1 text-sm text-primary">{dentist.specialty}</p>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Available: {dentist.days}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="hours" className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border bg-card p-6 shadow-card">
              <h2 className="flex items-center gap-2 text-xl font-semibold">
                <Clock className="h-5 w-5 text-primary" aria-hidden="true" /> Working
                hours
              </h2>
              <dl className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between border-b pb-2">
                  <dt>Monday – Friday</dt>
                  <dd className="font-medium">9:00 AM – 8:00 PM</dd>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <dt>Saturday</dt>
                  <dd className="font-medium">10:00 AM – 6:00 PM</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Sunday</dt>
                  <dd className="font-medium text-muted-foreground">Closed</dd>
                </div>
              </dl>
            </div>
            <div className="rounded-2xl border bg-card p-6 shadow-card">
              <h2 className="text-xl font-semibold">Visit us</h2>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
                  123 Garden Town, Lahore, Pakistan
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
                  <a href="tel:+923001234567" className="hover:text-foreground">
                    +92 300 1234567
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
                  <a
                    href="mailto:info@brightsmiledental.com"
                    className="hover:text-foreground"
                  >
                    info@brightsmiledental.com
                  </a>
                </li>
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">
                Free parking directly outside the clinic.
              </p>
            </div>
          </div>
        </section>

        <section id="faq" className="bg-gradient-soft">
          <div className="mx-auto max-w-3xl px-5 py-16 md:py-20">
            <h2 className="text-3xl font-bold tracking-tight">
              Frequently asked questions
            </h2>
            <div className="mt-8 space-y-4">
              {faqs.map((faq) => (
                <article key={faq.q} className="rounded-2xl border bg-card p-6">
                  <h3 className="font-semibold">{faq.q}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{faq.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-5 py-8 text-sm text-muted-foreground">
          © {new Date().getFullYear()} BrightSmile Dental Clinic · 123 Garden Town,
          Lahore
        </div>
      </footer>
    </div>
  );
}

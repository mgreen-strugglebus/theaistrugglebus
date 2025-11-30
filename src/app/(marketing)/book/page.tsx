import type { Metadata } from "next";
import Image from "next/image";
import { WavyDivider } from "@/components/ui/section-divider";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata: Metadata = {
  title: "Book a Call",
  description:
    "Schedule a conversation about your AI journey. No pressure, no pitch deck. Just honest advice.",
};

export default function BookPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Let&apos;s map your route.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Whether you&apos;re just exploring AI or ready to hit the gas,
                we&apos;re here to help. No pressure, no jargon. Just an honest
                conversation about what&apos;s possible for your business.
              </p>
              <ul className="mt-8 space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <span className="text-primary">✓</span>
                  30-minute discovery call
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✓</span>
                  No commitment required
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✓</span>
                  Get real advice, not a sales pitch
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✓</span>
                  Learn if we&apos;re the right fit
                </li>
              </ul>
            </div>
            <div>
              <Image
                src="/images/book-phone.png"
                alt="AI Struggle Bus with open door, welcoming visitors"
                width={500}
                height={500}
                className="mx-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <WavyDivider />

      {/* Form */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Hop on board
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Fill out the form and we&apos;ll reach out within 24 hours to
                schedule your call.
              </p>
            </div>
            <div className="mt-12 rounded-2xl border-2 border-secondary bg-background p-8">
              <ContactForm source="contact" submitLabel="Book My Call" />
            </div>
          </div>
        </div>
      </section>

      <WavyDivider />

      {/* What to expect */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What happens next
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                1
              </div>
              <h3 className="text-xl font-bold text-foreground">We respond</h3>
              <p className="mt-2 text-muted-foreground">
                Within 24 hours, you&apos;ll hear from us with calendar options.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                2
              </div>
              <h3 className="text-xl font-bold text-foreground">We listen</h3>
              <p className="mt-2 text-muted-foreground">
                On the call, we learn about your business, challenges, and goals.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                3
              </div>
              <h3 className="text-xl font-bold text-foreground">We advise</h3>
              <p className="mt-2 text-muted-foreground">
                We give honest feedback on whether AI can help, and how.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

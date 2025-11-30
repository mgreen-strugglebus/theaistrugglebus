import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { WavyDivider } from "@/components/ui/section-divider";
import { Wrench, BarChart3, Sparkles, User } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the team behind The AI Struggle Bus. We're operators who understand the unique challenges of small and medium businesses.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Built by drivers, for drivers.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              We&apos;re not just AI consultants. We&apos;re operators who&apos;ve
              been in the driver&apos;s seat. We&apos;ve built businesses, felt the
              friction, and discovered how AI can clear the road.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-2xl">
            <Image
              src="/images/about-team-bus.png"
              alt="The AI Struggle Bus team - Multiple buses working together"
              width={800}
              height={450}
              className="mx-auto rounded-2xl"
            />
          </div>
        </div>
      </section>

      <WavyDivider />

      {/* Story */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                The origin story
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We&apos;ve been practicing AI since the early days, before the
                hype, before the buzzwords, before everyone had an opinion. We
                watched adoption climb from around 40% of small businesses using
                AI in 2024 to almost 60% in 2025.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                But we also saw something else: most small businesses were
                struggling to get value from AI. They bought tools that
                promised the world but delivered another portal to log into.
                They hired consultants who spoke in jargon and left them with
                slide decks instead of solutions.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                So we built The AI Struggle Bus. A different kind of AI
                partner, one that embeds working solutions into your existing
                tools and measures success in hours saved and revenue gained.
              </p>
            </div>
            <div>
              <Image
                src="/images/about-origin.png"
                alt="The beginning of the AI Struggle Bus journey"
                width={500}
                height={500}
                className="mx-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <WavyDivider />

      {/* Values */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What fuels us
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Wrench className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Practicality</h3>
              <p className="mt-2 text-muted-foreground">
                We don&apos;t deal in theoretical. Every workflow we deploy works
                in the real world, with real businesses, on real timelines.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                Measurable Outcomes
              </h3>
              <p className="mt-2 text-muted-foreground">
                If we can&apos;t measure it, we don&apos;t promise it. You&apos;ll
                always know exactly what value you&apos;re getting.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Ownership</h3>
              <p className="mt-2 text-muted-foreground">
                Our goal is to reduce the drudge work so you can focus on
                growth. We put you back in the driver&apos;s seat.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WavyDivider />

      {/* Why Different */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1 overflow-hidden rounded-2xl">
              <Image
                src="/images/about-different.png"
                alt="AI Struggle Bus taking a different route while others are stuck"
                width={800}
                height={533}
                className="w-full h-auto scale-125"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Why we take a different route
              </h2>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-primary">✓</span>
                  <div>
                    <p className="font-semibold text-foreground">
                      We embed, not sell
                    </p>
                    <p className="text-muted-foreground">
                      No new platforms to learn. AI works inside the tools you
                      already use.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-primary">✓</span>
                  <div>
                    <p className="font-semibold text-foreground">
                      We measure in weeks, not quarters
                    </p>
                    <p className="text-muted-foreground">
                      You&apos;ll see ROI in 30 days, not &ldquo;sometime next
                      year.&rdquo;
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-primary">✓</span>
                  <div>
                    <p className="font-semibold text-foreground">
                      We speak human, not hype
                    </p>
                    <p className="text-muted-foreground">
                      No buzzwords. No jargon. Just clear explanations of
                      what&apos;s happening and why.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-primary">✓</span>
                  <div>
                    <p className="font-semibold text-foreground">
                      We understand small business
                    </p>
                    <p className="text-muted-foreground">
                      We&apos;ve run them. We know every dollar and hour
                      counts.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <WavyDivider />

      {/* Team */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Your co-pilots
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Cross-industry expertise. Practical deployments. Genuine care for
              your success.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto h-[200px] w-[200px] rounded-full bg-secondary flex items-center justify-center">
                <User className="h-16 w-16 text-muted-foreground" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-foreground">
                [Team Member 1]
              </h3>
              <p className="text-primary">Chief Navigator</p>
              <p className="mt-2 text-sm text-muted-foreground">
                [Background and expertise placeholder]
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-[200px] w-[200px] rounded-full bg-secondary flex items-center justify-center">
                <User className="h-16 w-16 text-muted-foreground" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-foreground">
                [Team Member 2]
              </h3>
              <p className="text-primary">Head of Engineering</p>
              <p className="mt-2 text-sm text-muted-foreground">
                [Background and expertise placeholder]
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-[200px] w-[200px] rounded-full bg-secondary flex items-center justify-center">
                <User className="h-16 w-16 text-muted-foreground" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-foreground">
                [Team Member 3]
              </h3>
              <p className="text-primary">Client Success Lead</p>
              <p className="mt-2 text-sm text-muted-foreground">
                [Background and expertise placeholder]
              </p>
            </div>
          </div>
        </div>
      </section>

      <WavyDivider />

      {/* CTA */}
      <section className="section-padding bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Let&apos;s take a ride.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              No pressure, no pitch deck. Just a conversation about where you
              want to go and how we might help you get there.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="/book">Book a Call</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

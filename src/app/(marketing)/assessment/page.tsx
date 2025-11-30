import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WavyDivider } from "@/components/ui/section-divider";
import { ContactForm } from "@/components/forms/contact-form";
import { Map, ClipboardList, DollarSign, Zap, Telescope, Handshake } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Readiness Assessment",
  description:
    "Discover where AI will pay off first with our 10-14 day assessment. We identify at least $50K+ in annualised savings.",
};

export default function AssessmentPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Check the map before you drive.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Many SMBs are exploring AI but need clarity on where to start.
                51% are &ldquo;Explorers&rdquo; experimenting with AI, while
                security concerns and unclear ROI keep them parked. Our
                assessment identifies the fastest-ROI routes and shows you the
                business case before you burn any fuel.
              </p>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="#get-assessment">Get Your Roadmap</Link>
                </Button>
              </div>
            </div>
            <div>
              <Image
                src="/images/assessment-map.png"
                alt="AI Struggle Bus with roadmap - Your path to AI success"
                width={500}
                height={500}
                className="mx-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <WavyDivider />

      {/* Process */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              The 10-14 Day Pit Stop
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We map your current operations, find the bottlenecks, and chart
              the best course forward.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <Card className="rounded-2xl border-2 border-secondary">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  1
                </div>
                <CardTitle>Days 1-3: Discovery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We review your processes, tools (CRM, ecommerce, accounting),
                  communications, and identify where you&apos;re stuck in
                  traffic.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-2 border-secondary">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  2
                </div>
                <CardTitle>Days 4-7: Quantify</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We measure hours spent and cost of manual tasks, identifying
                  at least $50K+ in annualised savings or equivalent fuel
                  savings.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-2 border-secondary">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  3
                </div>
                <CardTitle>Days 8-14: Roadmap</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We deliver a prioritised list of AI workflows, savings model,
                  and a 30-day sprint plan, your personalised GPS for AI success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <WavyDivider />

      {/* Quiz CTA */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Image
                src="/images/quiz-compass.png"
                alt="AI Struggle Bus with compass helping navigate the right direction"
                width={600}
                height={400}
                className="mx-auto rounded-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Not sure which way to go?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Take our 3-minute AI Readiness Quiz to see if your biggest
                opportunities are in marketing, customer service, operations, or
                product. It&apos;s like checking your mirrors before you merge.
              </p>
              <div className="mt-8">
                <Button variant="outline" asChild>
                  <Link href="/resources/quiz">Take the Quiz</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WavyDivider />

      {/* Deliverables */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What&apos;s in your glove box
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to navigate your AI journey with confidence.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border-2 border-secondary bg-background p-6">
              <Map className="mb-4 h-8 w-8 text-primary" />
              <h3 className="font-semibold text-foreground">Opportunity Map</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Visual overview of where AI can drive the most value in your
                operations.
              </p>
            </div>
            <div className="rounded-2xl border-2 border-secondary bg-background p-6">
              <ClipboardList className="mb-4 h-8 w-8 text-primary" />
              <h3 className="font-semibold text-foreground">
                Workflow Portfolio
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Detailed breakdown of recommended AI workflows prioritised by
                ROI.
              </p>
            </div>
            <div className="rounded-2xl border-2 border-secondary bg-background p-6">
              <DollarSign className="mb-4 h-8 w-8 text-primary" />
              <h3 className="font-semibold text-foreground">Savings Model</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Clear financial projections showing time and cost savings.
              </p>
            </div>
            <div className="rounded-2xl border-2 border-secondary bg-background p-6">
              <Zap className="mb-4 h-8 w-8 text-primary" />
              <h3 className="font-semibold text-foreground">
                30-Day Sprint Plan
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Ready-to-execute plan for your first AI deployment sprint.
              </p>
            </div>
            <div className="rounded-2xl border-2 border-secondary bg-background p-6">
              <Telescope className="mb-4 h-8 w-8 text-primary" />
              <h3 className="font-semibold text-foreground">
                90-Day Scale Roadmap
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Long-term vision for expanding AI across your business.
              </p>
            </div>
            <div className="rounded-2xl border-2 border-secondary bg-background p-6">
              <Handshake className="mb-4 h-8 w-8 text-primary" />
              <h3 className="font-semibold text-foreground">Expert Guidance</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Direct access to our team throughout the assessment process.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WavyDivider />

      {/* Form */}
      <section id="get-assessment" className="section-padding">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Ready to check your map?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Fill out the form below and we&apos;ll be in touch within 24
                hours to start planning your route.
              </p>
            </div>
            <div className="mt-12 rounded-2xl border-2 border-secondary bg-card p-8">
              <ContactForm source="assessment" submitLabel="Get My Roadmap" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

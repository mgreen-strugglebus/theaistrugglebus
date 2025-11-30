"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WavyDivider } from "@/components/ui/section-divider";
import { ContactForm } from "@/components/forms/contact-form";
import { PreloadVideo } from "@/components/ui/preload-video";
import { Settings, BarChart3, Shield, BookOpen, Map, Handshake } from "lucide-react";

export default function SprintPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Destination: Results. ETA: 30 days.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                No scenic detours. No science projects. You get working AI that
                solves real problems, plus a plan to keep driving forward. We
                deploy 2-5 high-ROI workflows and measure the miles you&apos;ve
                gained.
              </p>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="#start-sprint">Start Your Sprint</Link>
                </Button>
              </div>
            </div>
            <div>
              <PreloadVideo
                src="/videos/sprint-countdown.mp4"
                poster="/images/sprint-speedometer.png"
                alt="AI Struggle Bus with speedometer showing rapid progress"
                width={500}
                height={281}
                className="mx-auto max-w-[500px]"
                bgColor="#FFFFFF"
              />
            </div>
          </div>
        </div>
      </section>

      <WavyDivider />

      {/* Timeline */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              The Road Trip Itinerary
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Four weeks. Clear milestones. Real results at every stop.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-4xl">
            {/* Week 1 */}
            <div className="relative flex gap-8 pb-12">
              <div className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  1
                </div>
                <div className="mt-4 h-full w-0.5 bg-secondary" />
              </div>
              <div className="flex-1 pb-8">
                <h3 className="text-2xl font-bold text-foreground">
                  Week 1: Load the Bus
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Confirm scope, integrations, KPIs, and owners. Finalise which
                  workflows to deploy based on your assessment. Get everyone
                  buckled in and ready.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                    Scope confirmation
                  </span>
                  <span className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                    Integration setup
                  </span>
                  <span className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                    KPI definition
                  </span>
                </div>
              </div>
            </div>

            {/* Week 2-3 */}
            <div className="relative flex gap-8 pb-12">
              <div className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  2-3
                </div>
                <div className="mt-4 h-full w-0.5 bg-secondary" />
              </div>
              <div className="flex-1 pb-8">
                <h3 className="text-2xl font-bold text-foreground">
                  Weeks 2-3: Hit the Road
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Build and embed agents into your tools: website, CRM,
                  accounting system, Slack. Test with your team and iron out any
                  bumps in the road.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                    Workflow development
                  </span>
                  <span className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                    Tool integration
                  </span>
                  <span className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                    Team testing
                  </span>
                </div>
              </div>
            </div>

            {/* Week 4 */}
            <div className="relative flex gap-8">
              <div className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-2xl font-bold text-accent-foreground">
                  4
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground">
                  Week 4: Check the Odometer
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Measure results: hours saved, faster response times, improved
                  metrics. Deliver a plan for the next 90 days of your journey.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-accent px-3 py-1 text-sm text-accent-foreground">
                    Results measurement
                  </span>
                  <span className="rounded-full bg-accent px-3 py-1 text-sm text-accent-foreground">
                    ROI calculation
                  </span>
                  <span className="rounded-full bg-accent px-3 py-1 text-sm text-accent-foreground">
                    Scale roadmap
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WavyDivider />

      {/* Deliverables */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What you&apos;ll have at journey&apos;s end
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="rounded-2xl border-2 border-secondary">
              <CardHeader>
                <Settings className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>2-5 Deployed Workflows</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Working AI automations embedded in your actual tools, not a
                  demo environment.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-2 border-secondary">
              <CardHeader>
                <BarChart3 className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>ROI Baseline</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Clear metrics showing annualised savings and time reclaimed.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-2 border-secondary">
              <CardHeader>
                <Shield className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Guardrails & Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Audit logs, exception handling, and role-based access built
                  in.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-2 border-secondary">
              <CardHeader>
                <BookOpen className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Ownership Playbooks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Documentation and training so your team can drive confidently.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-2 border-secondary">
              <CardHeader>
                <Map className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Scale Roadmap</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A 90-day plan to expand AI across more of your business.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-2 border-secondary">
              <CardHeader>
                <Handshake className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Ongoing Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Post-sprint access to our team for questions and adjustments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <WavyDivider />

      {/* Why Sprint */}
      <section className="section-padding bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Image
                src="/images/sprint-finish.png"
                alt="AI Struggle Bus crossing finish line with celebration"
                width={600}
                height={400}
                className="mx-auto rounded-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Why the sprint works
              </h2>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-primary">✓</span>
                  <div>
                    <p className="font-semibold text-foreground">
                      Built for busy entrepreneurs
                    </p>
                    <p className="text-muted-foreground">
                      We do the heavy lifting while you focus on your business.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-primary">✓</span>
                  <div>
                    <p className="font-semibold text-foreground">
                      Quick wins that compound
                    </p>
                    <p className="text-muted-foreground">
                      See results fast, then build on that momentum.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-primary">✓</span>
                  <div>
                    <p className="font-semibold text-foreground">
                      No vendor lock-in
                    </p>
                    <p className="text-muted-foreground">
                      We work with your existing tools. No new portals required.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-primary">✓</span>
                  <div>
                    <p className="font-semibold text-foreground">
                      Measurable outcomes
                    </p>
                    <p className="text-muted-foreground">
                      Clear ROI metrics, not vague promises about AI potential.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <WavyDivider />

      {/* Form */}
      <section id="start-sprint" className="section-padding">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Ready to start your engine?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Fill out the form and we&apos;ll schedule a call to plan your
                30-day sprint.
              </p>
            </div>
            <div className="mt-12 rounded-2xl border-2 border-secondary bg-card p-8">
              <ContactForm source="sprint" submitLabel="Start My Sprint" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

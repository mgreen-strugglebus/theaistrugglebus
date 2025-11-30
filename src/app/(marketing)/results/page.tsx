"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WavyDivider } from "@/components/ui/section-divider";
import { PreloadVideo } from "@/components/ui/preload-video";

const caseStudies = [
  {
    id: "retailer",
    title: "The Retailer Who Got Their Weekends Back",
    situation:
      "A boutique retailer was spending 15+ hours weekly on social media posts, customer emails, and product descriptions. The owner hadn't taken a Saturday off in months.",
    workflows: [
      "Content Factory for product descriptions",
      "Customer Service Assistant",
      "Social Media Scheduler",
    ],
    results: [
      { metric: "12 hours", description: "saved per week" },
      { metric: "3x", description: "more products listed" },
      { metric: "45%", description: "faster customer response" },
    ],
    quote:
      "I finally took my kids to the park on Saturday. The bus kept running while I was pushing swings.",
  },
  {
    id: "consultant",
    title: "The Consultant Who Stopped Drowning in Admin",
    situation:
      "A solo consultant was losing billable hours to proposal writing, meeting notes, and client follow-ups. Revenue was capped by administrative overhead.",
    workflows: [
      "Meeting Summarisation",
      "Proposal Generator",
      "Client Follow-up Automation",
    ],
    results: [
      { metric: "8 hours", description: "reclaimed weekly" },
      { metric: "2x", description: "more client capacity" },
      { metric: "$4K", description: "monthly revenue increase" },
    ],
    quote:
      "I used to dread Mondays catching up on notes. Now my AI co-pilot has everything ready before I finish my coffee.",
  },
  {
    id: "ecommerce",
    title: "The E-commerce Brand That Scaled Support",
    situation:
      "An online store was struggling to handle growing customer inquiries. Support tickets were piling up, and response times were hurting reviews.",
    workflows: [
      "AI Support Assistant",
      "Ticket Categorisation",
      "Review Request Automation",
    ],
    results: [
      { metric: "70%", description: "tickets auto-resolved" },
      { metric: "< 2 min", description: "average response time" },
      { metric: "4.8★", description: "average review score (up from 4.2)" },
    ],
    quote:
      "Our customers think we hired a night shift. We just let the bus handle the midnight questions.",
  },
  {
    id: "agency",
    title: "The Agency That Doubled Output",
    situation:
      "A small marketing agency couldn't take on new clients because content production was bottlenecked. Every new project meant longer hours.",
    workflows: [
      "Campaign Brief Generator",
      "Content Drafting Pipeline",
      "Client Reporting Automation",
    ],
    results: [
      { metric: "99%", description: "faster first drafts" },
      { metric: "5 → 10", description: "active clients" },
      { metric: "Zero", description: "additional hires needed" },
    ],
    quote:
      "We doubled our client roster without doubling our team. That's not magic—that's the right workflows.",
  },
];

export default function ResultsPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Postcards from the road.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Real stories from real businesses who hopped on the bus. These are
              the miles they&apos;ve travelled and the destinations they&apos;ve
              reached.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-2xl">
            <Image
              src="/images/results-postcards.png"
              alt="Collection of postcards showing business success stories"
              width={800}
              height={450}
              className="mx-auto rounded-2xl"
            />
          </div>
        </div>
      </section>

      <WavyDivider />

      {/* Case Studies */}
      {caseStudies.map((study, index) => (
        <div key={study.id}>
          <section
            className={`section-padding ${index % 2 === 1 ? "bg-card" : ""}`}
          >
            <div className="container mx-auto px-4">
              <div className="grid items-start gap-12 lg:grid-cols-2">
                <div className={index % 2 === 1 ? "order-2 lg:order-1" : ""}>
                  <PreloadVideo
                    src={`/videos/case-${study.id}.mp4`}
                    poster={`/images/case-study-${study.id}.png`}
                    alt={`Illustration for ${study.title}`}
                    width={600}
                    height={338}
                    className="mx-auto max-w-full"
                    bgColor="#FFFFFF"
                  />
                </div>
                <div className={index % 2 === 1 ? "order-1 lg:order-2" : ""}>
                  <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    {study.title}
                  </h2>

                  <div className="mt-6">
                    <h3 className="font-semibold text-primary">The Situation</h3>
                    <p className="mt-2 text-muted-foreground">
                      {study.situation}
                    </p>
                  </div>

                  <div className="mt-6">
                    <h3 className="font-semibold text-primary">
                      Workflows Deployed
                    </h3>
                    <ul className="mt-2 space-y-1">
                      {study.workflows.map((workflow) => (
                        <li
                          key={workflow}
                          className="flex items-center gap-2 text-muted-foreground"
                        >
                          <span className="text-accent">→</span>
                          {workflow}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-4">
                    {study.results.map((result) => (
                      <div
                        key={result.description}
                        className="rounded-xl bg-primary/5 p-4 text-center"
                      >
                        <div className="text-2xl font-bold text-primary">
                          {result.metric}
                        </div>
                        <div className="mt-1 text-xs text-muted-foreground">
                          {result.description}
                        </div>
                      </div>
                    ))}
                  </div>

                  <blockquote className="mt-6 border-l-4 border-accent pl-4 italic text-muted-foreground">
                    &ldquo;{study.quote}&rdquo;
                  </blockquote>
                </div>
              </div>
            </div>
          </section>
          {index < caseStudies.length - 1 && <WavyDivider />}
        </div>
      ))}

      <WavyDivider />

      {/* Stats Summary */}
      <section className="section-padding bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              The numbers from our journey
            </h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="rounded-2xl border-0 bg-card text-center">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-primary">
                  50+
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Businesses on the road with us
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl border-0 bg-card text-center">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-primary">
                  10,000+
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Hours saved annually</p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl border-0 bg-card text-center">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-primary">
                  $2.5M+
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Value identified for clients
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl border-0 bg-card text-center">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-primary">
                  30 days
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Average time to ROI</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <WavyDivider />

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Your story could be next.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Let&apos;s talk about what&apos;s possible for your business.
              Every journey starts with a single conversation.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/book">Start Your Journey</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/assessment">Get an Assessment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

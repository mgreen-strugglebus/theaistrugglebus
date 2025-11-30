"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WavyDivider } from "@/components/ui/section-divider";
import { PreloadVideo } from "@/components/ui/preload-video";
import { solutionCategories } from "@/lib/constants";
import { Rocket, Zap, DollarSign, BarChart3, Map } from "lucide-react";

export default function HomePage() {

  return (
    <>
      {/* Hero Section - The Arrival */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            {/* Bus Illustration - preloaded video */}
            <PreloadVideo
              src="/videos/hero-bus-animated.mp4?v=2"
              poster="/images/hero-bus-front.png"
              alt="The AI Struggle Bus - Ready for your AI journey"
              width={400}
              height={225}
              className="mx-auto mb-8 max-w-[400px]"
              priority
              bgColor="#FFFFFF"
            />

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Kickstart Your Next Adventure.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Leave the paperwork in the rearview mirror. We guide businesses
              from chaos to open roads with AI workflows that actually work.
              Over 50% of small businesses are exploring AI. Let us show you the
              way.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/assessment">Start The Engine</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/sprint">Take The Scenic Route</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <WavyDivider />

      {/* The Pain Section - Escaping Chaos */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Stuck in traffic? We&apos;ve been there.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Copying and pasting content. Chasing invoices. Answering the
                same questions for the hundredth time. Manually updating product
                pages while your competitors zoom past.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                Only about one in four small businesses have fully integrated
                AI. The rest are stuck in neutral, needing clear ROI and
                easy-to-use tools to get moving.
              </p>
              <div className="mt-8">
                <Button variant="outline" asChild>
                  <Link href="/resources/quiz">Are You Road-Ready?</Link>
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <PreloadVideo
                src="/videos/chaos-to-clarity.mp4"
                poster="/images/chaos-papers.png"
                alt="The AI Struggle Bus leaving behind chaos"
                width={600}
                height={338}
                className="mx-auto max-w-[95%]"
                bgColor="#FFFFFF"
              />
            </div>
          </div>
        </div>
      </section>

      <WavyDivider />

      {/* What We Do Section - The Open Road */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <PreloadVideo
                src="/videos/workflow-demo.mp4"
                poster="/images/open-road.png"
                alt="The AI Struggle Bus on the open road - clear path ahead"
                width={550}
                height={450}
                className="mx-auto max-w-[550px]"
                bgColor="#FFFFFF"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Clear roads ahead.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                The AI Struggle Bus automates the internal workflows that choke
                your speed-to-revenue. Our agents run quietly inside your
                website, CRM, accounting software, and communication
                channels: listening, extracting, structuring, routing, and
                publishing work automatically.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                We don&apos;t sell you another portal. We deliver embedded
                workflows and measurable outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WavyDivider />

      {/* Outcomes Section - Milestones */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Milestones in the first 30 days
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="rounded-2xl border-2 border-secondary bg-card transition-all hover:-translate-y-1 hover:shadow-lg">
              <CardHeader>
                <Rocket className="mb-2 h-8 w-8 text-primary" />
                <CardTitle className="text-primary">Faster launches</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  New product pages or campaign assets generated and approved in
                  days instead of weeks.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl border-2 border-secondary bg-card transition-all hover:-translate-y-1 hover:shadow-lg">
              <CardHeader>
                <Zap className="mb-2 h-8 w-8 text-primary" />
                <CardTitle className="text-primary">4x productivity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Owners spend more time on strategy and less on admin tasks.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl border-2 border-secondary bg-card transition-all hover:-translate-y-1 hover:shadow-lg">
              <CardHeader>
                <DollarSign className="mb-2 h-8 w-8 text-primary" />
                <CardTitle className="text-primary">Pennies to run</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  AI workflows that cost pennies to operate yet free up hours of
                  valuable time.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl border-2 border-secondary bg-card transition-all hover:-translate-y-1 hover:shadow-lg">
              <CardHeader>
                <BarChart3 className="mb-2 h-8 w-8 text-primary" />
                <CardTitle className="text-primary">$50K+ identified</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our assessment surfaces at least $50K+ in annualised savings
                  through automation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <WavyDivider />

      {/* Solutions Overview Section - The Crossroads */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-8 max-w-lg">
              <PreloadVideo
                src="/videos/crossroads-choice.mp4"
                poster="/images/crossroads.png"
                alt="The AI Struggle Bus at a crossroads with direction signs"
                width={600}
                height={300}
                className="mx-auto max-w-[600px]"
                bgColor="#FFFFFF"
              />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Which way next?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Over 77% of small businesses worldwide use AI in at least one
              function. Here&apos;s where we can guide you.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutionCategories.map((solution) => (
              <Card
                key={solution.slug}
                className="rounded-2xl border-2 border-secondary bg-background transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <CardHeader>
                  <CardTitle>{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{solution.description}</p>
                  <Link
                    href={`/solutions#${solution.slug}`}
                    className="mt-4 inline-block text-sm font-medium text-primary hover:underline"
                  >
                    Explore this route &rarr;
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <WavyDivider />

      {/* Why Us Section */}
      <section className="section-padding overflow-hidden bg-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Your experienced co-pilot
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We&apos;ve deployed AI across dozens of organisations and
              understand the unique challenges of small and medium-sized
              businesses. Unlike generic vendors, we integrate AI into your
              existing systems and show ROI in weeks, not months.
            </p>
            <div className="mx-auto mt-8 max-w-lg">
              <PreloadVideo
                src="/videos/co-pilot-convoy.mp4"
                poster="/images/co-pilot.png"
                alt="The AI Struggle Bus - Your AI journey co-pilot"
                width={500}
                height={250}
                className="mx-auto max-w-[500px]"
                bgColor="#FFFFFF"
              />
            </div>
          </div>
        </div>
      </section>

      <WavyDivider />

      {/* Engagement Model Preview - The Journey Map */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                The 30-Day Road Trip
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                No detours. No dead ends. Just a clear path to AI that works.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative mt-16">
              {/* Road line connecting the stops */}
              <div className="absolute left-0 right-0 top-10 hidden h-1 bg-gradient-to-r from-secondary via-primary to-accent md:block" />

              <div className="grid gap-8 md:grid-cols-3">
                {/* Week 1 */}
                <div className="group relative">
                  <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full border-4 border-primary bg-white shadow-lg transition-transform group-hover:scale-110">
                    <div className="text-center">
                      <span className="block text-2xl font-bold text-primary">1</span>
                    </div>
                  </div>
                  <div className="mt-6 rounded-2xl border-2 border-secondary bg-white p-6 text-center shadow-md transition-all group-hover:-translate-y-1 group-hover:shadow-lg">
                    <Map className="mx-auto mb-2 h-8 w-8 text-primary" />
                    <h3 className="text-xl font-bold text-foreground">Week 1</h3>
                    <p className="mt-1 text-sm font-medium text-primary">Map the Route</p>
                    <p className="mt-3 text-muted-foreground">
                      Assess your current state and identify the highest-impact opportunities
                    </p>
                  </div>
                </div>

                {/* Week 2-3 */}
                <div className="group relative">
                  <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full border-4 border-primary bg-white shadow-lg transition-transform group-hover:scale-110">
                    <div className="text-center">
                      <span className="block text-2xl font-bold text-primary">2</span>
                    </div>
                  </div>
                  <div className="mt-6 rounded-2xl border-2 border-secondary bg-white p-6 text-center shadow-md transition-all group-hover:-translate-y-1 group-hover:shadow-lg">
                    <Rocket className="mx-auto mb-2 h-8 w-8 text-primary" />
                    <h3 className="text-xl font-bold text-foreground">Week 2-3</h3>
                    <p className="mt-1 text-sm font-medium text-primary">Hit the Road</p>
                    <p className="mt-3 text-muted-foreground">
                      Build and deploy high-ROI AI workflows into your existing systems
                    </p>
                  </div>
                </div>

                {/* Week 4 */}
                <div className="group relative">
                  <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full border-4 border-primary bg-white shadow-lg transition-transform group-hover:scale-110">
                    <div className="text-center">
                      <span className="block text-2xl font-bold text-primary">3</span>
                    </div>
                  </div>
                  <div className="mt-6 rounded-2xl border-2 border-secondary bg-white p-6 text-center shadow-md transition-all group-hover:-translate-y-1 group-hover:shadow-lg">
                    <BarChart3 className="mx-auto mb-2 h-8 w-8 text-primary" />
                    <h3 className="text-xl font-bold text-foreground">Week 4</h3>
                    <p className="mt-1 text-sm font-medium text-primary">Check the Odometer</p>
                    <p className="mt-3 text-muted-foreground">
                      Measure results, celebrate wins, and plan your next destination
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <Button size="lg" asChild>
                <Link href="/sprint">Plan Your Trip</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <WavyDivider />

      {/* Final CTA - Sunset */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            {/* Sunset journey video/illustration */}
            <PreloadVideo
              src="/videos/sunset-journey.mp4"
              poster="/images/sunset-road.png"
              alt="The AI Struggle Bus driving into the sunset"
              width={400}
              height={225}
              className="mx-auto mb-8 max-w-[400px]"
              bgColor="#FFFFFF"
            />
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to hit the road?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Take the next step: book an assessment or start a sprint. Not
              sure? Take our AI Readiness Quiz to see where you stand.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/book">Book a Call</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/resources/quiz">Take the Quiz</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

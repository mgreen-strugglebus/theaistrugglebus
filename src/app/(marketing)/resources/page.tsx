import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WavyDivider } from "@/components/ui/section-divider";
import { Ban, Flag, Video, Mail, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Free tools and guides to help you on your AI journey. Take the quiz, download guides, and learn from our experience.",
};

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Fuel for the road.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Free tools and guides to help you navigate your AI journey. No
              email required for most. Just helpful content from fellow travelers.
            </p>
          </div>
        </div>
      </section>

      <WavyDivider />

      {/* AI Readiness Quiz */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-block rounded-full bg-accent px-4 py-1 text-sm font-medium text-accent-foreground">
                Featured
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                AI Readiness Quiz
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Not sure where to start with AI? Take our 3-minute quiz to
                discover whether your biggest opportunities are in marketing,
                customer service, operations, or product development.
              </p>
              <p className="mt-4 text-muted-foreground">
                Based on your answers, we&apos;ll place you in one of three
                categories (Early Stage, Workflow Friction, or ROI Ready) and
                give you personalised next steps.
              </p>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="/resources/quiz">Take the Quiz</Link>
                </Button>
              </div>
            </div>
            <div>
              <Image
                src="/images/resource-quiz.png"
                alt="AI Struggle Bus with checklist and compass"
                width={500}
                height={500}
                className="mx-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <WavyDivider />

      {/* Guides */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Roadside guides
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Lessons learned from the journey so far.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <Card className="rounded-2xl border-2 border-secondary">
              <CardHeader>
                <Ban className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Top 10 AI Mistakes Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Common errors small businesses make when adopting AI, and how
                  to avoid them. Learn why starting with tools instead of
                  workflows is a recipe for wasted money, and what to do
                  instead.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>• Starting with tools instead of workflows</li>
                  <li>• Treating chatbots as a complete strategy</li>
                  <li>• Ignoring compliance and security</li>
                  <li>• Scaling before proving value</li>
                  <li>• And 6 more critical mistakes...</li>
                </ul>
                <div className="mt-6">
                  <Button variant="outline" asChild>
                    <Link href="/resources/ai-mistakes">Read the Guide</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-2 border-secondary">
              <CardHeader>
                <Flag className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Top 10 Red Flags for AI Vendors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A sharper checklist for evaluating AI vendors. Know what to
                  look for, and what to run from, when someone promises to
                  &ldquo;transform your business with AI.&rdquo;
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>• They lead with demos, not outcomes</li>
                  <li>• They can&apos;t tie features to KPIs</li>
                  <li>• They require a new portal</li>
                  <li>• They ignore compliance questions</li>
                  <li>• And 6 more warning signs...</li>
                </ul>
                <div className="mt-6">
                  <Button variant="outline" asChild>
                    <Link href="/resources/vendor-red-flags">
                      Read the Guide
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <WavyDivider />

      {/* Coming Soon */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              More on the horizon
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We&apos;re always working on new resources. Here&apos;s what&apos;s
              coming down the road.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border-2 border-dashed border-secondary bg-background p-6 text-center">
              <Video className="mx-auto mb-4 h-8 w-8 text-muted-foreground opacity-50" />
              <h3 className="font-semibold text-foreground">
                Video Walkthroughs
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                See real AI workflows in action with step-by-step video guides.
              </p>
              <p className="mt-4 text-xs font-medium text-primary">
                Coming Soon
              </p>
            </div>

            <div className="rounded-2xl border-2 border-dashed border-secondary bg-background p-6 text-center">
              <Mail className="mx-auto mb-4 h-8 w-8 text-muted-foreground opacity-50" />
              <h3 className="font-semibold text-foreground">
                Email Templates
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Ready-to-use prompts for common AI workflows in your business.
              </p>
              <p className="mt-4 text-xs font-medium text-primary">
                Coming Soon
              </p>
            </div>

            <div className="rounded-2xl border-2 border-dashed border-secondary bg-background p-6 text-center">
              <BarChart3 className="mx-auto mb-4 h-8 w-8 text-muted-foreground opacity-50" />
              <h3 className="font-semibold text-foreground">ROI Calculator</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Estimate your potential savings from AI automation.
              </p>
              <p className="mt-4 text-xs font-medium text-primary">
                Coming Soon
              </p>
            </div>
          </div>
        </div>
      </section>

      <WavyDivider />

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Turn insight into a roadmap.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Ready to go beyond resources? Book an AI assessment to identify
              your top workflows and savings opportunities.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="/assessment">Get an Assessment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

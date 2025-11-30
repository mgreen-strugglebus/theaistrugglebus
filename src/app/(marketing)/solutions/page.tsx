import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { WavyDivider } from "@/components/ui/section-divider";
import { ImagePlaceholder } from "@/components/sections/image-placeholder";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Explore AI workflow solutions for marketing, customer service, operations, knowledge management, product development, and AI rescue services.",
};

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Every route leads somewhere good.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              AI workflows tailored to your business function. Each solution is
              designed to embed directly into your existing tools and deliver
              measurable results.
            </p>
          </div>
        </div>
      </section>

      <WavyDivider />

      {/* Marketing & Sales */}
      <section id="marketing-sales" className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                Marketing & Sales
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Content that drives, not drags.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                AI generates on-brand content, product descriptions, and
                campaign assets, then routes them through approval and publishes
                when ready. Over 77% of small businesses use AI in marketing.
                Join them.
              </p>

              <div className="mt-8">
                <h3 className="font-semibold text-foreground">
                  What We Automate
                </h3>
                <ul className="mt-4 space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary">✓</span>
                    Product detail pages with AI-drafted descriptions, images,
                    and specifications
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">✓</span>
                    Campaign kits with email sequences, social posts, and
                    landing pages
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">✓</span>
                    Customer segmentation from purchase history and engagement
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-foreground">
                  Outputs & Benefits
                </h3>
                <ul className="mt-4 space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-accent">→</span>
                    Faster go-to-market (weeks → days)
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent">→</span>
                    More on-brand content with fewer revisions
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent">→</span>
                    Increased conversion and campaign response rates
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <Image
                src="/images/solution-marketing.png"
                alt="AI Struggle Bus with megaphone broadcasting content"
                width={500}
                height={500}
                className="mx-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <WavyDivider />

      {/* Customer Service */}
      <section id="customer-service" className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <Image
                src="/images/solution-customer-service.png"
                alt="AI Struggle Bus as a customer service station with headset"
                width={500}
                height={500}
                className="mx-auto rounded-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                Customer Service
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Always there, never tired.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                AI assistants handle routine inquiries and scheduling while you
                focus on what matters. 84% of small businesses are willing to
                automate customer service. We make it happen.
              </p>

              <div className="mt-8">
                <h3 className="font-semibold text-foreground">
                  What We Automate
                </h3>
                <ul className="mt-4 space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary">✓</span>
                    AI assistants for common questions on website and social
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">✓</span>
                    Complaint summarisation, clustering, and fix recommendations
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">✓</span>
                    Automated feedback follow-up and review requests
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-foreground">
                  Outputs & Benefits
                </h3>
                <ul className="mt-4 space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-accent">→</span>
                    24/7 responsiveness without extra staff
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent">→</span>
                    Better customer satisfaction and faster resolution
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent">→</span>
                    Actionable insights for product improvements
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WavyDivider />

      {/* Operations & Finance */}
      <section id="operations-finance" className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                Operations & Finance
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Numbers that make sense.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Agents download and reconcile reports, forecast cash flow, and
                summarise key metrics. 53% of small businesses cite cash-flow
                forecasting as a critical pain point. We solve it.
              </p>

              <div className="mt-8">
                <h3 className="font-semibold text-foreground">
                  What We Automate
                </h3>
                <ul className="mt-4 space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary">✓</span>
                    Sales, inventory, and logistics report reconciliation
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">✓</span>
                    Cash-flow forecasting and simple budgeting
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">✓</span>
                    Invoice processing and payment reminders
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-foreground">
                  Outputs & Benefits
                </h3>
                <ul className="mt-4 space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-accent">→</span>
                    Timely insights without spreadsheet headaches
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent">→</span>
                    Fewer manual errors in financial data
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent">→</span>
                    Better cash management and inventory planning
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <Image
                src="/images/solution-operations.png"
                alt="AI Struggle Bus with charts and dashboards - operations automation"
                width={500}
                height={500}
                className="mx-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <WavyDivider />

      {/* Knowledge Support */}
      <section id="knowledge-support" className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <Image
                src="/images/solution-knowledge.png"
                alt="AI Struggle Bus as a mobile library with books and documents"
                width={500}
                height={500}
                className="mx-auto rounded-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                Knowledge Support
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Your team&apos;s memory, upgraded.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Build an internal knowledge base from documents, emails, and
                chats. Never reinvent the wheel or hunt for &ldquo;how we did
                this last time&rdquo; again.
              </p>

              <div className="mt-8">
                <h3 className="font-semibold text-foreground">
                  What We Automate
                </h3>
                <ul className="mt-4 space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary">✓</span>
                    Continuous ingestion of documents, emails, and chats
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">✓</span>
                    Meeting summarisation and action item extraction
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">✓</span>
                    Competitive and market intelligence monitoring
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-foreground">
                  Outputs & Benefits
                </h3>
                <ul className="mt-4 space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-accent">→</span>
                    Instant access to tribal knowledge via Slack or Teams
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent">→</span>
                    Faster onboarding for new hires
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent">→</span>
                    Data-driven decisions across your business
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WavyDivider />

      {/* Product Development */}
      <section id="product-development" className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                Product Development
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Ideas to launch, faster.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Turn ideas into PRDs, user stories, and prototypes quickly.
                Perfect for tech-focused SMBs who need to move fast without a
                huge team.
              </p>

              <div className="mt-8">
                <h3 className="font-semibold text-foreground">
                  What We Automate
                </h3>
                <ul className="mt-4 space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary">✓</span>
                    Draft PRDs, user stories, and test plans
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">✓</span>
                    Rapid prototyping of micro-apps for validation
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">✓</span>
                    Bug report and feature request aggregation
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-foreground">
                  Outputs & Benefits
                </h3>
                <ul className="mt-4 space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-accent">→</span>
                    Shortened development cycles
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent">→</span>
                    Better alignment between tech and business
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent">→</span>
                    Lower engineering overhead for early-stage teams
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <Image
                src="/images/solution-product.png"
                alt="AI Struggle Bus with rocket boosters and blueprints"
                width={500}
                height={500}
                className="mx-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <WavyDivider />

      {/* Roadside Rescue */}
      <section id="rescue" className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <Image
                src="/images/solution-rescue.png"
                alt="AI Struggle Bus as a tow truck helping another vehicle"
                width={500}
                height={500}
                className="mx-auto rounded-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                Roadside Rescue
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Stuck on the side of the road? We&apos;ll get you moving.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                AI initiatives stall. Teams get stuck. Investments sit unused.
                We&apos;ve seen it all, and we know how to get you back on the
                road. Whether you need to rescue a failed deployment or upskill
                your team, we&apos;re here to help.
              </p>

              <div className="mt-8">
                <h3 className="font-semibold text-foreground">
                  What We Do
                </h3>
                <ul className="mt-4 space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary">✓</span>
                    AI rescue for failed or underperforming deployments
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">✓</span>
                    LLM training and workshops for teams
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">✓</span>
                    Solution architecture consulting before you build
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">✓</span>
                    Vendor evaluation and AI strategy guidance
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-foreground">
                  Outputs & Benefits
                </h3>
                <ul className="mt-4 space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-accent">→</span>
                    Recovered AI investments that were gathering dust
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent">→</span>
                    Teams confident and productive with AI tools
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent">→</span>
                    Clear integration roadmap before you spend a dollar
                  </li>
                </ul>
              </div>
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
              Ready to choose your route?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Book an assessment to tailor these workflows to your specific
              stack and business needs.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/book">Talk to a Guide</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/assessment">Learn About Assessments</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

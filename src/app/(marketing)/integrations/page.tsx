"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { WavyDivider } from "@/components/ui/section-divider";
import { PreloadVideo } from "@/components/ui/preload-video";

const integrations = {
  ecommerce: [
    { name: "Shopify", description: "Product management, orders, inventory" },
    { name: "WooCommerce", description: "WordPress e-commerce" },
    { name: "BigCommerce", description: "Enterprise e-commerce" },
    { name: "Squarespace", description: "Website and commerce" },
  ],
  crm: [
    { name: "HubSpot", description: "Marketing, sales, service" },
    { name: "Salesforce", description: "Enterprise CRM" },
    { name: "Pipedrive", description: "Sales pipeline" },
    { name: "Zoho CRM", description: "Small business CRM" },
  ],
  accounting: [
    { name: "QuickBooks", description: "Accounting and invoicing" },
    { name: "Xero", description: "Cloud accounting" },
    { name: "FreshBooks", description: "Small business accounting" },
    { name: "Wave", description: "Free accounting" },
  ],
  marketing: [
    { name: "Mailchimp", description: "Email marketing" },
    { name: "Klaviyo", description: "E-commerce email" },
    { name: "Constant Contact", description: "Email campaigns" },
    { name: "ActiveCampaign", description: "Marketing automation" },
  ],
  communication: [
    { name: "Slack", description: "Team messaging" },
    { name: "Microsoft Teams", description: "Enterprise communication" },
    { name: "Discord", description: "Community communication" },
    { name: "Intercom", description: "Customer messaging" },
  ],
  productivity: [
    { name: "Google Workspace", description: "Docs, Sheets, Drive" },
    { name: "Microsoft 365", description: "Office apps" },
    { name: "Notion", description: "Workspace and docs" },
    { name: "Airtable", description: "Database and apps" },
  ],
};

export default function IntegrationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                We work with your wheels.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                No new platforms to learn. No data migration headaches. Our AI
                agents plug directly into the tools you already use. 60% of U.S.
                small businesses already use AI. We make it work with your
                existing stack.
              </p>
            </div>
            <div>
              <PreloadVideo
                src="/videos/integrations-pulse.mp4"
                poster="/images/integrations-connected.png"
                alt="AI Struggle Bus as an integration hub connected to various tools"
                width={500}
                height={500}
                className="mx-auto max-w-[500px]"
                bgColor="#FFFFFF"
              />
            </div>
          </div>
        </div>
      </section>

      <WavyDivider />

      {/* Integration Categories */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Tools we connect with
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              These are some of the platforms we commonly integrate. Don&apos;t
              see yours? Ask us. We can likely connect it.
            </p>
          </div>

          <div className="mt-16 space-y-12">
            {/* E-commerce */}
            <div>
              <h3 className="mb-6 text-xl font-bold text-foreground">
                E-commerce
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {integrations.ecommerce.map((tool) => (
                  <div
                    key={tool.name}
                    className="rounded-xl border-2 border-secondary bg-background p-4"
                  >
                    <p className="font-semibold text-foreground">{tool.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {tool.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CRM */}
            <div>
              <h3 className="mb-6 text-xl font-bold text-foreground">CRM</h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {integrations.crm.map((tool) => (
                  <div
                    key={tool.name}
                    className="rounded-xl border-2 border-secondary bg-background p-4"
                  >
                    <p className="font-semibold text-foreground">{tool.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {tool.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Accounting */}
            <div>
              <h3 className="mb-6 text-xl font-bold text-foreground">
                Accounting
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {integrations.accounting.map((tool) => (
                  <div
                    key={tool.name}
                    className="rounded-xl border-2 border-secondary bg-background p-4"
                  >
                    <p className="font-semibold text-foreground">{tool.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {tool.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Marketing */}
            <div>
              <h3 className="mb-6 text-xl font-bold text-foreground">
                Marketing
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {integrations.marketing.map((tool) => (
                  <div
                    key={tool.name}
                    className="rounded-xl border-2 border-secondary bg-background p-4"
                  >
                    <p className="font-semibold text-foreground">{tool.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {tool.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Communication */}
            <div>
              <h3 className="mb-6 text-xl font-bold text-foreground">
                Communication
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {integrations.communication.map((tool) => (
                  <div
                    key={tool.name}
                    className="rounded-xl border-2 border-secondary bg-background p-4"
                  >
                    <p className="font-semibold text-foreground">{tool.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {tool.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Productivity */}
            <div>
              <h3 className="mb-6 text-xl font-bold text-foreground">
                Productivity
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {integrations.productivity.map((tool) => (
                  <div
                    key={tool.name}
                    className="rounded-xl border-2 border-secondary bg-background p-4"
                  >
                    <p className="font-semibold text-foreground">{tool.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {tool.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <WavyDivider />

      {/* How it works */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <Image
                src="/images/integrations-flow.png"
                alt="Data flowing between tools through the AI Struggle Bus"
                width={600}
                height={400}
                className="mx-auto rounded-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                How integration works
              </h2>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    1
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">
                      Map your current stack
                    </p>
                    <p className="text-muted-foreground">
                      We identify which tools you use and how data flows between
                      them.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    2
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">
                      Connect via APIs
                    </p>
                    <p className="text-muted-foreground">
                      We use official APIs and secure authentication. Your
                      credentials stay with you.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    3
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">
                      Deploy AI agents
                    </p>
                    <p className="text-muted-foreground">
                      Agents work within your tools, reading and writing data as
                      needed.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    4
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">
                      Monitor and maintain
                    </p>
                    <p className="text-muted-foreground">
                      We ensure connections stay healthy and handle any API
                      changes.
                    </p>
                  </div>
                </li>
              </ul>
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
              Don&apos;t see your tool?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We integrate with dozens more platforms. Let&apos;s talk about
              your specific setup and what&apos;s possible.
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

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WavyDivider } from "@/components/ui/section-divider";

export const metadata: Metadata = {
  title: "Governance & Safety",
  description:
    "How we ensure AI safety, compliance, and data privacy. Built-in guardrails for responsible AI adoption.",
};

export default function GovernancePage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Safe roads, responsible driving.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                We know 38% of small businesses worry about data privacy and
                security when it comes to AI. That&apos;s why every workflow we
                build includes guardrails for compliance, access control, and
                transparency.
              </p>
            </div>
            <div>
              <Image
                src="/images/governance-shield.png"
                alt="AI Struggle Bus with protective shield"
                width={500}
                height={500}
                className="mx-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <WavyDivider />

      {/* Principles */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our safety principles
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <Card className="rounded-2xl border-2 border-secondary">
              <CardHeader>
                <div className="mb-2 text-3xl">🔒</div>
                <CardTitle>Least-Privilege Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  AI agents only access the data they need to do their job.
                  Nothing more. We map data flows before deployment and enforce
                  strict boundaries.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-2 border-secondary">
              <CardHeader>
                <div className="mb-2 text-3xl">📋</div>
                <CardTitle>Audit Trails</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every action taken by an AI agent is logged. You can see what
                  happened, when, and why. Full transparency for compliance and
                  peace of mind.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-2 border-secondary">
              <CardHeader>
                <div className="mb-2 text-3xl">🛡️</div>
                <CardTitle>Human Oversight</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Critical decisions stay with humans. AI handles the routine;
                  you handle the exceptions. Clear escalation paths for
                  edge cases.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <WavyDivider />

      {/* Data Privacy */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <Image
                src="/images/governance-data.png"
                alt="Secure data vault with data flowing safely"
                width={600}
                height={400}
                className="mx-auto rounded-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Your data stays yours
              </h2>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-primary">✓</span>
                  <div>
                    <p className="font-semibold text-foreground">
                      No training on your data
                    </p>
                    <p className="text-muted-foreground">
                      We use AI providers that don&apos;t train models on
                      customer data. Your information isn&apos;t feeding
                      someone else&apos;s AI.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-primary">✓</span>
                  <div>
                    <p className="font-semibold text-foreground">
                      Data minimization
                    </p>
                    <p className="text-muted-foreground">
                      We only process what&apos;s necessary. Sensitive fields
                      can be excluded or anonymized.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-primary">✓</span>
                  <div>
                    <p className="font-semibold text-foreground">
                      Clear retention policies
                    </p>
                    <p className="text-muted-foreground">
                      We define how long data is kept and when it&apos;s
                      deleted. No surprises, no ambiguity.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-primary">✓</span>
                  <div>
                    <p className="font-semibold text-foreground">
                      Your infrastructure
                    </p>
                    <p className="text-muted-foreground">
                      Where possible, we deploy within your existing cloud
                      environment. Data never has to leave your control.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <WavyDivider />

      {/* Compliance */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Compliance ready
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We design workflows with regulatory requirements in mind.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border-2 border-secondary bg-background p-6 text-center">
              <h3 className="font-semibold text-foreground">GDPR</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                EU data protection compliance built in
              </p>
            </div>
            <div className="rounded-2xl border-2 border-secondary bg-background p-6 text-center">
              <h3 className="font-semibold text-foreground">CCPA</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                California consumer privacy support
              </p>
            </div>
            <div className="rounded-2xl border-2 border-secondary bg-background p-6 text-center">
              <h3 className="font-semibold text-foreground">SOC 2</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Security controls and practices
              </p>
            </div>
            <div className="rounded-2xl border-2 border-secondary bg-background p-6 text-center">
              <h3 className="font-semibold text-foreground">Industry-Specific</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                HIPAA, PCI, and sector requirements
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
              Questions about security?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We&apos;re happy to walk through our security practices in
              detail. Let&apos;s have a conversation.
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

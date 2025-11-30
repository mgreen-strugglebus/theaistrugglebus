import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { WavyDivider } from "@/components/ui/section-divider";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about The AI Struggle Bus, our services, and how we help small businesses adopt AI.",
};

const faqs = [
  {
    question: "Do we need to buy a new platform or software?",
    answer:
      "Nope. Our AI agents embed directly into the tools you already use: your CRM, website, accounting software, Slack, and more. We believe in working with your existing stack, not replacing it. No new portals to log into, no learning curves to climb.",
  },
  {
    question: "How quickly will we see results?",
    answer:
      "Within 30 days. Our sprint model is designed for busy entrepreneurs who need to see value fast. By the end of week 4, you'll have working AI workflows and measured ROI, not a roadmap for 'someday.'",
  },
  {
    question: "What kind of data do you need access to?",
    answer:
      "Only the data your workflows already touch: sales reports, customer emails, marketing assets, product info. We follow least-privilege access principles and never ask for more than what's necessary. Your data stays yours.",
  },
  {
    question: "How is security and privacy handled?",
    answer:
      "Seriously. We build guardrails into every workflow including role-based access, audit trails, and market-specific compliance policies. We know 38% of small businesses worry about data privacy with AI. We address those concerns head-on.",
  },
  {
    question: "How much does it cost?",
    answer:
      "It depends on scope, but we always emphasize ROI. Our assessment typically identifies $50K+ in annualized savings. The cost of our services is a fraction of the value we help you capture. We're happy to discuss specifics on a call.",
  },
  {
    question: "What if we already have a chatbot?",
    answer:
      "Great! We'll help you turn it from a FAQ machine into a productivity engine. Most chatbots barely scratch the surface of what's possible. We show you how to embed AI that actually does work, not just answers questions.",
  },
  {
    question: "Do you work with businesses outside the US?",
    answer:
      "Yes! We work with SMBs globally. Our remote-first approach means timezone is never a barrier. We adapt our engagement model to work with your schedule.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We're generalists by design. AI workflows for marketing, customer service, operations, and product development apply across industries. We've worked with retailers, consultants, agencies, SaaS companies, and more. The common thread is SMBs who want practical results.",
  },
  {
    question: "What if we're not ready for AI yet?",
    answer:
      "That's what the assessment is for. We help you figure out if AI is right for you right now, and if not, what you'd need to get ready. There's no pressure to buy anything. Sometimes the best advice is 'wait and do this first.'",
  },
  {
    question: "How do you measure success?",
    answer:
      "In hours saved, faster turnaround times, increased capacity, and dollars. We establish baseline metrics before we start and measure again at the end. You'll always know exactly what value you're getting.",
  },
  {
    question: "What happens after the 30-day sprint?",
    answer:
      "You own the workflows we build. We provide documentation and training so your team can manage them independently. We also deliver a 90-day roadmap for scaling AI across more of your business. Optional ongoing support is available if you want it.",
  },
  {
    question: "Can we start with just one small project?",
    answer:
      "Absolutely. Many clients start with a single workflow to prove value before expanding. We'll help you pick the highest-ROI starting point. Small wins build confidence and momentum.",
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Questions from the road.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Common questions we hear from fellow travelers. If yours isn&apos;t
              here, just ask. We love a good conversation.
            </p>
          </div>
        </div>
      </section>

      <WavyDivider />

      {/* FAQs */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-2xl border-2 border-secondary bg-background p-6"
                >
                  <h2 className="text-lg font-semibold text-foreground">
                    {faq.question}
                  </h2>
                  <p className="mt-3 text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
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
              Still have questions?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Let&apos;s chat. No sales pitch, just answers.
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

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How The AI Struggle Bus collects, uses, and protects your data.",
};

export default function PrivacyPage() {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Privacy Policy
          </h1>
          <p className="mt-4 text-muted-foreground">
            Last updated: November 2024
          </p>

          <div className="mt-12 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground">
                The Short Version
              </h2>
              <p className="mt-4 text-muted-foreground">
                We collect only what we need to provide our services and
                communicate with you. We don&apos;t sell your data. We
                don&apos;t share it with third parties except as necessary to
                deliver our services. We take security seriously.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">
                Information We Collect
              </h2>
              <div className="mt-4 space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">
                    Information you provide:
                  </strong>{" "}
                  When you fill out a form, take our quiz, or contact us, we
                  collect the information you submit—typically your name, email,
                  company name, and any message you include.
                </p>
                <p>
                  <strong className="text-foreground">
                    Automatically collected:
                  </strong>{" "}
                  Like most websites, we collect basic analytics data including
                  pages visited, time on site, and general location (country
                  level). We use Vercel Analytics, which is privacy-focused and
                  doesn&apos;t use cookies.
                </p>
                <p>
                  <strong className="text-foreground">Client data:</strong> When
                  you engage us for services, we may access data within your
                  business tools as needed to deliver AI workflows. This data is
                  governed by your client agreement and our data processing
                  terms.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">
                How We Use Your Information
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>To respond to your inquiries and provide our services</li>
                <li>To send you information you&apos;ve requested</li>
                <li>To improve our website and services</li>
                <li>
                  To send occasional updates about our services (you can
                  unsubscribe anytime)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">
                Data Storage and Security
              </h2>
              <div className="mt-4 space-y-4 text-muted-foreground">
                <p>
                  Your data is stored securely using industry-standard
                  encryption and security practices. We use reputable service
                  providers (Vercel, Resend) who maintain their own security
                  certifications.
                </p>
                <p>
                  For client engagements, we follow the data handling practices
                  outlined in your agreement, including data minimization,
                  access controls, and retention policies.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">
                Third-Party Services
              </h2>
              <div className="mt-4 space-y-4 text-muted-foreground">
                <p>We use the following third-party services:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    <strong>Vercel:</strong> Website hosting and analytics
                  </li>
                  <li>
                    <strong>Resend:</strong> Email delivery
                  </li>
                  <li>
                    <strong>Contentful:</strong> Content management
                  </li>
                </ul>
                <p>
                  Each of these providers has their own privacy policy and
                  security practices. We choose providers who align with our
                  commitment to data protection.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">Your Rights</h2>
              <div className="mt-4 space-y-4 text-muted-foreground">
                <p>You have the right to:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Access the personal data we hold about you</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt out of marketing communications</li>
                  <li>Data portability where applicable</li>
                </ul>
                <p>
                  To exercise any of these rights, contact us at
                  privacy@theaistrugglebus.com.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">Cookies</h2>
              <p className="mt-4 text-muted-foreground">
                We use minimal cookies necessary for the website to function. We
                don&apos;t use tracking cookies or third-party advertising
                cookies. Vercel Analytics is cookie-free.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">
                Changes to This Policy
              </h2>
              <p className="mt-4 text-muted-foreground">
                We may update this policy from time to time. We&apos;ll post any
                changes on this page and update the &ldquo;last updated&rdquo;
                date. For significant changes, we&apos;ll notify you via email
                if we have your contact information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">Contact Us</h2>
              <p className="mt-4 text-muted-foreground">
                Questions about this privacy policy? Contact us at
                privacy@theaistrugglebus.com or through our website contact
                form.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

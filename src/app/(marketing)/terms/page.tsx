import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for using The AI Struggle Bus website and services.",
};

export default function TermsPage() {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Terms of Service
          </h1>
          <p className="mt-4 text-muted-foreground">
            Last updated: November 2024
          </p>

          <div className="mt-12 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground">
                Agreement to Terms
              </h2>
              <p className="mt-4 text-muted-foreground">
                By accessing or using The AI Struggle Bus website
                (theaistrugglebus.com), you agree to be bound by these Terms of
                Service. If you disagree with any part of these terms, you may
                not access the website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">
                Use of Our Website
              </h2>
              <div className="mt-4 space-y-4 text-muted-foreground">
                <p>You may use our website for lawful purposes only. You agree not to:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Use the website in any way that violates applicable laws</li>
                  <li>Attempt to gain unauthorized access to any part of the website</li>
                  <li>Interfere with the proper functioning of the website</li>
                  <li>Use automated systems to access the website without permission</li>
                  <li>Transmit harmful code or malware</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">
                Intellectual Property
              </h2>
              <p className="mt-4 text-muted-foreground">
                The content on this website (including text, graphics, logos, and
                illustrations) is owned by The AI Struggle Bus and is protected by
                intellectual property laws. You may not reproduce, distribute,
                or create derivative works from our content without written
                permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">
                Our Services
              </h2>
              <div className="mt-4 space-y-4 text-muted-foreground">
                <p>
                  This website provides information about our AI consulting
                  services. Actual service engagements are governed by separate
                  client agreements that include detailed terms, pricing, and
                  deliverables.
                </p>
                <p>
                  The information on this website is for general informational
                  purposes only and does not constitute professional advice. We
                  make no guarantees about the accuracy or completeness of the
                  information provided.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">
                User Submissions
              </h2>
              <p className="mt-4 text-muted-foreground">
                When you submit information through our forms (contact requests,
                quiz responses, etc.), you grant us permission to use that
                information to provide our services and communicate with you. We
                handle your information according to our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">
                Third-Party Links
              </h2>
              <p className="mt-4 text-muted-foreground">
                Our website may contain links to third-party websites. We are
                not responsible for the content, privacy practices, or terms of
                those websites. Visiting linked sites is at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">
                Disclaimer of Warranties
              </h2>
              <p className="mt-4 text-muted-foreground">
                The website is provided &ldquo;as is&rdquo; without warranties of any
                kind. We do not guarantee that the website will be available,
                error-free, or secure at all times. We are not liable for any
                damages resulting from your use of the website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">
                Limitation of Liability
              </h2>
              <p className="mt-4 text-muted-foreground">
                To the maximum extent permitted by law, The AI Struggle Bus
                shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages arising from your use of the
                website or our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">
                Indemnification
              </h2>
              <p className="mt-4 text-muted-foreground">
                You agree to indemnify and hold harmless The AI Struggle Bus and
                its employees from any claims, damages, or expenses arising from
                your violation of these terms or your use of the website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">
                Changes to Terms
              </h2>
              <p className="mt-4 text-muted-foreground">
                We reserve the right to modify these terms at any time. Changes
                will be posted on this page with an updated revision date. Your
                continued use of the website after changes constitutes
                acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">
                Governing Law
              </h2>
              <p className="mt-4 text-muted-foreground">
                These terms shall be governed by and construed in accordance
                with applicable laws, without regard to conflict of law
                principles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">Contact</h2>
              <p className="mt-4 text-muted-foreground">
                Questions about these terms? Contact us at
                legal@theaistrugglebus.com.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

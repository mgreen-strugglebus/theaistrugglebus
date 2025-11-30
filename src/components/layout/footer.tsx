import Link from "next/link";
import { footerNavItems } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="text-xl font-bold text-foreground">
              The AI Struggle Bus
            </Link>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              We help entrepreneurs, startups, and SMBs put AI to work behind
              the scenes. Embedded AI workflows that deliver measurable ROI in
              30 days.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/solutions"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/assessment"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Assessment
                </Link>
              </li>
              <li>
                <Link
                  href="/sprint"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  30-Day Sprint
                </Link>
              </li>
              <li>
                <Link
                  href="/results"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Results
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Resources */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Resources
            </h3>
            <ul className="space-y-2">
              {footerNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} The AI Struggle Bus. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
